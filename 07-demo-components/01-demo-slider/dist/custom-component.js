/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider__ = __webpack_require__(2);


(function () {
    'use strict';
    var CustomComponent = (function (_super) {
        __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __extends */](CustomComponent, _super);
        function CustomComponent() {
            return _super.call(this) || this;
        }
        CustomComponent.prototype.connectedCallback = function () {
            var _this = this;
            this.innerHTML = this.createTemplate().trim();
            this.slider = new __WEBPACK_IMPORTED_MODULE_1__slider__["a" /* Slider */](this.querySelector(".vjslider"), {});
            this.querySelector('.js-prev').addEventListener('click', function (event) {
                event.preventDefault();
                _this.slider.prev();
            });
            this.querySelector('.js-next').addEventListener('click', function (event) {
                event.preventDefault();
                _this.slider.next();
            });
        };
        CustomComponent.prototype.createTemplate = function () {
            return "\n                <style>\n                    .vjslider {\n                        width: 100%;\n                        overflow: hidden;\n                    }\n            \n                    .vjslider__slider {\n                        display: flex;\n                        flex-direction: row;\n                        flex-wrap: nowrap;\n                        align-items: center;\n                        transition: none;\n                    }\n            \n                    .vjslider__slider--animate {\n                        transition: transform .3s;\n                    }\n            \n                    .vjslider__slide {\n                        width: 100%;\n                        height: 20rem;\n                        color: #fff;\n                        display: flex;\n                        align-items: center;\n                        justify-content: center;\n                    }\n            \n                    .vjslider__slide--blue {\n                        background-color: #9abdf9;\n                    }\n            \n                    .vjslider__slide--green {\n                        background-color: #76ab08;\n                    }\n            \n                    .vjslider__slide--pink {\n                        background-color: #e77aad;\n                    }\n            \n                    .menu {\n                        display: flex;\n                        width: 100%;\n                        justify-content: center;\n                        list-style: none;\n                        padding: 0;\n                        margin: 0;\n                    }\n            \n                    .menu__element {\n                        padding: 5px;\n                    }\n                </style>\n                <div class=\"vjslider\">\n                    <div class=\"vjslider__slide vjslider__slide--blue\">\n                        <p>Slide 1</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--green\">\n                        <p>Slide 2</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--pink\">\n                        <p>Slide 3</p>\n                    </div>\n                </div>\n                <hr>\n                <nav>\n                    <ul class=\"menu\">\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-prev\">&lt; Prev</a>\n                        </li>\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-next\">Next &gt;</a>\n                        </li>\n                    </ul>\n                </nav>\n            ";
        };
        return CustomComponent;
    }(HTMLElement));
    if (!customElements.get('custom-component')) {
        customElements.define('custom-component', CustomComponent);
    }
})();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
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

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
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
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Slider {
    constructor(sliderElement, sliderOptions = {}) {
        this.sliderElement = sliderElement;
        this.transitionEndCallback = null;
        this.init(sliderOptions);
    }

    /**
     * Build whole Slider
     *
     * @param {Object} sliderOptions
     */
    init(sliderOptions) {
        // Convert DOM elements to array for easier access from JS
        // Remove all invisible slides (ie. display: none;) to avoid empty spacing
        this.slides = Array.prototype.slice.call(this.sliderElement.children).filter((slide) => {
            return slide.offsetParent !== null;
        });

        this.slidesCount = this.slides.length;
        if (this.slidesCount === 0) {
            throw new DOMException("Slider does not contain any children (slides)");
        }
        this.currentSlide = 0;

        // Parse options
        this.options = this._getOptions(sliderOptions);

        // Make sure that number of clones is always greater than number of visible slides. Min is 2 clones
        this.numberOfClones = this.options.numberOfVisibleSlides + 1;

        this._build();
        this._createSlideClones(this.numberOfClones);
        this._transitionEnd();
        // Slider width = number of slides + number of clones from both sides / number of visible slides * 100%
        this.sliderElement.style.width = (this.slides.length + this.numberOfClones * 2) / this.options.numberOfVisibleSlides * 100 + "%";
        this.slide(1);
    }

    /**
     * Slide to given slide number
     *
     * @param {int} index Number of slide to go to
     * @return {int} current slide index
     */
    slide(index) {
        this.currentSlide = index;

        // Add class that enables animations
        this.sliderElement.classList.add("vjslider__slider--animate");

        // Move slider position to show given slide
        this._moveTo(this.currentSlide);

        // If slider is outside of the slides range, take care of infinite sliding
        if (this.currentSlide > this.slidesCount) {
            this.transitionEndCallback = () => {
                this.currentSlide = 1;
            };

            return this.currentSlide;
        }
        if (this.currentSlide <= 0) {
            this.transitionEndCallback = () => {
                this.currentSlide = this.slidesCount;
            };
        }

        return this.currentSlide;
    }

    /**
     * Move slider to next slide
     *
     * @return {int} current slide index
     */
    next() {
        return this.slide(this.currentSlide + 1);
    }

    /**
     * Move slider to previous slide
     *
     * @return {int} current slide index
     */
    prev() {
        return this.slide(this.currentSlide - 1);
    }

    /**
     * Revert HTML to original state from before VJSlider
     * @returns {VJSlider}
     */
    destroy() {
        // Unwrap from created wrapper
        const wrapper = this.sliderElement.parentNode,
            wrapperParent = wrapper.parentNode;
        wrapperParent.insertBefore(wrapper.firstChild, wrapper);
        wrapperParent.removeChild(wrapper);

        // Remove classes from slider element
        this.sliderElement.classList.remove("vjslider__slider");
        this.sliderElement.classList.remove("vjslider__slider--animate");

        // Remove style attribute
        this.sliderElement.removeAttribute("style");

        // Remove clones
        [].forEach.call(this.sliderElement.querySelectorAll(".vjslider__clone"), clone => clone.remove());

        // Remove classes and attributes from slides
        this.slides.forEach((slide) => {
            slide.classList.remove("vjslider__slide");
            slide.removeAttribute("style");
        });

        return this;
    }

    /**
     * Reload whole slider.
     * It is possible to pass alternative options
     *
     * @param {Object|null} alternativeOptions
     */
    reload(alternativeOptions = null) {
        // If alternative options are used, replace old one. Otherwise use current options.
        const options = (alternativeOptions !== null) ? alternativeOptions : this.options;
        this.destroy().init(options);
    }


    /**
     * Create necessary HTML elements around slider
     * Add necessary CSS classes to all elements
     *
     * @return {undefined}
     * @private
     */
    _build() {
        // Prepare slider wrapper
        const parentElement = this.sliderElement.parentNode,
            sliderWrapper = document.createElement("div");
        sliderWrapper.className = "vjslider";

        // Insert whole carousel into the wrapper
        parentElement.replaceChild(sliderWrapper, this.sliderElement);
        sliderWrapper.appendChild(this.sliderElement);

        // Add slider class to moving element
        this.sliderElement.classList.add("vjslider__slider");

        const basis = 100 / (this.numberOfClones * 2 + this.slidesCount);
        // Add slide class and basis to each slide
        this.slides.forEach((slide) => {
            slide.classList.add("vjslider__slide");
            slide.style.flexBasis = basis + "%";
        });
    }


    /**
     * Create clones of slides required for infinite animation
     * @param {int} numberOfClones Number of clones to create at the beginning and at the end of the slides.
     * So total number of clones is numberOfClones * 2
     * @return {int} number of clones created on one side of the slider. Will always be the same as numberOfClones
     * @private
     */
    _createSlideClones(numberOfClones) {
        // Make sure that there are enough slides available for displaying more than single slide
        // Clone everything until required number of slides is reached
        while (this.options.numberOfVisibleSlides > this.slides.length) {
            this._cloneNodes(this.slides);
            this.slides = this.slides.concat(this.slides);
            this.slidesCount = this.slides.length;
        }

        // Get first and last n elements
        let firstElements = this.slides.slice(0, numberOfClones),
            lastElements = this.slides.slice(-1 * numberOfClones);

        // Make sure that arrays with elements contains exact number of clones.
        // For instances if numberOfClones = 2 but this.slides.length = 1
        firstElements = this._fillMissing(firstElements, numberOfClones, this.slides[0]);
        lastElements = this._fillMissing(lastElements, numberOfClones, this.slides[this.slides.length - 1]);

        // Append clones at the end of the slider
        this._cloneNodes(firstElements);

        // Prepend clones at the beginning of slider
        lastElements.reverse().forEach((el) => {
            const clone = el.cloneNode(true);
            clone.classList.add("vjslider__clone");
            this.sliderElement.insertBefore(clone, this.sliderElement.firstChild);
        });

        return numberOfClones;
    }

    /**
     * Clone given nodes list and append them to end of slides list
     * @param {Array} nodesList
     * @private
     */
    _cloneNodes(nodesList) {
        nodesList.forEach((el) => {
            const clone = el.cloneNode(true);
            clone.classList.add("vjslider__clone");
            this.sliderElement.appendChild(clone);
        });
    }

    /**
     * Fill array to given length with given element
     * This is helper function for the clones.
     * @param {Array} arr Array to fill
     * @param {int} filledArrayLength Number of elements that arr should contain
     * @param {*} fillElement Value pushed to array if there are missing elements
     * @returns {Array} Array with length = filledArrayLength
     * @private
     */
    _fillMissing(arr, filledArrayLength, fillElement) {
        while (arr.length < filledArrayLength) {
            arr.push(fillElement);
        }

        return arr;
    }

    /**
     * Attach event listener to slider element
     *
     * @return {undefined}
     * @private
     */
    _transitionEnd() {
        const eventList = [
            "MSTransitionEnd",
            "msTransitionEnd",
            "transitionend",
            "webkitTransitionEnd"
        ];
        eventList.forEach((event) => {
            this.sliderElement.addEventListener(event, () => {
                if (this._isFunction(this.transitionEndCallback)) {
                    // Clear the callback if needed. We want to make sure that it"s executed only once.
                    this.transitionEndCallback = this.transitionEndCallback();

                    // Remove animating class and do magic for infinite sliding.
                    this.sliderElement.classList.remove("vjslider__slider--animate");
                    this._moveTo(this.currentSlide);
                }
            });
        });
    }

    /**
     * Check if passed object is a function
     *
     * @param {*} obj object to check whether it"s callable or not
     * @returns {boolean} true if given object is a function, false otherwise
     * @private
     */
    _isFunction(obj) {
        return Boolean(obj && obj.constructor && obj.call && obj.apply);
    }

    /**
     * Move to given slide by setting position of slider via translate3d
     *
     * @param {int} index slide number
     * @return {undefined}
     * @private
     */
    _moveTo(index) {
        this.sliderElement.style.transform = "translate3d(-" + this._calculatePosition(index) + "%, 0, 0)";
    }


    /**
     * Calculate percentage position for translate
     *
     * @param {int} index slide number
     * @returns {number} percentage position for translate animation
     * @private
     */
    _calculatePosition(index) {
        // 100 * ( slide position ) / ( number of elements in slider )
        return 100 * (index + this.numberOfClones - 1) / (this.slidesCount + this.numberOfClones * 2);
    }

    /**
     * Parse options. Fill missing defaults and validate given options if they are correct or not
     * @param {Object} options
     * @returns {Object}
     * @private
     */
    _getOptions(options) {
        const defaultOptions = {
            numberOfVisibleSlides: 1
        };
        return Object.assign(defaultOptions, options);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slider;



/***/ })
/******/ ]);
//# sourceMappingURL=custom-component.js.map