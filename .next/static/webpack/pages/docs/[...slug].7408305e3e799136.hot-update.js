"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/docs/[...slug]",{

/***/ "./pages/docs/[...slug].tsx":
/*!**********************************!*\
  !*** ./pages/docs/[...slug].tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Docs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Docs() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(\"Line 6 ::\", router.query);\n    const { slug = [] } = router.query;\n    console.log(\"Line 888\", slug);\n    if (slug.length === 2) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Viewing docs for  fetaure \",\n                    slug[0],\n                    \" and concept \",\n                    slug[1]\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NextJS\\\\pages\\\\docs\\\\[...slug].tsx\",\n                lineNumber: 12,\n                columnNumber: 15\n            }, this)\n        }, void 0, false);\n    } else if (slug.length === 1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"Viewing docs for  fetaure \",\n                    slug[0],\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\NextJS\\\\pages\\\\docs\\\\[...slug].tsx\",\n                lineNumber: 18,\n                columnNumber: 15\n            }, this)\n        }, void 0, false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Docs Page :::::::::::::::jlkufkfh\"\n        }, void 0, false, {\n            fileName: \"E:\\\\NextJS\\\\pages\\\\docs\\\\[...slug].tsx\",\n            lineNumber: 24,\n            columnNumber: 6\n        }, this)\n    }, void 0, false);\n}\n_s(Docs, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Docs;\nvar _c;\n$RefreshReg$(_c, \"Docs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kb2NzL1suLi5zbHVnXS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDYztBQUV6QixTQUFTRTs7SUFDcEIsTUFBTUMsU0FBU0Ysc0RBQVNBO0lBQ3hCRyxRQUFRQyxHQUFHLENBQUMsYUFBYUYsT0FBT0csS0FBSztJQUNyQyxNQUFNLEVBQUVDLE9BQU0sRUFBRSxFQUFDLEdBQUdKLE9BQU9HLEtBQUs7SUFDaENGLFFBQVFDLEdBQUcsQ0FBQyxZQUFZRTtJQUN4QixJQUFHQSxLQUFLQyxNQUFNLEtBQUssR0FBRTtRQUNqQixxQkFDSTtzQkFDRSw0RUFBQ0M7O29CQUFHO29CQUEyQkYsSUFBSSxDQUFDLEVBQUU7b0JBQUM7b0JBQWNBLElBQUksQ0FBQyxFQUFFOzs7Ozs7OztJQUd0RSxPQUFPLElBQUdBLEtBQUtDLE1BQU0sS0FBSyxHQUFFO1FBQ3hCLHFCQUNJO3NCQUNFLDRFQUFDQzs7b0JBQUc7b0JBQTJCRixJQUFJLENBQUMsRUFBRTtvQkFBQzs7Ozs7Ozs7SUFHakQ7SUFFQSxxQkFBUTtrQkFDUCw0RUFBQ0U7c0JBQUc7Ozs7Ozs7QUFFVDtHQXRCd0JQOztRQUNMRCxrREFBU0E7OztLQURKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9kb2NzL1suLi5zbHVnXS50c3g/MjYxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jcygpe1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpbmUgNiA6OlwiLCByb3V0ZXIucXVlcnkpO1xyXG4gICAgY29uc3QgeyBzbHVnID1bXX0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBjb25zb2xlLmxvZyhcIkxpbmUgODg4XCIsIHNsdWcpXHJcbiAgICBpZihzbHVnLmxlbmd0aCA9PT0gMil7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8aDE+Vmlld2luZyBkb2NzIGZvciAgZmV0YXVyZSB7c2x1Z1swXX0gYW5kIGNvbmNlcHQge3NsdWdbMV19PC9oMT5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfSBlbHNlIGlmKHNsdWcubGVuZ3RoID09PSAxKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxoMT5WaWV3aW5nIGRvY3MgZm9yICBmZXRhdXJlIHtzbHVnWzBdfSA8L2gxPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuICg8PlxyXG4gICAgIDxoMT5Eb2NzIFBhZ2UgOjo6Ojo6Ojo6Ojo6Ojo6amxrdWZrZmg8L2gxPlxyXG4gICAgPC8+KVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiRG9jcyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInNsdWciLCJsZW5ndGgiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/docs/[...slug].tsx\n"));

/***/ })

});