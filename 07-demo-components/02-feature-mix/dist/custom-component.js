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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slider = __webpack_require__(1);

var _styles = _interopRequireDefault(__webpack_require__(2));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _gPO = Object.getPrototypeOf || function _gPO(o) { return o.__proto__; };

var _sPO = Object.setPrototypeOf || function _sPO(o, p) { o.__proto__ = p; return o; };

var _construct = _typeof(Reflect) === "object" && Reflect.construct || function _construct(Parent, args, Class) { var Constructor, a = [null]; a.push.apply(a, args); Constructor = Parent.bind.apply(Parent, a); return _sPO(new Constructor(), Class.prototype); };

var _cache = typeof Map === "function" && new Map();

function _wrapNativeSuper(Class) { if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() {} Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writeable: true, configurable: true } }); return _sPO(Wrapper, _sPO(function Super() { return _construct(Class, arguments, _gPO(this).constructor); }, Class)); }

(function () {
  'use strict';

  var CustomComponent =
  /*#__PURE__*/
  function (_HTMLElement) {
    _inherits(CustomComponent, _HTMLElement);

    function CustomComponent() {
      _classCallCheck(this, CustomComponent);

      return _possibleConstructorReturn(this, (CustomComponent.__proto__ || Object.getPrototypeOf(CustomComponent)).call(this));
    }

    _createClass(CustomComponent, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        var _this = this;

        this.innerHTML = this.createTemplate().trim();
        this.slider = new _slider.Slider(this.querySelector(".vjslider"), {});
        this.querySelector('.js-prev').addEventListener('click', function (event) {
          event.preventDefault();

          _this.slider.prev();
        });
        this.querySelector('.js-next').addEventListener('click', function (event) {
          event.preventDefault();

          _this.slider.next();
        });
      }
    }, {
      key: "createTemplate",
      value: function createTemplate() {
        return "\n                <style>\n                    ".concat(_styles.default, "\n                </style>\n                <h3>").concat(new Date(Date.now()).toLocaleString(), "</h3>\n                <div class=\"vjslider\">\n                    <div class=\"vjslider__slide vjslider__slide--blue\">\n                        <p>Slide 1</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--green\">\n                        <p>Slide 2</p>\n                    </div>\n                    <div class=\"vjslider__slide vjslider__slide--pink\">\n                        <p>Slide 3</p>\n                    </div>\n                </div>\n                <hr>\n                <nav>\n                    <ul class=\"menu\">\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-prev\">&lt; Prev</a>\n                        </li>\n                        <li class=\"menu__element\">\n                            <a href=\"#\" class=\"js-next\">Next &gt;</a>\n                        </li>\n                    </ul>\n                </nav>\n            ");
      }
    }]);

    return CustomComponent;
  }(_wrapNativeSuper(HTMLElement));

  if (!customElements.get('custom-component')) {
    customElements.define('custom-component', CustomComponent);
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slider = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(sliderElement) {
    var sliderOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Slider);

    this.sliderElement = sliderElement;
    this.transitionEndCallback = null;
    this.init(sliderOptions);
  }
  /**
   * Build whole Slider
   *
   * @param {Object} sliderOptions
   */


  _createClass(Slider, [{
    key: "init",
    value: function init(sliderOptions) {
      // Convert DOM elements to array for easier access from JS
      // Remove all invisible slides (ie. display: none;) to avoid empty spacing
      this.slides = Array.prototype.slice.call(this.sliderElement.children).filter(function (slide) {
        return slide.offsetParent !== null;
      });
      this.slidesCount = this.slides.length;

      if (this.slidesCount === 0) {
        throw new DOMException("Slider does not contain any children (slides)");
      }

      this.currentSlide = 0; // Parse options

      this.options = this._getOptions(sliderOptions); // Make sure that number of clones is always greater than number of visible slides. Min is 2 clones

      this.numberOfClones = this.options.numberOfVisibleSlides + 1;

      this._build();

      this._createSlideClones(this.numberOfClones);

      this._transitionEnd(); // Slider width = number of slides + number of clones from both sides / number of visible slides * 100%


      this.sliderElement.style.width = (this.slides.length + this.numberOfClones * 2) / this.options.numberOfVisibleSlides * 100 + "%";
      this.slide(1);
    }
    /**
     * Slide to given slide number
     *
     * @param {int} index Number of slide to go to
     * @return {int} current slide index
     */

  }, {
    key: "slide",
    value: function slide(index) {
      var _this = this;

      this.currentSlide = index; // Add class that enables animations

      this.sliderElement.classList.add("vjslider__slider--animate"); // Move slider position to show given slide

      this._moveTo(this.currentSlide); // If slider is outside of the slides range, take care of infinite sliding


      if (this.currentSlide > this.slidesCount) {
        this.transitionEndCallback = function () {
          _this.currentSlide = 1;
        };

        return this.currentSlide;
      }

      if (this.currentSlide <= 0) {
        this.transitionEndCallback = function () {
          _this.currentSlide = _this.slidesCount;
        };
      }

      return this.currentSlide;
    }
    /**
     * Move slider to next slide
     *
     * @return {int} current slide index
     */

  }, {
    key: "next",
    value: function next() {
      return this.slide(this.currentSlide + 1);
    }
    /**
     * Move slider to previous slide
     *
     * @return {int} current slide index
     */

  }, {
    key: "prev",
    value: function prev() {
      return this.slide(this.currentSlide - 1);
    }
    /**
     * Revert HTML to original state from before VJSlider
     * @returns {VJSlider}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      // Unwrap from created wrapper
      var wrapper = this.sliderElement.parentNode,
          wrapperParent = wrapper.parentNode;
      wrapperParent.insertBefore(wrapper.firstChild, wrapper);
      wrapperParent.removeChild(wrapper); // Remove classes from slider element

      this.sliderElement.classList.remove("vjslider__slider");
      this.sliderElement.classList.remove("vjslider__slider--animate"); // Remove style attribute

      this.sliderElement.removeAttribute("style"); // Remove clones

      [].forEach.call(this.sliderElement.querySelectorAll(".vjslider__clone"), function (clone) {
        return clone.remove();
      }); // Remove classes and attributes from slides

      this.slides.forEach(function (slide) {
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

  }, {
    key: "reload",
    value: function reload() {
      var alternativeOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      // If alternative options are used, replace old one. Otherwise use current options.
      var options = alternativeOptions !== null ? alternativeOptions : this.options;
      this.destroy().init(options);
    }
    /**
     * Create necessary HTML elements around slider
     * Add necessary CSS classes to all elements
     *
     * @return {undefined}
     * @private
     */

  }, {
    key: "_build",
    value: function _build() {
      // Prepare slider wrapper
      var parentElement = this.sliderElement.parentNode,
          sliderWrapper = document.createElement("div");
      sliderWrapper.className = "vjslider"; // Insert whole carousel into the wrapper

      parentElement.replaceChild(sliderWrapper, this.sliderElement);
      sliderWrapper.appendChild(this.sliderElement); // Add slider class to moving element

      this.sliderElement.classList.add("vjslider__slider");
      var basis = 100 / (this.numberOfClones * 2 + this.slidesCount); // Add slide class and basis to each slide

      this.slides.forEach(function (slide) {
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

  }, {
    key: "_createSlideClones",
    value: function _createSlideClones(numberOfClones) {
      var _this2 = this;

      // Make sure that there are enough slides available for displaying more than single slide
      // Clone everything until required number of slides is reached
      while (this.options.numberOfVisibleSlides > this.slides.length) {
        this._cloneNodes(this.slides);

        this.slides = this.slides.concat(this.slides);
        this.slidesCount = this.slides.length;
      } // Get first and last n elements


      var firstElements = this.slides.slice(0, numberOfClones),
          lastElements = this.slides.slice(-1 * numberOfClones); // Make sure that arrays with elements contains exact number of clones.
      // For instances if numberOfClones = 2 but this.slides.length = 1

      firstElements = this._fillMissing(firstElements, numberOfClones, this.slides[0]);
      lastElements = this._fillMissing(lastElements, numberOfClones, this.slides[this.slides.length - 1]); // Append clones at the end of the slider

      this._cloneNodes(firstElements); // Prepend clones at the beginning of slider


      lastElements.reverse().forEach(function (el) {
        var clone = el.cloneNode(true);
        clone.classList.add("vjslider__clone");

        _this2.sliderElement.insertBefore(clone, _this2.sliderElement.firstChild);
      });
      return numberOfClones;
    }
    /**
     * Clone given nodes list and append them to end of slides list
     * @param {Array} nodesList
     * @private
     */

  }, {
    key: "_cloneNodes",
    value: function _cloneNodes(nodesList) {
      var _this3 = this;

      nodesList.forEach(function (el) {
        var clone = el.cloneNode(true);
        clone.classList.add("vjslider__clone");

        _this3.sliderElement.appendChild(clone);
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

  }, {
    key: "_fillMissing",
    value: function _fillMissing(arr, filledArrayLength, fillElement) {
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

  }, {
    key: "_transitionEnd",
    value: function _transitionEnd() {
      var _this4 = this;

      var eventList = ["MSTransitionEnd", "msTransitionEnd", "transitionend", "webkitTransitionEnd"];
      eventList.forEach(function (event) {
        _this4.sliderElement.addEventListener(event, function () {
          if (_this4._isFunction(_this4.transitionEndCallback)) {
            // Clear the callback if needed. We want to make sure that it"s executed only once.
            _this4.transitionEndCallback = _this4.transitionEndCallback(); // Remove animating class and do magic for infinite sliding.

            _this4.sliderElement.classList.remove("vjslider__slider--animate");

            _this4._moveTo(_this4.currentSlide);
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

  }, {
    key: "_isFunction",
    value: function _isFunction(obj) {
      return Boolean(obj && obj.constructor && obj.call && obj.apply);
    }
    /**
     * Move to given slide by setting position of slider via translate3d
     *
     * @param {int} index slide number
     * @return {undefined}
     * @private
     */

  }, {
    key: "_moveTo",
    value: function _moveTo(index) {
      this.sliderElement.style.transform = "translate3d(-" + this._calculatePosition(index) + "%, 0, 0)";
    }
    /**
     * Calculate percentage position for translate
     *
     * @param {int} index slide number
     * @returns {number} percentage position for translate animation
     * @private
     */

  }, {
    key: "_calculatePosition",
    value: function _calculatePosition(index) {
      // 100 * ( slide position ) / ( number of elements in slider )
      return 100 * (index + this.numberOfClones - 1) / (this.slidesCount + this.numberOfClones * 2);
    }
    /**
     * Parse options. Fill missing defaults and validate given options if they are correct or not
     * @param {Object} options
     * @returns {Object}
     * @private
     */

  }, {
    key: "_getOptions",
    value: function _getOptions(options) {
      var defaultOptions = {
        numberOfVisibleSlides: 1
      };
      return Object.assign(defaultOptions, options);
    }
  }]);

  return Slider;
}();

exports.Slider = Slider;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(3);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".vjslider {\n    width: 100%;\n    overflow: hidden;\n}\n\n.vjslider__slider {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    transition: none;\n}\n\n.vjslider__slider--animate {\n    transition: transform .3s;\n}\n\n.vjslider__slide {\n    width: 100%;\n    height: 20rem;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.vjslider__slide--blue {\n    background-color: #9abdf9;\n}\n\n.vjslider__slide--green {\n    background-color: #76ab08;\n}\n\n.vjslider__slide--pink {\n    background-color: #e77aad;\n}\n\n.menu {\n    display: flex;\n    width: 100%;\n    justify-content: center;\n    list-style: none;\n    padding: 0;\n    margin: 0;\n}\n\n.menu__element {\n    padding: 5px;\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ })
/******/ ]);
//# sourceMappingURL=custom-component.js.map