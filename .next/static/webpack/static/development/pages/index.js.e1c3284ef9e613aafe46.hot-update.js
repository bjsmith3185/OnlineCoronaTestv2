webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Symptoms.js":
/*!********************************!*\
  !*** ./components/Symptoms.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Symptoms.module.css */ "./components/Symptoms.module.css");
/* harmony import */ var _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Brian Smith\\Desktop\\My_Projects\\CoronaTestv2\\OnlineCoronaTestv2\\components\\Symptoms.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var Symptoms = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Symptoms, _React$Component);

  var _super = _createSuper(Symptoms);

  function Symptoms(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Symptoms);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "myTimer", function () {
      if (_this.state.index > 11) {
        console.log("index is over 10");

        _this.setState({
          index: 0
        });
      }

      setTimeout(function () {
        this.setState({
          index: this.state.index + 1
        });
        console.log("after increase");
        console.log(this.state.index);
        this.myTimer();
      }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)), 5000);
    });

    _this.state = {
      symptomList: ["Sore Throat.", "Fatigue.", "Hungry For Pizza.", "Tired of Being Home.", "Body Aches.", "Empty Wallet.", "Sleepy.", "TBD Symptom..", "Face Mask Tan.", "Long Hair or Mullet.", "Feeling Hot Outside.", "Forgetting What Day It Is."],
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Symptoms, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.myTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.sympComponent,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, "New Side Effects Include.."), __jsx("div", {
        className: _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.sideEffects,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }
      }, this.state.symptomList[this.state.index]));
    }
  }]);

  return Symptoms;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Symptoms);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N5bXB0b21zLmpzIl0sIm5hbWVzIjpbIlN5bXB0b21zIiwicHJvcHMiLCJzdGF0ZSIsImluZGV4IiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwic2V0VGltZW91dCIsIm15VGltZXIiLCJiaW5kIiwic3ltcHRvbUxpc3QiLCJzdHlsZXMiLCJzeW1wQ29tcG9uZW50IiwidGl0bGUiLCJzaWRlRWZmZWN0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztJQUVNQSxROzs7OztBQUVGLG9CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsa05BMkJULFlBQU07QUFDUixVQUFLLE1BQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixFQUF4QixFQUE2QjtBQUN6QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUNILGVBQUssRUFBQztBQUFQLFNBQWQ7QUFDSDs7QUFHTEksZ0JBQVUsQ0FDTixZQUFXO0FBQ1AsYUFBS0QsUUFBTCxDQUFjO0FBQUNILGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBM0IsU0FBZDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsYUFBS0ssT0FBTDtBQUNILE9BTEQsQ0FLRUMsSUFMRix5R0FETSxFQU1RLElBTlIsQ0FBVjtBQU9ILEtBekNrQjs7QUFHZixVQUFLUCxLQUFMLEdBQWE7QUFDVFEsaUJBQVcsRUFBRyxDQUNWLGNBRFUsRUFFVixVQUZVLEVBR1YsbUJBSFUsRUFJVixzQkFKVSxFQUtWLGFBTFUsRUFNVixlQU5VLEVBT1YsU0FQVSxFQVFWLGVBUlUsRUFTVixnQkFUVSxFQVVWLHNCQVZVLEVBV1Ysc0JBWFUsRUFZViw0QkFaVSxDQURMO0FBZVRQLFdBQUssRUFBRTtBQWZFLEtBQWI7QUFIZTtBQXFCbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtLLE9BQUw7QUFDQTs7OzZCQXNCSTtBQUVMLGFBQ0k7QUFBSyxpQkFBUyxFQUFFRywyREFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUk7QUFBSyxpQkFBUyxFQUFFRCwyREFBTSxDQUFDRSxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUZKLEVBSUk7QUFBSyxpQkFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDLEtBQUtaLEtBQUwsQ0FBV1EsV0FBWCxDQUF1QixLQUFLUixLQUFMLENBQVdDLEtBQWxDLENBQXJDLENBSkosQ0FESjtBQVVIOzs7O0VBN0RzQlksNENBQUssQ0FBQ0MsUzs7QUFrRWRoQix1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuZTFjMzI4NGVmOWU2MTNhYWZlNDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N5bXB0b21zLm1vZHVsZS5jc3MnXHJcblxyXG5jbGFzcyBTeW1wdG9tcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIHN5bXB0b21MaXN0IDogW1xyXG4gICAgICAgICAgICAgICAgXCJTb3JlIFRocm9hdC5cIixcclxuICAgICAgICAgICAgICAgIFwiRmF0aWd1ZS5cIixcclxuICAgICAgICAgICAgICAgIFwiSHVuZ3J5IEZvciBQaXp6YS5cIixcclxuICAgICAgICAgICAgICAgIFwiVGlyZWQgb2YgQmVpbmcgSG9tZS5cIixcclxuICAgICAgICAgICAgICAgIFwiQm9keSBBY2hlcy5cIixcclxuICAgICAgICAgICAgICAgIFwiRW1wdHkgV2FsbGV0LlwiLFxyXG4gICAgICAgICAgICAgICAgXCJTbGVlcHkuXCIsXHJcbiAgICAgICAgICAgICAgICBcIlRCRCBTeW1wdG9tLi5cIixcclxuICAgICAgICAgICAgICAgIFwiRmFjZSBNYXNrIFRhbi5cIixcclxuICAgICAgICAgICAgICAgIFwiTG9uZyBIYWlyIG9yIE11bGxldC5cIixcclxuICAgICAgICAgICAgICAgIFwiRmVlbGluZyBIb3QgT3V0c2lkZS5cIixcclxuICAgICAgICAgICAgICAgIFwiRm9yZ2V0dGluZyBXaGF0IERheSBJdCBJcy5cIlxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBpbmRleDogMFxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgdGhpcy5teVRpbWVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbXlUaW1lciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCB0aGlzLnN0YXRlLmluZGV4ID4gMTEgKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4IGlzIG92ZXIgMTBcIilcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OjB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KFxyXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luZGV4OiB0aGlzLnN0YXRlLmluZGV4ICsgMX0pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBpbmNyZWFzZVwiKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbmRleClcclxuICAgICAgICAgICAgICAgIHRoaXMubXlUaW1lcigpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIDUwMDApXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxucmVuZGVyKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zeW1wQ29tcG9uZW50fT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pk5ldyBTaWRlIEVmZmVjdHMgSW5jbHVkZS4uPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZGVFZmZlY3RzfT57dGhpcy5zdGF0ZS5zeW1wdG9tTGlzdFt0aGlzLnN0YXRlLmluZGV4XX08L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG59XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3ltcHRvbXM7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9