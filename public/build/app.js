(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _js_compsoul_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/compsoul.js */ "./assets/js/compsoul.js");
/* harmony import */ var _js_compsoul_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_compsoul_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/slider.js */ "./assets/js/slider.js");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_slider_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/slider.css */ "./assets/styles/slider.css");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)





 // Import stylów (jeśli Encore nie używa SCSS)

/***/ }),

/***/ "./assets/js/compsoul.js":
/*!*******************************!*\
  !*** ./assets/js/compsoul.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
__webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Compsoul = /*#__PURE__*/function () {
  "use strict";

  function Compsoul(selector) {
    _classCallCheck(this, Compsoul);
    var _selector;
    switch (_typeof(selector)) {
      case "string":
        _selector = document.querySelectorAll(selector);
        break;
      case "object":
        _selector = selector === null ? {} : typeof selector.length === "undefined" ? [selector] : selector;
        break;
      case "boolean":
        _selector = {};
        break;
      case "undefined":
        _selector = {};
        break;
      default:
        throw new TypeError(this.constructor.name + " - selector error: " + selector);
    }
    this.length = _selector.length;
    Object.assign(this, _selector);
  }
  return _createClass(Compsoul, [{
    key: "version",
    get: function get() {
      return 0.5;
    }
  }, {
    key: "addClass",
    value: function addClass(classList) {
      var len = this.length;
      while (len--) {
        var _this$len$classList;
        (_this$len$classList = this[len].classList).add.apply(_this$len$classList, _toConsumableArray(classList.split(" ")));
      }
      return this;
    }
  }, {
    key: "ajax",
    value: function ajax(settings) {
      var request = new XMLHttpRequest(),
        type = settings.type,
        url = settings.url,
        data = settings.data,
        success = settings.success ? settings.success : function () {},
        error = settings.error ? settings.error : function () {};
      if (type === "GET") {
        if (!url) throw new TypeError("url error");
        request.open(type, url, true);
        request.onload = function () {
          if (request.status >= 200 && request.status < 400) {
            success(request.responseText);
          } else {
            console.warn("request error");
            error();
          }
        };
        request.onerror = function () {
          error();
        };
        request.send();
      } else if (type === "POST") {
        if (!url) throw new TypeError("url error");
        if (!data) throw new TypeError("data error");
        request.open(type, url, true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(data);
      }
      return this;
    }
  }, {
    key: "append",
    value: function append(element) {
      var len = this.length;
      while (len--) {
        this[len].appendChild(element);
      }
      return this;
    }
  }, {
    key: "attr",
    value: function attr(attribute, value) {
      var len = this.length;
      if (typeof value !== "undefined") {
        while (len--) {
          this[len].setAttribute(attribute, value);
        }
      } else {
        return this[0] ? this[0].getAttribute(attribute) : false;
      }
      return this;
    }
  }, {
    key: "each",
    value: function each(callback) {
      for (var i = 0; i < this.length; i++) {
        callback.apply(this[i]);
      }
      return this;
    }
  }, {
    key: "hasClass",
    value: function hasClass(className) {
      return this[0].classList.contains(className);
    }
  }, {
    key: "html",
    value: function html(_html) {
      var len = this.length;
      if (typeof _html !== "undefined") {
        while (len--) {
          this[len].innerHTML = _html;
        }
      } else {
        return this[0].innerHTML;
      }
      return this;
    }
  }, {
    key: "index",
    value: function index() {
      var parent = this[0] ? this[0].parentElement : false,
        len = this[0] ? parent.children.length : false,
        index = -1;
      while (len--) {
        if (parent.children[len] === this[0]) index = len;
      }
      return index;
    }
  }, {
    key: "on",
    value: function on(type, callback) {
      var len = this.length;
      while (len--) {
        this[len].addEventListener(type, callback);
      }
      return this;
    }
  }, {
    key: "off",
    value: function off(eventName, eventHandler) {
      var len = this.length;
      while (len--) {
        this[len].removeEventListener(eventName, eventHandler);
      }
      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var len = this.length;
      while (len--) {
        if (this[len].parentNode) this[len].parentNode.removeChild(this[len]);
      }
      return this;
    }
  }, {
    key: "removeAttr",
    value: function removeAttr(attribute) {
      var len = this.length;
      while (len--) {
        this[len].removeAttribute(attribute);
      }
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(classList) {
      var len = this.length;
      while (len--) {
        var _this$len$classList2;
        (_this$len$classList2 = this[len].classList).remove.apply(_this$len$classList2, _toConsumableArray(classList.split(" ")));
      }
      return this;
    }
  }, {
    key: "toggleClass",
    value: function toggleClass(classList) {
      var len = this.length;
      while (len--) {
        var _this$len$classList3;
        (_this$len$classList3 = this[len].classList).toggle.apply(_this$len$classList3, _toConsumableArray(classList.split(" ")));
      }
      return this;
    }
  }]);
}();

/***/ }),

/***/ "./assets/js/slider.js":
/*!*****************************!*\
  !*** ./assets/js/slider.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
__webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
__webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
__webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
__webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
__webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
__webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
__webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
__webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
__webpack_require__(/*! core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
__webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.parse-int.js */ "./node_modules/core-js/modules/es.parse-int.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
__webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Slider = /*#__PURE__*/function () {
  "use strict";

  function Slider(selector) {
    _classCallCheck(this, Slider);
    window.Compsoul = window.Compsoul || window.jQuery;
    this.version = 3.1;
    this.settings = {
      classActive: "compsoul-active",
      classFirst: "compsoul-first",
      classNext: "compsoul-next",
      classPrev: "compsoul-prev",
      classPrevious: "compsoul-previous",
      classLoaded: "compsoul-loaded",
      classLoading: "compsoul-loading",
      classError: "compsoul-error",
      classUnset: "compsoul-unset",
      classAnimation: "compsoul-animation",
      classWait: "compsoul-wait",
      classDirectionUp: "compsoul-direction-up",
      classDirectionDown: "compsoul-direction-down",
      selector: selector,
      next: ".compsoul-slide-next",
      prev: ".compsoul-slide-prev",
      nav: ".compsoul-slide-nav",
      timeline: ".compsoul-slide-timeline",
      parent: false,
      height: false,
      cover: true,
      sliderCover: "figure",
      sliderImg: "figure img",
      animation: true,
      animationend: "false",
      load: true,
      preload: true,
      first: 0,
      loop: true,
      responsive: {}
    };
    this.library = /*#__PURE__*/function () {
      function Library($node, slider) {
        _classCallCheck(this, Library);
        this.$node = $node;
        this.element = this.$node[0];
        this.slider = slider;
        this.settings = slider.settings;
      }
      return _createClass(Library, [{
        key: "$",
        value: function $(selector) {
          return new Compsoul(selector);
        }
      }, {
        key: "active",
        value: function active() {
          this.$node.addClass(this.settings.classActive);
          return this;
        }
      }, {
        key: "directionUp",
        value: function directionUp() {
          this.$node.addClass(this.settings.classDirectionUp);
          return this;
        }
      }, {
        key: "directionDown",
        value: function directionDown() {
          this.$node.addClass(this.settings.classDirectionDown);
          return this;
        }
      }, {
        key: "error",
        value: function error() {
          this.$node.removeClass(this.settings.classLoading).addClass(this.settings.classError);
          return this;
        }
      }, {
        key: "first",
        value: function first() {
          this.$node.addClass(this.settings.classFirst);
          return this;
        }
      }, {
        key: "inactive",
        value: function inactive() {
          this.$node.removeClass(this.settings.classActive);
          return this;
        }
      }, {
        key: "unload",
        value: function unload() {
          this.$node.removeClass(this.settings.classLoaded);
          return this;
        }
      }, {
        key: "animation",
        value: function animation() {
          this.$node.removeClass(this.settings.classUnset).addClass(this.settings.classAnimation);
          return this;
        }
      }, {
        key: "unset",
        value: function unset() {
          this.$node.removeClass(this.settings.classAnimation).addClass(this.settings.classUnset);
          return this;
        }
      }, {
        key: "loaded",
        value: function loaded() {
          this.$node.removeClass(this.settings.classLoading).addClass(this.settings.classLoaded);
          return this;
        }
      }, {
        key: "loading",
        value: function loading() {
          this.$node.removeClass(this.settings.classLoaded).addClass(this.settings.classLoading);
          return this;
        }
      }, {
        key: "next",
        value: function next() {
          this.$node.addClass(this.settings.classNext);
          return this;
        }
      }, {
        key: "prev",
        value: function prev() {
          this.$node.addClass(this.settings.classPrev);
          return this;
        }
      }, {
        key: "previous",
        value: function previous() {
          this.$node.addClass(this.settings.classPrevious);
          return this;
        }
      }, {
        key: "reset",
        value: function reset() {
          this.$node.removeClass(this.settings.classActive + " " + this.settings.classFirst + " " + this.settings.classNext + " " + this.settings.classPrev + " " + this.settings.classPrevious + " " + this.settings.classWait + " " + this.settings.classDirectionUp + " " + this.settings.classDirectionDown);
          return this;
        }
      }, {
        key: "restart",
        value: function restart() {
          void this.element.offsetWidth;
          return this;
        }
      }, {
        key: "on",
        value: function on() {
          this.$node.on("animationend", this.slider.unlock).on("transitionend", this.slider.unlock);
        }
      }, {
        key: "off",
        value: function off() {
          this.$node.off("animationend", this.slider.unlock).off("transitionend", this.slider.unlock);
        }
      }, {
        key: "condition",
        value: function condition(_condition, callback) {
          if (_condition) callback.apply(this);
          return this;
        }
      }, {
        key: "wait",
        value: function wait() {
          this.$node.addClass(this.settings.classWait);
          this.slider.lock = true;
          return this;
        }
      }, {
        key: "done",
        value: function done() {
          this.$node.removeClass(this.settings.classWait);
          this.slider.lock = false;
          this.slider.slider.off();
          return this;
        }
      }, {
        key: "responsive",
        value: function responsive(element) {
          if (!element) return;
          for (var key in element.dataset) {
            if (window.innerWidth <= parseInt(key)) {
              return element.dataset[key];
            }
          }
        }
      }, {
        key: "change",
        value: function change(img, src) {
          return img ? !(img.src && src && (img.src.replace(img.src.replace(src, ""), "") === src || src.replace(src.replace(img.src, ""), "") === img.src)) : false;
        }
      }, {
        key: "cover",
        value: function cover(element) {
          var parent = element.querySelector(this.settings.sliderCover),
            child = element.querySelector(this.settings.sliderImg);
          if (parent && child) parent.style.backgroundImage = "url(" + (this.responsive(child) || child.dataset.src) + ")";
          return this;
        }
      }, {
        key: "background",
        value: function background(element, url) {
          var background = element ? /(?:\(['"]?)(.*?)(?:['"]?\))/.exec(element.style.backgroundImage) : false;
          return background && (background[1] = url) ? true : false;
        }
      }, {
        key: "src",
        value: function src(element) {
          var img = element.querySelector(this.settings.sliderImg);
          if (img) img.src = this.responsive(img) || img.dataset.src;
          return this;
        }
      }, {
        key: "load",
        value: function load(callback, type, index, debug) {
          var figure = this.element.querySelector(this.settings.sliderCover),
            img = this.element.querySelector(this.settings.sliderImg),
            src = img ? this.responsive(img) || img.dataset.src : false,
            change = this.change(img, src);
          if (change) img.src = src;
          if ((this.$node.hasClass(this.settings.classLoaded) || !img || img.complete && img.src && !change) && this.background(figure, src)) {
            if (callback && (type === "active" && this.slider.active.element === this.element || type === "next" && this.slider.next.element === this.element || type === "prev" && this.slider.prev.element === this.element || type === "preload")) callback();
            this.loaded();
            this.slider.point(index, "loaded");
            return;
          }
          if (img) {
            img.compsoulStack = img.compsoulStack || [];
            this.loading();
            this.slider.point(index, "loading");
            if (img.compsoulStack.length === 0) {
              img.src = src;
              img.compsoulStack.push({
                object: this,
                img: img,
                callback: callback,
                type: type,
                src: src,
                index: index,
                debug: debug
              });
              this.onload = this.slider.onload.bind(this, img);
              this.onerror = this.slider.onerror.bind(this, img);
              img.addEventListener("load", this.onload);
              img.addEventListener("error", this.onerror);
            } else {
              img.compsoulStack.push({
                object: this,
                img: img,
                callback: callback,
                type: type,
                src: src,
                index: index,
                debug: debug
              });
            }
          }
        }
      }]);
    }();
  }
  return _createClass(Slider, [{
    key: "$",
    value: function $(selector) {
      return new Compsoul(selector);
    }
  }, {
    key: "factory",
    value: function factory($element) {
      return new this.library($element, this);
    }
  }, {
    key: "root",
    value: function root() {
      this.html = this.factory(this.$("html"));
      this.head = this.factory(this.$("head"));
      this.body = this.factory(this.$("body"));
    }
  }, {
    key: "set",
    value: function set(index) {
      var _this2 = this;
      this.modernize(index);
      this.restart();
      this.navigation();
      this.slider.reset().off();
      if (this.timeline && this.timeline.element) this.settings.load ? this.timeline.unset().restart().animation().inactive() : this.timeline.unset().restart().animation().active();
      this.past = this.index.past !== false ? this.factory(this.$(this.$slider[this.index.past])).previous().condition(this.settings.animation && this.index.past !== index, function () {
        this.wait();
      }) : false;
      this.active = this.factory(this.$(this.$slider[this.index.value])).condition(!this.launch, function () {
        this.first();
      }).condition(this.index.direction === 0, function () {
        this.directionUp();
      }).condition(this.index.direction === 1, function () {
        this.directionDown();
      }).active();
      this.active.condition(this.settings.load, function () {
        var _this = this;
        this.load(function () {
          if (_this.slider.timeline) _this.slider.timeline.active();
        }, "active", this.slider.index.value, "set-active");
      }).condition(this.settings.animation, function () {
        _this2.active.on();
      });
      this.next = this.factory(this.$(this.$slider[this.index.next]));
      this.next.condition(this.settings.load, function () {
        var _this3 = this;
        this.load(function () {
          if (_this3.slider.settings.next) _this3.slider.factory(_this3.$(_this3.slider.settings.next)).loaded();
        }, "next", this.slider.index.next, "set-next");
      }).next();
      this.prev = this.factory(this.$(this.$slider[this.index.prev]));
      this.prev.condition(this.settings.load, function () {
        var _this4 = this;
        this.load(function () {
          if (_this4.slider.settings.prev) _this4.slider.factory(_this4.$(_this4.slider.settings.prev)).loaded();
        }, "prev", this.slider.index.prev, "set-prev");
      }).prev();
      this.height();
    }
  }, {
    key: "modernize",
    value: function modernize(index) {
      this.launch = !this.index ? false : true;
      this.index = this.index || {};
      this.index.direction = this.index.value > index ? 1 : 0;
      this.index.past = this.launch ? this.index.value : false;
      this.index.value = this.settings.loop ? index >= this.len ? 0 : index < 0 ? this.len - 1 : index : index >= this.len ? this.len - 1 : index < 0 ? 0 : index;
      this.index.next = this.index.value + 1 >= this.len ? 0 : this.index.value + 1;
      this.index.prev = this.index.value - 1 < 0 ? this.len - 1 : this.index.value - 1;
    }
  }, {
    key: "load",
    value: function load(index) {
      var len = this.len;
      while (len--) {}
      if (this.settings.preload) this.preload(index, 1);
      if (this.settings.preload) this.preload(index - 1, -1);
    }
  }, {
    key: "preload",
    value: function preload(index, direction) {
      var _this5 = this;
      if (index >= 0 && index < this.len) {
        this.factory(this.$(this.$slider[index])).load(function () {
          _this5.preload(index + direction, direction);
        }, "preload", index, "preload");
      }
    }
  }, {
    key: "onload",
    value: function onload(img) {
      var _this6 = this;
      var array = img.compsoulStack;
      img.compsoulStack = [];
      img.removeEventListener("load", this.onload);
      img.removeEventListener("error", this.onerror);
      array.forEach(function (item) {
        if (!_this6.change(img, item.src)) {
          if (item.callback && (item.type === "active" && _this6.slider.active.element === _this6.element || item.type === "next" && _this6.slider.next.element === _this6.element || item.type === "prev" && _this6.slider.prev.element === _this6.element || item.type === "preload")) item.callback();
          if (_this6.settings.cover) _this6.cover(_this6.element);
          _this6.loaded();
          _this6.slider.point(item.index, "loaded");
        }
      });
    }
  }, {
    key: "onerror",
    value: function onerror(img) {
      var _this7 = this;
      var array = img.compsoulStack;
      img.compsoulStack = [];
      img.removeEventListener("load", this.onload);
      img.removeEventListener("error", this.onerror);
      array.forEach(function (item) {
        if (!_this7.change(img, item.src)) {
          if (item.callback && (item.type === "active" && _this7.slider.active.element === _this7.element || item.type === "next" && _this7.slider.next.element === _this7.element || item.type === "prev" && _this7.slider.prev.element === _this7.element || item.type === "preload")) item.callback();
          _this7.error();
          _this7.slider.point(item.index, "error");
        }
      });
    }
  }, {
    key: "restart",
    value: function restart() {
      if (this.settings.next) this.factory(this.$(this.settings.next)).inactive();
      if (this.settings.prev) this.factory(this.$(this.settings.prev)).inactive();
      if (this.settings.nav) this.factory(this.$(this.settings.nav)).inactive();
    }
  }, {
    key: "reload",
    value: function reload() {
      for (var index = 0; index < this.len; index++) {
        var element = this.factory(this.$(this.$slider[index])),
          img = element.element.querySelector("img"),
          src = img ? element.responsive(img) || img.dataset.src : false,
          change = element.change(img, src);
        if (img && !(img.complete && img.src && !change)) {
          element.unload();
          if (this.settings.nav) this.factory(this.$(this.$(this.settings.nav)[index])).unload();
        }
      }
      if (this.settings.next) this.factory(this.$(this.settings.next)).unload();
      if (this.settings.prev) this.factory(this.$(this.settings.prev)).unload();
    }
  }, {
    key: "navigation",
    value: function navigation() {
      if (this.settings.next) this.factory(this.$(this.settings.next)).condition(this.settings.load, function () {
        this.loading();
      }).condition(this.settings.loop || !this.settings.loop && this.index.value !== this.len - 1, function () {
        this.active();
      });
      if (this.settings.prev) this.factory(this.$(this.settings.prev)).condition(this.settings.load, function () {
        this.loading();
      }).condition(this.settings.loop || !this.settings.loop && this.index.value !== 0, function () {
        this.active();
      });
      this.point(this.index.value, "active");
    }
  }, {
    key: "point",
    value: function point(index, type) {
      if (this.settings.nav) {
        var that = this;
        this.$(this.settings.nav).each(function () {
          if (this.parentNode.children[index]) that.factory(that.$(this.parentNode.children[index])).condition(type === "active", function () {
            this.active();
          }).condition(type === "loaded", function () {
            this.loaded();
          }).condition(type === "loading", function () {
            this.loading();
          }).condition(type === "error", function () {
            this.error();
          });
        });
      }
    }
  }, {
    key: "height",
    value: function height() {
      if (this.settings.height) this.parent.element.style.minHeight = this.factory(this.$(this.$slider[this.index.value])).element.offsetHeight + "px";
    }
  }, {
    key: "event",
    value: function event() {
      var _this8 = this;
      this.click = function (event) {
        var that = _this8;
        if (_this8.settings.next && !_this8.lock) {
          _this8.$(_this8.settings.next).each(function () {
            if ((!that.settings.load && event.target === this || that.settings.load && event.target === this && that.$(event.target).hasClass(that.settings.classLoaded)) && that.$(event.target).hasClass(that.settings.classActive)) {
              that.set(that.index.value ? that.index.value + 1 : that.first + 1);
              return;
            }
          });
        }
        if (_this8.settings.prev && !_this8.lock) {
          _this8.$(_this8.settings.prev).each(function () {
            if ((!that.settings.load && event.target === this || that.settings.load && event.target === this && that.$(event.target).hasClass(that.settings.classLoaded)) && that.$(event.target).hasClass(that.settings.classActive)) {
              that.set(that.index.value ? that.index.value - 1 : that.first - 1);
              return;
            }
          });
        }
        if (_this8.settings.nav && !_this8.lock) {
          _this8.$(_this8.settings.nav).each(function () {
            if (!that.settings.load && event.target === this || that.settings.load && event.target === this && that.$(event.target).hasClass(that.settings.classLoaded)) {
              if (that.$(this).index() >= 0) that.set(that.$(this).index());
              return;
            }
          });
        }
      };
      this.html.$node.on("click", this.click);
      if (this.timeline) {
        this.animationend = function () {
          if (_this8.settings.loop || !_this8.settings.loop && _this8.index.value !== _this8.len - 1) _this8.settings.load ? _this8.factory(_this8.$(_this8.$slider[_this8.index.next])).load(function () {
            _this8.set(_this8.index.next);
          }, "next", _this8.index.next, "timeline") : _this8.set(_this8.index.value + 1);
        };
        this.timeline.$node.on("animationend", this.animationend);
      }
      this.ontouchstart = function (event) {
        _this8.touchstart = event.touches[0].screenX;
      };
      this.slider.$node.on("touchstart", this.ontouchstart);
      this.ontouchend = function (event) {
        if (!_this8.lock && _this8.touchstart - event.changedTouches[0].screenX < -200 && (!_this8.settings.loop && _this8.index.value !== 0 || _this8.settings.loop) && (!_this8.settings.load || _this8.settings.load && _this8.prev.$node.hasClass(_this8.settings.classLoaded))) _this8.set(_this8.index.value - 1);
        if (!_this8.lock && _this8.touchstart - event.changedTouches[0].screenX > 200 && (!_this8.settings.loop && _this8.index.value !== _this8.len - 1 || _this8.settings.loop) && (!_this8.settings.load || _this8.settings.load && _this8.next.$node.hasClass(_this8.settings.classLoaded))) _this8.set(_this8.index.value + 1);
      };
      this.slider.$node.on("touchend", this.ontouchend);
      this.unlock = function (event) {
        if ((event.target === _this8.active.element || event.target === _this8.active.element.querySelector(_this8.settings.animationend)) && _this8.past) _this8.past.done();
      };
    }
  }, {
    key: "responsive",
    value: function responsive() {
      var range;
      for (var key in this.settings.responsive) {
        if (window.innerWidth <= parseInt(key)) {
          this.options(this["default"]);
          this.update(this.settings.responsive[key]);
          range = true;
          return;
        }
      }
      if (!range) this.update(this["default"]);
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.html && this.click) this.html.$node.off("click", this.click);
      if (this.timeline) this.timeline.$node.off("animationend", this.animationend);
      if (this.ontouchstart) this.slider.$node.off("touchstart", this.ontouchstart);
      if (this.ontouchend) this.slider.$node.off("touchend", this.ontouchend);
    }
  }, {
    key: "update",
    value: function update(settings) {
      if (settings) this.options(settings);
      if (!this.factory(this.$(this.settings.selector)).element) return;
      this.remove();
      this.boot();
      this.root();
      this.event();
      this.reload();
      this.set(this.index ? this.index.value : this.first);
      this.load(this.index ? this.index.value : this.first);
      this.slider.done();
    }
  }, {
    key: "rwd",
    value: function rwd() {
      var _this9 = this;
      this.resize = compsoul.debounce(function () {
        _this9.responsive();
      }, 200);
      window.addEventListener("resize", this.resize);
    }
  }, {
    key: "compsoul",
    value: function (_compsoul) {
      function compsoul() {
        return _compsoul.apply(this, arguments);
      }
      compsoul.toString = function () {
        return _compsoul.toString();
      };
      return compsoul;
    }(function () {
      var _this10 = this;
      window.compsoul = window.compsoul || {};
      compsoul.throttle = compsoul.throttle || function (callback, delay) {
        var throttle;
        return function () {
          if (!throttle) {
            callback.apply(void 0, arguments);
            throttle = setTimeout(function () {
              return throttle = false;
            }, delay);
          }
        };
      };
      compsoul.debounce = compsoul.debounce || function (callback, delay) {
        var timeout;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var that = _this10;
          clearTimeout(timeout);
          timeout = setTimeout(function () {
            return callback.apply(that, args);
          }, delay);
        };
      };
    })
  }, {
    key: "boot",
    value: function boot(query) {
      this.$slider = new Compsoul(query || this.settings.selector);
      this.slider = this.factory(this.$slider);
      this.len = this.$slider.length;
      this.$parent = new Compsoul(this.settings.parent || (this.slider.element ? this.slider.element.parentNode : false));
      this.parent = this.factory(this.$parent);
      this.first = this.settings.first === "random" ? Math.floor(Math.random() * this.len) : this.settings.first;
      this.timeline = this.settings.timeline && this.len > 1 ? this.factory(this.$(this.settings.timeline)) : false;
    }
  }, {
    key: "options",
    value: function options(settings) {
      if (!this["default"]) this["default"] = Object.assign({}, Object.assign(this.settings, settings));
      Object.assign(this.settings, settings);
      return this;
    }
  }, {
    key: "init",
    value: function init() {
      this.compsoul();
      this.rwd();
      this.responsive();
      return this;
    }
  }]);
}();

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/styles/slider.css":
/*!**********************************!*\
  !*** ./assets/styles/slider.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_bootstrap_dist_css_boots-57d411"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUNjLFFBQVEsRUFBRUEsUUFBUSxDQUFDLENBQUM7TUFDMUZmLE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQ2MsUUFBUSxFQUFFQSxRQUFRLENBQUM7TUFDdEMsT0FBTyxJQUFJO0lBQ2I7RUFBQztJQUFBWixHQUFBO0lBQUFFLEtBQUEsRUFFRCxTQUFBd00sSUFBSUEsQ0FBQSxFQUFHO01BQ0wsSUFBSSxDQUFDcEIsUUFBUSxDQUFDLENBQUM7TUFDZixJQUFJLENBQUNILEdBQUcsQ0FBQyxDQUFDO01BQ1YsSUFBSSxDQUFDcEYsVUFBVSxDQUFDLENBQUM7TUFDakIsT0FBTyxJQUFJO0lBQ2I7RUFBQztBQUFBOzs7Ozs7Ozs7Ozs7QUN6Z0JIOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wc291bC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2xpZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvYXBwLmNzcz8zZmJhIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdHlsZXMvc2xpZGVyLmNzcz8zNzQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5jc3MnO1xuXG5cbmltcG9ydCAnLi9qcy9jb21wc291bC5qcyc7XG5pbXBvcnQgJy4vanMvc2xpZGVyLmpzJztcbmltcG9ydCAnLi9zdHlsZXMvc2xpZGVyLmNzcyc7XG5cbmltcG9ydCAnYm9vdHN0cmFwJztcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJzsgIC8vIEltcG9ydCBzdHlsw7N3IChqZcWbbGkgRW5jb3JlIG5pZSB1xbx5d2EgU0NTUylcblxuXG5cblxuIiwiY2xhc3MgQ29tcHNvdWwge1xuICBnZXQgdmVyc2lvbigpIHtcbiAgXHRyZXR1cm4gMC41O1xuICB9XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3IpIHtcbiAgICBsZXQgX3NlbGVjdG9yO1xuICAgIHN3aXRjaCAodHlwZW9mIHNlbGVjdG9yKSB7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIF9zZWxlY3RvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgX3NlbGVjdG9yID0gKHNlbGVjdG9yID09PSBudWxsKSA/IHt9IDogKHR5cGVvZiBzZWxlY3Rvci5sZW5ndGggPT09IFwidW5kZWZpbmVkXCIpID8gWyBzZWxlY3RvciBdIDogc2VsZWN0b3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgX3NlbGVjdG9yID0ge307XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOlxuICAgICAgICBfc2VsZWN0b3IgPSB7fTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiIC0gc2VsZWN0b3IgZXJyb3I6IFwiICsgc2VsZWN0b3IpO1xuICAgIH1cblxuICAgIHRoaXMubGVuZ3RoID0gX3NlbGVjdG9yLmxlbmd0aDtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIF9zZWxlY3Rvcik7XG5cbiAgfVxuXG4gIGFkZENsYXNzKGNsYXNzTGlzdCkge1xuICAgIGxldCBsZW4gPSB0aGlzLmxlbmd0aDtcblxuICAgIHdoaWxlKGxlbi0tKSB7XG4gICAgICB0aGlzW2xlbl0uY2xhc3NMaXN0LmFkZCguLi5jbGFzc0xpc3Quc3BsaXQoXCIgXCIpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGFqYXgoc2V0dGluZ3MpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpLFxuICAgICAgICB0eXBlID0gc2V0dGluZ3MudHlwZSxcbiAgICAgICAgdXJsID0gc2V0dGluZ3MudXJsLFxuICAgICAgICBkYXRhID0gc2V0dGluZ3MuZGF0YSxcbiAgICAgICAgc3VjY2VzcyA9IChzZXR0aW5ncy5zdWNjZXNzKSA/IHNldHRpbmdzLnN1Y2Nlc3MgOiAoKSA9PiB7fSxcbiAgICAgICAgZXJyb3IgPSAoc2V0dGluZ3MuZXJyb3IpID8gc2V0dGluZ3MuZXJyb3IgOiAoKSA9PiB7fTtcblxuICAgIGlmICh0eXBlID09PSBcIkdFVFwiKSB7XG4gICAgICBpZighdXJsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwidXJsIGVycm9yXCIpO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4odHlwZSwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Qub25sb2FkID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPj0gMjAwICYmIHJlcXVlc3Quc3RhdHVzIDwgNDAwKSB7XG4gICAgICAgICAgc3VjY2VzcyhyZXF1ZXN0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwicmVxdWVzdCBlcnJvclwiKTtcbiAgICAgICAgICBlcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgIGVycm9yKCk7XG4gICAgICB9O1xuXG4gICAgICByZXF1ZXN0LnNlbmQoKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwiUE9TVFwiKSB7XG4gICAgICBpZighdXJsKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwidXJsIGVycm9yXCIpO1xuICAgICAgaWYoIWRhdGEpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJkYXRhIGVycm9yXCIpO1xuXG4gICAgICByZXF1ZXN0Lm9wZW4odHlwZSwgdXJsLCB0cnVlKTtcbiAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcpO1xuICAgICAgcmVxdWVzdC5zZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXBwZW5kKGVsZW1lbnQpIHtcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZShsZW4tLSkge1xuICAgICAgdGhpc1tsZW5dLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXR0cihhdHRyaWJ1dGUsIHZhbHVlKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgaWYodHlwZW9mIHZhbHVlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB3aGlsZShsZW4tLSkge1xuICAgICAgICB0aGlzW2xlbl0uc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKHRoaXNbMF0pID8gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZWFjaChjYWxsYmFjaykge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGhhc0NsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpO1xuICB9XG5cbiAgaHRtbChodG1sKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgaWYodHlwZW9mIGh0bWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHdoaWxlKGxlbi0tKSB7XG4gICAgICAgIHRoaXNbbGVuXS5pbm5lckhUTUwgPSBodG1sO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpc1swXS5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbmRleCgpIHtcbiAgICBsZXQgcGFyZW50ID0gKHRoaXNbMF0pID8gdGhpc1swXS5wYXJlbnRFbGVtZW50IDogZmFsc2UsXG4gICAgICAgIGxlbiA9ICh0aGlzWzBdKSA/IHBhcmVudC5jaGlsZHJlbi5sZW5ndGggOiBmYWxzZSxcbiAgICAgICAgaW5kZXggPSAtMTtcblxuICAgIHdoaWxlKGxlbi0tKSB7XG4gICAgICBpZiAocGFyZW50LmNoaWxkcmVuW2xlbl0gPT09IHRoaXNbMF0pIGluZGV4ID0gbGVuO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgd2hpbGUobGVuLS0pIHtcbiAgICAgIHRoaXNbbGVuXS5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG9mZihldmVudE5hbWUsIGV2ZW50SGFuZGxlcikge1xuICAgIGxldCBsZW4gPSB0aGlzLmxlbmd0aDtcblxuICAgIHdoaWxlKGxlbi0tKSB7XG4gICAgICB0aGlzW2xlbl0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZW1vdmUoKSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgd2hpbGUobGVuLS0pIHtcbiAgICAgIGlmKHRoaXNbbGVuXS5wYXJlbnROb2RlKSB0aGlzW2xlbl0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzW2xlbl0pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlQXR0cihhdHRyaWJ1dGUpIHtcbiAgICBsZXQgbGVuID0gdGhpcy5sZW5ndGg7XG5cbiAgICB3aGlsZShsZW4tLSkge1xuICAgICAgdGhpc1tsZW5dLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmVtb3ZlQ2xhc3MoY2xhc3NMaXN0KSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgd2hpbGUobGVuLS0pIHtcbiAgICAgIHRoaXNbbGVuXS5jbGFzc0xpc3QucmVtb3ZlKC4uLmNsYXNzTGlzdC5zcGxpdChcIiBcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgdG9nZ2xlQ2xhc3MoY2xhc3NMaXN0KSB7XG4gICAgbGV0IGxlbiA9IHRoaXMubGVuZ3RoO1xuXG4gICAgd2hpbGUobGVuLS0pIHtcbiAgICAgIHRoaXNbbGVuXS5jbGFzc0xpc3QudG9nZ2xlKC4uLmNsYXNzTGlzdC5zcGxpdChcIiBcIikpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbn1cbiIsImNsYXNzIFNsaWRlciB7XG4gIGNvbnN0cnVjdG9yKHNlbGVjdG9yKSB7XG4gICAgd2luZG93LkNvbXBzb3VsID0gd2luZG93LkNvbXBzb3VsIHx8IHdpbmRvdy5qUXVlcnk7XG4gICAgdGhpcy52ZXJzaW9uID0gMy4xO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBjbGFzc0FjdGl2ZTogXCJjb21wc291bC1hY3RpdmVcIixcbiAgICAgIGNsYXNzRmlyc3Q6IFwiY29tcHNvdWwtZmlyc3RcIixcbiAgICAgIGNsYXNzTmV4dDogXCJjb21wc291bC1uZXh0XCIsXG4gICAgICBjbGFzc1ByZXY6IFwiY29tcHNvdWwtcHJldlwiLFxuICAgICAgY2xhc3NQcmV2aW91czogXCJjb21wc291bC1wcmV2aW91c1wiLFxuICAgICAgY2xhc3NMb2FkZWQ6IFwiY29tcHNvdWwtbG9hZGVkXCIsXG4gICAgICBjbGFzc0xvYWRpbmc6IFwiY29tcHNvdWwtbG9hZGluZ1wiLFxuICAgICAgY2xhc3NFcnJvcjogXCJjb21wc291bC1lcnJvclwiLFxuICAgICAgY2xhc3NVbnNldDogXCJjb21wc291bC11bnNldFwiLFxuICAgICAgY2xhc3NBbmltYXRpb246IFwiY29tcHNvdWwtYW5pbWF0aW9uXCIsXG4gICAgICBjbGFzc1dhaXQ6IFwiY29tcHNvdWwtd2FpdFwiLFxuICAgICAgY2xhc3NEaXJlY3Rpb25VcDogXCJjb21wc291bC1kaXJlY3Rpb24tdXBcIixcbiAgICAgIGNsYXNzRGlyZWN0aW9uRG93bjogXCJjb21wc291bC1kaXJlY3Rpb24tZG93blwiLFxuXG4gICAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG5cbiAgICAgIG5leHQ6IFwiLmNvbXBzb3VsLXNsaWRlLW5leHRcIixcbiAgICAgIHByZXY6IFwiLmNvbXBzb3VsLXNsaWRlLXByZXZcIixcbiAgICAgIG5hdjogXCIuY29tcHNvdWwtc2xpZGUtbmF2XCIsXG4gICAgICB0aW1lbGluZTogXCIuY29tcHNvdWwtc2xpZGUtdGltZWxpbmVcIixcbiAgICAgIHBhcmVudDogZmFsc2UsXG4gICAgICBoZWlnaHQ6IGZhbHNlLFxuXG4gICAgICBjb3ZlcjogdHJ1ZSxcbiAgICAgIHNsaWRlckNvdmVyOiBcImZpZ3VyZVwiLFxuICAgICAgc2xpZGVySW1nOiBcImZpZ3VyZSBpbWdcIixcblxuICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgYW5pbWF0aW9uZW5kOiBcImZhbHNlXCIsXG5cbiAgICAgIGxvYWQ6IHRydWUsXG4gICAgICBwcmVsb2FkOiB0cnVlLFxuICAgICAgZmlyc3Q6IDAsXG4gICAgICBsb29wOiB0cnVlLFxuXG4gICAgICByZXNwb25zaXZlOiB7fVxuICAgIH1cblxuICAgIHRoaXMubGlicmFyeSA9IGNsYXNzIExpYnJhcnkge1xuICAgICAgY29uc3RydWN0b3IoJG5vZGUsIHNsaWRlcikge1xuICAgICAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuJG5vZGVbMF07XG4gICAgICAgIHRoaXMuc2xpZGVyID0gc2xpZGVyO1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2xpZGVyLnNldHRpbmdzO1xuICAgICAgfVxuXG4gICAgICAkKHNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcHNvdWwoc2VsZWN0b3IpO1xuICAgICAgfVxuXG4gICAgICBhY3RpdmUoKSB7XG4gICAgICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0FjdGl2ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBkaXJlY3Rpb25VcCgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzRGlyZWN0aW9uVXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZGlyZWN0aW9uRG93bigpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzRGlyZWN0aW9uRG93bik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBlcnJvcigpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTG9hZGluZykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0Vycm9yKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZpcnN0KCkge1xuICAgICAgICB0aGlzLiRub2RlLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NGaXJzdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBpbmFjdGl2ZSgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzQWN0aXZlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHVubG9hZCgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTG9hZGVkKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGFuaW1hdGlvbigpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzVW5zZXQpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NBbmltYXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgdW5zZXQoKSB7XG4gICAgICAgIHRoaXMuJG5vZGUucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0FuaW1hdGlvbikuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc1Vuc2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxvYWRlZCgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTG9hZGluZykuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0xvYWRlZCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsb2FkaW5nKCkge1xuICAgICAgICB0aGlzLiRub2RlLnJlbW92ZUNsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NMb2FkZWQpLmFkZENsYXNzKHRoaXMuc2V0dGluZ3MuY2xhc3NMb2FkaW5nKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc05leHQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcHJldigpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzUHJldik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91cygpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzUHJldmlvdXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuJG5vZGUucmVtb3ZlQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0FjdGl2ZSArIFwiIFwiICsgdGhpcy5zZXR0aW5ncy5jbGFzc0ZpcnN0ICsgXCIgXCIgKyB0aGlzLnNldHRpbmdzLmNsYXNzTmV4dCArIFwiIFwiICsgdGhpcy5zZXR0aW5ncy5jbGFzc1ByZXYgKyBcIiBcIiArIHRoaXMuc2V0dGluZ3MuY2xhc3NQcmV2aW91cyArIFwiIFwiICsgdGhpcy5zZXR0aW5ncy5jbGFzc1dhaXQgKyBcIiBcIiArIHRoaXMuc2V0dGluZ3MuY2xhc3NEaXJlY3Rpb25VcCArIFwiIFwiICsgdGhpcy5zZXR0aW5ncy5jbGFzc0RpcmVjdGlvbkRvd24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmVzdGFydCgpIHtcbiAgICAgICAgdm9pZCB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBvbigpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5vbihcImFuaW1hdGlvbmVuZFwiLCB0aGlzLnNsaWRlci51bmxvY2spLm9uKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLnNsaWRlci51bmxvY2spO1xuICAgICAgfVxuXG4gICAgICBvZmYoKSB7XG4gICAgICAgIHRoaXMuJG5vZGUub2ZmKFwiYW5pbWF0aW9uZW5kXCIsIHRoaXMuc2xpZGVyLnVubG9jaykub2ZmKFwidHJhbnNpdGlvbmVuZFwiLCB0aGlzLnNsaWRlci51bmxvY2spO1xuICAgICAgfVxuXG4gICAgICBjb25kaXRpb24oY29uZGl0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBpZihjb25kaXRpb24pIGNhbGxiYWNrLmFwcGx5KHRoaXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgd2FpdCgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzV2FpdCk7XG4gICAgICAgIHRoaXMuc2xpZGVyLmxvY2sgPSB0cnVlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZG9uZSgpIHtcbiAgICAgICAgdGhpcy4kbm9kZS5yZW1vdmVDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzV2FpdCk7XG4gICAgICAgIHRoaXMuc2xpZGVyLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbGlkZXIuc2xpZGVyLm9mZigpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgcmVzcG9uc2l2ZShlbGVtZW50KSB7XG4gICAgICAgIGlmKCFlbGVtZW50KSByZXR1cm47XG4gICAgICAgIGZvciAobGV0IGtleSBpbiBlbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gcGFyc2VJbnQoa2V5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQuZGF0YXNldFtrZXldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjaGFuZ2UoaW1nLCBzcmMpIHtcbiAgICAgICAgcmV0dXJuIChpbWcpID8gKCEoaW1nLnNyYyAmJiBzcmMgJiYgKGltZy5zcmMucmVwbGFjZShpbWcuc3JjLnJlcGxhY2Uoc3JjLCBcIlwiKSwgXCJcIikgPT09IHNyYyB8fCBzcmMucmVwbGFjZShzcmMucmVwbGFjZShpbWcuc3JjLCBcIlwiKSwgXCJcIikgPT09IGltZy5zcmMpKSkgOiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgY292ZXIoZWxlbWVudCkge1xuICAgICAgICBsZXQgcGFyZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuc2V0dGluZ3Muc2xpZGVyQ292ZXIpLFxuICAgICAgICAgICAgY2hpbGQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5zbGlkZXJJbWcpO1xuXG4gICAgICAgIGlmKHBhcmVudCAmJiBjaGlsZCkgcGFyZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKFwiICsgKHRoaXMucmVzcG9uc2l2ZShjaGlsZCkgfHwgY2hpbGQuZGF0YXNldC5zcmMpICsgXCIpXCI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBiYWNrZ3JvdW5kKGVsZW1lbnQsIHVybCkge1xuICAgICAgICBsZXQgYmFja2dyb3VuZCA9IChlbGVtZW50KSA/IC8oPzpcXChbJ1wiXT8pKC4qPykoPzpbJ1wiXT9cXCkpLy5leGVjKGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlKSA6IGZhbHNlO1xuICAgICAgICByZXR1cm4gKGJhY2tncm91bmQgJiYgKGJhY2tncm91bmRbMV0gPSB1cmwpID8gdHJ1ZSA6IGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgc3JjKGVsZW1lbnQpIHtcbiAgICAgICAgbGV0IGltZyA9IGVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLnNsaWRlckltZyk7XG4gICAgICAgIGlmKGltZykgaW1nLnNyYyA9IHRoaXMucmVzcG9uc2l2ZShpbWcpIHx8IGltZy5kYXRhc2V0LnNyYztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxvYWQoY2FsbGJhY2ssIHR5cGUsIGluZGV4LCBkZWJ1Zykge1xuICAgICAgICBsZXQgZmlndXJlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZXR0aW5ncy5zbGlkZXJDb3ZlciksXG4gICAgICAgICAgICBpbWcgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLnNsaWRlckltZyksXG4gICAgICAgICAgICBzcmMgPSAoaW1nKSA/IHRoaXMucmVzcG9uc2l2ZShpbWcpIHx8IGltZy5kYXRhc2V0LnNyYyA6IGZhbHNlLFxuICAgICAgICAgICAgY2hhbmdlID0gdGhpcy5jaGFuZ2UoaW1nLCBzcmMpO1xuXG4gICAgICAgIGlmKGNoYW5nZSkgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgaWYoKHRoaXMuJG5vZGUuaGFzQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0xvYWRlZCkgfHwgIWltZyB8fCAoaW1nLmNvbXBsZXRlICYmIGltZy5zcmMgJiYgIWNoYW5nZSkpICYmIHRoaXMuYmFja2dyb3VuZChmaWd1cmUsIHNyYykpIHtcbiAgICAgICAgICBpZihjYWxsYmFjayAmJiAoKHR5cGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5zbGlkZXIuYWN0aXZlLmVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkgfHwgKHR5cGUgPT09IFwibmV4dFwiICYmIHRoaXMuc2xpZGVyLm5leHQuZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB8fCAodHlwZSA9PT0gXCJwcmV2XCIgJiYgdGhpcy5zbGlkZXIucHJldi5lbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHx8IHR5cGUgPT09IFwicHJlbG9hZFwiKSkgY2FsbGJhY2soKTtcbiAgICAgICAgICB0aGlzLmxvYWRlZCgpO1xuICAgICAgICAgIHRoaXMuc2xpZGVyLnBvaW50KGluZGV4LCBcImxvYWRlZFwiKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihpbWcpIHtcbiAgICAgICAgICBpbWcuY29tcHNvdWxTdGFjayA9IGltZy5jb21wc291bFN0YWNrIHx8IFtdO1xuICAgICAgICAgIHRoaXMubG9hZGluZygpO1xuICAgICAgICAgIHRoaXMuc2xpZGVyLnBvaW50KGluZGV4LCBcImxvYWRpbmdcIik7XG4gICAgICAgICAgaWYoaW1nLmNvbXBzb3VsU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICAgICAgaW1nLmNvbXBzb3VsU3RhY2sucHVzaCh7XG4gICAgICAgICAgICAgIG9iamVjdDogdGhpcyxcbiAgICAgICAgICAgICAgaW1nOiBpbWcsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgc3JjOiBzcmMsXG4gICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgZGVidWc6IGRlYnVnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMub25sb2FkID0gdGhpcy5zbGlkZXIub25sb2FkLmJpbmQodGhpcywgaW1nKTtcbiAgICAgICAgICAgIHRoaXMub25lcnJvciA9IHRoaXMuc2xpZGVyLm9uZXJyb3IuYmluZCh0aGlzLCBpbWcpO1xuXG4gICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5vbmxvYWQpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCB0aGlzLm9uZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbWcuY29tcHNvdWxTdGFjay5wdXNoKHtcbiAgICAgICAgICAgICAgb2JqZWN0OiB0aGlzLFxuICAgICAgICAgICAgICBpbWc6IGltZyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrLFxuICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICBzcmM6IHNyYyxcbiAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICBkZWJ1ZzogZGVidWdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICQoc2VsZWN0b3IpIHtcbiAgICByZXR1cm4gbmV3IENvbXBzb3VsKHNlbGVjdG9yKTtcbiAgfVxuXG4gIGZhY3RvcnkoJGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IHRoaXMubGlicmFyeSgkZWxlbWVudCwgdGhpcyk7XG4gIH1cblxuICByb290KCkge1xuICAgIHRoaXMuaHRtbCA9IHRoaXMuZmFjdG9yeSh0aGlzLiQoXCJodG1sXCIpKTtcbiAgICB0aGlzLmhlYWQgPSB0aGlzLmZhY3RvcnkodGhpcy4kKFwiaGVhZFwiKSk7XG4gICAgdGhpcy5ib2R5ID0gdGhpcy5mYWN0b3J5KHRoaXMuJChcImJvZHlcIikpO1xuICB9XG5cbiAgc2V0KGluZGV4KSB7XG4gICAgdGhpcy5tb2Rlcm5pemUoaW5kZXgpO1xuICAgIHRoaXMucmVzdGFydCgpO1xuICAgIHRoaXMubmF2aWdhdGlvbigpO1xuICAgIHRoaXMuc2xpZGVyLnJlc2V0KCkub2ZmKCk7XG4gICAgaWYodGhpcy50aW1lbGluZSAmJiB0aGlzLnRpbWVsaW5lLmVsZW1lbnQpICh0aGlzLnNldHRpbmdzLmxvYWQpID8gdGhpcy50aW1lbGluZS51bnNldCgpLnJlc3RhcnQoKS5hbmltYXRpb24oKS5pbmFjdGl2ZSgpIDogdGhpcy50aW1lbGluZS51bnNldCgpLnJlc3RhcnQoKS5hbmltYXRpb24oKS5hY3RpdmUoKTtcblxuICAgIHRoaXMucGFzdCA9ICh0aGlzLmluZGV4LnBhc3QgIT09IGZhbHNlKSA/IHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy4kc2xpZGVyW3RoaXMuaW5kZXgucGFzdF0pKS5wcmV2aW91cygpLmNvbmRpdGlvbih0aGlzLnNldHRpbmdzLmFuaW1hdGlvbiAmJiB0aGlzLmluZGV4LnBhc3QgIT09IGluZGV4LCBmdW5jdGlvbigpIHt0aGlzLndhaXQoKX0pIDogZmFsc2U7XG5cbiAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy4kc2xpZGVyW3RoaXMuaW5kZXgudmFsdWVdKSkuY29uZGl0aW9uKCF0aGlzLmxhdW5jaCwgZnVuY3Rpb24oKSB7dGhpcy5maXJzdCgpfSkuY29uZGl0aW9uKHRoaXMuaW5kZXguZGlyZWN0aW9uID09PSAwLCBmdW5jdGlvbigpIHt0aGlzLmRpcmVjdGlvblVwKCl9KS5jb25kaXRpb24odGhpcy5pbmRleC5kaXJlY3Rpb24gPT09IDEsIGZ1bmN0aW9uKCkge3RoaXMuZGlyZWN0aW9uRG93bigpfSkuYWN0aXZlKCk7XG4gICAgdGhpcy5hY3RpdmUuY29uZGl0aW9uKHRoaXMuc2V0dGluZ3MubG9hZCwgZnVuY3Rpb24oKSB7dGhpcy5sb2FkKCgpID0+IHtpZih0aGlzLnNsaWRlci50aW1lbGluZSkgdGhpcy5zbGlkZXIudGltZWxpbmUuYWN0aXZlKCl9LCBcImFjdGl2ZVwiLCB0aGlzLnNsaWRlci5pbmRleC52YWx1ZSwgXCJzZXQtYWN0aXZlXCIpfSkuY29uZGl0aW9uKHRoaXMuc2V0dGluZ3MuYW5pbWF0aW9uLCAoKSA9PiB7dGhpcy5hY3RpdmUub24oKX0pO1xuXG4gICAgdGhpcy5uZXh0ID0gdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLiRzbGlkZXJbdGhpcy5pbmRleC5uZXh0XSkpO1xuICAgIHRoaXMubmV4dC5jb25kaXRpb24odGhpcy5zZXR0aW5ncy5sb2FkLCBmdW5jdGlvbigpIHt0aGlzLmxvYWQoKCkgPT4ge2lmKHRoaXMuc2xpZGVyLnNldHRpbmdzLm5leHQpIHRoaXMuc2xpZGVyLmZhY3RvcnkodGhpcy4kKHRoaXMuc2xpZGVyLnNldHRpbmdzLm5leHQpKS5sb2FkZWQoKX0sIFwibmV4dFwiLCB0aGlzLnNsaWRlci5pbmRleC5uZXh0LCBcInNldC1uZXh0XCIpfSkubmV4dCgpO1xuXG4gICAgdGhpcy5wcmV2ID0gdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLiRzbGlkZXJbdGhpcy5pbmRleC5wcmV2XSkpO1xuICAgIHRoaXMucHJldi5jb25kaXRpb24odGhpcy5zZXR0aW5ncy5sb2FkLCBmdW5jdGlvbigpIHt0aGlzLmxvYWQoKCkgPT4ge2lmKHRoaXMuc2xpZGVyLnNldHRpbmdzLnByZXYpIHRoaXMuc2xpZGVyLmZhY3RvcnkodGhpcy4kKHRoaXMuc2xpZGVyLnNldHRpbmdzLnByZXYpKS5sb2FkZWQoKX0sIFwicHJldlwiLCB0aGlzLnNsaWRlci5pbmRleC5wcmV2LCBcInNldC1wcmV2XCIpfSkucHJldigpO1xuXG4gICAgdGhpcy5oZWlnaHQoKTtcbiAgfTtcblxuICBtb2Rlcm5pemUoaW5kZXgpIHtcbiAgICB0aGlzLmxhdW5jaCA9ICghdGhpcy5pbmRleCkgPyBmYWxzZSA6IHRydWU7XG4gICAgdGhpcy5pbmRleCA9IHRoaXMuaW5kZXggfHwge307XG4gICAgdGhpcy5pbmRleC5kaXJlY3Rpb24gPSAodGhpcy5pbmRleC52YWx1ZSA+IGluZGV4KSA/IDEgOiAwO1xuICAgIHRoaXMuaW5kZXgucGFzdCA9ICh0aGlzLmxhdW5jaCkgPyB0aGlzLmluZGV4LnZhbHVlIDogZmFsc2U7XG4gICAgdGhpcy5pbmRleC52YWx1ZSA9ICh0aGlzLnNldHRpbmdzLmxvb3ApID8gKGluZGV4ID49IHRoaXMubGVuKSA/IDAgOiAoaW5kZXggPCAwKSA/IHRoaXMubGVuIC0gMSA6IGluZGV4IDogKGluZGV4ID49IHRoaXMubGVuKSA/IHRoaXMubGVuIC0gMSA6IChpbmRleCA8IDApID8gMCA6IGluZGV4O1xuICAgIHRoaXMuaW5kZXgubmV4dCA9ICh0aGlzLmluZGV4LnZhbHVlICsgMSA+PSB0aGlzLmxlbikgPyAwIDogdGhpcy5pbmRleC52YWx1ZSArIDE7XG4gICAgdGhpcy5pbmRleC5wcmV2ID0gKHRoaXMuaW5kZXgudmFsdWUgLSAxIDwgMCkgPyB0aGlzLmxlbiAtIDEgOiB0aGlzLmluZGV4LnZhbHVlIC0gMTtcbiAgfVxuXG4gIGxvYWQoaW5kZXgpIHtcbiAgICBsZXQgbGVuID0gdGhpcy5sZW47XG5cbiAgICB3aGlsZSAobGVuLS0pIHtcblxuICAgIH1cbiAgICBpZih0aGlzLnNldHRpbmdzLnByZWxvYWQpIHRoaXMucHJlbG9hZChpbmRleCwgMSk7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5wcmVsb2FkKSB0aGlzLnByZWxvYWQoaW5kZXggLSAxLCAtMSk7XG4gIH1cblxuICBwcmVsb2FkKGluZGV4LCBkaXJlY3Rpb24pIHtcbiAgICBpZihpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5sZW4pIHtcbiAgICAgIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy4kc2xpZGVyW2luZGV4XSkpLmxvYWQoKCkgPT4ge1xuICAgICAgICB0aGlzLnByZWxvYWQoaW5kZXggKyBkaXJlY3Rpb24sIGRpcmVjdGlvbik7XG4gICAgICB9LCBcInByZWxvYWRcIiwgaW5kZXgsIFwicHJlbG9hZFwiKTtcbiAgICB9XG4gIH1cblxuICBvbmxvYWQoaW1nKSB7XG4gICAgbGV0IGFycmF5ID0gaW1nLmNvbXBzb3VsU3RhY2s7XG4gICAgaW1nLmNvbXBzb3VsU3RhY2sgPSBbXTtcbiAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5vbmxvYWQpO1xuICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yKTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKCF0aGlzLmNoYW5nZShpbWcsIGl0ZW0uc3JjKSkge1xuICAgICAgICBpZihpdGVtLmNhbGxiYWNrICYmICgoaXRlbS50eXBlID09PSBcImFjdGl2ZVwiICYmIHRoaXMuc2xpZGVyLmFjdGl2ZS5lbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHx8IChpdGVtLnR5cGUgPT09IFwibmV4dFwiICYmIHRoaXMuc2xpZGVyLm5leHQuZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB8fCAoaXRlbS50eXBlID09PSBcInByZXZcIiAmJiB0aGlzLnNsaWRlci5wcmV2LmVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkgfHwgaXRlbS50eXBlID09PSBcInByZWxvYWRcIikpIGl0ZW0uY2FsbGJhY2soKTtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5jb3ZlcikgdGhpcy5jb3Zlcih0aGlzLmVsZW1lbnQpO1xuICAgICAgICB0aGlzLmxvYWRlZCgpO1xuICAgICAgICB0aGlzLnNsaWRlci5wb2ludChpdGVtLmluZGV4LCBcImxvYWRlZFwiKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uZXJyb3IoaW1nKSB7XG4gICAgbGV0IGFycmF5ID0gaW1nLmNvbXBzb3VsU3RhY2s7XG4gICAgaW1nLmNvbXBzb3VsU3RhY2sgPSBbXTtcbiAgICBpbWcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy5vbmxvYWQpO1xuICAgIGltZy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgdGhpcy5vbmVycm9yKTtcblxuICAgIGFycmF5LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmKCF0aGlzLmNoYW5nZShpbWcsIGl0ZW0uc3JjKSkge1xuICAgICAgICBpZihpdGVtLmNhbGxiYWNrICYmICgoaXRlbS50eXBlID09PSBcImFjdGl2ZVwiICYmIHRoaXMuc2xpZGVyLmFjdGl2ZS5lbGVtZW50ID09PSB0aGlzLmVsZW1lbnQpIHx8IChpdGVtLnR5cGUgPT09IFwibmV4dFwiICYmIHRoaXMuc2xpZGVyLm5leHQuZWxlbWVudCA9PT0gdGhpcy5lbGVtZW50KSB8fCAoaXRlbS50eXBlID09PSBcInByZXZcIiAmJiB0aGlzLnNsaWRlci5wcmV2LmVsZW1lbnQgPT09IHRoaXMuZWxlbWVudCkgfHwgaXRlbS50eXBlID09PSBcInByZWxvYWRcIikpIGl0ZW0uY2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5lcnJvcigpO1xuICAgICAgICB0aGlzLnNsaWRlci5wb2ludChpdGVtLmluZGV4LCBcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmVzdGFydCgpIHtcbiAgICBpZih0aGlzLnNldHRpbmdzLm5leHQpIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy5uZXh0KSkuaW5hY3RpdmUoKTtcbiAgICBpZih0aGlzLnNldHRpbmdzLnByZXYpIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy5wcmV2KSkuaW5hY3RpdmUoKTtcbiAgICBpZih0aGlzLnNldHRpbmdzLm5hdikgdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLnNldHRpbmdzLm5hdikpLmluYWN0aXZlKCk7XG4gIH1cblxuICByZWxvYWQoKSB7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMubGVuOyBpbmRleCsrKSB7XG4gICAgICBsZXQgZWxlbWVudCA9IHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy4kc2xpZGVyW2luZGV4XSkpLFxuICAgICAgICAgIGltZyA9IGVsZW1lbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpLFxuICAgICAgICAgIHNyYyA9IChpbWcpID8gZWxlbWVudC5yZXNwb25zaXZlKGltZykgfHwgaW1nLmRhdGFzZXQuc3JjIDogZmFsc2UsXG4gICAgICAgICAgY2hhbmdlID0gZWxlbWVudC5jaGFuZ2UoaW1nLCBzcmMpO1xuXG4gICAgICBpZihpbWcgJiYgIShpbWcuY29tcGxldGUgJiYgaW1nLnNyYyAmJiAhY2hhbmdlKSkge1xuICAgICAgICBlbGVtZW50LnVubG9hZCgpO1xuICAgICAgICBpZih0aGlzLnNldHRpbmdzLm5hdikgdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLiQodGhpcy5zZXR0aW5ncy5uYXYpW2luZGV4XSkpLnVubG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZih0aGlzLnNldHRpbmdzLm5leHQpIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy5uZXh0KSkudW5sb2FkKCk7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5wcmV2KSB0aGlzLmZhY3RvcnkodGhpcy4kKHRoaXMuc2V0dGluZ3MucHJldikpLnVubG9hZCgpO1xuICB9XG5cbiAgbmF2aWdhdGlvbigpIHtcbiAgICBpZih0aGlzLnNldHRpbmdzLm5leHQpIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy5uZXh0KSkuY29uZGl0aW9uKHRoaXMuc2V0dGluZ3MubG9hZCwgZnVuY3Rpb24oKSB7dGhpcy5sb2FkaW5nKCl9KS5jb25kaXRpb24odGhpcy5zZXR0aW5ncy5sb29wIHx8ICghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuaW5kZXgudmFsdWUgIT09IHRoaXMubGVuIC0gMSksIGZ1bmN0aW9uKCkge3RoaXMuYWN0aXZlKCl9KTtcbiAgICBpZih0aGlzLnNldHRpbmdzLnByZXYpIHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy5wcmV2KSkuY29uZGl0aW9uKHRoaXMuc2V0dGluZ3MubG9hZCwgZnVuY3Rpb24oKSB7dGhpcy5sb2FkaW5nKCl9KS5jb25kaXRpb24odGhpcy5zZXR0aW5ncy5sb29wIHx8ICghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuaW5kZXgudmFsdWUgIT09IDApLCBmdW5jdGlvbigpIHt0aGlzLmFjdGl2ZSgpfSk7XG4gICAgdGhpcy5wb2ludCh0aGlzLmluZGV4LnZhbHVlLCBcImFjdGl2ZVwiKTtcbiAgfVxuXG4gIHBvaW50KGluZGV4LCB0eXBlKSB7XG4gICAgaWYodGhpcy5zZXR0aW5ncy5uYXYpIHtcbiAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgIHRoaXMuJCh0aGlzLnNldHRpbmdzLm5hdikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuW2luZGV4XSkgdGhhdC5mYWN0b3J5KHRoYXQuJCh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5baW5kZXhdKSkuY29uZGl0aW9uKHR5cGUgPT09IFwiYWN0aXZlXCIsIGZ1bmN0aW9uKCkge3RoaXMuYWN0aXZlKCl9KS5jb25kaXRpb24odHlwZSA9PT0gXCJsb2FkZWRcIiwgZnVuY3Rpb24oKSB7dGhpcy5sb2FkZWQoKX0pLmNvbmRpdGlvbih0eXBlID09PSBcImxvYWRpbmdcIiwgZnVuY3Rpb24oKSB7dGhpcy5sb2FkaW5nKCl9KS5jb25kaXRpb24odHlwZSA9PT0gXCJlcnJvclwiLCBmdW5jdGlvbigpIHt0aGlzLmVycm9yKCl9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhlaWdodCgpIHtcbiAgICBpZih0aGlzLnNldHRpbmdzLmhlaWdodCkgdGhpcy5wYXJlbnQuZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLmZhY3RvcnkodGhpcy4kKHRoaXMuJHNsaWRlclt0aGlzLmluZGV4LnZhbHVlXSkpLmVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgXCJweFwiO1xuICB9XG5cbiAgZXZlbnQoKSB7XG4gICAgdGhpcy5jbGljayA9IChldmVudCkgPT4ge1xuICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgaWYodGhpcy5zZXR0aW5ncy5uZXh0ICYmICF0aGlzLmxvY2spIHtcbiAgICAgICAgdGhpcy4kKHRoaXMuc2V0dGluZ3MubmV4dCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZigoKCF0aGF0LnNldHRpbmdzLmxvYWQgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzKSB8fCAodGhhdC5zZXR0aW5ncy5sb2FkICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcyAmJiB0aGF0LiQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcyh0aGF0LnNldHRpbmdzLmNsYXNzTG9hZGVkKSkpICYmIHRoYXQuJChldmVudC50YXJnZXQpLmhhc0NsYXNzKHRoYXQuc2V0dGluZ3MuY2xhc3NBY3RpdmUpKSB7XG4gICAgICAgICAgICB0aGF0LnNldCgodGhhdC5pbmRleC52YWx1ZSkgPyB0aGF0LmluZGV4LnZhbHVlICsgMSA6IHRoYXQuZmlyc3QgKyAxKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZih0aGlzLnNldHRpbmdzLnByZXYgJiYgIXRoaXMubG9jaykge1xuICAgICAgICB0aGlzLiQodGhpcy5zZXR0aW5ncy5wcmV2KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCgoIXRoYXQuc2V0dGluZ3MubG9hZCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMpIHx8ICh0aGF0LnNldHRpbmdzLmxvYWQgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzICYmIHRoYXQuJChldmVudC50YXJnZXQpLmhhc0NsYXNzKHRoYXQuc2V0dGluZ3MuY2xhc3NMb2FkZWQpKSkgJiYgdGhhdC4kKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3ModGhhdC5zZXR0aW5ncy5jbGFzc0FjdGl2ZSkpIHtcbiAgICAgICAgICAgIHRoYXQuc2V0KCh0aGF0LmluZGV4LnZhbHVlKSA/IHRoYXQuaW5kZXgudmFsdWUgLSAxIDogdGhhdC5maXJzdCAtIDEpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHRoaXMuc2V0dGluZ3MubmF2ICYmICF0aGlzLmxvY2spIHtcbiAgICAgICAgdGhpcy4kKHRoaXMuc2V0dGluZ3MubmF2KS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKCghdGhhdC5zZXR0aW5ncy5sb2FkICYmIGV2ZW50LnRhcmdldCA9PT0gdGhpcykgfHwgKHRoYXQuc2V0dGluZ3MubG9hZCAmJiBldmVudC50YXJnZXQgPT09IHRoaXMgJiYgdGhhdC4kKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3ModGhhdC5zZXR0aW5ncy5jbGFzc0xvYWRlZCkpKSB7XG4gICAgICAgICAgICBpZih0aGF0LiQodGhpcykuaW5kZXgoKSA+PSAwKSB0aGF0LnNldCh0aGF0LiQodGhpcykuaW5kZXgoKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5odG1sLiRub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XG5cbiAgICBpZih0aGlzLnRpbWVsaW5lKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbmVuZCA9ICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5zZXR0aW5ncy5sb29wIHx8ICghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuaW5kZXgudmFsdWUgIT09IHRoaXMubGVuIC0gMSkpICh0aGlzLnNldHRpbmdzLmxvYWQpID8gdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLiRzbGlkZXJbdGhpcy5pbmRleC5uZXh0XSkpLmxvYWQoKCkgPT4ge3RoaXMuc2V0KHRoaXMuaW5kZXgubmV4dCl9LCBcIm5leHRcIiwgdGhpcy5pbmRleC5uZXh0LCBcInRpbWVsaW5lXCIpIDogdGhpcy5zZXQodGhpcy5pbmRleC52YWx1ZSArIDEpO1xuICAgICAgfTtcbiAgICAgIHRoaXMudGltZWxpbmUuJG5vZGUub24oXCJhbmltYXRpb25lbmRcIiwgdGhpcy5hbmltYXRpb25lbmQpO1xuICAgIH1cblxuICAgIHRoaXMub250b3VjaHN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnRvdWNoc3RhcnQgPSBldmVudC50b3VjaGVzWzBdLnNjcmVlblg7XG4gICAgfTtcbiAgICB0aGlzLnNsaWRlci4kbm9kZS5vbihcInRvdWNoc3RhcnRcIiwgdGhpcy5vbnRvdWNoc3RhcnQpO1xuXG4gICAgdGhpcy5vbnRvdWNoZW5kID0gKGV2ZW50KSA9PiB7XG4gICAgICBpZighdGhpcy5sb2NrICYmICh0aGlzLnRvdWNoc3RhcnQgLSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YIDwgLTIwMCkgJiYgKCghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuaW5kZXgudmFsdWUgIT09IDApIHx8IHRoaXMuc2V0dGluZ3MubG9vcCkgJiYgKCF0aGlzLnNldHRpbmdzLmxvYWQgfHwgKHRoaXMuc2V0dGluZ3MubG9hZCAmJiB0aGlzLnByZXYuJG5vZGUuaGFzQ2xhc3ModGhpcy5zZXR0aW5ncy5jbGFzc0xvYWRlZCkpKSkgdGhpcy5zZXQodGhpcy5pbmRleC52YWx1ZSAtIDEpO1xuICAgICAgaWYoIXRoaXMubG9jayAmJiAodGhpcy50b3VjaHN0YXJ0IC0gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0uc2NyZWVuWCA+IDIwMCkgJiYgKCghdGhpcy5zZXR0aW5ncy5sb29wICYmIHRoaXMuaW5kZXgudmFsdWUgIT09IHRoaXMubGVuIC0gMSkgfHwgdGhpcy5zZXR0aW5ncy5sb29wKSAmJiAoIXRoaXMuc2V0dGluZ3MubG9hZCB8fCAodGhpcy5zZXR0aW5ncy5sb2FkICYmIHRoaXMubmV4dC4kbm9kZS5oYXNDbGFzcyh0aGlzLnNldHRpbmdzLmNsYXNzTG9hZGVkKSkpKSB0aGlzLnNldCh0aGlzLmluZGV4LnZhbHVlICsgMSk7XG4gICAgfTtcbiAgICB0aGlzLnNsaWRlci4kbm9kZS5vbihcInRvdWNoZW5kXCIsIHRoaXMub250b3VjaGVuZCk7XG5cbiAgICB0aGlzLnVubG9jayA9IChldmVudCkgPT4ge1xuICAgICAgaWYoKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5hY3RpdmUuZWxlbWVudCB8fCBldmVudC50YXJnZXQgPT09IHRoaXMuYWN0aXZlLmVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNldHRpbmdzLmFuaW1hdGlvbmVuZCkpICYmIHRoaXMucGFzdCkgdGhpcy5wYXN0LmRvbmUoKTtcbiAgICB9XG5cbiAgfTtcblxuICByZXNwb25zaXZlKCkge1xuICAgIGxldCByYW5nZTtcbiAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlKSB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gcGFyc2VJbnQoa2V5KSkge1xuICAgICAgICB0aGlzLm9wdGlvbnModGhpcy5kZWZhdWx0KTtcbiAgICAgICAgdGhpcy51cGRhdGUodGhpcy5zZXR0aW5ncy5yZXNwb25zaXZlW2tleV0pO1xuICAgICAgICByYW5nZSA9IHRydWU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYoIXJhbmdlKSB0aGlzLnVwZGF0ZSh0aGlzLmRlZmF1bHQpO1xuICB9XG5cbiAgcmVtb3ZlKCkge1xuICAgIGlmKHRoaXMuaHRtbCAmJiB0aGlzLmNsaWNrKSB0aGlzLmh0bWwuJG5vZGUub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XG4gICAgaWYodGhpcy50aW1lbGluZSkgdGhpcy50aW1lbGluZS4kbm9kZS5vZmYoXCJhbmltYXRpb25lbmRcIiwgdGhpcy5hbmltYXRpb25lbmQpO1xuICAgIGlmKHRoaXMub250b3VjaHN0YXJ0KSB0aGlzLnNsaWRlci4kbm9kZS5vZmYoXCJ0b3VjaHN0YXJ0XCIsIHRoaXMub250b3VjaHN0YXJ0KTtcbiAgICBpZih0aGlzLm9udG91Y2hlbmQpIHRoaXMuc2xpZGVyLiRub2RlLm9mZihcInRvdWNoZW5kXCIsIHRoaXMub250b3VjaGVuZCk7XG4gIH1cblxuICB1cGRhdGUoc2V0dGluZ3MpIHtcbiAgICBpZihzZXR0aW5ncykgdGhpcy5vcHRpb25zKHNldHRpbmdzKTtcbiAgICBpZighdGhpcy5mYWN0b3J5KHRoaXMuJCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKSkuZWxlbWVudCkgcmV0dXJuO1xuICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgdGhpcy5ib290KCk7XG4gICAgdGhpcy5yb290KCk7XG4gICAgdGhpcy5ldmVudCgpO1xuICAgIHRoaXMucmVsb2FkKCk7XG4gICAgdGhpcy5zZXQoKHRoaXMuaW5kZXgpID8gdGhpcy5pbmRleC52YWx1ZSA6IHRoaXMuZmlyc3QpO1xuICAgIHRoaXMubG9hZCgodGhpcy5pbmRleCkgPyB0aGlzLmluZGV4LnZhbHVlIDogdGhpcy5maXJzdCk7XG4gICAgdGhpcy5zbGlkZXIuZG9uZSgpO1xuICB9XG5cbiAgcndkKCkge1xuICAgIHRoaXMucmVzaXplID0gY29tcHNvdWwuZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNwb25zaXZlKCk7XG4gICAgfSwgMjAwKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMucmVzaXplKTtcbiAgfVxuXG4gIGNvbXBzb3VsKCkge1xuICAgIHdpbmRvdy5jb21wc291bCA9IHdpbmRvdy5jb21wc291bCB8fCB7fTtcblxuICAgIGNvbXBzb3VsLnRocm90dGxlID0gY29tcHNvdWwudGhyb3R0bGUgfHwgKChjYWxsYmFjaywgZGVsYXkpID0+IHtcbiAgICAgIGxldCB0aHJvdHRsZTtcbiAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXRocm90dGxlKSB7XG4gICAgICAgICAgY2FsbGJhY2soLi4uYXJncyk7XG4gICAgICAgICAgdGhyb3R0bGUgPSBzZXRUaW1lb3V0KCgpID0+IHRocm90dGxlID0gZmFsc2UsIGRlbGF5KVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29tcHNvdWwuZGVib3VuY2UgPSBjb21wc291bC5kZWJvdW5jZSB8fCAoKGNhbGxiYWNrLCBkZWxheSkgPT4ge1xuICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gY2FsbGJhY2suYXBwbHkodGhhdCwgYXJncyksIGRlbGF5KTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBib290KHF1ZXJ5KSB7XG4gICAgdGhpcy4kc2xpZGVyID0gbmV3IENvbXBzb3VsKHF1ZXJ5IHx8IHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuICAgIHRoaXMuc2xpZGVyID0gdGhpcy5mYWN0b3J5KHRoaXMuJHNsaWRlcik7XG4gICAgdGhpcy5sZW4gPSB0aGlzLiRzbGlkZXIubGVuZ3RoO1xuXG4gICAgdGhpcy4kcGFyZW50ID0gbmV3IENvbXBzb3VsKHRoaXMuc2V0dGluZ3MucGFyZW50IHx8ICgodGhpcy5zbGlkZXIuZWxlbWVudCkgPyB0aGlzLnNsaWRlci5lbGVtZW50LnBhcmVudE5vZGUgOiBmYWxzZSkpO1xuICAgIHRoaXMucGFyZW50ID0gdGhpcy5mYWN0b3J5KHRoaXMuJHBhcmVudCk7XG5cbiAgICB0aGlzLmZpcnN0ID0gKHRoaXMuc2V0dGluZ3MuZmlyc3QgPT09IFwicmFuZG9tXCIpID8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5sZW4pIDogdGhpcy5zZXR0aW5ncy5maXJzdDtcbiAgICB0aGlzLnRpbWVsaW5lID0gKHRoaXMuc2V0dGluZ3MudGltZWxpbmUgJiYgdGhpcy5sZW4gPiAxKSA/IHRoaXMuZmFjdG9yeSh0aGlzLiQodGhpcy5zZXR0aW5ncy50aW1lbGluZSkpIDogZmFsc2U7XG4gIH1cblxuICBvcHRpb25zKHNldHRpbmdzKSB7XG4gICAgaWYoIXRoaXMuZGVmYXVsdCkgdGhpcy5kZWZhdWx0ID0gT2JqZWN0LmFzc2lnbih7fSwgT2JqZWN0LmFzc2lnbih0aGlzLnNldHRpbmdzLCBzZXR0aW5ncykpO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5zZXR0aW5ncywgc2V0dGluZ3MpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNvbXBzb3VsKCk7XG4gICAgdGhpcy5yd2QoKTtcbiAgICB0aGlzLnJlc3BvbnNpdmUoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29tcHNvdWwiLCJzZWxlY3RvciIsIl9jbGFzc0NhbGxDaGVjayIsIl9zZWxlY3RvciIsIl90eXBlb2YiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJUeXBlRXJyb3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJPYmplY3QiLCJhc3NpZ24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZXQiLCJ2YWx1ZSIsImFkZENsYXNzIiwiY2xhc3NMaXN0IiwibGVuIiwiX3RoaXMkbGVuJGNsYXNzTGlzdCIsImFkZCIsImFwcGx5IiwiX3RvQ29uc3VtYWJsZUFycmF5Iiwic3BsaXQiLCJhamF4Iiwic2V0dGluZ3MiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJ0eXBlIiwidXJsIiwiZGF0YSIsInN1Y2Nlc3MiLCJlcnJvciIsIm9wZW4iLCJvbmxvYWQiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJjb25zb2xlIiwid2FybiIsIm9uZXJyb3IiLCJzZW5kIiwic2V0UmVxdWVzdEhlYWRlciIsImFwcGVuZCIsImVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImF0dHIiLCJhdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJlYWNoIiwiY2FsbGJhY2siLCJpIiwiaGFzQ2xhc3MiLCJjbGFzc05hbWUiLCJjb250YWlucyIsImh0bWwiLCJpbm5lckhUTUwiLCJpbmRleCIsInBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJjaGlsZHJlbiIsIm9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9mZiIsImV2ZW50TmFtZSIsImV2ZW50SGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmVBdHRyIiwicmVtb3ZlQXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJfdGhpcyRsZW4kY2xhc3NMaXN0MiIsInRvZ2dsZUNsYXNzIiwiX3RoaXMkbGVuJGNsYXNzTGlzdDMiLCJ0b2dnbGUiLCJTbGlkZXIiLCJ3aW5kb3ciLCJqUXVlcnkiLCJ2ZXJzaW9uIiwiY2xhc3NBY3RpdmUiLCJjbGFzc0ZpcnN0IiwiY2xhc3NOZXh0IiwiY2xhc3NQcmV2IiwiY2xhc3NQcmV2aW91cyIsImNsYXNzTG9hZGVkIiwiY2xhc3NMb2FkaW5nIiwiY2xhc3NFcnJvciIsImNsYXNzVW5zZXQiLCJjbGFzc0FuaW1hdGlvbiIsImNsYXNzV2FpdCIsImNsYXNzRGlyZWN0aW9uVXAiLCJjbGFzc0RpcmVjdGlvbkRvd24iLCJuZXh0IiwicHJldiIsIm5hdiIsInRpbWVsaW5lIiwiaGVpZ2h0IiwiY292ZXIiLCJzbGlkZXJDb3ZlciIsInNsaWRlckltZyIsImFuaW1hdGlvbiIsImFuaW1hdGlvbmVuZCIsImxvYWQiLCJwcmVsb2FkIiwiZmlyc3QiLCJsb29wIiwicmVzcG9uc2l2ZSIsImxpYnJhcnkiLCJMaWJyYXJ5IiwiJG5vZGUiLCJzbGlkZXIiLCIkIiwiYWN0aXZlIiwiZGlyZWN0aW9uVXAiLCJkaXJlY3Rpb25Eb3duIiwiaW5hY3RpdmUiLCJ1bmxvYWQiLCJ1bnNldCIsImxvYWRlZCIsImxvYWRpbmciLCJwcmV2aW91cyIsInJlc2V0IiwicmVzdGFydCIsIm9mZnNldFdpZHRoIiwidW5sb2NrIiwiY29uZGl0aW9uIiwid2FpdCIsImxvY2siLCJkb25lIiwiZGF0YXNldCIsImlubmVyV2lkdGgiLCJwYXJzZUludCIsImNoYW5nZSIsImltZyIsInNyYyIsInJlcGxhY2UiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGQiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJleGVjIiwiZGVidWciLCJmaWd1cmUiLCJjb21wbGV0ZSIsInBvaW50IiwiY29tcHNvdWxTdGFjayIsInB1c2giLCJvYmplY3QiLCJiaW5kIiwiZmFjdG9yeSIsIiRlbGVtZW50Iiwicm9vdCIsImhlYWQiLCJib2R5Iiwic2V0IiwiX3RoaXMyIiwibW9kZXJuaXplIiwibmF2aWdhdGlvbiIsInBhc3QiLCIkc2xpZGVyIiwibGF1bmNoIiwiZGlyZWN0aW9uIiwiX3RoaXMiLCJfdGhpczMiLCJfdGhpczQiLCJfdGhpczUiLCJfdGhpczYiLCJhcnJheSIsImZvckVhY2giLCJpdGVtIiwiX3RoaXM3IiwicmVsb2FkIiwidGhhdCIsIm1pbkhlaWdodCIsIm9mZnNldEhlaWdodCIsImV2ZW50IiwiX3RoaXM4IiwiY2xpY2siLCJ0YXJnZXQiLCJvbnRvdWNoc3RhcnQiLCJ0b3VjaHN0YXJ0IiwidG91Y2hlcyIsInNjcmVlblgiLCJvbnRvdWNoZW5kIiwiY2hhbmdlZFRvdWNoZXMiLCJyYW5nZSIsIm9wdGlvbnMiLCJ1cGRhdGUiLCJib290IiwicndkIiwiX3RoaXM5IiwicmVzaXplIiwiY29tcHNvdWwiLCJkZWJvdW5jZSIsIl9jb21wc291bCIsImFyZ3VtZW50cyIsInRvU3RyaW5nIiwiX3RoaXMxMCIsInRocm90dGxlIiwiZGVsYXkiLCJzZXRUaW1lb3V0IiwidGltZW91dCIsIl9sZW4iLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiY2xlYXJUaW1lb3V0IiwicXVlcnkiLCIkcGFyZW50IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiaW5pdCJdLCJzb3VyY2VSb290IjoiIn0=