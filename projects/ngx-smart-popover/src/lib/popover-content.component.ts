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
    ViewChild,
    HostListener
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
    @Input() public appendToBody = false;
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
        this.show();
        this.cdr.detectChanges();
    }

    public ngOnDestroy(): void {
        this.removeListener()
    }

    public addListener(): void {
        if (this.closeOnClickOutside) {
            this.listenClickFunc = this.renderer.listen('document', 'mousedown', (event: any) => this.onDocumentMouseDown(event));
        }
        if (this.closeOnMouseOutside) {
            this.listenMouseFunc = this.renderer.listen('document', 'mouseover', (event: any) => this.onDocumentMouseDown(event));
        }
        // Always close on mobile touch event outside.
        this.listenTouchFunc = this.renderer.listen('document', 'touchstart', (event: any) => this.onDocumentMouseDown(event));
    }
    
    public removeListener(): void {
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

    @HostListener('window:resize', ['$event'])
    public onResize(event) {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    }

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
        this.addListener()
    }

    public hide(): void {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.popover.hide();
        this.removeListener()
    }

    public hideFromPopover(): void {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.transitionEnabled = false;
        this.opacity = 0;
        this.removeListener()
    }

    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------

    protected positionElements(hostEl: HTMLElement, targetEl: HTMLElement, positionStr: PopoverPlacement, appendToBody: boolean = false): { top: number, left: number } {
        const positionStrParts = (positionStr as string).split(' ');
        let pos0 = positionStrParts[0];
        const pos1 = positionStrParts[1] || 'center';
        const hostElPos = this.appendToBody || appendToBody ? this.offset(hostEl) : this.position(hostEl);
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

        // Determines if a popover overflows in a direction when in a specific position.
        const overflows = {
            positionTop: {
                top: hostElBoundingRect.top - targetElement.offsetHeight < 0,
                right: hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth,
                left: hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0
            },
            positionTopRight: {
                top: hostElBoundingRect.top - targetElement.offsetHeight < 0,
                right: hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth
            },
            positionRight: {
                top: hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0,
                right: hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth,
                bottom: hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight
            },
            positionBottomRight: {
                right: hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth,
                bottom: hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight
            },
            positionBottom: {
                right: hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth,
                bottom: hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight,
                left: hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0
            },
            positionBottomLeft: {
                bottom: hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight,
                left: hostElBoundingRect.left - targetElement.offsetWidth < 0
            },
            positionLeft: {
                left: hostElBoundingRect.left < targetElement.offsetWidth,
                top: hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0,
                bottom: hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight
            },
            positionTopLeft: {
                top: hostElBoundingRect.top - targetElement.offsetHeight < 0,
                left: hostElBoundingRect.left - targetElement.offsetWidth < 0
            }
        }

        if (desiredPlacement === PopoverPlacement.Top) {
            // If it overflows on the top AND left, go to bottom-right.
            if (overflows.positionTop.top && overflows.positionTop.left) {
                return PopoverPlacement.BottomRight;

            // If it overflows on the top AND right, go to bottom-left.
            } else if (overflows.positionTop.top && overflows.positionTop.right) {
                return PopoverPlacement.BottomLeft;

            // If it only overflows on the top, go to bottom.
            } else if (overflows.positionTop.top) {
                return PopoverPlacement.Bottom;

            // If it only overflows to the right, go to top-left.
            } else if (overflows.positionTop.right) {
                return PopoverPlacement.TopLeft;

            // If it only overflows to the left, go to top-right.
            } else if (overflows.positionTop.left) {
                return PopoverPlacement.TopRight;

            } else {
                return PopoverPlacement.Top;
            }
        }

        if (desiredPlacement === PopoverPlacement.TopRight) {
            // If it overflows on the top AND the right, try in the order: bottom, Bottom-left, left.
            if (overflows.positionTopRight.top && overflows.positionTopRight.right) {
                if (overflows.positionBottom.bottom) {
                    return PopoverPlacement.Left;
                } else if (overflows.positionBottom.right) {
                    return PopoverPlacement.BottomLeft;
                } else {
                    return PopoverPlacement.Bottom;
                }

            // If it only overflows on the top, try in the order: right, bottom-right.
            } else if (overflows.positionTopRight.top) {
                if (overflows.positionRight.top) {
                    return PopoverPlacement.BottomRight;
                } else {
                    return PopoverPlacement.Right;
                }

            // If it only overflows on the right, try in the order: top, top-left.
            } else if (overflows.positionTopRight.right) {
                if (overflows.positionTop.right) {
                    return PopoverPlacement.TopLeft;
                } else {
                    return PopoverPlacement.Top;
                }

            } else {
                return PopoverPlacement.TopRight;
            }
        }

        if (desiredPlacement === PopoverPlacement.Right) {
            // If it overflows on the right AND the top, try in the order: bottom-right, bottom, bottom-left.
            if (overflows.positionRight.right && overflows.positionRight.top) {
                if (overflows.positionBottomRight.right && overflows.positionBottom.right) {
                    return PopoverPlacement.BottomLeft;
                } else if (overflows.positionBottomRight.right) {
                    return PopoverPlacement.Bottom;
                } else {
                    return PopoverPlacement.BottomRight;
                }

            // If it overflows on the right AND the bottom, try in the order: top-right, top, top-left.
            } else if (overflows.positionRight.right && overflows.positionRight.bottom) {
                if (overflows.positionTopRight.right && overflows.positionTop.right) {
                    return PopoverPlacement.TopLeft;
                } else if (overflows.positionTopRight.right) {
                    return PopoverPlacement.Top;
                } else {
                    return PopoverPlacement.TopRight;
                }

            // If it only overflows on the right, try all top positions from right to left, then try all bottom positions right to left.
            } else if (overflows.positionRight.right) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.right) {
                        return PopoverPlacement.BottomLeft;
                    } else if (overflows.positionBottomRight.right) {
                        return PopoverPlacement.Bottom;
                    } else {
                        return PopoverPlacement.BottomRight;
                    }
                } else {
                    if (overflows.positionTop.right) {
                        return PopoverPlacement.TopLeft;
                    } else if (overflows.positionTopRight.right) {
                        return PopoverPlacement.Top;
                    } else {
                        return PopoverPlacement.TopRight;
                    }
                }

            // If it only over flows on the top, go bottom-right.
            } else if (overflows.positionRight.top) {
                return PopoverPlacement.BottomRight;

            // If it only overflows on the bottom, go top-right.
            } else if (overflows.positionRight.bottom) {
                return PopoverPlacement.TopRight;

            } else {
                return PopoverPlacement.Right;
            }
        }

        if (desiredPlacement === PopoverPlacement.BottomRight) {
            // If it overflows on the bottom AND the right, try in the order: top, top-left, left.
            if (overflows.positionBottomRight.bottom && overflows.positionBottomRight.right) {
                if (overflows.positionTop.top) {
                    return PopoverPlacement.Left;
                } else if (overflows.positionTop.right) {
                    return PopoverPlacement.TopLeft;
                } else {
                    return PopoverPlacement.Top;
                }

            // If it only overflows on the bottom, try in the order: right, top-right.
            } else if (overflows.positionBottomRight.bottom) {
                if (overflows.positionRight.bottom) {
                    return PopoverPlacement.TopRight;
                } else {
                    return PopoverPlacement.Right;
                }

            // If it only overflows on the right, try in the order: bottom, bottom-left.
            } else if (overflows.positionBottomRight.right) {
                if (overflows.positionBottom.right) {
                    return PopoverPlacement.BottomLeft;
                } else {
                    return PopoverPlacement.Bottom;
                }

            } else {
                return PopoverPlacement.BottomRight;
            }
        }

        if (desiredPlacement === PopoverPlacement.Bottom) {
            // If it overflows on the bottom AND left, go to top-right.
            if (overflows.positionBottom.bottom && overflows.positionBottom.left) {
                return PopoverPlacement.TopRight;

            // If it overflows on the bottom AND right, go to top-left.
            } else if (overflows.positionBottom.bottom && overflows.positionBottom.right) {
                return PopoverPlacement.TopLeft;

            // If it only overflows on the bottom, go to top.
            } else if (overflows.positionBottom.bottom) {
                return PopoverPlacement.Top;

            // If it only overflows to the right, go to bottom-left.
            } else if (overflows.positionBottom.right) {
                return PopoverPlacement.BottomLeft;

            // If it only overflows to the left, go to bottom-right.
            } else if (overflows.positionBottom.left) {
                return PopoverPlacement.BottomRight;

            } else {
                return PopoverPlacement.Bottom;
            }
        }

        if (desiredPlacement === PopoverPlacement.BottomLeft) {
            // If it overflows on the bottom AND the left, try in the order: top, top-right, right.
            if (overflows.positionBottomLeft.bottom && overflows.positionBottomLeft.left) {
                if (overflows.positionTop.top) {
                    return PopoverPlacement.Right;
                } else if (overflows.positionTop.left) {
                    return PopoverPlacement.TopRight;
                } else {
                    return PopoverPlacement.Top;
                }

            // If it only overflows on the bottom, try in the order: left, top-left.
            } else if (overflows.positionBottomLeft.bottom) {
                if (overflows.positionLeft.bottom) {
                    return PopoverPlacement.TopLeft;
                } else {
                    return PopoverPlacement.Left;
                }

            // If it only overflows on the left, try in the order: bottom, bottom-right.
            } else if (overflows.positionBottomLeft.left) {
                if (overflows.positionBottom.left) {
                    return PopoverPlacement.BottomRight;
                } else {
                    return PopoverPlacement.Bottom;
                }

            } else {
                return PopoverPlacement.BottomLeft;
            }
        }

        if (desiredPlacement === PopoverPlacement.Left) {
            // If it overflows on the left AND the top, try in the order: bottom-left, bottom, bottom-right.
            if (overflows.positionLeft.left && overflows.positionLeft.top) {
                if (overflows.positionBottomLeft.left && overflows.positionBottom.left) {
                    return PopoverPlacement.BottomRight;
                } else if (overflows.positionBottomRight.right) {
                    return PopoverPlacement.Bottom;
                } else {
                    return PopoverPlacement.BottomLeft;
                }

            // If it overflows on the left AND the bottom, try in the order: top-left, top, top-right.
            } else if (overflows.positionLeft.left && overflows.positionLeft.bottom) {
                if (overflows.positionTopLeft.left && overflows.positionTop.left) {
                    return PopoverPlacement.TopRight;
                } else if (overflows.positionTopLeft.left) {
                    return PopoverPlacement.Top;
                } else {
                    return PopoverPlacement.TopLeft;
                }

            // If it only overflows on the left, try all top positions from left to right, then try all bottom positions left to right.
            } else if (overflows.positionLeft.left) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.left) {
                        return PopoverPlacement.BottomRight;
                    } else if (overflows.positionBottomLeft.left) {
                        return PopoverPlacement.Bottom;
                    } else {
                        return PopoverPlacement.BottomLeft;
                    }
                } else {
                    if (overflows.positionTop.left) {
                        return PopoverPlacement.TopRight;
                    } else if (overflows.positionTopLeft.left) {
                        return PopoverPlacement.Top;
                    } else {
                        return PopoverPlacement.TopLeft;
                    }
                }

            // If it only over flows on the top, go bottom-left.
            } else if (overflows.positionLeft.top) {
                return PopoverPlacement.BottomLeft;

            // If it only overflows on the bottom, go top-left.
            } else if (overflows.positionLeft.bottom) {
                return PopoverPlacement.TopLeft;

            } else {
                return PopoverPlacement.Left;
            }
        }

        if (desiredPlacement === PopoverPlacement.TopLeft) {
            // If it overflows on the top AND the left, try in the order: bottom, Bottom-right, right.
            if (overflows.positionTopLeft.top && overflows.positionTopLeft.left) {
                if (overflows.positionBottom.bottom) {
                    return PopoverPlacement.Right;
                } else if (overflows.positionBottom.left) {
                    return PopoverPlacement.BottomRight;
                } else {
                    return PopoverPlacement.Bottom;
                }

            // If it only overflows on the top, try in the order: left, bottom-left.
            } else if (overflows.positionTopLeft.top) {
                if (overflows.positionLeft.top) {
                    return PopoverPlacement.BottomLeft;
                } else {
                    return PopoverPlacement.Left;
                }

            // If it only overflows on the left, try in the order: top, top-right.
            } else if (overflows.positionTopLeft.left) {
                if (overflows.positionTop.left) {
                    return PopoverPlacement.TopRight;
                } else {
                    return PopoverPlacement.Top;
                }

            } else {
                return PopoverPlacement.TopLeft;
            }
        }

        return desiredPlacement;
    }
}
