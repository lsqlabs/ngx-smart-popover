(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron text-center\">\n    <h1>\n        <img height=\"70\" src=\"assets/popover.png\">ngx-smart-popover Demo\n    </h1>\n</div>\n\n\n\n<h3 class=\"text-center\">Hover the emojis!</h3>\n<div class=\"all-placements center-content\">\n    <popover-content #tearsRef>\n        <h2>Face With Tears of Joy</h2>\n        A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard.\n        Widely used to show something is funny or pleasing.\n    </popover-content>\n    <img class=\"emoji-top\" height=\"75\" [popover]=\"tearsRef\" src=\"assets/tears.png\">\n    <popover-content #eyebrowRef>\n        <h2>Face With Raised Eyebrow</h2>\n        A face with a neutral mouth and single eyebrow raised. May be used to denote scepticism, disbelief, or\n        disapproval.\n    </popover-content>\n    <img class=\"emoji-top-right\" height=\"75\" [popover]=\"eyebrowRef\" popoverPlacement=\"top-right\" src=\"assets/eyebrow.png\">\n    <popover-content #droolRef>\n        <h2>Drooling Face</h2>\n        A face shown with drool dripping from one side of the mouth. May be used as a display of desire in a person,\n        object or concept. Previously displayed with a startled appearance on Samsung devices.\n    </popover-content>\n    <img class=\"emoji-right\" height=\"75\" [popover]=\"droolRef\" popoverPlacement=\"right\" src=\"assets/drool.png\">\n    <popover-content #kissRef>\n        <h2>Face Blowing a Kiss</h2>\n        An emoji face blowing a kiss, usually shown with one eye open and the other eye winking. A heart is shown\n        leaving the kissing mouth.\n    </popover-content>\n    <img class=\"emoji-bottom-right\" height=\"75\" [popover]=\"kissRef\" popoverPlacement=\"bottom-right\" src=\"assets/kiss.png\">\n    <popover-content #persevereRef>\n        <h2>Persevering Face</h2>\n        Face with scrunched up and closed eyes, frowning. Used to show helplessness in a situation. May be on the verge\n        of tears.\n    </popover-content>\n    <img class=\"emoji-bottom\" height=\"75\" [popover]=\"persevereRef\" popoverPlacement=\"bottom\" src=\"assets/persevere.png\">\n    <popover-content #sunglassesRef>\n        <h2>Smiling Face With Sunglasses</h2>\n        A face smiling and wearing dark sunglasses that is used to denote a sense of cool. The <a\n            href=\"https://emojipedia.org/nerd-face/\" target=\"_blank\">nerd face emoji</a> is a similar face, but with\n        regular glasses.\n    </popover-content>\n    <img class=\"emoji-bottom-left\" height=\"75\" [popover]=\"sunglassesRef\" popoverPlacement=\"bottom-left\" src=\"assets/sunglasses.png\">\n    <popover-content #zanyRef>\n        <h2>Zany Face</h2>\n        A smiley making a silly face. A yellow face with a big grin and wide, white eyes, one larger than the other and \n        in a wild, cockeyed expression. Many platforms, including Apple, depict its tongue stuck out and head tilted; \n        others feature a full-toothed grin, giving it a more unhinged appearance.\n    </popover-content>\n    <img class=\"emoji-left\" height=\"75\" [popover]=\"zanyRef\" popoverPlacement=\"left\" src=\"assets/zany.png\">\n    <popover-content #thinkingRef>\n        <h2>Thinking Face</h2>\n        A face shown with a single finger and thumb resting on the chin, glancing upward. Used to indicate thinking, or\n        deep thought.\n    </popover-content>\n    <img class=\"emoji-top-left\" height=\"75\" [popover]=\"thinkingRef\" popoverPlacement=\"top-left\" src=\"assets/thinking.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">Click the emoji!</h3>\n<div class=\"click-to-show center-content\">\n    <popover-content #tongueRef>\n        <h2>Winking Face With Tongue</h2>\n        A face showing a stuck-out tongue, winking at the same time. Used in an attempt to be wacky, zany, or otherwise\n        joking.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"tongueRef\" [popoverOnHover]=\"false\" src=\"assets/tongue.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">Close popover by the outside click</h3>\n<div class=\"close-on-click-outside center-content\">\n    <popover-content #sweatRef\n                     [closeOnClickOutside]=\"true\">\n        <h2>Grinning Face With Sweat</h2>\n        A face with a grin and smiling eyes similar to 'Grinning Face' but with a single bead of forehead sweat over its left eye (right on WhatsApp).\n        Intended to depict nerves or discomfort but commonly used as a means of expressing \"whew!\" or \"close call!\" that\n        would be implied when a person wipes sweat from their brow in an exaggerated manner.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"sweatRef\" [popoverOnHover]=\"false\" src=\"assets/sweat.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">This popover is set to open on the bottom.</h3>\n<p class=\"text-center\">if you scroll the emoji to the bottom of the viewport, it will auto reflect to the top.</p>\n<p class=\"text-center\">scroll the page down to see it open on the bottom.</p>\n<div class=\"placement-reflection center-content\">\n    <popover-content #cryRef>\n        <h2>Loudly Crying Face</h2>\n        A sad face with tears streaming down both cheeks. This face is distraught and inconsolable. Not to be confused\n        with the <a href=\"https://emojipedia.org/face-with-tears-of-joy/\" target=\"_blank\">tears of joy emoji</a>.\n    </popover-content>\n    <img class=\"emoji\" height=\"75\" [popover]=\"cryRef\" popoverPlacement=\"bottom\" src=\"assets/cry.png\">\n</div>\n\n<br /><br />\n<h3 class=\"text-center\">Show in the body!</h3>\n<div class=\"center-content body-popover\">\n    <img class=\"emoji\" height=\"75\" [popoverOnHover]=\"false\" [popover]=\"'Message from body'\" [appendToBody]=\"true\" src=\"assets/tongue.png\">\n</div>\n\n<div style=\"height: 500px;\"></div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
        this.appendToBody = false;
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
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top) {
            // If it overflows on the top AND left, go to bottom-right.
            if (overflows.positionTop.top && overflows.positionTop.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                // If it overflows on the top AND right, go to bottom-left.
            }
            else if (overflows.positionTop.top && overflows.positionTop.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                // If it only overflows on the top, go to bottom.
            }
            else if (overflows.positionTop.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                // If it only overflows to the right, go to top-left.
            }
            else if (overflows.positionTop.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                // If it only overflows to the left, go to top-right.
            }
            else if (overflows.positionTop.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight) {
            // If it overflows on the top AND the right, try in the order: bottom, Bottom-left, left.
            if (overflows.positionTopRight.top && overflows.positionTopRight.right) {
                if (overflows.positionBottom.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
                }
                else if (overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
                // If it only overflows on the top, try in the order: right, bottom-right.
            }
            else if (overflows.positionTopRight.top) {
                if (overflows.positionRight.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
                }
                // If it only overflows on the right, try in the order: top, top-left.
            }
            else if (overflows.positionTopRight.right) {
                if (overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right) {
            // If it overflows on the right AND the top, try in the order: bottom-right, bottom, bottom-left.
            if (overflows.positionRight.right && overflows.positionRight.top) {
                if (overflows.positionBottomRight.right && overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                }
                else if (overflows.positionBottomRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                }
                // If it overflows on the right AND the bottom, try in the order: top-right, top, top-left.
            }
            else if (overflows.positionRight.right && overflows.positionRight.bottom) {
                if (overflows.positionTopRight.right && overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                }
                else if (overflows.positionTopRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                }
                // If it only overflows on the right, try all top positions from right to left, then try all bottom positions right to left.
            }
            else if (overflows.positionRight.right) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                    }
                    else if (overflows.positionBottomRight.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                    }
                }
                else {
                    if (overflows.positionTop.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                    }
                    else if (overflows.positionTopRight.right) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                    }
                }
                // If it only over flows on the top, go bottom-right.
            }
            else if (overflows.positionRight.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                // If it only overflows on the bottom, go top-right.
            }
            else if (overflows.positionRight.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight) {
            // If it overflows on the bottom AND the right, try in the order: top, top-left, left.
            if (overflows.positionBottomRight.bottom && overflows.positionBottomRight.right) {
                if (overflows.positionTop.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
                }
                else if (overflows.positionTop.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
                // If it only overflows on the bottom, try in the order: right, top-right.
            }
            else if (overflows.positionBottomRight.bottom) {
                if (overflows.positionRight.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
                }
                // If it only overflows on the right, try in the order: bottom, bottom-left.
            }
            else if (overflows.positionBottomRight.right) {
                if (overflows.positionBottom.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom) {
            // If it overflows on the bottom AND left, go to top-right.
            if (overflows.positionBottom.bottom && overflows.positionBottom.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                // If it overflows on the bottom AND right, go to top-left.
            }
            else if (overflows.positionBottom.bottom && overflows.positionBottom.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                // If it only overflows on the bottom, go to top.
            }
            else if (overflows.positionBottom.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                // If it only overflows to the right, go to bottom-left.
            }
            else if (overflows.positionBottom.right) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                // If it only overflows to the left, go to bottom-right.
            }
            else if (overflows.positionBottom.left) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft) {
            // If it overflows on the bottom AND the left, try in the order: top, top-right, right.
            if (overflows.positionBottomLeft.bottom && overflows.positionBottomLeft.left) {
                if (overflows.positionTop.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
                }
                else if (overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
                // If it only overflows on the bottom, try in the order: left, top-left.
            }
            else if (overflows.positionBottomLeft.bottom) {
                if (overflows.positionLeft.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
                }
                // If it only overflows on the left, try in the order: bottom, bottom-right.
            }
            else if (overflows.positionBottomLeft.left) {
                if (overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left) {
            // If it overflows on the left AND the top, try in the order: bottom-left, bottom, bottom-right.
            if (overflows.positionLeft.left && overflows.positionLeft.top) {
                if (overflows.positionBottomLeft.left && overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                }
                else if (overflows.positionBottomRight.right) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                }
                // If it overflows on the left AND the bottom, try in the order: top-left, top, top-right.
            }
            else if (overflows.positionLeft.left && overflows.positionLeft.bottom) {
                if (overflows.positionTopLeft.left && overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                }
                else if (overflows.positionTopLeft.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                }
                // If it only overflows on the left, try all top positions from left to right, then try all bottom positions left to right.
            }
            else if (overflows.positionLeft.left) {
                if (overflows.positionTop.top) {
                    if (overflows.positionBottom.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                    }
                    else if (overflows.positionBottomLeft.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                    }
                }
                else {
                    if (overflows.positionTop.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                    }
                    else if (overflows.positionTopLeft.left) {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                    }
                    else {
                        return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
                    }
                }
                // If it only over flows on the top, go bottom-left.
            }
            else if (overflows.positionLeft.top) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                // If it only overflows on the bottom, go top-left.
            }
            else if (overflows.positionLeft.bottom) {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
            }
        }
        if (desiredPlacement === _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft) {
            // If it overflows on the top AND the left, try in the order: bottom, Bottom-right, right.
            if (overflows.positionTopLeft.top && overflows.positionTopLeft.left) {
                if (overflows.positionBottom.bottom) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Right;
                }
                else if (overflows.positionBottom.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Bottom;
                }
                // If it only overflows on the top, try in the order: left, bottom-left.
            }
            else if (overflows.positionTopLeft.top) {
                if (overflows.positionLeft.top) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].BottomLeft;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Left;
                }
                // If it only overflows on the left, try in the order: top, top-right.
            }
            else if (overflows.positionTopLeft.left) {
                if (overflows.positionTop.left) {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopRight;
                }
                else {
                    return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].Top;
                }
            }
            else {
                return _popover_placement__WEBPACK_IMPORTED_MODULE_2__["PopoverPlacement"].TopLeft;
            }
        }
        return desiredPlacement;
    };
    PopoverContentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
    ]; };
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PopoverContentComponent.prototype, "appendToBody", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PopoverContentComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('popoverDiv', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PopoverContentComponent.prototype, "popoverDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PopoverContentComponent.prototype, "onResize", null);
    PopoverContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'popover-content',
            template: "\n        <div #popoverDiv\n            class=\"bs-popover-{{ effectivePlacement }} popover-content popover {{ parentClass }}\"\n            [ngClass]=\"{\n                'sm': size === 'small',\n                'md-sm': size === 'medium-small',\n                'md': size === 'medium',\n                'lg': size === 'large',\n                'in': isIn\n            }\"\n            [style.top.px]=\"top\"\n            [style.left.px]=\"left\"\n            [style.transition]=\"(transitionEnabled ? '0.15s opacity' : '')\"\n            [style.opacity]=\"opacity\"\n            [style.display]=\"'block'\"\n            [attr.aria-hidden]=\"opacity === 0\"\n            role=\"popover\">\n                <div [hidden]=\"!closeOnMouseOutside\" class=\"virtual-area\"></div>\n                <div class=\"arrow\"></div>\n                <div class=\"popover-header\" [hidden]=\"!title\">{{ title }}</div>\n                <div class=\"popover-body\">\n                    <ng-content></ng-content>\n                    {{ content }}\n                </div>\n        </div>\n    "
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
    function PopoverDirective(viewContainerRef, cdr, resolver, appRef, injector) {
        this.viewContainerRef = viewContainerRef;
        this.cdr = cdr;
        this.resolver = resolver;
        this.appRef = appRef;
        this.injector = injector;
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
        if (this.content instanceof _popover_content_component__WEBPACK_IMPORTED_MODULE_2__["PopoverContentComponent"]) {
            this.content.hideFromPopover();
        }
        this.cdr.detectChanges();
        this.onHidden.emit(this);
    };
    PopoverDirective.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    PopoverDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], PopoverDirective.prototype, "appendToBody", void 0);
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
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".jumbotron img {\n  vertical-align: bottom;\n  margin-right: 10px;\n}\n\n.center-content {\n  width: 100%;\n  max-width: 800px;\n  margin: auto;\n  padding: 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-wrap: wrap;\n}\n\n.center-content img {\n  margin: 30px;\n  cursor: pointer;\n}\n\np {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24gaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2VudGVyLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jZW50ZXItY29udGVudCBpbWcge1xuICBtYXJnaW46IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cbiJdfQ== */");

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
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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