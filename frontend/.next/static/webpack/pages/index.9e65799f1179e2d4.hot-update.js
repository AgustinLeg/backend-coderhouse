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

/***/ "./components/products/ProductCard.tsx":
/*!*********************************************!*\
  !*** ./components/products/ProductCard.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ \"./context/index.ts\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProductCard = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: product.id,\n        name: product.name,\n        price: product.price,\n        image: product.image,\n        quantity: 1,\n        timestamp: \"0\"\n    }), tempCartProduct = ref[0], setTempCartProduct = ref[1];\n    var addProductToCart = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__.CartContext).addProductToCart;\n    var onAddProduct = function() {\n        addProductToCart(tempCartProduct);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.LinkBox, {\n        as: \"article\",\n        borderWidth: \"1px\",\n        position: \"relative\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                src: \"https://bbfotografia.com/wp-content/uploads/2021/01/SIMPLES-300x300.jpg\",\n                alt: \"Picture of \".concat(product.name),\n                w: \"full\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n                mt: \"1\",\n                justifyContent: \"space-between\",\n                alignContent: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/producto/\".concat(product.slug),\n                        passHref: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.LinkOverlay, {\n                            as: \"h4\",\n                            fontSize: \"lg\",\n                            fontWeight: \"bold\",\n                            children: product.name\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                        fontSize: \"md\",\n                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray.800\", \"white\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                as: \"span\",\n                                color: \"gray.600\",\n                                fontSize: \"lg\",\n                                children: \"$\"\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            Number(product.price).toFixed(2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductCard, \"/eF7b8l2kczKpoGUGlk5OQ41kMg=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue\n    ];\n});\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBaUQ7QUFldkI7QUFFTztBQUlXOztBQU1yQyxJQUFNVSxXQUFXLEdBQWMsZ0JBQWlCO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7SUFDOUMsSUFBOENWLEdBTzVDLEdBUDRDQSwrQ0FBUSxDQUFlO1FBQ25FVyxFQUFFLEVBQUVELE9BQU8sQ0FBQ0MsRUFBRTtRQUNkQyxJQUFJLEVBQUVGLE9BQU8sQ0FBQ0UsSUFBSTtRQUNsQkMsS0FBSyxFQUFFSCxPQUFPLENBQUNHLEtBQUs7UUFDcEJDLEtBQUssRUFBRUosT0FBTyxDQUFDSSxLQUFLO1FBQ3BCQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxTQUFTLEVBQUUsR0FBRztLQUNmLENBQUMsRUFuQ0osZUE0QndCLEdBQXdCaEIsR0FPNUMsR0FQb0IsRUE1QnhCLGtCQTRCNEMsR0FBSUEsR0FPNUMsR0FQd0M7SUFTMUMsSUFBTSxnQkFBa0IsR0FBS0QsaURBQVUsQ0FBQ1MsaURBQVcsQ0FBQyxDQUE1Q1csZ0JBQWdCO0lBRXhCLElBQU1DLFlBQVksR0FBRyxXQUFNO1FBQ3pCRCxnQkFBZ0IsQ0FBQ0YsZUFBZSxDQUFDLENBQUM7S0FDbkM7SUFFRCxxQkFDRSw4REFBQ2IscURBQU87UUFBQ2lCLEVBQUUsRUFBQyxTQUFTO1FBQUNDLFdBQVcsRUFBQyxLQUFLO1FBQUNDLFFBQVEsRUFBQyxVQUFVOzswQkFDekQsOERBQUNyQixtREFBSztnQkFDSnNCLEdBQUcsRUFBQyx5RUFBeUU7Z0JBQzdFQyxHQUFHLEVBQUUsYUFBWSxDQUFlLE9BQWJmLE9BQU8sQ0FBQ0UsSUFBSSxDQUFFO2dCQUNqQ2MsQ0FBQyxFQUFDLE1BQU07Ozs7O3FCQUNSOzBCQUNGLDhEQUFDekIsa0RBQUk7Z0JBQUMwQixFQUFFLEVBQUMsR0FBRztnQkFBQ0MsY0FBYyxFQUFDLGVBQWU7Z0JBQUNDLFlBQVksRUFBQyxRQUFROztrQ0FDL0QsOERBQUN0QixrREFBUTt3QkFBQ3VCLElBQUksRUFBRSxZQUFXLENBQWUsT0FBYnBCLE9BQU8sQ0FBQ3FCLElBQUksQ0FBRTt3QkFBRUMsUUFBUTtrQ0FDbkQsNEVBQUMzQix5REFBVzs0QkFBQ2dCLEVBQUUsRUFBQyxJQUFJOzRCQUFDWSxRQUFRLEVBQUMsSUFBSTs0QkFBQ0MsVUFBVSxFQUFDLE1BQU07c0NBQUV4QixPQUFPLENBQUNFLElBQUk7Ozs7O2lDQUFlOzs7Ozs2QkFDeEU7a0NBQ1gsOERBQUNOLGtEQUFJO3dCQUFDMkIsUUFBUSxFQUFDLElBQUk7d0JBQUNFLEtBQUssRUFBRWhDLG1FQUFpQixDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUM7OzBDQUMvRCw4REFBQ0csa0RBQUk7Z0NBQUNlLEVBQUUsRUFBQyxNQUFNO2dDQUFDYyxLQUFLLEVBQUUsVUFBVTtnQ0FBRUYsUUFBUSxFQUFDLElBQUk7MENBQUMsR0FFakQ7Ozs7O3FDQUFPOzRCQUNORyxNQUFNLENBQUMxQixPQUFPLENBQUNHLEtBQUssQ0FBQyxDQUFDd0IsT0FBTyxDQUFDLENBQUMsQ0FBQzs7Ozs7OzZCQUM1Qjs7Ozs7O3FCQUNGOzs7Ozs7YUFDQyxDQUNWO0NBQ0gsQ0FBQztHQXBDVzVCLFdBQVc7O1FBMkJXTiwrREFBaUI7OztBQTNCdkNNLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9kdWN0cy9Qcm9kdWN0Q2FyZC50c3g/MDNmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEZsZXgsXG4gIENpcmNsZSxcbiAgQm94LFxuICBJbWFnZSxcbiAgQmFkZ2UsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBJY29uLFxuICBjaGFrcmEsXG4gIFRvb2x0aXAsXG4gIEJ1dHRvbixcbiAgTGlua0JveCxcbiAgTGlua092ZXJsYXksXG4gIFRleHQsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBNZE91dGxpbmVTaG9wcGluZ0JhZyB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xuXG5pbXBvcnQgeyBJQ2FydFByb2R1Y3QsIElQcm9kdWN0IH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IENhcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgcHJvZHVjdDogSVByb2R1Y3Q7XG59XG5cbmV4cG9ydCBjb25zdCBQcm9kdWN0Q2FyZDogRkM8UHJvcHM+ID0gKHsgcHJvZHVjdCB9KSA9PiB7XG4gIGNvbnN0IFt0ZW1wQ2FydFByb2R1Y3QsIHNldFRlbXBDYXJ0UHJvZHVjdF0gPSB1c2VTdGF0ZTxJQ2FydFByb2R1Y3Q+KHtcbiAgICBpZDogcHJvZHVjdC5pZCxcbiAgICBuYW1lOiBwcm9kdWN0Lm5hbWUsXG4gICAgcHJpY2U6IHByb2R1Y3QucHJpY2UsXG4gICAgaW1hZ2U6IHByb2R1Y3QuaW1hZ2UsXG4gICAgcXVhbnRpdHk6IDEsXG4gICAgdGltZXN0YW1wOiBcIjBcIixcbiAgfSk7XG5cbiAgY29uc3QgeyBhZGRQcm9kdWN0VG9DYXJ0IH0gPSB1c2VDb250ZXh0KENhcnRDb250ZXh0KTtcblxuICBjb25zdCBvbkFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgYWRkUHJvZHVjdFRvQ2FydCh0ZW1wQ2FydFByb2R1Y3QpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExpbmtCb3ggYXM9XCJhcnRpY2xlXCIgYm9yZGVyV2lkdGg9XCIxcHhcIiBwb3NpdGlvbj1cInJlbGF0aXZlXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPVwiaHR0cHM6Ly9iYmZvdG9ncmFmaWEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzAxL1NJTVBMRVMtMzAweDMwMC5qcGdcIlxuICAgICAgICBhbHQ9e2BQaWN0dXJlIG9mICR7cHJvZHVjdC5uYW1lfWB9XG4gICAgICAgIHc9XCJmdWxsXCJcbiAgICAgIC8+XG4gICAgICA8RmxleCBtdD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPE5leHRMaW5rIGhyZWY9e2AvcHJvZHVjdG8vJHtwcm9kdWN0LnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgPExpbmtPdmVybGF5IGFzPVwiaDRcIiBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cImJvbGRcIj57cHJvZHVjdC5uYW1lfTwvTGlua092ZXJsYXk+XG4gICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgIDxUZXh0IGZvbnRTaXplPVwibWRcIiBjb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJncmF5LjgwMFwiLCBcIndoaXRlXCIpfT5cbiAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj17XCJncmF5LjYwMFwifSBmb250U2l6ZT1cImxnXCI+XG4gICAgICAgICAgICAkXG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIHtOdW1iZXIocHJvZHVjdC5wcmljZSkudG9GaXhlZCgyKX1cbiAgICAgICAgPC9UZXh0PlxuICAgICAgPC9GbGV4PlxuICAgIDwvTGlua0JveD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiRmxleCIsIkltYWdlIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJMaW5rQm94IiwiTGlua092ZXJsYXkiLCJUZXh0IiwiTmV4dExpbmsiLCJDYXJ0Q29udGV4dCIsIlByb2R1Y3RDYXJkIiwicHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiaW1hZ2UiLCJxdWFudGl0eSIsInRpbWVzdGFtcCIsInRlbXBDYXJ0UHJvZHVjdCIsInNldFRlbXBDYXJ0UHJvZHVjdCIsImFkZFByb2R1Y3RUb0NhcnQiLCJvbkFkZFByb2R1Y3QiLCJhcyIsImJvcmRlcldpZHRoIiwicG9zaXRpb24iLCJzcmMiLCJhbHQiLCJ3IiwibXQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsImhyZWYiLCJzbHVnIiwicGFzc0hyZWYiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJjb2xvciIsIk51bWJlciIsInRvRml4ZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductCard.tsx\n");

/***/ })

});