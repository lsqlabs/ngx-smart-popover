/**
 * This is a continuation of ngx-popover
 * @Reference {github} https://github.com/pleerock/ngx-popover
 */

import {
    ComponentFactoryResolver,
    ComponentRef,
    Directive,
    EventEmitter,
    HostListener,
    Input,
    OnChanges,
    Output,
    SimpleChange,
    ViewContainerRef
} from '@angular/core';
import { PopoverContentComponent } from './popover-content.component';

export class PopoverPlacement {
    public static readonly Bottom = 'bottom';
    public static readonly BottomLeft = 'bottom-left';
    public static readonly BottomRight = 'bottom-right';
    public static readonly Left = 'left';
    public static readonly Right = 'right';
    public static readonly Top = 'top';
    public static readonly TopLeft = 'top-left';
    public static readonly TopRight = 'top-right';
}

/**
* @group Basic Toolkit
* @component Popover Directive
*/
@Directive({
    selector: '[popover]',
    exportAs: 'popover'
})
export class PopoverDirective implements OnChanges {
    // -------------------------------------------------------------------------
    // Properties
    // -------------------------------------------------------------------------
    protected popoverContentComponent = PopoverContentComponent;
    protected popover: ComponentRef<PopoverContentComponent>;
    protected visible: boolean;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    constructor(protected viewContainerRef: ViewContainerRef,
        protected resolver: ComponentFactoryResolver) {
    }

    // -------------------------------------------------------------------------
    // Inputs / Outputs
    // -------------------------------------------------------------------------
    @Input('popover') public content: string | PopoverContentComponent;
    @Input() public popoverSize: 'small' | 'medium-small' | 'medium' | 'large' | 'auto' = 'small';
    @Input() public popoverDisabled: boolean;
    @Input() public popoverAnimation: boolean;
    @Input() public popoverPlacement: PopoverPlacement;
    @Input() public popoverTitle: string;
    @Input() public popoverOnHover = true;
    @Input() public popoverCloseOnClickOutside: boolean;
    @Input() public popoverCloseOnMouseOutside: boolean;
    @Input() public popoverDismissTimeout = 0;
    @Output() public onShown = new EventEmitter<PopoverDirective>();
    @Output() public onHidden = new EventEmitter<PopoverDirective>();

    // -------------------------------------------------------------------------
    // Event listeners
    // -------------------------------------------------------------------------
    @HostListener('click', ['$event'])
    public showOrHideOnClick(evt: Event): void {
        if (this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        evt.stopImmediatePropagation();
        this.toggle();
    }

    @HostListener('touchend', ['$event'])
    public showOrHideOnTouch(evt: Event): void {
        evt.stopImmediatePropagation();
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.toggle();
    }

    @HostListener('focusin')
    @HostListener('mouseenter')
    public showOnHover(): void {
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.show();
    }

    @HostListener('focusout')
    @HostListener('mouseleave')
    public hideOnHover(): void {
        if (this.popoverCloseOnMouseOutside) {
            return; // don't do anything since we do not control this
        }
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.hide();
    }

    public ngOnChanges(changes: { [propertyName: string]: SimpleChange }): void {
        if (changes['popoverDisabled']) {
            if (changes['popoverDisabled'].currentValue) {
                this.hide();
            }
        }
    }

    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    public toggle(): void {
        if (!this.visible) {
            this.show();
        } else {
            this.hide();
        }
    }

    public show(): void {
        if (this.visible) {
            return;
        }

        this.visible = true;
        if (typeof this.content === 'string') {
            const factory = this.resolver.resolveComponentFactory(this.popoverContentComponent);
            if (!this.visible) {
                return;
            }

            this.popover = this.viewContainerRef.createComponent(factory);
            const popover = this.popover.instance as PopoverContentComponent;
            popover.popover = this;
            popover.content = this.content as string;
            if (this.popoverPlacement !== undefined) {
                popover.placement = this.popoverPlacement;
            }
            if (this.popoverAnimation !== undefined) {
                popover.animation = this.popoverAnimation;
            }
            if (this.popoverTitle !== undefined) {
                popover.title = this.popoverTitle;
            }
            if (this.popoverCloseOnClickOutside !== undefined) {
                popover.closeOnClickOutside = this.popoverCloseOnClickOutside;
            }
            if (this.popoverCloseOnMouseOutside !== undefined) {
                popover.closeOnMouseOutside = this.popoverCloseOnMouseOutside;
            }
            popover.size = this.popoverSize;

            popover.onCloseFromOutside.subscribe(() => this.hide());
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0) {
                setTimeout(() => this.hide(), this.popoverDismissTimeout);
            }
        } else {
            const popover = this.content as PopoverContentComponent;
            popover.popover = this;
            if (this.popoverPlacement !== undefined) {
                popover.placement = this.popoverPlacement;
            }
            if (this.popoverAnimation !== undefined) {
                popover.animation = this.popoverAnimation;
            }
            if (this.popoverTitle !== undefined) {
                popover.title = this.popoverTitle;
            }
            if (this.popoverCloseOnClickOutside !== undefined) {
                popover.closeOnClickOutside = this.popoverCloseOnClickOutside;
            }
            if (this.popoverCloseOnMouseOutside !== undefined) {
                popover.closeOnMouseOutside = this.popoverCloseOnMouseOutside;
            }
            popover.size = this.popoverSize;

            popover.onCloseFromOutside.subscribe(() => this.hide());
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0) {
                setTimeout(() => this.hide(), this.popoverDismissTimeout);
            }
            popover.show();
        }

        this.onShown.emit(this);
    }

    public hide(): void {
        if (!this.visible) {
            return;
        }

        this.visible = false;
        if (this.popover) {
            this.popover.destroy();
        }

        if (this.content instanceof PopoverContentComponent) {
            (this.content as PopoverContentComponent).hideFromPopover();
        }

        this.onHidden.emit(this);
    }

    public getElement(): HTMLElement {
        return this.viewContainerRef.element.nativeElement;
    }
}
