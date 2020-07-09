webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/PictureBar.js":
/*!**********************************!*\
  !*** ./components/PictureBar.js ***!
  \**********************************/
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







var _jsxFileName = "C:\\Users\\Brian Smith\\Desktop\\My_Projects\\CoronaTestv2\\OnlineCoronaTestv2\\components\\PictureBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var PictureBar = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(PictureBar, _React$Component);

  var _super = _createSuper(PictureBar);

  function PictureBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PictureBar);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "myTimer", function () {
      if (_this.state.index > 3) {
        console.log("picture index is over 10");

        _this.setState({
          index: 0
        });
      }

      setTimeout(function () {
        this.setState({
          index: this.state.index + 1
        });
        console.log("picture index after increase");
        console.log(this.state.index);
        this.myTimer();
      }.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)), 5000);
    });

    _this.state = {
      imageList: ["https://cdn.homedics.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/m/s/msk-f1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFlHhVX_6NV02EnmlsUSzNB2LBoRhLiX7gtQ&usqp=CAU", "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Coronavirus-empty-shelves.png?itok=ec7giIOK", "https://www.nicepng.com/png/detail/118-1186281_wash-hands-png-wash-your-hands-clip-art.png", "https://www.clipartmax.com/png/middle/196-1962687_washing-hands-with-soap-cartoon-download-washing-hands-clip-art.png", ""],
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PictureBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.myTimer();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx("img", {
        style: {
          height: "200px",
          width: "200px"
        },
        src: this.state.imageList[this.state.index],
        alt: "no image available",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }));
    }
  }]);

  return PictureBar;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PictureBar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BpY3R1cmVCYXIuanMiXSwibmFtZXMiOlsiUGljdHVyZUJhciIsInByb3BzIiwic3RhdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJteVRpbWVyIiwiYmluZCIsImltYWdlTGlzdCIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsa05Bd0JULFlBQU07QUFDZCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUF2QixFQUEwQjtBQUN4QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRTtBQUFULFNBQWQ7QUFDRDs7QUFFREksZ0JBQVUsQ0FDUixZQUFZO0FBQ1YsYUFBS0QsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBNUIsU0FBZDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsYUFBS0ssT0FBTDtBQUNELE9BTEQsQ0FLRUMsSUFMRix5R0FEUSxFQU9SLElBUFEsQ0FBVjtBQVNELEtBdkNrQjs7QUFHakIsVUFBS1AsS0FBTCxHQUFhO0FBQ1hRLGVBQVMsRUFBRSxDQUNULHdIQURTLEVBRVQsdUdBRlMsRUFHVCxtSkFIUyxFQUlULDRGQUpTLEVBS1QsdUhBTFMsRUFNVCxFQU5TLENBREE7QUFXWFAsV0FBSyxFQUFFO0FBWEksS0FBYjtBQUhpQjtBQWlCbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtLLE9BQUw7QUFDRDs7OzZCQXFCUTtBQUNQLGFBQ0U7QUFBSyxpQkFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQ0UsYUFBSyxFQUFFO0FBQUVHLGdCQUFNLEVBQUUsT0FBVjtBQUFtQkMsZUFBSyxFQUFFO0FBQTFCLFNBRFQ7QUFFRSxXQUFHLEVBQUUsS0FBS1YsS0FBTCxDQUFXUSxTQUFYLENBQXFCLEtBQUtSLEtBQUwsQ0FBV0MsS0FBaEMsQ0FGUDtBQUdFLFdBQUcsRUFBQyxvQkFITjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERjtBQVNEOzs7O0VBckRzQlUsNENBQUssQ0FBQ0MsUzs7QUF3RGhCZCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODZiZGUzN2Y3YjE3MjExMjViYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcclxuXHJcbmNsYXNzIFBpY3R1cmVCYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaW1hZ2VMaXN0OiBbXHJcbiAgICAgICAgXCJodHRwczovL2Nkbi5ob21lZGljcy5jb20vbWVkaWEvY2F0YWxvZy9wcm9kdWN0L2NhY2hlLzEvdGh1bWJuYWlsLzEwMDB4LzE3ZjgyZjc0MmZmZTEyN2Y0MmRjYTlkZTgyZmI1OGIxL20vcy9tc2stZjEuanBnXCIsXHJcbiAgICAgICAgXCJodHRwczovL2VuY3J5cHRlZC10Ym4wLmdzdGF0aWMuY29tL2ltYWdlcz9xPXRibiUzQUFOZDlHY1NGbEhoVlhfNk5WMDJFbm1sc1VTek5CMkxCb1JoTGlYN2d0USZ1c3FwPUNBVVwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly93d3cuc3VwZXJtYXJrZXRuZXdzLmNvbS9zaXRlcy9zdXBlcm1hcmtldG5ld3MuY29tL2ZpbGVzL3N0eWxlcy9hcnRpY2xlX2ZlYXR1cmVkX3JldGluYS9wdWJsaWMvQ29yb25hdmlydXMtZW1wdHktc2hlbHZlcy5wbmc/aXRvaz1lYzdnaUlPS1wiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly93d3cubmljZXBuZy5jb20vcG5nL2RldGFpbC8xMTgtMTE4NjI4MV93YXNoLWhhbmRzLXBuZy13YXNoLXlvdXItaGFuZHMtY2xpcC1hcnQucG5nXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5jbGlwYXJ0bWF4LmNvbS9wbmcvbWlkZGxlLzE5Ni0xOTYyNjg3X3dhc2hpbmctaGFuZHMtd2l0aC1zb2FwLWNhcnRvb24tZG93bmxvYWQtd2FzaGluZy1oYW5kcy1jbGlwLWFydC5wbmdcIixcclxuICAgICAgICBcIlwiXHJcblxyXG4gICAgICBdLFxyXG5cclxuICAgICAgaW5kZXg6IDAsXHJcblxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5teVRpbWVyKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbXlUaW1lciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmluZGV4ID4gMykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmUgaW5kZXggaXMgb3ZlciAxMFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZSBpbmRleCBhZnRlciBpbmNyZWFzZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmluZGV4KTtcclxuICAgICAgICB0aGlzLm15VGltZXIoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gXHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjIwMHB4XCIsIHdpZHRoOiBcIjIwMHB4XCIgfX1cclxuICAgICAgICAgIHNyYz17dGhpcy5zdGF0ZS5pbWFnZUxpc3RbdGhpcy5zdGF0ZS5pbmRleF19XHJcbiAgICAgICAgICBhbHQ9XCJubyBpbWFnZSBhdmFpbGFibGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBpY3R1cmVCYXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=