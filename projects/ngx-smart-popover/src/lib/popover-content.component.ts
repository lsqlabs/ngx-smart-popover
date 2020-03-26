/**
 * This is a continuation of ngx-popover
 * @Reference {github} https://github.com/pleerock/ngx-popover
 */

import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Renderer2,
  ViewChild
} from '@angular/core';
import { PopoverDirective } from './popover.directive';
import { PopoverPlacement } from './popover.placement';

@Component({
  selector: 'popover-content',
  template: `
    <div #popoverDiv
        class="bs-popover-{{ effectivePlacement }} popover-content popover {{ parentClass }}"
        [ngClass]="{
            'sm': size === 'small',
            'md-sm': size === 'medium-small',
            'md': size === 'medium',
            'lg': size === 'large',
            'in': isIn
        }"
        [style.top.px]="top"
        [style.left.px]="left"
        [style.transition]="(transitionEnabled ? '0.15s opacity' : '')"
        [style.opacity]="opacity"
        [style.display]="'block'"
        [attr.aria-hidden]="opacity === 0"
        role="popover">
            <div [hidden]="!closeOnMouseOutside" class="virtual-area"></div>
            <div class="arrow"></div>
            <div class="popover-header" [hidden]="!title">{{ title }}</div>
            <div class="popover-body">
                <ng-content></ng-content>
                {{ content }}
            </div>
    </div>
    `
})
export class PopoverContentComponent implements AfterViewInit, OnDestroy {
  // -------------------------------------------------------------------------
  // Inputs / Outputs
  // -------------------------------------------------------------------------
  @Input() public content: string;
  @Input() public placement: PopoverPlacement = PopoverPlacement.Top;
  @Input() public title: string;
  @Input() public parentClass: string;
  @Input() public animation = true;
  @Input() public closeOnClickOutside = false;
  @Input() public closeOnMouseOutside = false;
  @Input() public size: 'small' | 'medium-small' | 'medium' | 'large' | 'auto' = 'small';

  // -------------------------------------------------------------------------
  // Properties
  // -------------------------------------------------------------------------
  @ViewChild('popoverDiv', { static: true }) public popoverDiv: ElementRef;

  public popover: PopoverDirective;
  public onCloseFromOutside = new EventEmitter();
  public top = -10000;
  public left = -10000;
  public isIn = false;
  public effectivePlacement: string;
  public opacity = 0;
  public transitionEnabled = false;

  public windowWidth = window.innerWidth;
  public windowHeight = window.innerHeight;

  public listenClickFunc: any;
  public listenMouseFunc: any;
  public listenTouchFunc: any;

  // -------------------------------------------------------------------------
  // Anonymous
  // -------------------------------------------------------------------------

  /**
   * Closes dropdown if user clicks outside of this directive.
   */
  public onDocumentMouseDown = (event: any) => {
      const element = this.element.nativeElement;
      if (!element || !this.popover) {
          return;
      }
      if (element.contains(event.target) || this.popover.getElement().contains(event.target)) {
          return;
      }
      this.onCloseFromOutside.emit(undefined);
  }

  // -------------------------------------------------------------------------
  // Constructor
  // -------------------------------------------------------------------------

  constructor(protected element: ElementRef,
              protected cdr: ChangeDetectorRef,
              protected renderer: Renderer2) {
  }

  // -------------------------------------------------------------------------
  // Lifecycle callbacks
  // -------------------------------------------------------------------------

  public ngAfterViewInit(): void {
      if (this.closeOnClickOutside) {
          this.listenClickFunc = this.renderer.listen('document', 'mousedown', (event: any) => this.onDocumentMouseDown(event));
      }
      if (this.closeOnMouseOutside) {
          this.listenMouseFunc = this.renderer.listen('document', 'mouseover', (event: any) => this.onDocumentMouseDown(event));
      }
      // Always close on mobile touch event outside.
      this.listenTouchFunc = this.renderer.listen('document', 'touchstart', (event: any) => this.onDocumentMouseDown(event));

      this.show();
      this.cdr.detectChanges();
  }

  public ngOnDestroy(): void {
      if (this.closeOnClickOutside && this.listenClickFunc) {
          this.listenClickFunc();
      }
      if (this.closeOnMouseOutside && this.listenMouseFunc) {
          this.listenMouseFunc();
      }
      if (!!this.listenTouchFunc) {
          this.listenTouchFunc();
      }
  }

  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------

  public updatePosition(): void {
      // if visible, reposition
      if (this.opacity) {
          const p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
          this.top = p.top;
          this.left = p.left;
      }
  }

  public show(): void {
      if (!this.popover || !this.popover.getElement()) {
          return;
      }

      const p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
      this.top = p.top;
      this.left = p.left;
      this.isIn = true;
      this.transitionEnabled = true;
      this.opacity = 1;
  }

  public hide(): void {
      this.top = -10000;
      this.left = -10000;
      this.isIn = true;
      this.popover.hide();
  }

  public hideFromPopover(): void {
      this.top = -10000;
      this.left = -10000;
      this.isIn = true;
      this.transitionEnabled = false;
      this.opacity = 0;
  }

  // -------------------------------------------------------------------------
  // Protected Methods
  // -------------------------------------------------------------------------

  protected positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: PopoverPlacement, appendToBody: boolean = false): { top: number, left: number } {
      const positionStrParts = (positionStr as string).split(' ');
      let pos0 = positionStrParts[0];
      const pos1 = positionStrParts[1] || 'center';
      const hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
      const targetElWidth = targetEl.offsetWidth;
      const targetElHeight = targetEl.offsetHeight;

      this.effectivePlacement = pos0 = this.getEffectivePlacement(pos0, hostEl, targetEl);

      const shiftWidth: any = {
          center: function (): number {
              return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function (): number {
              return hostElPos.left;
          },
          right: function (): number {
              return hostElPos.left + hostElPos.width;
          },
          topOrBottomRight: function (): number {
              return hostElPos.left + hostElPos.width / 2;
          },
          topOrBottomLeft: function (): number {
              return hostElPos.left - targetElWidth  + hostElPos.width / 2;
          }
      };

      const shiftHeight: any = {
          center: function (): number {
              return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function (): number {
              return hostElPos.top;
          },
          bottom: function (): number {
              return hostElPos.top + hostElPos.height;
          }
      };

      let targetElPos: { top: number, left: number };
      switch (pos0) {
          case PopoverPlacement.Right:
              targetElPos = {
                  top: shiftHeight[pos1](),
                  left: shiftWidth[pos0]()
              };
              break;

          case PopoverPlacement.Left:
              targetElPos = {
                  top: shiftHeight[pos1](),
                  left: hostElPos.left - targetElWidth
              };
              break;

          case PopoverPlacement.Bottom:
              targetElPos = {
                  top: shiftHeight[pos0](),
                  left: shiftWidth[pos1]()
              };
              break;
          case PopoverPlacement.TopLeft:
              targetElPos = {
                  top: hostElPos.top - targetElHeight,
                  left: shiftWidth['topOrBottomLeft']()
              };
              break;
          case PopoverPlacement.TopRight:
              targetElPos = {
                  top: hostElPos.top - targetElHeight,
                  left: shiftWidth['topOrBottomRight']()
              };
              break;
          case PopoverPlacement.BottomLeft:
              targetElPos = {
                  top: shiftHeight[PopoverPlacement.Bottom](),
                  left: shiftWidth['topOrBottomLeft']()
              };
              break;
          case PopoverPlacement.BottomRight:
              targetElPos = {
                  top: shiftHeight[PopoverPlacement.Bottom](),
                  left: shiftWidth['topOrBottomRight']()
              };
              break;

          default:
              targetElPos = {
                  top: hostElPos.top - targetElHeight,
                  left: shiftWidth[pos1]()
              };
              break;
      }

      return targetElPos;
  }

  protected position(nativeEl: HTMLElement): { width: number, height: number, top: number, left: number } {
      let offsetParentBCR = { top: 0, left: 0 };
      const elBCR = this.offset(nativeEl);
      const offsetParentEl = this.parentOffsetEl(nativeEl);
      if (offsetParentEl !== window.document) {
          offsetParentBCR = this.offset(offsetParentEl);
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
      }

      const boundingClientRect = nativeEl.getBoundingClientRect();
      return {
          width: boundingClientRect.width || nativeEl.offsetWidth,
          height: boundingClientRect.height || nativeEl.offsetHeight,
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
      };
  }

  protected offset(nativeEl: any): { width: number, height: number, top: number, left: number } {
      const boundingClientRect = nativeEl.getBoundingClientRect();
      return {
          width: boundingClientRect.width || nativeEl.offsetWidth,
          height: boundingClientRect.height || nativeEl.offsetHeight,
          top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
          left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
      };
  }

  protected getStyle(nativeEl: HTMLElement, cssProp: string): string {
      if ((nativeEl as any).currentStyle) { // IE
          return (nativeEl as any).currentStyle[cssProp];
      }

      if (window.getComputedStyle) {
          return (window.getComputedStyle as any)(nativeEl)[cssProp];
      }

      // finally try and get inline style
      return (nativeEl.style as any)[cssProp];
  }

  protected isStaticPositioned(nativeEl: HTMLElement): boolean {
      return (this.getStyle(nativeEl, 'position') || 'static' ) === 'static';
  }

  protected parentOffsetEl(nativeEl: HTMLElement): any {
      let offsetParent: any = nativeEl.offsetParent || window.document;
      while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
          offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || window.document;
  }

  // Check for overflow of the viewport and reflect the position if necessary.
  protected getEffectivePlacement(placement: string, hostElement: HTMLElement, targetElement: HTMLElement): string {
      const hostElBoundingRect = hostElement.getBoundingClientRect();

      const desiredPlacement = placement || PopoverPlacement.Top;

      // Reflect appropriately if overflow.
      if (desiredPlacement === PopoverPlacement.Top) {
          const isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
          const isRightOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth;
          const isLeftOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0;

          if (isTopOverflow) {
              return PopoverPlacement.Bottom;
          } else if (isRightOverflow) {
              return PopoverPlacement.TopLeft;
          } else if (isLeftOverflow) {
              return PopoverPlacement.TopRight;
          }
      }
      if (desiredPlacement === PopoverPlacement.Bottom) {
          const isRightOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth;
          const isLeftOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0;
          const isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;

          if (isBottomOverflow) {
              return PopoverPlacement.Top;
          } else if (isRightOverflow) {
              return PopoverPlacement.BottomLeft;
          } else if (isLeftOverflow) {
              return PopoverPlacement.BottomRight;
          }
      }
      if (desiredPlacement === PopoverPlacement.Left) {
          const isTopOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0;
          const isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;
          const isBottomOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight;

          if (isLeftOverflow) {
              return PopoverPlacement.Right;
          } else if (isTopOverflow) {
              return PopoverPlacement.BottomLeft;
          } else if (isBottomOverflow) {
              return PopoverPlacement.TopLeft;
          }
      }
      if (desiredPlacement === PopoverPlacement.Right) {
          const isTopOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0;
          const isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;
          const isBottomOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight;

          if (isRightOverflow) {
              return PopoverPlacement.Left;
          } else if (isTopOverflow) {
              return PopoverPlacement.BottomRight;
          } else if (isBottomOverflow) {
              return PopoverPlacement.TopRight;
          }
      }
      if (desiredPlacement === PopoverPlacement.TopRight) {
          const isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
          const isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;

          if (isTopOverflow && isRightOverflow) {
              return PopoverPlacement.BottomLeft;
          } else if (isTopOverflow) {
              return PopoverPlacement.BottomRight;
          } else if (isRightOverflow) {
              return PopoverPlacement.TopLeft;
          }
      }
      if (desiredPlacement === PopoverPlacement.TopLeft) {
          const isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
          const isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;

          if (isTopOverflow && isLeftOverflow) {
              return PopoverPlacement.BottomRight;
          } else if (isTopOverflow) {
              return PopoverPlacement.BottomLeft;
          } else if (isLeftOverflow) {
              return PopoverPlacement.TopRight;
          }
      }
      if (desiredPlacement === PopoverPlacement.BottomRight) {
          const isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;
          const isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;

          if (isBottomOverflow && isRightOverflow) {
              return PopoverPlacement.TopLeft;
          } else if (isBottomOverflow) {
              return PopoverPlacement.TopRight;
          } else if (isRightOverflow) {
              return PopoverPlacement.BottomLeft;
          }
      }
      if (desiredPlacement === PopoverPlacement.BottomLeft) {
          const isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;
          const isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;

          if (isBottomOverflow && isLeftOverflow) {
              return PopoverPlacement.TopRight;
          } else if (isBottomOverflow) {
              return PopoverPlacement.TopLeft;
          } else if (isLeftOverflow) {
              return PopoverPlacement.BottomRight;
          }
      }

      return desiredPlacement;
  }
}
