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
        className: "text-center",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BpY3R1cmVCYXIuanMiXSwibmFtZXMiOlsiUGljdHVyZUJhciIsInByb3BzIiwic3RhdGUiLCJpbmRleCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsInNldFRpbWVvdXQiLCJteVRpbWVyIiwiYmluZCIsImltYWdlTGlzdCIsImhlaWdodCIsIndpZHRoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsVTs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjs7QUFEaUIsa05BbUNULFlBQU07QUFDZCxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsS0FBWCxHQUFtQixDQUF2QixFQUEwQjtBQUN4QkMsZUFBTyxDQUFDQyxHQUFSLENBQVksMEJBQVo7O0FBQ0EsY0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRTtBQUFULFNBQWQ7QUFDRDs7QUFFREksZ0JBQVUsQ0FDUixZQUFZO0FBQ1YsYUFBS0QsUUFBTCxDQUFjO0FBQUVILGVBQUssRUFBRSxLQUFLRCxLQUFMLENBQVdDLEtBQVgsR0FBbUI7QUFBNUIsU0FBZDtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWjtBQUNBRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLSCxLQUFMLENBQVdDLEtBQXZCO0FBQ0EsYUFBS0ssT0FBTDtBQUNELE9BTEQsQ0FLRUMsSUFMRix5R0FEUSxFQU9SLElBUFEsQ0FBVjtBQVNELEtBbERrQjs7QUFHakIsVUFBS1AsS0FBTCxHQUFhO0FBQ1hRLGVBQVMsRUFBRSxDQUNULHdIQURTLEVBRVQsdUdBRlMsRUFHVCxtSkFIUyxFQUlULDRGQUpTLENBREE7QUFTWFAsV0FBSyxFQUFFO0FBVEksS0FBYjtBQUhpQjtBQWVsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0ssT0FBTCxHQURrQixDQUVuQjtBQUNBLEssQ0FFRDtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQW1CQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBRVM7QUFDUCxhQUNFO0FBQUssaUJBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLGFBQUssRUFBRTtBQUFFRyxnQkFBTSxFQUFFLE9BQVY7QUFBbUJDLGVBQUssRUFBRTtBQUExQixTQURUO0FBRUUsV0FBRyxFQUFFLEtBQUtWLEtBQUwsQ0FBV1EsU0FBWCxDQUFxQixLQUFLUixLQUFMLENBQVdDLEtBQWhDLENBRlA7QUFHRSxXQUFHLEVBQUMsb0JBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREY7QUFTRDs7OztFQXBGc0JVLDRDQUFLLENBQUNDLFM7O0FBdUZoQmQseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmVlNjIzMmRlYTY0ODg4ODAwZDQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XHJcblxyXG5jbGFzcyBQaWN0dXJlQmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGltYWdlTGlzdDogW1xyXG4gICAgICAgIFwiaHR0cHM6Ly9jZG4uaG9tZWRpY3MuY29tL21lZGlhL2NhdGFsb2cvcHJvZHVjdC9jYWNoZS8xL3RodW1ibmFpbC8xMDAweC8xN2Y4MmY3NDJmZmUxMjdmNDJkY2E5ZGU4MmZiNThiMS9tL3MvbXNrLWYxLmpwZ1wiLFxyXG4gICAgICAgIFwiaHR0cHM6Ly9lbmNyeXB0ZWQtdGJuMC5nc3RhdGljLmNvbS9pbWFnZXM/cT10Ym4lM0FBTmQ5R2NTRmxIaFZYXzZOVjAyRW5tbHNVU3pOQjJMQm9SaExpWDdndFEmdXNxcD1DQVVcIixcclxuICAgICAgICBcImh0dHBzOi8vd3d3LnN1cGVybWFya2V0bmV3cy5jb20vc2l0ZXMvc3VwZXJtYXJrZXRuZXdzLmNvbS9maWxlcy9zdHlsZXMvYXJ0aWNsZV9mZWF0dXJlZF9yZXRpbmEvcHVibGljL0Nvcm9uYXZpcnVzLWVtcHR5LXNoZWx2ZXMucG5nP2l0b2s9ZWM3Z2lJT0tcIixcclxuICAgICAgICBcImh0dHBzOi8vd3d3Lm5pY2VwbmcuY29tL3BuZy9kZXRhaWwvMTE4LTExODYyODFfd2FzaC1oYW5kcy1wbmctd2FzaC15b3VyLWhhbmRzLWNsaXAtYXJ0LnBuZ1wiLFxyXG5cclxuICAgICAgXSxcclxuXHJcbiAgICAgIGluZGV4OiAwLFxyXG5cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMubXlUaW1lcigpO1xyXG4gICAvLyB0aGlzLnBvcHVsYXRlUGljdHVyZUxpc3QoKTtcclxuICB9XHJcblxyXG4gIC8vIHBvcHVsYXRlUGljdHVyZUxpc3QgPSAoKSA9PiB7XHJcbiAgLy8gICB2YXIgaW1nQXJyYXkgPSBuZXcgQXJyYXkoKTtcclxuXHJcbiAgLy8gICBpbWdBcnJheVswXSA9IG5ldyBJbWFnZSgpO1xyXG4gIC8vICAgaW1nQXJyYXlbMF0uc3JjID0gXCIvaW1hZ2VzL3dhc2hpbmctaGFuZHMucG5nXCI7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhcInBpYyBhZGRlZCB0byB0aGUgdGVtcCBhcnJheVwiKVxyXG4gIC8vICAgY29uc29sZS5sb2coaW1nQXJyYXlbMF0pXHJcblxyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7c3RhdGljUGljdHVyZUxpc3Q6IGltZ0FycmF5WzBdfSlcclxuICAvLyAgIGNvbnNvbGUubG9nKFwic2V0IHN0YXRpYyBwaWMgbGlzdFwiKVxyXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5zdGF0aWNQaWN0dXJlTGlzdFswXSlcclxuICAvLyB9O1xyXG5cclxuICBteVRpbWVyID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuc3RhdGUuaW5kZXggPiAzKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwicGljdHVyZSBpbmRleCBpcyBvdmVyIDEwXCIpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgaW5kZXg6IDAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGltZW91dChcclxuICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDEgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlIGluZGV4IGFmdGVyIGluY3JlYXNlXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMubXlUaW1lcigpO1xyXG4gICAgICB9LmJpbmQodGhpcyksXHJcbiAgICAgIDUwMDBcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgLy8gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgICAgdGhpcy5teVRpbWVyKCk7XHJcbiAgLy8gICB9XHJcblxyXG4gIC8vICAgbXlUaW1lciA9ICgpID0+IHtcclxuICAvLyAgICAgaWYgKHRoaXMuc3RhdGUuaW5kZXggPiA0KSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2coXCJwaWN0dXJlIGluZGV4IGlzIG92ZXIgMTBcIik7XHJcbiAgLy8gICAgICAgdGhpcy5zZXRTdGF0ZSh7IGluZGV4OiAwIH0pO1xyXG4gIC8vICAgICB9XHJcblxyXG4gIC8vICAgICBzZXRUaW1lb3V0KFxyXG4gIC8vICAgICAgIGZ1bmN0aW9uICgpIHtcclxuICAvLyAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbmRleDogdGhpcy5zdGF0ZS5pbmRleCArIDEgfSk7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcInBpY3R1cmUgaW5kZXggYWZ0ZXIgaW5jcmVhc2VcIik7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmluZGV4KTtcclxuICAvLyAgICAgICAgIHRoaXMubXlUaW1lcigpO1xyXG4gIC8vICAgICAgIH0uYmluZCh0aGlzKSxcclxuICAvLyAgICAgICA1MDAwXHJcbiAgLy8gICAgICk7XHJcbiAgLy8gICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IFxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCIyMDBweFwiLCB3aWR0aDogXCIyMDBweFwiIH19XHJcbiAgICAgICAgICBzcmM9e3RoaXMuc3RhdGUuaW1hZ2VMaXN0W3RoaXMuc3RhdGUuaW5kZXhdfVxyXG4gICAgICAgICAgYWx0PVwibm8gaW1hZ2UgYXZhaWxhYmxlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQaWN0dXJlQmFyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9