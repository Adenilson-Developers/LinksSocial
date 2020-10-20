webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\home\\Documents\\Dev10k\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(_ref) {
  var data = _ref.data;
  console.log("client");
  return __jsx("div", {
    style: {
      bacgroundColor: data.corfundo,
      color: data.cortexto
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, "instagrampage(Sentral de LInks)"), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, data.body.map(function (item) {
    if (item.slice_type === 'secao') {
      return __jsx("h2", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 20
        }
      }, item.primary.nome);
      return __jsx("pre", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 24
        }
      }, JSON.stringify(item));
    }

    if (item.slice_type === 'link') {
      return __jsx("li", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: item.primary.destino.url,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 23
        }
      }, item.primary.texto_do_botao));
    }

    return null;
  })), __jsx("pre", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, JSON.stringify(data, null, 2)));
};

_c = Index;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImJhY2dyb3VuZENvbG9yIiwiY29yZnVuZG8iLCJjb2xvciIsImNvcnRleHRvIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJzbGljZV90eXBlIiwicHJpbWFyeSIsIm5vbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiZGVzdGlubyIsInVybCIsInRleHRvX2RvX2JvdGFvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFJQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUFZO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0EsU0FDSTtBQUFLLFNBQUssRUFBRTtBQUFDQyxvQkFBYyxFQUFFSCxJQUFJLENBQUNJLFFBQXRCO0FBQ1pDLFdBQUssRUFBRUwsSUFBSSxDQUFDTTtBQURBLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBSEksRUFJSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0tOLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxHQUFWLENBQWMsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQUdBLElBQUksQ0FBQ0MsVUFBTCxLQUFvQixPQUF2QixFQUErQjtBQUMvQixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBS0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLElBQWxCLENBQVA7QUFDSSxhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBTUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLElBQWYsQ0FBTixDQUFQO0FBQ0g7O0FBQ0QsUUFBR0EsSUFBSSxDQUFDQyxVQUFMLEtBQW9CLE1BQXZCLEVBQThCO0FBQzFCLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFO0FBQUcsWUFBSSxFQUFFRCxJQUFJLENBQUNFLE9BQUwsQ0FBYUksT0FBYixDQUFxQkMsR0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLUCxJQUFJLENBQUNFLE9BQUwsQ0FBYU0sY0FEbEIsQ0FERixDQURKO0FBT0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0gsR0FmQSxDQURMLENBSkksRUF1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFNSixJQUFJLENBQUNDLFNBQUwsQ0FBZWQsSUFBZixFQUFxQixJQUFyQixFQUEyQixDQUEzQixDQUFOLENBdkJJLENBREo7QUEyQkgsQ0E3QkQ7O0tBQU1ELEs7O0FBMENTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xNDA0YzM1ZTc2YjdjOGY0NTcyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe2RhdGF9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNsaWVudFwiKTtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7YmFjZ3JvdW5kQ29sb3I6IGRhdGEuY29yZnVuZG8sXHJcbiAgICAgICAgY29sb3I6IGRhdGEuY29ydGV4dG99fT5cclxuXHJcbiAgICA8aDE+aW5zdGFncmFtcGFnZShTZW50cmFsIGRlIExJbmtzKTwvaDE+XHJcbiAgICA8dWw+XHJcbiAgICAgICAge2RhdGEuYm9keS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYoaXRlbS5zbGljZV90eXBlID09PSAnc2VjYW8nKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxoMj57aXRlbS5wcmltYXJ5Lm5vbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIHJldHVybiA8cHJlPntKU09OLnN0cmluZ2lmeShpdGVtKX08L3ByZT5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpdGVtLnNsaWNlX3R5cGUgPT09ICdsaW5rJyl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2l0ZW0ucHJpbWFyeS5kZXN0aW5vLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpbWFyeS50ZXh0b19kb19ib3Rhb31cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC91bD5cclxuICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpfTwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXJcIik7XHJcbiAgICBjb25zdCBjbGllbnQgPSBQcmlzbWljLmNsaWVudCgnaHR0cHM6Ly9hZGVuaWxzb25kZXYuY2RuLnByaXNtaWMuaW8vYXBpL3YyJyk7XHJcbiAgICBjb25zdCBjZW50cmFsTGlua3MgPSBhd2FpdCBjbGllbnQuZ2V0U2luZ2xlKFwiY2VudHJhbGxpbmtzXCIpO1xyXG4gICAgY29uc29sZS5sb2coY2VudHJhbExpbmtzKTtcclxuICAgIHJldHVybiB7IHByb3BzOntcclxuICAgICAgICBkYXRhOiBjZW50cmFsTGlua3MuZGF0YSxcclxuICAgIH0sXHJcbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=