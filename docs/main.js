(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts":
/*!*************************************************************************!*\
  !*** ./projects/ngx-smart-popover/src/lib/popover-content.component.ts ***!
  \*************************************************************************/
/*! exports provided: PopoverContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContentComponent", function() { return PopoverContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_placement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.placement */ "./projects/ngx-smart-popover/src/lib/popover.placement.ts");
/**
 * This is a continuation of ngx-popover
 * @Reference {github} https://github.com/pleerock/ngx-popover
 */



var PopoverContentComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function PopoverContentComponent(element, cdr, renderer) {
        var _this = this;
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
        this.placement = _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
        this.animation = true;
        this.closeOnClickOutside = false;
        this.closeOnMouseOutside = false;
        this.size = 'small';
        this.onCloseFromOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.top = -10000;
        this.left = -10000;
        this.isIn = false;
        this.opacity = 0;
        this.transitionEnabled = false;
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        // -------------------------------------------------------------------------
        // Anonymous
        // -------------------------------------------------------------------------
        /**
         * Closes dropdown if user clicks outside of this directive.
         */
        this.onDocumentMouseDown = function (event) {
            var element = _this.element.nativeElement;
            if (!element || !_this.popover) {
                return;
            }
            if (element.contains(event.target) || _this.popover.getElement().contains(event.target)) {
                return;
            }
            _this.onCloseFromOutside.emit(undefined);
        };
    }
    // -------------------------------------------------------------------------
    // Lifecycle callbacks
    // -------------------------------------------------------------------------
    PopoverContentComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.closeOnClickOutside) {
            this.listenClickFunc = this.renderer.listen('document', 'mousedown', function (event) { return _this.onDocumentMouseDown(event); });
        }
        if (this.closeOnMouseOutside) {
            this.listenMouseFunc = this.renderer.listen('document', 'mouseover', function (event) { return _this.onDocumentMouseDown(event); });
        }
        // Always close on mobile touch event outside.
        this.listenTouchFunc = this.renderer.listen('document', 'touchstart', function (event) { return _this.onDocumentMouseDown(event); });
        this.show();
        this.cdr.detectChanges();
    };
    PopoverContentComponent.prototype.ngOnDestroy = function () {
        if (this.closeOnClickOutside && this.listenClickFunc) {
            this.listenClickFunc();
        }
        if (this.closeOnMouseOutside && this.listenMouseFunc) {
            this.listenMouseFunc();
        }
        if (!!this.listenTouchFunc) {
            this.listenTouchFunc();
        }
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    PopoverContentComponent.prototype.updatePosition = function () {
        // if visible, reposition
        if (this.opacity) {
            var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
            this.top = p.top;
            this.left = p.left;
        }
    };
    PopoverContentComponent.prototype.show = function () {
        if (!this.popover || !this.popover.getElement()) {
            return;
        }
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
        this.transitionEnabled = true;
        this.opacity = 1;
    };
    PopoverContentComponent.prototype.hide = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.popover.hide();
    };
    PopoverContentComponent.prototype.hideFromPopover = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.transitionEnabled = false;
        this.opacity = 0;
    };
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    PopoverContentComponent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split(' ');
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || 'center';
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        this.effectivePlacement = pos0 = this.getEffectivePlacement(pos0, hostEl, targetEl);
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            },
            topOrBottomRight: function () {
                return hostElPos.left + hostElPos.width / 2;
            },
            topOrBottomLeft: function () {
                return hostElPos.left - targetElWidth + hostElPos.width / 2;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right:
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left:
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom:
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth['topOrBottomLeft']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth['topOrBottomRight']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft:
                targetElPos = {
                    top: shiftHeight[_popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom](),
                    left: shiftWidth['topOrBottomLeft']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight:
                targetElPos = {
                    top: shiftHeight[_popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom](),
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
    };
    PopoverContentComponent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PopoverContentComponent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    PopoverContentComponent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle) { // IE
            return nativeEl.currentStyle[cssProp];
        }
        if (window.getComputedStyle) {
            return window.getComputedStyle(nativeEl)[cssProp];
        }
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    PopoverContentComponent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, 'position') || 'static') === 'static';
    };
    PopoverContentComponent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    // Check for overflow of the viewport and reflect the position if necessary.
    PopoverContentComponent.prototype.getEffectivePlacement = function (placement, hostElement, targetElement) {
        var hostElBoundingRect = hostElement.getBoundingClientRect();
        var desiredPlacement = placement || _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
        // Reflect appropriately if overflow.
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top) {
            var isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
            var isRightOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth;
            var isLeftOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0;
            if (isTopOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
            }
            else if (isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
            else if (isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom) {
            var isRightOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 + targetElement.offsetWidth / 2 > this.windowWidth;
            var isLeftOverflow = hostElBoundingRect.left + hostElBoundingRect.width / 2 - targetElement.offsetWidth / 2 < 0;
            var isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;
            if (isBottomOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
            }
            else if (isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
            else if (isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left) {
            var isTopOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0;
            var isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;
            var isBottomOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight;
            if (isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
            }
            else if (isTopOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
            else if (isBottomOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right) {
            var isTopOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 - targetElement.offsetHeight / 2 < 0;
            var isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;
            var isBottomOverflow = hostElBoundingRect.top + hostElBoundingRect.height / 2 + targetElement.offsetHeight / 2 > this.windowHeight;
            if (isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
            }
            else if (isTopOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
            else if (isBottomOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight) {
            var isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
            var isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;
            if (isTopOverflow && isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
            else if (isTopOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
            else if (isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft) {
            var isTopOverflow = hostElBoundingRect.top - targetElement.offsetHeight < 0;
            var isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;
            if (isTopOverflow && isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
            else if (isTopOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
            else if (isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight) {
            var isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;
            var isRightOverflow = hostElBoundingRect.right + targetElement.offsetWidth > this.windowWidth;
            if (isBottomOverflow && isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
            else if (isBottomOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
            else if (isRightOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft) {
            var isBottomOverflow = hostElBoundingRect.bottom + targetElement.offsetHeight > this.windowHeight;
            var isLeftOverflow = hostElBoundingRect.left - targetElement.offsetWidth < 0;
            if (isBottomOverflow && isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
            else if (isBottomOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
            else if (isLeftOverflow) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
        }
        return desiredPlacement;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverContentComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"])
    ], PopoverContentComponent.prototype, "placement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverContentComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverContentComponent.prototype, "parentClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverContentComponent.prototype, "animation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverContentComponent.prototype, "closeOnClickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverContentComponent.prototype, "closeOnMouseOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverContentComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popoverDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PopoverContentComponent.prototype, "popoverDiv", void 0);
    PopoverContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'popover-content',
            template: "\n    <div #popoverDiv\n        class=\"bs-popover-{{ effectivePlacement }} popover-content popover {{ parentClass }}\"\n        [ngClass]=\"{\n            'sm': size === 'small',\n            'md-sm': size === 'medium-small',\n            'md': size === 'medium',\n            'lg': size === 'large',\n            'in': isIn\n        }\"\n        [style.top.px]=\"top\"\n        [style.left.px]=\"left\"\n        [style.transition]=\"(transitionEnabled ? '0.15s opacity' : '')\"\n        [style.opacity]=\"opacity\"\n        [style.display]=\"'block'\"\n        [attr.aria-hidden]=\"opacity === 0\"\n        role=\"popover\">\n            <div [hidden]=\"!closeOnMouseOutside\" class=\"virtual-area\"></div>\n            <div class=\"arrow\"></div>\n            <div class=\"popover-header\" [hidden]=\"!title\">{{ title }}</div>\n            <div class=\"popover-body\">\n                <ng-content></ng-content>\n                {{ content }}\n            </div>\n    </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], PopoverContentComponent);
    return PopoverContentComponent;
}());



/***/ }),

/***/ "./projects/ngx-smart-popover/src/lib/popover.directive.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-smart-popover/src/lib/popover.directive.ts ***!
  \*****************************************************************/
/*! exports provided: PopoverDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverDirective", function() { return PopoverDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _popover_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-content.component */ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts");
/* harmony import */ var _popover_placement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./popover.placement */ "./projects/ngx-smart-popover/src/lib/popover.placement.ts");
/**
 * This is a continuation of ngx-popover
 * @Reference {github} https://github.com/pleerock/ngx-popover
 */




/**
* @group Basic Toolkit
* @component Popover Directive
*/
var PopoverDirective = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function PopoverDirective(viewContainerRef, cdr, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.resolver = resolver;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.popoverContentComponent = _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"];
        this.popoverOnHover = true;
        this.popoverDismissTimeout = 0;
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // -------------------------------------------------------------------------
    // Event listeners
    // -------------------------------------------------------------------------
    PopoverDirective.prototype.showOrHideOnClick = function (evt) {
        if (this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        evt.stopImmediatePropagation();
        this.toggle();
    };
    PopoverDirective.prototype.showOrHideOnTouch = function (evt) {
        evt.stopImmediatePropagation();
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.toggle();
    };
    PopoverDirective.prototype.showOnHover = function () {
        if (!this.popoverOnHover) {
            return;
        }
        if (this.popoverDisabled) {
            return;
        }
        this.show();
    };
    PopoverDirective.prototype.hideOnHover = function () {
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
    };
    PopoverDirective.prototype.ngOnChanges = function (changes) {
        if (changes['popoverDisabled']) {
            if (changes['popoverDisabled'].currentValue) {
                this.hide();
            }
        }
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    PopoverDirective.prototype.toggle = function () {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    PopoverDirective.prototype.show = function () {
        var _this = this;
        if (this.visible) {
            return;
        }
        this.visible = true;
        if (typeof this.content === 'string') {
            var factory = this.resolver.resolveComponentFactory(this.popoverContentComponent);
            if (!this.visible) {
                return;
            }
            this.popover = this.viewContainerRef.createComponent(factory);
            var popover = this.popover.instance;
            popover.popover = this;
            popover.content = this.content;
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
            if (this.popoverSize) {
                popover.size = this.popoverSize;
            }
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0) {
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
            }
        }
        else {
            var popover = this.content;
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
            if (this.popoverSize) {
                popover.size = this.popoverSize;
            }
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0) {
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
            }
            popover.show();
        }
        this.cdr.detectChanges();
        this.onShown.emit(this);
    };
    PopoverDirective.prototype.hide = function () {
        if (!this.visible) {
            return;
        }
        this.visible = false;
        if (this.popover) {
            this.popover.destroy();
        }
        if (this.content instanceof _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"]) {
            this.content.hideFromPopover();
        }
        this.cdr.detectChanges();
        this.onHidden.emit(this);
    };
    PopoverDirective.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('popover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "popoverSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "popoverDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "popoverAnimation", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _popover_placement__WEBPACK_IMPORTED_MODULE_3__["PopoverPlacement"])
    ], PopoverDirective.prototype, "popoverPlacement", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverDirective.prototype, "popoverTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "popoverOnHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "popoverCloseOnClickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "popoverCloseOnMouseOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "popoverDismissTimeout", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "onShown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverDirective.prototype, "onHidden", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverDirective.prototype, "showOrHideOnClick", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('touchend', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverDirective.prototype, "showOrHideOnTouch", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusin'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverDirective.prototype, "showOnHover", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focusout'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverDirective.prototype, "hideOnHover", null);
    PopoverDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[popover]',
            exportAs: 'popover'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]])
    ], PopoverDirective);
    return PopoverDirective;
}());



/***/ }),

/***/ "./projects/ngx-smart-popover/src/lib/popover.module.ts":
/*!**************************************************************!*\
  !*** ./projects/ngx-smart-popover/src/lib/popover.module.ts ***!
  \**************************************************************/
/*! exports provided: PopoverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverModule", function() { return PopoverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.directive */ "./projects/ngx-smart-popover/src/lib/popover.directive.ts");
/* harmony import */ var _popover_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-content.component */ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _popover_directive__WEBPACK_IMPORTED_MODULE_1__["PopoverDirective"],
                _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            ],
            exports: [
                _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"],
                _popover_directive__WEBPACK_IMPORTED_MODULE_1__["PopoverDirective"]
            ],
            entryComponents: [
                _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"]
            ]
        })
    ], PopoverModule);
    return PopoverModule;
}());



/***/ }),

/***/ "./projects/ngx-smart-popover/src/lib/popover.placement.ts":
/*!*****************************************************************!*\
  !*** ./projects/ngx-smart-popover/src/lib/popover.placement.ts ***!
  \*****************************************************************/
/*! exports provided: PopoverPlacement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPlacement", function() { return PopoverPlacement; });
var PopoverPlacement = /** @class */ (function () {
    function PopoverPlacement() {
    }
    PopoverPlacement.Bottom = 'bottom';
    PopoverPlacement.BottomLeft = 'bottom-left';
    PopoverPlacement.BottomRight = 'bottom-right';
    PopoverPlacement.Left = 'left';
    PopoverPlacement.Right = 'right';
    PopoverPlacement.Top = 'top';
    PopoverPlacement.TopLeft = 'top-left';
    PopoverPlacement.TopRight = 'top-right';
    return PopoverPlacement;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron img {\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.center-content {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.center-content img {\n  margin: 30px;\n  cursor: pointer;\n}\n\np {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZW50ZXItY29udGVudCBpbWcge1xuICBtYXJnaW46IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n    <h1>\n        <img height=\"70\" src=\"assets/popover.png\">ngx-smart-popover Demo\n    </h1>\n</div>\n\n\n\n<h3 class=\"text-center\">Hover the emojis!</h3>\n<div class=\"all-placements center-content\">\n    <popover-content #tearsRef>\n        <h2>Face With Tears of Joy</h2>\n        A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard.\n        Widely used to show something is funny or pleasing.\n    </popover-content>\n    <img class=\"emoji-top\" height=\"75\" [popover]=\"tearsRef\" src=\"assets/tears.png\">\n    <popover-content #eyebrowRef>\n        <h2>Face With Raised Eyebrow</h2>\n        A face with a neutral mouth and single eyebrow raised. May be used to denote scepticism, disbelief, or\n        disapproval.\n    </popover-content>\n    <img class=\"emoji-top-right\" height=\"75\" [popover]=\"eyebrowRef\" popoverPlacement=\"top-right\" src=\"assets/eyebrow.png\">\n    <popover-content #droolRef>\n        <h2>Drooling Face</h2>\n        A face shown with drool dripping from one side of the mouth. May be used as a display of desire in a person,\n        object or concept. Previously displayed with a startled appearance on Samsung devices.\n    </popover-content>\n    <img class=\"emoji-right\" height=\"75\" [popover]=\"droolRef\" popoverPlacement=\"right\" src=\"assets/drool.png\">\n    <popover-content #kissRef>\n        <h2>Face Blowing a Kiss</h2>\n        An emoji face blowing a kiss, usually shown with one eye open and the other eye winking. A heart is shown\n        leaving the kissing mouth.\n    </popover-content>\n    <img class=\"emoji-bottom-right\" height=\"75\" [popover]=\"kissRef\" popoverPlacement=\"bottom-right\" src=\"assets/kiss.png\">\n    <popover-content #persevereRef>\n        <h2>Persevering Face</h2>\n        Face with scrunched up and closed eyes, frowning. Used to show helplessness in a situation. May be on the verge\n        of tears.\n    </popover-content>\n    <img class=\"emoji-bottom\" height=\"75\" [popover]=\"persevereRef\" popoverPlacement=\"bottom\" src=\"assets/persevere.png\">\n    <popover-content #sunglassesRef>\n        <h2>Smiling Face With Sunglasses</h2>\n        A face smiling and wearing dark sunglasses that is used to denote a sense of cool. The <a\n            href=\"https://emojipedia.org/nerd-face/\" target=\"_blank\">nerd face emoji</a> is a similar face, but with\n        regular glasses.\n    </popover-content>\n    <img class=\"emoji-bottom-left\" height=\"75\" [popover]=\"sunglassesRef\" popoverPlacement=\"bottom-left\" src=\"assets/sunglasses.png\">\n    <popover-content #zanyRef>\n        <h2>Zany Face</h2>\n        A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and \n        in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; \n        others feature a full-toothed grin, giving it a more unhinged appearance.\n    </popover-content>\n    <img class=\"emoji-left\" height=\"75\" [popover]=\"zanyRef\" popoverPlacement=\"left\" src=\"assets/zany.png\">\n    <popover-content #thinkingRef>\n        <h2>Thinking Face</h2>\n        A face shown with a single finger and thumb resting on the chin, glancing upward. Used to indicate thinking, or\n        deep thought.\n    </popover-content>\n    <img class=\"emoji-top-left\" height=\"75\" [popover]=\"thinkingRef\" popoverPlacement=\"top-left\" src=\"assets/thinking.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">Click the emoji!</h3>\n<div class=\"click-to-show center-content\">\n    <popover-content #tongueRef>\n        <h2>Winking Face With Tongue</h2>\n        A face showing a stuck-out tongue, winking at the same time. Used in an attempt to be wacky, zany, or otherwise\n        joking.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"tongueRef\" [popoverOnHover]=\"false\" src=\"assets/tongue.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">Close popover by the outside click</h3>\n<div class=\"close-on-click-outside center-content\">\n    <popover-content #sweatRef\n                     [closeOnClickOutside]=\"true\">\n        <h2>Grinning Face With Sweat</h2>\n        A face with a grin and smiling eyes similar to 'Grinning Face' but with a single bead of forehead sweat over its left eye (right on WhatsApp).\n        Intended to depict nerves or discomfort but commonly used as a means of expressing \"whew!\" or \"close call!\" that\n        would be implied when a person wipes sweat from their brow in an exaggerated manner.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"sweatRef\" [popoverOnHover]=\"false\" src=\"assets/sweat.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">This popover is set to open on the bottom.</h3>\n<p class=\"text-center\">if you scroll the emoji to the bottom of the viewport, it will auto reflect to the top.</p>\n<p class=\"text-center\">scroll the page down to see it open on the bottom.</p>\n<div class=\"placement-reflection center-content\">\n    <popover-content #cryRef>\n        <h2>Loudly Crying Face</h2>\n        A sad face with tears streaming down both cheeks. This face is distraught and inconsolable. Not to be confused\n        with the <a href=\"https://emojipedia.org/face-with-tears-of-joy/\" target=\"_blank\">tears of joy emoji</a>.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"cryRef\" popoverPlacement=\"bottom\" src=\"assets/cry.png\">\n</div>\n\n<div style=\"height: 500px;\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-smart-popover-demo';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ngx-smart-popover/src/lib/popover.module */ "./projects/ngx-smart-popover/src/lib/popover.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_4__["PopoverModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmayer/code/ngx-smart-popover/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map