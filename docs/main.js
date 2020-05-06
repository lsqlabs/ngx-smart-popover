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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _popover_placement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.placement */ "./projects/ngx-smart-popover/src/lib/popover.placement.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/**
 * This is a continuation of ngx-popover
 * @Reference {github} https://github.com/pleerock/ngx-popover
 */




var _c0 = ["popoverDiv"];
var _c1 = function (a0, a1, a2, a3, a4) { return { "sm": a0, "md-sm": a1, "md": a2, "lg": a3, "in": a4 }; };
var _c2 = ["*"];
var PopoverContentComponent = /** @class */ (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function PopoverContentComponent(element, cdr, renderer) {
        var _this = this;
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
        this.placement = _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
        this.animation = true;
        this.closeOnClickOutside = false;
        this.closeOnMouseOutside = false;
        this.appendToBody = false;
        this.size = 'small';
        this.onCloseFromOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    PopoverContentComponent.prototype.onResize = function (event) {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    };
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
        var hostElPos = this.appendToBody || appendToBody ? this.offset(hostEl) : this.position(hostEl);
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
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right:
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left:
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom:
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth['topOrBottomLeft']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth['topOrBottomRight']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft:
                targetElPos = {
                    top: shiftHeight[_popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom](),
                    left: shiftWidth['topOrBottomLeft']()
                };
                break;
            case _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight:
                targetElPos = {
                    top: shiftHeight[_popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom](),
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
        var desiredPlacement = placement || _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
        // Determines if a popover overflows in a direction when in a specific position.
        var overflows = {
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
        };
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top) {
            // If it overflows on the top AND left, go to bottom-right.
            if (overflows.positionTop.top && overflows.positionTop.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                // If it overflows on the top AND right, go to bottom-left.
            }
            else if (overflows.positionTop.top && overflows.positionTop.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                // If it only overflows on the top, go to bottom.
            }
            else if (overflows.positionTop.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                // If it only overflows to the right, go to top-left.
            }
            else if (overflows.positionTop.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                // If it only overflows to the left, go to top-right.
            }
            else if (overflows.positionTop.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight) {
            // If it overflows on the top AND the right, try in the order: bottom, Bottom-left, left.
            if (overflows.positionTopRight.top && overflows.positionTopRight.right) {
                if (overflows.positionBottom.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left;
                }
                else if (overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
                // If it only overflows on the top, try in the order: right, bottom-right.
            }
            else if (overflows.positionTopRight.top) {
                if (overflows.positionRight.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right;
                }
                // If it only overflows on the right, try in the order: top, top-left.
            }
            else if (overflows.positionTopRight.right) {
                if (overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right) {
            // If it overflows on the right AND the top, try in the order: bottom-right, bottom, bottom-left.
            if (overflows.positionRight.right && overflows.positionRight.top) {
                if (overflows.positionBottomRight.right && overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                }
                else if (overflows.positionBottomRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                }
                // If it overflows on the right AND the bottom, try in the order: top-right, top, top-left.
            }
            else if (overflows.positionRight.right && overflows.positionRight.bottom) {
                if (overflows.positionTopRight.right && overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                }
                else if (overflows.positionTopRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                }
                // If it only overflows on the right, try all top positions from right to left, then try all bottom positions right to left.
            }
            else if (overflows.positionRight.right) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                    }
                    else if (overflows.positionBottomRight.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                    }
                }
                else {
                    if (overflows.positionTop.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                    }
                    else if (overflows.positionTopRight.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                    }
                }
                // If it only over flows on the top, go bottom-right.
            }
            else if (overflows.positionRight.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                // If it only overflows on the bottom, go top-right.
            }
            else if (overflows.positionRight.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight) {
            // If it overflows on the bottom AND the right, try in the order: top, top-left, left.
            if (overflows.positionBottomRight.bottom && overflows.positionBottomRight.right) {
                if (overflows.positionTop.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left;
                }
                else if (overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
                // If it only overflows on the bottom, try in the order: right, top-right.
            }
            else if (overflows.positionBottomRight.bottom) {
                if (overflows.positionRight.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right;
                }
                // If it only overflows on the right, try in the order: bottom, bottom-left.
            }
            else if (overflows.positionBottomRight.right) {
                if (overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom) {
            // If it overflows on the bottom AND left, go to top-right.
            if (overflows.positionBottom.bottom && overflows.positionBottom.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                // If it overflows on the bottom AND right, go to top-left.
            }
            else if (overflows.positionBottom.bottom && overflows.positionBottom.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                // If it only overflows on the bottom, go to top.
            }
            else if (overflows.positionBottom.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                // If it only overflows to the right, go to bottom-left.
            }
            else if (overflows.positionBottom.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                // If it only overflows to the left, go to bottom-right.
            }
            else if (overflows.positionBottom.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft) {
            // If it overflows on the bottom AND the left, try in the order: top, top-right, right.
            if (overflows.positionBottomLeft.bottom && overflows.positionBottomLeft.left) {
                if (overflows.positionTop.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right;
                }
                else if (overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
                // If it only overflows on the bottom, try in the order: left, top-left.
            }
            else if (overflows.positionBottomLeft.bottom) {
                if (overflows.positionLeft.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left;
                }
                // If it only overflows on the left, try in the order: bottom, bottom-right.
            }
            else if (overflows.positionBottomLeft.left) {
                if (overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left) {
            // If it overflows on the left AND the top, try in the order: bottom-left, bottom, bottom-right.
            if (overflows.positionLeft.left && overflows.positionLeft.top) {
                if (overflows.positionBottomLeft.left && overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                }
                else if (overflows.positionBottomRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                }
                // If it overflows on the left AND the bottom, try in the order: top-left, top, top-right.
            }
            else if (overflows.positionLeft.left && overflows.positionLeft.bottom) {
                if (overflows.positionTopLeft.left && overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                }
                else if (overflows.positionTopLeft.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                }
                // If it only overflows on the left, try all top positions from left to right, then try all bottom positions left to right.
            }
            else if (overflows.positionLeft.left) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                    }
                    else if (overflows.positionBottomLeft.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                    }
                }
                else {
                    if (overflows.positionTop.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                    }
                    else if (overflows.positionTopLeft.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
                    }
                }
                // If it only over flows on the top, go bottom-left.
            }
            else if (overflows.positionLeft.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                // If it only overflows on the bottom, go top-left.
            }
            else if (overflows.positionLeft.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft) {
            // If it overflows on the top AND the left, try in the order: bottom, Bottom-right, right.
            if (overflows.positionTopLeft.top && overflows.positionTopLeft.left) {
                if (overflows.positionBottom.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Right;
                }
                else if (overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Bottom;
                }
                // If it only overflows on the top, try in the order: left, bottom-left.
            }
            else if (overflows.positionTopLeft.top) {
                if (overflows.positionLeft.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Left;
                }
                // If it only overflows on the left, try in the order: top, top-right.
            }
            else if (overflows.positionTopLeft.left) {
                if (overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].Top;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_1__["PopoverPlacement"].TopLeft;
            }
        }
        return desiredPlacement;
    };
    PopoverContentComponent.ɵfac = function PopoverContentComponent_Factory(t) { return new (t || PopoverContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
    PopoverContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopoverContentComponent, selectors: [["popover-content"]], viewQuery: function PopoverContentComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.popoverDiv = _t.first);
        } }, hostBindings: function PopoverContentComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PopoverContentComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, inputs: { content: "content", placement: "placement", title: "title", parentClass: "parentClass", animation: "animation", closeOnClickOutside: "closeOnClickOutside", closeOnMouseOutside: "closeOnMouseOutside", appendToBody: "appendToBody", size: "size" }, ngContentSelectors: _c2, decls: 9, vars: 26, consts: [["role", "popover", 3, "ngClass"], ["popoverDiv", ""], [1, "virtual-area", 3, "hidden"], [1, "arrow"], [1, "popover-header", 3, "hidden"], [1, "popover-body"]], template: function PopoverContentComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("bs-popover-", ctx.effectivePlacement, " popover-content popover ", ctx.parentClass, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.top, "px")("left", ctx.left, "px")("transition", ctx.transitionEnabled ? "0.15s opacity" : "")("opacity", ctx.opacity)("display", "block");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](20, _c1, ctx.size === "small", ctx.size === "medium-small", ctx.size === "medium", ctx.size === "large", ctx.isIn));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-hidden", ctx.opacity === 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.closeOnMouseOutside);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.content, " ");
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
    return PopoverContentComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'popover-content',
                template: "\n        <div #popoverDiv\n            class=\"bs-popover-{{ effectivePlacement }} popover-content popover {{ parentClass }}\"\n            [ngClass]=\"{\n                'sm': size === 'small',\n                'md-sm': size === 'medium-small',\n                'md': size === 'medium',\n                'lg': size === 'large',\n                'in': isIn\n            }\"\n            [style.top.px]=\"top\"\n            [style.left.px]=\"left\"\n            [style.transition]=\"(transitionEnabled ? '0.15s opacity' : '')\"\n            [style.opacity]=\"opacity\"\n            [style.display]=\"'block'\"\n            [attr.aria-hidden]=\"opacity === 0\"\n            role=\"popover\">\n                <div [hidden]=\"!closeOnMouseOutside\" class=\"virtual-area\"></div>\n                <div class=\"arrow\"></div>\n                <div class=\"popover-header\" [hidden]=\"!title\">{{ title }}</div>\n                <div class=\"popover-body\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n        </div>\n    "
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], closeOnMouseOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['popoverDiv', { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _popover_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-content.component */ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts");
/* harmony import */ var _popover_placement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover.placement */ "./projects/ngx-smart-popover/src/lib/popover.placement.ts");
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
    function PopoverDirective(viewContainerRef, cdr, resolver, appRef, injector) {
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.popoverContentComponent = _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"];
        this.popoverOnHover = true;
        this.popoverDismissTimeout = 0;
        this.onShown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
    PopoverDirective.prototype.createComponent = function (component) {
        var factory = this.resolver.resolveComponentFactory(component);
        // Create a component reference from the component
        var componentRef = this.appendToBody
            ? factory.create(this.injector)
            : this.viewContainerRef.createComponent(factory);
        if (this.appendToBody) {
            // Attach component to the appRef so that it's inside the ng component tree
            this.appRef.attachView(componentRef.hostView);
            // Get DOM element from component
            var domElem = componentRef.hostView
                .rootNodes[0];
            // Append DOM element to the body
            document.body.appendChild(domElem);
        }
        return componentRef;
    };
    PopoverDirective.prototype.removeComponent = function (componentRef) {
        if (this.popover) {
            if (this.appendToBody) {
                this.appRef.detachView(componentRef.hostView);
            }
            componentRef.destroy();
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
            if (!this.visible) {
                return;
            }
            this.popover = this.createComponent(this.popoverContentComponent);
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
            popover.appendToBody = this.appendToBody;
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
            popover.appendToBody = this.appendToBody;
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
        this.removeComponent(this.popover);
        if (this.content instanceof _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"]) {
            this.content.hideFromPopover();
        }
        this.cdr.detectChanges();
        this.onHidden.emit(this);
    };
    PopoverDirective.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
    PopoverDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PopoverDirective, selectors: [["", "popover", ""]], hostBindings: function PopoverDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopoverDirective_click_HostBindingHandler($event) { return ctx.showOrHideOnClick($event); })("touchend", function PopoverDirective_touchend_HostBindingHandler($event) { return ctx.showOrHideOnTouch($event); })("focusin", function PopoverDirective_focusin_HostBindingHandler() { return ctx.showOnHover(); })("mouseenter", function PopoverDirective_mouseenter_HostBindingHandler() { return ctx.showOnHover(); })("focusout", function PopoverDirective_focusout_HostBindingHandler() { return ctx.hideOnHover(); })("mouseleave", function PopoverDirective_mouseleave_HostBindingHandler() { return ctx.hideOnHover(); });
        } }, inputs: { content: ["popover", "content"], popoverSize: "popoverSize", popoverDisabled: "popoverDisabled", popoverAnimation: "popoverAnimation", popoverPlacement: "popoverPlacement", popoverTitle: "popoverTitle", popoverOnHover: "popoverOnHover", popoverCloseOnClickOutside: "popoverCloseOnClickOutside", popoverCloseOnMouseOutside: "popoverCloseOnMouseOutside", popoverDismissTimeout: "popoverDismissTimeout", appendToBody: "appendToBody" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["popover"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
    return PopoverDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[popover]',
                exportAs: 'popover'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['popover']
        }], popoverSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverPlacement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverCloseOnClickOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverCloseOnMouseOutside: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], popoverDismissTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], appendToBody: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onShown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onHidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showOrHideOnClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }], showOrHideOnTouch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['touchend', ['$event']]
        }], showOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusin']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], hideOnHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['focusout']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


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
/* harmony import */ var _popover_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.directive */ "./projects/ngx-smart-popover/src/lib/popover.directive.ts");
/* harmony import */ var _popover_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-content.component */ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");





var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    PopoverModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PopoverModule });
    PopoverModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function PopoverModule_Factory(t) { return new (t || PopoverModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            ]] });
    return PopoverModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PopoverModule, { declarations: [_popover_directive__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"],
        _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]], exports: [_popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"],
        _popover_directive__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PopoverModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _popover_directive__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"],
                    _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                ],
                exports: [
                    _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"],
                    _popover_directive__WEBPACK_IMPORTED_MODULE_0__["PopoverDirective"]
                ],
                entryComponents: [
                    _popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"]
                ]
            }]
    }], null, null); })();


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

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _projects_ngx_smart_popover_src_lib_popover_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../projects/ngx-smart-popover/src/lib/popover-content.component */ "./projects/ngx-smart-popover/src/lib/popover-content.component.ts");
/* harmony import */ var _projects_ngx_smart_popover_src_lib_popover_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../projects/ngx-smart-popover/src/lib/popover.directive */ "./projects/ngx-smart-popover/src/lib/popover.directive.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngx-smart-popover-demo';
    }
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 105, vars: 17, consts: [[1, "jumbotron", "text-center"], ["height", "70", "src", "assets/popover.png"], [1, "text-center"], [1, "all-placements", "center-content"], ["tearsRef", ""], ["height", "75", "src", "assets/tears.png", 1, "emoji-top", 3, "popover"], ["eyebrowRef", ""], ["height", "75", "popoverPlacement", "top-right", "src", "assets/eyebrow.png", 1, "emoji-top-right", 3, "popover"], ["droolRef", ""], ["height", "75", "popoverPlacement", "right", "src", "assets/drool.png", 1, "emoji-right", 3, "popover"], ["kissRef", ""], ["height", "75", "popoverPlacement", "bottom-right", "src", "assets/kiss.png", 1, "emoji-bottom-right", 3, "popover"], ["persevereRef", ""], ["height", "75", "popoverPlacement", "bottom", "src", "assets/persevere.png", 1, "emoji-bottom", 3, "popover"], ["sunglassesRef", ""], ["href", "https://emojipedia.org/nerd-face/", "target", "_blank"], ["height", "75", "popoverPlacement", "bottom-left", "src", "assets/sunglasses.png", 1, "emoji-bottom-left", 3, "popover"], ["zanyRef", ""], ["height", "75", "popoverPlacement", "left", "src", "assets/zany.png", 1, "emoji-left", 3, "popover"], ["thinkingRef", ""], ["height", "75", "popoverPlacement", "top-left", "src", "assets/thinking.png", 1, "emoji-top-left", 3, "popover"], [1, "click-to-show", "center-content"], ["tongueRef", ""], ["height", "75", "src", "assets/tongue.png", 1, "emoji", 3, "popover", "popoverOnHover"], [1, "close-on-click-outside", "center-content"], [3, "closeOnClickOutside"], ["sweatRef", ""], ["height", "75", "src", "assets/sweat.png", 1, "emoji", 3, "popover", "popoverOnHover"], [1, "placement-reflection", "center-content"], ["cryRef", ""], ["href", "https://emojipedia.org/face-with-tears-of-joy/", "target", "_blank"], ["height", "75", "popoverPlacement", "bottom", "src", "assets/cry.png", 1, "emoji", 3, "popover"], [1, "center-content", "body-popover"], ["height", "75", "src", "assets/tongue.png", 1, "emoji", 3, "popoverOnHover", "popover", "appendToBody"], [2, "height", "500px"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ngx-smart-popover Demo ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hover the emojis!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "popover-content", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Face With Tears of Joy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "popover-content", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Face With Raised Eyebrow");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " A face with a neutral mouth and single eyebrow raised. May be used to denote scepticism, disbelief, or disapproval. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "popover-content", null, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Drooling Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " A face shown with drool dripping from one side of the mouth. May be used as a display of desire in a person, object or concept. Previously displayed with a startled appearance on Samsung devices. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "popover-content", null, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Face Blowing a Kiss");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " An emoji face blowing a kiss, usually shown with one eye open and the other eye winking. A heart is shown leaving the kissing mouth. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "popover-content", null, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Persevering Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Face with scrunched up and closed eyes, frowning. Used to show helplessness in a situation. May be on the verge of tears. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "popover-content", null, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Smiling Face With Sunglasses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " A face smiling and wearing dark sunglasses that is used to denote a sense of cool. The ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "nerd face emoji");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " is a similar face, but with regular glasses. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "popover-content", null, 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Zany Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; others feature a full-toothed grin, giving it a more unhinged appearance. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "popover-content", null, 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Thinking Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " A face shown with a single finger and thumb resting on the chin, glancing upward. Used to indicate thinking, or deep thought. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Click the emoji!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "popover-content", null, 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Winking Face With Tongue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " A face showing a stuck-out tongue, winking at the same time. Used in an attempt to be wacky, zany, or otherwise joking. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Close popover by the outside click");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "popover-content", 25, 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Grinning Face With Sweat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " A face with a grin and smiling eyes similar to 'Grinning Face' but with a single bead of forehead sweat over its left eye (right on WhatsApp). Intended to depict nerves or discomfort but commonly used as a means of expressing \"whew!\" or \"close call!\" that would be implied when a person wipes sweat from their brow in an exaggerated manner. ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "This popover is set to open on the bottom.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "if you scroll the emoji to the bottom of the viewport, it will auto reflect to the top.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "scroll the page down to see it open on the bottom.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "popover-content", null, 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Loudly Crying Face");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " A sad face with tears streaming down both cheeks. This face is distraught and inconsolable. Not to be confused with the ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "tears of joy emoji");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, ". ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h3", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Show in the body!");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div", 34);
        } if (rf & 2) {
            var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);
            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](64);
            var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](75);
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r8)("popoverOnHover", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("closeOnClickOutside", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r9)("popoverOnHover", false);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popover", _r10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popoverOnHover", false)("popover", "Message from body")("appendToBody", true);
        } }, directives: [_projects_ngx_smart_popover_src_lib_popover_content_component__WEBPACK_IMPORTED_MODULE_1__["PopoverContentComponent"], _projects_ngx_smart_popover_src_lib_popover_directive__WEBPACK_IMPORTED_MODULE_2__["PopoverDirective"]], styles: [".jumbotron[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.center-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  padding: 0 15px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n\n.center-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 30px;\n  cursor: pointer;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZW50ZXItY29udGVudCBpbWcge1xuICBtYXJnaW46IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */"], changeDetection: 0 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../projects/ngx-smart-popover/src/lib/popover.module */ "./projects/ngx-smart-popover/src/lib/popover.module.ts");





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"]
            ]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _projects_ngx_smart_popover_src_lib_popover_module__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tbottonari/code/ngx-smart-popover/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map