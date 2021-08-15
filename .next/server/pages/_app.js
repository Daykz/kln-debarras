/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layouts/GoTop.js":
/*!*************************************!*\
  !*** ./components/Layouts/GoTop.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GoTop; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/david/Projects/kln-debarras/components/Layouts/GoTop.js\";\n\nclass GoTop extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      is_visible: false\n    };\n  }\n\n  componentDidMount() {\n    var scrollComponent = this;\n    document.addEventListener(\"scroll\", function (e) {\n      scrollComponent.toggleVisibility();\n    });\n  }\n\n  toggleVisibility() {\n    if (window.pageYOffset > 300) {\n      this.setState({\n        is_visible: true\n      });\n    } else {\n      this.setState({\n        is_visible: false\n      });\n    }\n  }\n\n  scrollToTop() {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  }\n\n  render() {\n    const {\n      is_visible\n    } = this.state;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"back-to-top\",\n      children: is_visible && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"top\",\n        onClick: () => this.scrollToTop(),\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n          className: \"fas fa-angle-up\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5pYWwvLi9jb21wb25lbnRzL0xheW91dHMvR29Ub3AuanM/MGZiNCJdLCJuYW1lcyI6WyJHb1RvcCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsImlzX3Zpc2libGUiLCJjb21wb25lbnREaWRNb3VudCIsInNjcm9sbENvbXBvbmVudCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ0b2dnbGVWaXNpYmlsaXR5Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJzZXRTdGF0ZSIsInNjcm9sbFRvVG9wIiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRWUsTUFBTUEsS0FBTixTQUFvQkMsNENBQXBCLENBQThCO0FBQ3pDQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsZ0JBQVUsRUFBRTtBQURILEtBQWI7QUFHSDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDaEIsUUFBSUMsZUFBZSxHQUFHLElBQXRCO0FBQ0FDLFlBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDSCxxQkFBZSxDQUFDSSxnQkFBaEI7QUFDSCxLQUZEO0FBR0g7O0FBRURBLGtCQUFnQixHQUFHO0FBQ2YsUUFBSUMsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQXpCLEVBQThCO0FBQzFCLFdBQUtDLFFBQUwsQ0FBYztBQUNWVCxrQkFBVSxFQUFFO0FBREYsT0FBZDtBQUdILEtBSkQsTUFJTztBQUNILFdBQUtTLFFBQUwsQ0FBYztBQUNWVCxrQkFBVSxFQUFFO0FBREYsT0FBZDtBQUdIO0FBQ0o7O0FBRURVLGFBQVcsR0FBRztBQUNWSCxVQUFNLENBQUNJLFFBQVAsQ0FBZ0I7QUFDWkMsU0FBRyxFQUFFLENBRE87QUFFWkMsY0FBUSxFQUFFO0FBRkUsS0FBaEI7QUFJSDs7QUFFREMsUUFBTSxHQUFHO0FBQ0wsVUFBTTtBQUFFZDtBQUFGLFFBQWlCLEtBQUtELEtBQTVCO0FBQ0Esd0JBQ0k7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBLGdCQUNLQyxVQUFVLGlCQUNQO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQXFCLGVBQU8sRUFBRSxNQUFNLEtBQUtVLFdBQUwsRUFBcEM7QUFBQSwrQkFDSTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQVNIOztBQTdDd0MiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xheW91dHMvR29Ub3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb1RvcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc192aXNpYmxlOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdmFyIHNjcm9sbENvbXBvbmVudCA9IHRoaXM7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgIHNjcm9sbENvbXBvbmVudC50b2dnbGVWaXNpYmlsaXR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlVmlzaWJpbGl0eSgpIHtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaXNfdmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlzX3Zpc2libGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzY3JvbGxUb1RvcCgpIHtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgaXNfdmlzaWJsZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stdG8tdG9wXCI+XHJcbiAgICAgICAgICAgICAgICB7aXNfdmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNjcm9sbFRvVG9wKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtYW5nbGUtdXBcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Layouts/GoTop.js\n");

/***/ }),

/***/ "./components/Layouts/Loader.js":
/*!**************************************!*\
  !*** ./components/Layouts/Loader.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _jsxFileName = \"/home/david/Projects/kln-debarras/components/Layouts/Loader.js\";\n\n\nclass Loader extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"preloader\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"spinner\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"double-bounce1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 9,\n            columnNumber: 25\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"double-bounce2\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 10,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 8,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 17\n      }, this)\n    }, void 0, false);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loader);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5pYWwvLi9jb21wb25lbnRzL0xheW91dHMvTG9hZGVyLmpzP2Y1ZWQiXSwibmFtZXMiOlsiTG9hZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLE1BQU4sU0FBcUJDLDRDQUFyQixDQUErQjtBQUMzQkMsUUFBTSxHQUFHO0FBQ0wsd0JBQ0k7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxTQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUVJO0FBQUsscUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQURKO0FBVUg7O0FBWjBCOztBQWUvQiwrREFBZUYsTUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGF5b3V0cy9Mb2FkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgTG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmVsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb3VibGUtYm91bmNlMVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvdWJsZS1ib3VuY2UyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9hZGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layouts/Loader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ \"./public/css/bootstrap.min.css\");\n/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/animate.min.css */ \"./public/css/animate.min.css\");\n/* harmony import */ var _public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/fontawesome.min.css */ \"./public/css/fontawesome.min.css\");\n/* harmony import */ var _public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_fontawesome_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-modal-video/css/modal-video.min.css */ \"./node_modules/react-modal-video/css/modal-video.min.css\");\n/* harmony import */ var _node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_css_modal_video_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ \"./node_modules/react-accessible-accordion/dist/fancy-example.css\");\n/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-image-lightbox/style.css */ \"./node_modules/react-image-lightbox/style.css\");\n/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-sweet-progress/lib/style.css */ \"./node_modules/react-sweet-progress/lib/style.css\");\n/* harmony import */ var react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_sweet_progress_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/style.css */ \"./public/css/style.css\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../public/css/responsive.css */ \"./public/css/responsive.css\");\n/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-preloading-screen */ \"react-preloading-screen\");\n/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Layouts/Loader */ \"./components/Layouts/Loader.js\");\n/* harmony import */ var _components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layouts/GoTop */ \"./components/Layouts/GoTop.js\");\n\n\nvar _jsxFileName = \"/home/david/Projects/kln-debarras/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nclass MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_11___default()) {\n  render() {\n    const {\n      Component,\n      pageProps\n    } = this.props;\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n          name: \"viewport\",\n          content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__.Preloader, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_GoTop__WEBPACK_IMPORTED_MODULE_14__.default, {\n          scrollStepInPx: \"50\",\n          delayInMs: \"16.66\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__.Placeholder, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_13__.default, {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW5pYWwvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLE1BQU1BLEtBQU4sU0FBb0JDLGtEQUFwQixDQUF3QjtBQUNuQ0MsUUFBTSxHQUFJO0FBQ04sVUFBTTtBQUFFQyxlQUFGO0FBQWFDO0FBQWIsUUFBMkIsS0FBS0MsS0FBdEM7QUFFQSx3QkFDSTtBQUFBLDhCQUNJLDhEQUFDLG1EQUFEO0FBQUEsK0JBQ0k7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFzQixpQkFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFLSSw4REFBQywrREFBRDtBQUFBLGdDQUNJLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUdJLDhEQUFDLCtEQUFEO0FBQU8sd0JBQWMsRUFBQyxJQUF0QjtBQUEyQixtQkFBUyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFLSSw4REFBQyxpRUFBRDtBQUFBLGlDQUNJLDhEQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxKO0FBQUEsb0JBREo7QUFpQkg7O0FBckJrQyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvYW5pbWF0ZS5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2ZvbnRhd2Vzb21lLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL25vZGVfbW9kdWxlcy9yZWFjdC1tb2RhbC12aWRlby9jc3MvbW9kYWwtdmlkZW8ubWluLmNzcydcclxuaW1wb3J0ICdyZWFjdC1hY2Nlc3NpYmxlLWFjY29yZGlvbi9kaXN0L2ZhbmN5LWV4YW1wbGUuY3NzJztcclxuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgXCJyZWFjdC1zd2VldC1wcm9ncmVzcy9saWIvc3R5bGUuY3NzXCI7XHJcbmltcG9ydCAnLi4vcHVibGljL2Nzcy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvcmVzcG9uc2l2ZS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgUHJlbG9hZGVyLCBQbGFjZWhvbGRlciB9IGZyb20gJ3JlYWN0LXByZWxvYWRpbmctc2NyZWVuJztcclxuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXRzL0xvYWRlcic7XHJcbmltcG9ydCBHb1RvcCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dHMvR29Ub3AnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xyXG4gICAgcmVuZGVyICgpIHtcclxuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIHNocmluay10by1maXQ9bm9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgICAgIDxQcmVsb2FkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxHb1RvcCBzY3JvbGxTdGVwSW5QeD1cIjUwXCIgZGVsYXlJbk1zPVwiMTYuNjZcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1BsYWNlaG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9QcmVsb2FkZXI+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./public/css/animate.min.css":
/*!************************************!*\
  !*** ./public/css/animate.min.css ***!
  \************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/fontawesome.min.css":
/*!****************************************!*\
  !*** ./public/css/fontawesome.min.css ***!
  \****************************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/***/ (function() {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ (function() {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-preloading-screen");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_shared_lib_utils_js","vendors-node_modules_next_app_js-node_modules_react-accessible-accordion_dist_fancy-example_c-80b29f"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();