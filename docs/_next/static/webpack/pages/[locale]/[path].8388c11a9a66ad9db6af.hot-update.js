webpackHotUpdate_N_E("pages/[locale]/[path]",{

/***/ "./pages/[locale]/[path].js":
/*!**********************************!*\
  !*** ./pages/[locale]/[path].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Documents\\GitHub\\nextjs-static-site\\pages\\[locale]\\[path].js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Page(_ref) {
  var _this = this;

  var content = _ref.content,
      locale = _ref.locale,
      path = _ref.path,
      alternateLocales = _ref.alternateLocales;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: _objectSpread(_objectSpread({}, _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container), {}, {
      maxWidth: "400px"
    }),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
      children: locale.toUpperCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Other locales:", alternateLocales.map(function (locale) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/".concat(locale, "/").concat(path),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              margin: ".5em",
              border: "1px solid",
              padding: ".5em"
            },
            children: locale
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this)
        }, locale, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this);
      })]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

_c = Page;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c;

$RefreshReg$(_c, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2xvY2FsZV0vW3BhdGhdLmpzIl0sIm5hbWVzIjpbIlBhZ2UiLCJjb250ZW50IiwibG9jYWxlIiwicGF0aCIsImFsdGVybmF0ZUxvY2FsZXMiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYXhXaWR0aCIsInRvVXBwZXJDYXNlIiwibWFwIiwibWFyZ2luIiwiYm9yZGVyIiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTs7QUFJQSxTQUFTQSxJQUFULE9BQTJEO0FBQUE7O0FBQUEsTUFBM0NDLE9BQTJDLFFBQTNDQSxPQUEyQztBQUFBLE1BQWxDQyxNQUFrQyxRQUFsQ0EsTUFBa0M7QUFBQSxNQUExQkMsSUFBMEIsUUFBMUJBLElBQTBCO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9CO0FBQ3pELHNCQUNFO0FBQUssU0FBSyxrQ0FBT0MsOERBQU0sQ0FBQ0MsU0FBZDtBQUF5QkMsY0FBUSxFQUFFO0FBQW5DLE1BQVY7QUFBQSw0QkFDRTtBQUFBLGdCQUFLTCxNQUFNLENBQUNNLFdBQVA7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLG1DQUVHSixnQkFBZ0IsQ0FBQ0ssR0FBakIsQ0FBcUIsVUFBQ1AsTUFBRDtBQUFBLDRCQUNwQixxRUFBQyxnREFBRDtBQUFtQixjQUFJLGFBQU1BLE1BQU4sY0FBZ0JDLElBQWhCLENBQXZCO0FBQUEsaUNBQ0U7QUFDRSxpQkFBSyxFQUFFO0FBQ0xPLG9CQUFNLEVBQUUsTUFESDtBQUVMQyxvQkFBTSxFQUFFLFdBRkg7QUFHTEMscUJBQU8sRUFBRTtBQUhKLGFBRFQ7QUFBQSxzQkFPR1Y7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBV0EsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURvQjtBQUFBLE9BQXJCLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFrQkU7QUFBQSxnQkFBSUQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztLQXZCUUQsSTs7QUEyRE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tsb2NhbGVdL1twYXRoXS44Mzg4YzExYTlhNjZhZDlkYjZhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBwYXRoc0RhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhcImRhdGEuanNvblwiKSk7XHJcblxyXG5mdW5jdGlvbiBQYWdlKHsgY29udGVudCwgbG9jYWxlLCBwYXRoLCBhbHRlcm5hdGVMb2NhbGVzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17eyAuLi5zdHlsZXMuY29udGFpbmVyLCBtYXhXaWR0aDogXCI0MDBweFwiIH19PlxyXG4gICAgICA8aDE+e2xvY2FsZS50b1VwcGVyQ2FzZSgpfTwvaDE+XHJcbiAgICAgIDxwPlxyXG4gICAgICAgIE90aGVyIGxvY2FsZXM6XHJcbiAgICAgICAge2FsdGVybmF0ZUxvY2FsZXMubWFwKChsb2NhbGUpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17bG9jYWxlfSBocmVmPXtgLyR7bG9jYWxlfS8ke3BhdGh9YH0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogXCIuNWVtXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkXCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIi41ZW1cIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2xvY2FsZX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxwPntjb250ZW50fTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBwYXRocyA9IFtdO1xyXG5cclxuICBmb3IgKGNvbnN0IFtwYXRoLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhwYXRoc0RhdGEpKSB7XHJcbiAgICBkYXRhLmZvckVhY2goKHsgbG9jYWxlIH0pID0+IHtcclxuICAgICAgY29uc3QgbG9jYWxlRGF0YSA9IHtcclxuICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgIHBhdGgsXHJcbiAgICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHBhdGhzLnB1c2gobG9jYWxlRGF0YSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRocyxcclxuICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKHsgcGFyYW1zOiB7IGxvY2FsZSwgcGF0aCB9IH0pID0+IHtcclxuICBjb25zdCBwYXRoRGF0YSA9IHBhdGhzRGF0YVtwYXRoXTtcclxuICBjb25zdCB7IGNvbnRlbnQgfSA9IHBhdGhEYXRhLmZpbmQoKHBhdGhEYXRhKSA9PiBwYXRoRGF0YS5sb2NhbGUgPT09IGxvY2FsZSk7XHJcbiAgY29uc3QgYWx0ZXJuYXRlTG9jYWxlcyA9IHBhdGhEYXRhXHJcbiAgICAubWFwKCh7IGxvY2FsZSB9KSA9PiBsb2NhbGUpXHJcbiAgICAuZmlsdGVyKChhbHRlcm5hdGVMb2NhbGUpID0+IGFsdGVybmF0ZUxvY2FsZSAhPT0gbG9jYWxlKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IGxvY2FsZSwgcGF0aCwgY29udGVudCwgYWx0ZXJuYXRlTG9jYWxlcyB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9