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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/MainLayout */ \"./components/layouts/MainLayout.tsx\");\n/* harmony import */ var _components_products_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/products/ProductList */ \"./components/products/ProductList.tsx\");\n/* harmony import */ var _hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useProducts */ \"./hooks/useProducts.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var products = (0,_hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__.useProducts)(\"/productos\").products;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            p: 5,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Heading, {\n                    mb: 10,\n                    children: \"Productos\"\n                }, void 0, false, {\n                    fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/pages/index.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_products_ProductList__WEBPACK_IMPORTED_MODULE_2__.ProductList, {\n                    products: products\n                }, void 0, false, {\n                    fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/pages/index.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/pages/index.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/pages/index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"QXEuj9cgl4c0WATo9vBomRv8JeI=\", false, function() {\n    return [\n        _hooks_useProducts__WEBPACK_IMPORTED_MODULE_3__.useProducts\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUFnRDtBQUVVO0FBQ087QUFDZDs7QUFHbkQsSUFBTUssSUFBSSxHQUFhLFdBQU07O0lBQzNCLElBQU0sUUFBVSxHQUFLRCwrREFBVyxDQUFDLFlBQVksQ0FBQyxDQUF0Q0UsUUFBUTtJQUVoQixxQkFDRSw4REFBQ0osc0VBQVU7a0JBQ1QsNEVBQUNGLGlEQUFHO1lBQUNPLENBQUMsRUFBRSxDQUFDOzs4QkFDUCw4REFBQ04scURBQU87b0JBQUNPLEVBQUUsRUFBRSxFQUFFOzhCQUFFLFdBQVM7Ozs7O3lCQUFVOzhCQUNwQyw4REFBQ0wseUVBQVc7b0JBQUNHLFFBQVEsRUFBRUEsUUFBUTs7Ozs7eUJBQUk7Ozs7OztpQkFDL0I7Ozs7O2FBQ0ssQ0FDYjtDQUNIO0dBWEtELElBQUk7O1FBQ2FELDJEQUFXOzs7QUFENUJDLEtBQUFBLElBQUk7QUFhViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBNYWluTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dHMvTWFpbkxheW91dFwiO1xuaW1wb3J0IHsgUHJvZHVjdExpc3QgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0TGlzdFwiO1xuaW1wb3J0IHsgdXNlUHJvZHVjdHMgfSBmcm9tIFwiLi4vaG9va3MvdXNlUHJvZHVjdHNcIjtcbmltcG9ydCB7IElQcm9kdWN0IH0gZnJvbSBcIi4uL2ludGVyZmFjZXNcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvZHVjdHMgfSA9IHVzZVByb2R1Y3RzKFwiL3Byb2R1Y3Rvc1wiKSBhc3twcm9kdWN0czogSVByb2R1Y3RbXX07XG5cbiAgcmV0dXJuIChcbiAgICA8TWFpbkxheW91dD5cbiAgICAgIDxCb3ggcD17NX0+XG4gICAgICAgIDxIZWFkaW5nIG1iPXsxMH0+UHJvZHVjdG9zPC9IZWFkaW5nPlxuICAgICAgICA8UHJvZHVjdExpc3QgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9NYWluTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJCb3giLCJIZWFkaW5nIiwiTWFpbkxheW91dCIsIlByb2R1Y3RMaXN0IiwidXNlUHJvZHVjdHMiLCJIb21lIiwicHJvZHVjdHMiLCJwIiwibWIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});