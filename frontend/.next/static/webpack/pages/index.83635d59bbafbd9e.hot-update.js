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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductCard\": function() { return /* binding */ ProductCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ProductCard = function(param) {\n    var product = param.product;\n    _s();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkBox, {\n        as: \"article\",\n        position: \"relative\",\n        cursor: \"pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                src: product.image,\n                alt: \"Picture of \".concat(product.name),\n                w: \"full\"\n            }, void 0, false, {\n                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n                mt: \"1\",\n                justifyContent: \"space-between\",\n                alignContent: \"center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                href: \"/producto/\".concat(product.slug),\n                                passHref: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.LinkOverlay, {\n                                    as: \"h4\",\n                                    fontSize: \"lg\",\n                                    fontWeight: \"bold\",\n                                    children: product.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                as: \"span\",\n                                fontSize: \"sm\",\n                                color: \"gray.500\",\n                                children: [\n                                    product.description,\n                                    \" Mural fibro\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                fontSize: \"md\",\n                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.800\", \"white\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                        as: \"span\",\n                                        color: \"gray.600\",\n                                        fontSize: \"lg\",\n                                        children: \"$\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    Number(product.price).toFixed(2)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                        variant: \"ghost\",\n                        p: 0,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__.AiOutlineHeart, {\n                            size: 25\n                        }, void 0, false, {\n                            fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/agustinleguizamon/Dev/backend-coderhouse/frontend/components/products/ProductCard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_s(ProductCard, \"3skuTHwppfEdh6aKNlffDjyTB8U=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = ProductCard;\nvar _c;\n$RefreshReg$(_c, \"ProductCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ2lDO0FBVVA7QUFDc0I7O0FBUXpDLElBQU1VLFdBQVcsR0FBYyxnQkFBaUI7UUFBZEMsT0FBTyxTQUFQQSxPQUFPOztJQUM5QyxxQkFDRSw4REFBQ04scURBQU87UUFBQ08sRUFBRSxFQUFDLFNBQVM7UUFBQ0MsUUFBUSxFQUFDLFVBQVU7UUFBQ0MsTUFBTSxFQUFDLFNBQVM7OzBCQUN4RCw4REFBQ1gsbURBQUs7Z0JBQ0pZLEdBQUcsRUFBRUosT0FBTyxDQUFDSyxLQUFLO2dCQUNsQkMsR0FBRyxFQUFFLGFBQVksQ0FBZSxPQUFiTixPQUFPLENBQUNPLElBQUksQ0FBRTtnQkFDakNDLENBQUMsRUFBQyxNQUFNOzs7OztxQkFDUjswQkFDRiw4REFBQ2xCLGtEQUFJO2dCQUFDbUIsRUFBRSxFQUFDLEdBQUc7Z0JBQUNDLGNBQWMsRUFBQyxlQUFlO2dCQUFDQyxZQUFZLEVBQUMsUUFBUTs7a0NBQy9ELDhEQUFDcEIsaURBQUc7OzBDQUNGLDhEQUFDRixrREFBUTtnQ0FBQ3VCLElBQUksRUFBRSxZQUFXLENBQWUsT0FBYlosT0FBTyxDQUFDYSxJQUFJLENBQUU7Z0NBQUVDLFFBQVE7MENBQ25ELDRFQUFDbkIseURBQVc7b0NBQUNNLEVBQUUsRUFBQyxJQUFJO29DQUFDYyxRQUFRLEVBQUMsSUFBSTtvQ0FBQ0MsVUFBVSxFQUFDLE1BQU07OENBQ2pEaEIsT0FBTyxDQUFDTyxJQUFJOzs7Ozt5Q0FDRDs7Ozs7cUNBQ0w7MENBQ1gsOERBQUNYLGtEQUFJO2dDQUFDSyxFQUFFLEVBQUMsTUFBTTtnQ0FBQ2MsUUFBUSxFQUFDLElBQUk7Z0NBQUNFLEtBQUssRUFBQyxVQUFVOztvQ0FDM0NqQixPQUFPLENBQUNrQixXQUFXO29DQUFDLGNBQ3ZCOzs7Ozs7cUNBQU87MENBQ1AsOERBQUN0QixrREFBSTtnQ0FBQ21CLFFBQVEsRUFBQyxJQUFJO2dDQUFDRSxLQUFLLEVBQUV4QixtRUFBaUIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDOztrREFDL0QsOERBQUNHLGtEQUFJO3dDQUFDSyxFQUFFLEVBQUMsTUFBTTt3Q0FBQ2dCLEtBQUssRUFBRSxVQUFVO3dDQUFFRixRQUFRLEVBQUMsSUFBSTtrREFBQyxHQUVqRDs7Ozs7NkNBQU87b0NBQ05JLE1BQU0sQ0FBQ25CLE9BQU8sQ0FBQ29CLEtBQUssQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDOzs7Ozs7cUNBQzVCOzs7Ozs7NkJBQ0g7a0NBQ04sOERBQUN4QixvREFBTTt3QkFBQ3lCLE9BQU8sRUFBQyxPQUFPO3dCQUFDQyxDQUFDLEVBQUUsQ0FBQztrQ0FDMUIsNEVBQUN6QiwwREFBYzs0QkFBQzBCLElBQUksRUFBRSxFQUFFOzs7OztpQ0FBRzs7Ozs7NkJBQ3BCOzs7Ozs7cUJBQ0o7Ozs7OzthQUNDLENBQ1Y7Q0FDSCxDQUFDO0dBL0JXekIsV0FBVzs7UUFrQmFOLCtEQUFpQjs7O0FBbEJ6Q00sS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RDYXJkLnRzeD8wM2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHtcbiAgRmxleCxcbiAgQm94LFxuICBJbWFnZSxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIExpbmtCb3gsXG4gIExpbmtPdmVybGF5LFxuICBUZXh0LFxuICBCdXR0b24sXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBBaU91dGxpbmVIZWFydCB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuXG5pbXBvcnQgeyBJUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHByb2R1Y3Q6IElQcm9kdWN0O1xufVxuXG5leHBvcnQgY29uc3QgUHJvZHVjdENhcmQ6IEZDPFByb3BzPiA9ICh7IHByb2R1Y3QgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMaW5rQm94IGFzPVwiYXJ0aWNsZVwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIiBjdXJzb3I9XCJwb2ludGVyXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtwcm9kdWN0LmltYWdlfVxuICAgICAgICBhbHQ9e2BQaWN0dXJlIG9mICR7cHJvZHVjdC5uYW1lfWB9XG4gICAgICAgIHc9XCJmdWxsXCJcbiAgICAgIC8+XG4gICAgICA8RmxleCBtdD1cIjFcIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cbiAgICAgICAgPEJveCA+XG4gICAgICAgICAgPE5leHRMaW5rIGhyZWY9e2AvcHJvZHVjdG8vJHtwcm9kdWN0LnNsdWd9YH0gcGFzc0hyZWY+XG4gICAgICAgICAgICA8TGlua092ZXJsYXkgYXM9XCJoNFwiIGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiYm9sZFwiPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgPC9MaW5rT3ZlcmxheT5cbiAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXkuNTAwXCI+XG4gICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn0gTXVyYWwgZmlicm9cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgZm9udFNpemU9XCJtZFwiIGNvbG9yPXt1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuODAwXCIsIFwid2hpdGVcIil9PlxuICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9e1wiZ3JheS42MDBcIn0gZm9udFNpemU9XCJsZ1wiPlxuICAgICAgICAgICAgICAkXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICB7TnVtYmVyKHByb2R1Y3QucHJpY2UpLnRvRml4ZWQoMil9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiZ2hvc3RcIiBwPXswfT5cbiAgICAgICAgICA8QWlPdXRsaW5lSGVhcnQgc2l6ZT17MjV9Lz5cbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgPC9MaW5rQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJOZXh0TGluayIsIkZsZXgiLCJCb3giLCJJbWFnZSIsInVzZUNvbG9yTW9kZVZhbHVlIiwiTGlua0JveCIsIkxpbmtPdmVybGF5IiwiVGV4dCIsIkJ1dHRvbiIsIkFpT3V0bGluZUhlYXJ0IiwiUHJvZHVjdENhcmQiLCJwcm9kdWN0IiwiYXMiLCJwb3NpdGlvbiIsImN1cnNvciIsInNyYyIsImltYWdlIiwiYWx0IiwibmFtZSIsInciLCJtdCIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25Db250ZW50IiwiaHJlZiIsInNsdWciLCJwYXNzSHJlZiIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZGVzY3JpcHRpb24iLCJOdW1iZXIiLCJwcmljZSIsInRvRml4ZWQiLCJ2YXJpYW50IiwicCIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/products/ProductCard.tsx\n");

/***/ })

});