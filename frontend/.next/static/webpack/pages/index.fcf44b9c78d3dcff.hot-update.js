"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/products/ProductList.tsx":
/*!*********************************************!*\
  !*** ./components/products/ProductList.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductList\": function() { return /* binding */ ProductList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ \"./components/products/index.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\nvar _this = undefined;\n\n\n\nvar ProductList = function(param) {\n    var products = param.products;\n    var _this1 = _this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        templateColumns: {\n            base: \"1\",\n            md: \"repeat(2, 1fr)\",\n            lg: \"repeat(4, 1fr)\"\n        },\n        justifyContent: \"center\",\n        gap: 6,\n        p: {\n            base: 2,\n            md: 4\n        },\n        children: products.map(function(product) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.ProductCard, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductList.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.ProductCard, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductList.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.ProductCard, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductList.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(___WEBPACK_IMPORTED_MODULE_1__.ProductCard, {\n                        product: product\n                    }, product.id, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductList.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, _this1)\n                ]\n            }, void 0, true);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductList.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = ProductList;\nvar _c;\n$RefreshReg$(_c, \"ProductList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RMaXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUNpQztBQUVpQjtBQU0zQyxJQUFNRSxXQUFXLEdBQWMsZ0JBQWtCO1FBQWZDLFFBQVEsU0FBUkEsUUFBUTs7SUFDL0MscUJBQ0UsOERBQUNGLGtEQUFJO1FBQ0hHLGVBQWUsRUFBRTtZQUNmQyxJQUFJLEVBQUUsR0FBRztZQUNUQyxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCQyxFQUFFLEVBQUUsZ0JBQWdCO1NBQ3JCO1FBQ0RDLGNBQWMsRUFBQyxRQUFRO1FBQ3ZCQyxHQUFHLEVBQUUsQ0FBQztRQUNOQyxDQUFDLEVBQUU7WUFBRUwsSUFBSSxFQUFFLENBQUM7WUFBRUMsRUFBRSxFQUFFLENBQUM7U0FBRTtrQkFFcEJILFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLE9BQU87aUNBQ3BCOztrQ0FDQSw4REFBQ1osMENBQVc7d0JBQWtCWSxPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7OEJBQXNCO2tDQUNsRCw4REFBQ2IsMENBQVc7d0JBQWtCWSxPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7OEJBQXNCO2tDQUNsRCw4REFBQ2IsMENBQVc7d0JBQWtCWSxPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7OEJBQXNCO2tDQUNsRCw4REFBQ2IsMENBQVc7d0JBQWtCWSxPQUFPLEVBQUVBLE9BQU87dUJBQTVCQSxPQUFPLENBQUNDLEVBQUU7Ozs7OEJBQXNCOzs0QkFDL0M7U0FDSixDQUFDOzs7OzthQUNHLENBQ1A7Q0FDSCxDQUFDO0FBdEJXWCxLQUFBQSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcHJvZHVjdHMvUHJvZHVjdExpc3QudHN4P2VkNWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkIH0gZnJvbSBcIi4vXCI7XG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5pbXBvcnQgeyBHcmlkLCBHcmlkSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb2R1Y3RzOiBJUHJvZHVjdFtdO1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdExpc3Q6IEZDPFByb3BzPiA9ICh7IHByb2R1Y3RzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8R3JpZFxuICAgICAgdGVtcGxhdGVDb2x1bW5zPXt7XG4gICAgICAgIGJhc2U6IFwiMVwiLFxuICAgICAgICBtZDogXCJyZXBlYXQoMiwgMWZyKVwiLFxuICAgICAgICBsZzogXCJyZXBlYXQoNCwgMWZyKVwiLFxuICAgICAgfX1cbiAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgIGdhcD17Nn1cbiAgICAgIHA9e3sgYmFzZTogMiwgbWQ6IDQgfX1cbiAgICA+XG4gICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XG4gICAgICAgIDwvPlxuICAgICAgKSl9XG4gICAgPC9HcmlkPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJQcm9kdWN0Q2FyZCIsIkdyaWQiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwidGVtcGxhdGVDb2x1bW5zIiwiYmFzZSIsIm1kIiwibGciLCJqdXN0aWZ5Q29udGVudCIsImdhcCIsInAiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductList.tsx\n");

/***/ })

});