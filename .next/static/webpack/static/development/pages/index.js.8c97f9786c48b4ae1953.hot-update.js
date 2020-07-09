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
        //console.log("index is over 10")
        _this.setState({
          index: 0
        });
      }

      setTimeout(function () {
        this.setState({
          index: this.state.index + 1
        }); // console.log("after increase")
        // console.log(this.state.index)

        this.myTimer();
      }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)), 5000);
    });

    _this.state = {
      symptomList: ["Sore Throat.", "Fatigue.", "Hungry For Pizza.", "Tired of Being Home.", "Body Aches.", "Empty Wallet.", "Sleepy.", "TBD Symptom..", "Face Mask Tan.", "Long Hair or Mullet.", "Feeling Hot Outside.", "Forgetting What Day It Is.", "$1900 Monthly Grocery Bill"],
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
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx("strong", {
        className: _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.title,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }
      }, "New Side Effects May Include.."), __jsx("div", {
        className: _Symptoms_module_css__WEBPACK_IMPORTED_MODULE_9___default.a.sideEffects,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N5bXB0b21zLmpzIl0sIm5hbWVzIjpbIlN5bXB0b21zIiwicHJvcHMiLCJzdGF0ZSIsImluZGV4Iiwic2V0U3RhdGUiLCJzZXRUaW1lb3V0IiwibXlUaW1lciIsImJpbmQiLCJzeW1wdG9tTGlzdCIsInN0eWxlcyIsInN5bXBDb21wb25lbnQiLCJ0aXRsZSIsInNpZGVFZmZlY3RzIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBRUYsb0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSxrTkE0QlQsWUFBTTtBQUNSLFVBQUssTUFBS0MsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEVBQXhCLEVBQTZCO0FBQ3pCO0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUNELGVBQUssRUFBQztBQUFQLFNBQWQ7QUFDSDs7QUFHTEUsZ0JBQVUsQ0FDTixZQUFXO0FBQ1AsYUFBS0QsUUFBTCxDQUFjO0FBQUNELGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBM0IsU0FBZCxFQURPLENBRVA7QUFDQTs7QUFDQSxhQUFLRyxPQUFMO0FBQ0gsT0FMRCxDQUtFQyxJQUxGLHlHQURNLEVBTVEsSUFOUixDQUFWO0FBT0gsS0ExQ2tCOztBQUdmLFVBQUtMLEtBQUwsR0FBYTtBQUNUTSxpQkFBVyxFQUFHLENBQ1YsY0FEVSxFQUVWLFVBRlUsRUFHVixtQkFIVSxFQUlWLHNCQUpVLEVBS1YsYUFMVSxFQU1WLGVBTlUsRUFPVixTQVBVLEVBUVYsZUFSVSxFQVNWLGdCQVRVLEVBVVYsc0JBVlUsRUFXVixzQkFYVSxFQVlWLDRCQVpVLEVBYVYsNEJBYlUsQ0FETDtBQWdCVEwsV0FBSyxFQUFFO0FBaEJFLEtBQWI7QUFIZTtBQXNCbEI7Ozs7d0NBRW1CO0FBQ25CLFdBQUtHLE9BQUw7QUFDQTs7OzZCQXNCSTtBQUVMLGFBQ0k7QUFBSyxpQkFBUyxFQUFFRywyREFBTSxDQUFDQyxhQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBRUk7QUFBUSxpQkFBUyxFQUFFRCwyREFBTSxDQUFDRSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUZKLEVBSUk7QUFBSyxpQkFBUyxFQUFFRiwyREFBTSxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQXFDLEtBQUtWLEtBQUwsQ0FBV00sV0FBWCxDQUF1QixLQUFLTixLQUFMLENBQVdDLEtBQWxDLENBQXJDLENBSkosQ0FESjtBQVVIOzs7O0VBOURzQlUsNENBQUssQ0FBQ0MsUzs7QUFtRWRkLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy44Yzk3Zjk3ODZjNDhiNGFlMTk1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU3ltcHRvbXMubW9kdWxlLmNzcydcclxuXHJcbmNsYXNzIFN5bXB0b21zIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgc3ltcHRvbUxpc3QgOiBbXHJcbiAgICAgICAgICAgICAgICBcIlNvcmUgVGhyb2F0LlwiLFxyXG4gICAgICAgICAgICAgICAgXCJGYXRpZ3VlLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJIdW5ncnkgRm9yIFBpenphLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJUaXJlZCBvZiBCZWluZyBIb21lLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJCb2R5IEFjaGVzLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJFbXB0eSBXYWxsZXQuXCIsXHJcbiAgICAgICAgICAgICAgICBcIlNsZWVweS5cIixcclxuICAgICAgICAgICAgICAgIFwiVEJEIFN5bXB0b20uLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJGYWNlIE1hc2sgVGFuLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJMb25nIEhhaXIgb3IgTXVsbGV0LlwiLFxyXG4gICAgICAgICAgICAgICAgXCJGZWVsaW5nIEhvdCBPdXRzaWRlLlwiLFxyXG4gICAgICAgICAgICAgICAgXCJGb3JnZXR0aW5nIFdoYXQgRGF5IEl0IElzLlwiLFxyXG4gICAgICAgICAgICAgICAgXCIkMTkwMCBNb250aGx5IEdyb2NlcnkgQmlsbFwiXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGluZGV4OiAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICB0aGlzLm15VGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBteVRpbWVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIHRoaXMuc3RhdGUuaW5kZXggPiAxMSApIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpbmRleCBpcyBvdmVyIDEwXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbmRleDowfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDF9KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWZ0ZXIgaW5jcmVhc2VcIilcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5kZXgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15VGltZXIoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCA1MDAwKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbnJlbmRlcigpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ltcENvbXBvbmVudH0+XHJcblxyXG4gICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5OZXcgU2lkZSBFZmZlY3RzIE1heSBJbmNsdWRlLi48L3N0cm9uZz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lkZUVmZmVjdHN9Pnt0aGlzLnN0YXRlLnN5bXB0b21MaXN0W3RoaXMuc3RhdGUuaW5kZXhdfTwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTeW1wdG9tcztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=