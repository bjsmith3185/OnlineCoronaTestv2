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
      imageList: ["https://cdn.homedics.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/m/s/msk-f1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFlHhVX_6NV02EnmlsUSzNB2LBoRhLiX7gtQ&usqp=CAU", "https://www.supermarketnews.com/sites/supermarketnews.com/files/styles/article_featured_retina/public/Coronavirus-empty-shelves.png?itok=ec7giIOK", "https://www.nicepng.com/png/detail/118-1186281_wash-hands-png-wash-your-hands-clip-art.png"],
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PictureBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.myTimer(); // this.populatePictureList();
    } // populatePictureList = () => {
    //   var imgArray = new Array();
    //   imgArray[0] = new Image();
    //   imgArray[0].src = "/images/washing-hands.png";
    //   console.log("pic added to the temp array")
    //   console.log(imgArray[0])
    //   this.setState({staticPictureList: imgArray[0]})
    //   console.log("set static pic list")
    //   console.log(this.state.staticPictureList[0])
    // };

  }, {
    key: "render",
    //   componentDidMount() {
    //     this.myTimer();
    //   }
    //   myTimer = () => {
    //     if (this.state.index > 4) {
    //       console.log("picture index is over 10");
    //       this.setState({ index: 0 });
    //     }
    //     setTimeout(
    //       function () {
    //         this.setState({ index: this.state.index + 1 });
    //         console.log("picture index after increase");
    //         console.log(this.state.index);
    //         this.myTimer();
    //       }.bind(this),
    //       5000
    //     );
    //   };
    value: function render() {
      return __jsx("div", {
        className: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
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
          lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BpY3R1cmVCYXIuanMiXSwibmFtZXMiOlsiUGljdHVyZUJhciIsInByb3BzIiwic3RhdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJteVRpbWVyIiwiYmluZCIsImltYWdlTGlzdCIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsa05BbUNULFlBQU07QUFDZCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUF2QixFQUEwQjtBQUN4QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRTtBQUFULFNBQWQ7QUFDRDs7QUFFREksZ0JBQVUsQ0FDUixZQUFZO0FBQ1YsYUFBS0QsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBNUIsU0FBZDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsYUFBS0ssT0FBTDtBQUNELE9BTEQsQ0FLRUMsSUFMRix5R0FEUSxFQU9SLElBUFEsQ0FBVjtBQVNELEtBbERrQjs7QUFHakIsVUFBS1AsS0FBTCxHQUFhO0FBQ1hRLGVBQVMsRUFBRSxDQUNULHdIQURTLEVBRVQsdUdBRlMsRUFHVCxtSkFIUyxFQUlULDRGQUpTLENBREE7QUFTWFAsV0FBSyxFQUFFO0FBVEksS0FBYjtBQUhpQjtBQWVsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0ssT0FBTCxHQURrQixDQUVuQjtBQUNBLEssQ0FFRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQW1CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBRVM7QUFDUCxhQUNFO0FBQUssaUJBQVMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxhQUFLLEVBQUU7QUFBRUcsZ0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxlQUFLLEVBQUU7QUFBMUIsU0FEVDtBQUVFLFdBQUcsRUFBRSxLQUFLVixLQUFMLENBQVdRLFNBQVgsQ0FBcUIsS0FBS1IsS0FBTCxDQUFXQyxLQUFoQyxDQUZQO0FBR0UsV0FBRyxFQUFDLG9CQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBU0Q7Ozs7RUFwRnNCVSw0Q0FBSyxDQUFDQyxTOztBQXVGaEJkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4yOWJiODEyOGMyOGFmYzUzNjM3My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgUGljdHVyZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUxpc3Q6IFtcclxuICAgICAgICBcImh0dHBzOi8vY2RuLmhvbWVkaWNzLmNvbS9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvMS90aHVtYm5haWwvMTAwMHgvMTdmODJmNzQyZmZlMTI3ZjQyZGNhOWRlODJmYjU4YjEvbS9zL21zay1mMS5qcGdcIixcclxuICAgICAgICBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjU0ZsSGhWWF82TlYwMkVubWxzVVN6TkIyTEJvUmhMaVg3Z3RRJnVzcXA9Q0FVXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5zdXBlcm1hcmtldG5ld3MuY29tL3NpdGVzL3N1cGVybWFya2V0bmV3cy5jb20vZmlsZXMvc3R5bGVzL2FydGljbGVfZmVhdHVyZWRfcmV0aW5hL3B1YmxpYy9Db3JvbmF2aXJ1cy1lbXB0eS1zaGVsdmVzLnBuZz9pdG9rPWVjN2dpSU9LXCIsXHJcbiAgICAgICAgXCJodHRwczovL3d3dy5uaWNlcG5nLmNvbS9wbmcvZGV0YWlsLzExOC0xMTg2MjgxX3dhc2gtaGFuZHMtcG5nLXdhc2gteW91ci1oYW5kcy1jbGlwLWFydC5wbmdcIixcclxuXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBpbmRleDogMCxcclxuXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm15VGltZXIoKTtcclxuICAgLy8gdGhpcy5wb3B1bGF0ZVBpY3R1cmVMaXN0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBwb3B1bGF0ZVBpY3R1cmVMaXN0ID0gKCkgPT4ge1xyXG4gIC8vICAgdmFyIGltZ0FycmF5ID0gbmV3IEFycmF5KCk7XHJcblxyXG4gIC8vICAgaW1nQXJyYXlbMF0gPSBuZXcgSW1hZ2UoKTtcclxuICAvLyAgIGltZ0FycmF5WzBdLnNyYyA9IFwiL2ltYWdlcy93YXNoaW5nLWhhbmRzLnBuZ1wiO1xyXG4gIC8vICAgY29uc29sZS5sb2coXCJwaWMgYWRkZWQgdG8gdGhlIHRlbXAgYXJyYXlcIilcclxuICAvLyAgIGNvbnNvbGUubG9nKGltZ0FycmF5WzBdKVxyXG5cclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe3N0YXRpY1BpY3R1cmVMaXN0OiBpbWdBcnJheVswXX0pXHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInNldCBzdGF0aWMgcGljIGxpc3RcIilcclxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuc3RhdGljUGljdHVyZUxpc3RbMF0pXHJcbiAgLy8gfTtcclxuXHJcbiAgbXlUaW1lciA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLnN0YXRlLmluZGV4ID4gMykge1xyXG4gICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmUgaW5kZXggaXMgb3ZlciAxMFwiKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiAwIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRpbWVvdXQoXHJcbiAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZSBpbmRleCBhZnRlciBpbmNyZWFzZVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmluZGV4KTtcclxuICAgICAgICB0aGlzLm15VGltZXIoKTtcclxuICAgICAgfS5iaW5kKHRoaXMpLFxyXG4gICAgICA1MDAwXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8vICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICAgIHRoaXMubXlUaW1lcigpO1xyXG4gIC8vICAgfVxyXG5cclxuICAvLyAgIG15VGltZXIgPSAoKSA9PiB7XHJcbiAgLy8gICAgIGlmICh0aGlzLnN0YXRlLmluZGV4ID4gNCkge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZSBpbmRleCBpcyBvdmVyIDEwXCIpO1xyXG4gIC8vICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogMCB9KTtcclxuICAvLyAgICAgfVxyXG5cclxuICAvLyAgICAgc2V0VGltZW91dChcclxuICAvLyAgICAgICBmdW5jdGlvbiAoKSB7XHJcbiAgLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxIH0pO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlIGluZGV4IGFmdGVyIGluY3JlYXNlXCIpO1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5pbmRleCk7XHJcbiAgLy8gICAgICAgICB0aGlzLm15VGltZXIoKTtcclxuICAvLyAgICAgICB9LmJpbmQodGhpcyksXHJcbiAgLy8gICAgICAgNTAwMFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU+IFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VMaXN0W3RoaXMuc3RhdGUuaW5kZXhdfVxyXG4gICAgICAgICAgYWx0PVwibm8gaW1hZ2UgYXZhaWxhYmxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9