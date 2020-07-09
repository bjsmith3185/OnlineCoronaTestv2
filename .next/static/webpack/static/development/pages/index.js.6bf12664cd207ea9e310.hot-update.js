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
      if (_this.state.index > 6) {
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
      imageList: ["https://cdn.homedics.com/media/catalog/product/cache/1/thumbnail/1000x/17f82f742ffe127f42dca9de82fb58b1/m/s/msk-f1.jpg", // "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFlHhVX_6NV02EnmlsUSzNB2LBoRhLiX7gtQ&usqp=CAU",
      "https://img.foodmanufacturing.com/files/base/indm/all/image/2020/04/16x9/AP20097304949344.5e8ca660dd23f.png?auto=format&fit=crop&h=394&w=700", "https://www.nicepng.com/png/detail/118-1186281_wash-hands-png-wash-your-hands-clip-art.png", // "https://www.clipartmax.com/png/middle/196-1962687_washing-hands-with-soap-cartoon-download-washing-hands-clip-art.png",
      "https://www.pngkit.com/png/detail/164-1643216_himalaya-hand-sanitizer-pure-hands-500-ml-himalaya.png", "https://images.squarespace-cdn.com/content/v1/56a7b5951c1210756e3465c1/1588260842867-U09QCYF913PWBZUR5NA0/ke17ZwdGBToddI8pDm48kGh9ZJ2O0qy0uKSL-_2aFaR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0tVKkOu97tLoEUCMOIXiAV46WLB4Mpo4oPXEhDdhWMhycxyyYCssjrvYNcG08yYyYQ/Covid.png", "https://cdn.searchenginejournal.com/wp-content/uploads/2020/03/how-to-work-from-home-5e7b35bdf1955.png"],
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
          lineNumber: 50,
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
          lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BpY3R1cmVCYXIuanMiXSwibmFtZXMiOlsiUGljdHVyZUJhciIsInByb3BzIiwic3RhdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJteVRpbWVyIiwiYmluZCIsImltYWdlTGlzdCIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsa05BMEJULFlBQU07QUFDZCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUF2QixFQUEwQjtBQUN4QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRTtBQUFULFNBQWQ7QUFDRDs7QUFFREksZ0JBQVUsQ0FDUixZQUFZO0FBQ1YsYUFBS0QsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBNUIsU0FBZDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsYUFBS0ssT0FBTDtBQUNELE9BTEQsQ0FLRUMsSUFMRix5R0FEUSxFQU9SLElBUFEsQ0FBVjtBQVNELEtBekNrQjs7QUFHakIsVUFBS1AsS0FBTCxHQUFhO0FBQ1hRLGVBQVMsRUFBRSxDQUNULHdIQURTLEVBRVQ7QUFDQSxvSkFIUyxFQUlULDRGQUpTLEVBS1Q7QUFDQSw0R0FOUyxFQU9ULDRVQVBTLEVBUVQsd0dBUlMsQ0FEQTtBQWFYUCxXQUFLLEVBQUU7QUFiSSxLQUFiO0FBSGlCO0FBbUJsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0ssT0FBTDtBQUNEOzs7NkJBcUJRO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFDRSxhQUFLLEVBQUU7QUFBRUcsZ0JBQU0sRUFBRSxPQUFWO0FBQW1CQyxlQUFLLEVBQUU7QUFBMUIsU0FEVDtBQUVFLFdBQUcsRUFBRSxLQUFLVixLQUFMLENBQVdRLFNBQVgsQ0FBcUIsS0FBS1IsS0FBTCxDQUFXQyxLQUFoQyxDQUZQO0FBR0UsV0FBRyxFQUFDLG9CQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQURGO0FBU0Q7Ozs7RUF2RHNCVSw0Q0FBSyxDQUFDQyxTOztBQTBEaEJkLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy42YmYxMjY2NGNkMjA3ZWE5ZTMxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xyXG5cclxuY2xhc3MgUGljdHVyZUJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpbWFnZUxpc3Q6IFtcclxuICAgICAgICBcImh0dHBzOi8vY2RuLmhvbWVkaWNzLmNvbS9tZWRpYS9jYXRhbG9nL3Byb2R1Y3QvY2FjaGUvMS90aHVtYm5haWwvMTAwMHgvMTdmODJmNzQyZmZlMTI3ZjQyZGNhOWRlODJmYjU4YjEvbS9zL21zay1mMS5qcGdcIixcclxuICAgICAgICAvLyBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjU0ZsSGhWWF82TlYwMkVubWxzVVN6TkIyTEJvUmhMaVg3Z3RRJnVzcXA9Q0FVXCIsXHJcbiAgICAgICAgXCJodHRwczovL2ltZy5mb29kbWFudWZhY3R1cmluZy5jb20vZmlsZXMvYmFzZS9pbmRtL2FsbC9pbWFnZS8yMDIwLzA0LzE2eDkvQVAyMDA5NzMwNDk0OTM0NC41ZThjYTY2MGRkMjNmLnBuZz9hdXRvPWZvcm1hdCZmaXQ9Y3JvcCZoPTM5NCZ3PTcwMFwiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly93d3cubmljZXBuZy5jb20vcG5nL2RldGFpbC8xMTgtMTE4NjI4MV93YXNoLWhhbmRzLXBuZy13YXNoLXlvdXItaGFuZHMtY2xpcC1hcnQucG5nXCIsXHJcbiAgICAgICAgLy8gXCJodHRwczovL3d3dy5jbGlwYXJ0bWF4LmNvbS9wbmcvbWlkZGxlLzE5Ni0xOTYyNjg3X3dhc2hpbmctaGFuZHMtd2l0aC1zb2FwLWNhcnRvb24tZG93bmxvYWQtd2FzaGluZy1oYW5kcy1jbGlwLWFydC5wbmdcIixcclxuICAgICAgICBcImh0dHBzOi8vd3d3LnBuZ2tpdC5jb20vcG5nL2RldGFpbC8xNjQtMTY0MzIxNl9oaW1hbGF5YS1oYW5kLXNhbml0aXplci1wdXJlLWhhbmRzLTUwMC1tbC1oaW1hbGF5YS5wbmdcIixcclxuICAgICAgICBcImh0dHBzOi8vaW1hZ2VzLnNxdWFyZXNwYWNlLWNkbi5jb20vY29udGVudC92MS81NmE3YjU5NTFjMTIxMDc1NmUzNDY1YzEvMTU4ODI2MDg0Mjg2Ny1VMDlRQ1lGOTEzUFdCWlVSNU5BMC9rZTE3WndkR0JUb2RkSThwRG00OGtHaDlaSjJPMHF5MHVLU0wtXzJhRmFSN2dRYTNINzhIM1kwdHhqYWl2XzBmRG9PdnhjZE1tTUtrRHN5VXFNU3NNV3hIazcyNXlpaUhDQ0xmcmg4TzF6NFlUekh2bktoeXA2RGEtTllyb09XM1pHam9CS3kzYXpxa3U4MEM3ODlsMHRWS2tPdTk3dExvRVVDTU9JWGlBVjQ2V0xCNE1wbzRvUFhFaERkaFdNaHljeHl5WUNzc2pydllOY0cwOHlZeVlRL0NvdmlkLnBuZ1wiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4uc2VhcmNoZW5naW5lam91cm5hbC5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDMvaG93LXRvLXdvcmstZnJvbS1ob21lLTVlN2IzNWJkZjE5NTUucG5nXCJcclxuXHJcbiAgICAgIF0sXHJcblxyXG4gICAgICBpbmRleDogMCxcclxuXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLm15VGltZXIoKTtcclxuICB9XHJcblxyXG5cclxuICBteVRpbWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5kZXggPiA2KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZSBpbmRleCBpcyBvdmVyIDEwXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDEgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlIGluZGV4IGFmdGVyIGluY3JlYXNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMubXlUaW1lcigpO1xyXG4gICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBcclxuICAgICAgICA8aW1nXHJcbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiMjAwcHhcIiB9fVxyXG4gICAgICAgICAgc3JjPXt0aGlzLnN0YXRlLmltYWdlTGlzdFt0aGlzLnN0YXRlLmluZGV4XX1cclxuICAgICAgICAgIGFsdD1cIm5vIGltYWdlIGF2YWlsYWJsZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGljdHVyZUJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==