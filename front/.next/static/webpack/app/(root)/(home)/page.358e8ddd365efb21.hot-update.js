"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/(home)/page",{

/***/ "(app-pages-browser)/./app/(root)/(home)/page.tsx":
/*!************************************!*\
  !*** ./app/(root)/(home)/page.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=InfoIcon,MapPinIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/info.js\");\n/* harmony import */ var _barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=InfoIcon,MapPinIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/map-pin.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const now = new Date();\n    const [activity, setActivity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const getBg = (image_filename)=>{\n        if (image_filename) {\n            return \"bg-[url('/images/\".concat(image_filename, \"')]\");\n        }\n        return \"bg-hero\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setIsLoading(true);\n        axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL + \"/events/upcoming\").then((response)=>{\n            setActivity(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n        setIsLoading(false);\n    }, []);\n    let time = now.toLocaleTimeString(\"ru-RU\", {\n        hour: \"2-digit\",\n        minute: \"2-digit\"\n    });\n    let date = new Intl.DateTimeFormat(\"ru-RU\", {\n        dateStyle: \"full\"\n    }).format(now);\n    if (activity) {\n        const db_time = new Date(activity.starting_time);\n        time = db_time.toLocaleTimeString(\"ru-RU\", {\n            hour: \"2-digit\",\n            minute: \"2-digit\"\n        });\n        date = new Intl.DateTimeFormat(\"ru-RU\", {\n            dateStyle: \"full\"\n        }).format(db_time);\n    }\n    if (isLoading && !activity) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"flex size-full flex-col gap-5   bg-light-3 p-6 rounded-[14px] border border-gray-300 shadow\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-blue-3 text-2xl font-extrabold lg:text-4xl\",\n                    children: \"Ближайшее мероприятие\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl lg:text-2xl font-bold text-black\",\n                    children: \"В ближайшее время мероприятий нет!\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex size-full flex-col gap-5   bg-light-3 p-6 rounded-[14px] border border-gray-300 shadow\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-3 text-2xl font-extrabold lg:text-4xl\",\n                children: \"Ближайшее мероприятие\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            !(activity === null || activity === void 0 ? void 0 : activity.event_description) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                className: \"h-8 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 11\n            }, undefined),\n            (activity === null || activity === void 0 ? void 0 : activity.event_description) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-x-3 text-black pt-[6px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"h-8 w-8 min-w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-base lg:text-lg\",\n                        children: activity === null || activity === void 0 ? void 0 : activity.event_description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 11\n            }, undefined),\n            !activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                className: \"h-[300px] w-full rounded-[20px]\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 21\n            }, undefined),\n            activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                href: \"../activity/\" + activity.id,\n                className: \"h-[300px] w-full rounded-[20px] \".concat(getBg(activity === null || activity === void 0 ? void 0 : activity.image_file_name), \"\\n                       bg-cover bg-center bg-zinc-500 bg-blend-multiply text-white cursor-pointer\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-6 lg:p-11 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"max-w-[600px] rounded py-2 font-normal\",\n                            children: activity === null || activity === void 0 ? void 0 : activity.event_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2 w-fit\",\n                            children: [\n                                activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl font-extrabold lg:text-6xl text-sky-2\",\n                                    children: time\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, undefined),\n                                activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg font-medium lg:text-2xl text-sky-1\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                                    lineNumber: 80,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined),\n            !(activity === null || activity === void 0 ? void 0 : activity.location) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                className: \"h-8 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, undefined),\n            (activity === null || activity === void 0 ? void 0 : activity.location) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-x-3 text-muted-foreground\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        className: \"h-8 w-8 min-w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-base lg:text-lg\",\n                        children: activity === null || activity === void 0 ? void 0 : activity.location\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 92,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"A4n+ws/+fz9Njb6MbwVILQOhQFw=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvKGhvbWUpL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUcwQjtBQUVZO0FBRUs7QUFDUztBQUNBO0FBQ3ZCO0FBRTdCLE1BQU1RLE9BQU87O0lBQ1gsTUFBTUMsTUFBTSxJQUFJQztJQUNoQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBO0lBQ3hDLE1BQU0sQ0FBQ1UsV0FBV0MsYUFBYSxHQUFHWCwrQ0FBUUEsQ0FBVTtJQUVwRCxNQUFNWSxRQUFRLENBQUNDO1FBQ2IsSUFBSUEsZ0JBQWU7WUFDakIsT0FBTyxvQkFBbUMsT0FBZkEsZ0JBQWU7UUFDNUM7UUFDQSxPQUFPO0lBQ1Q7SUFFQWQsZ0RBQVNBLENBQUM7UUFDUlksYUFBYTtRQUNiZCw2Q0FBS0EsQ0FBQ2lCLEdBQUcsQ0FBQ2hCLCtDQUFPQSxHQUFHLG9CQUNuQmlCLElBQUksQ0FBQyxDQUFDQztZQUFlUCxZQUFZTyxTQUFTQyxJQUFJO1FBQUcsR0FDakRDLEtBQUssQ0FBQyxDQUFDQztZQUFXQyxRQUFRQyxHQUFHLENBQUNGO1FBQU07UUFDckNSLGFBQWE7SUFDZixHQUFHLEVBQUU7SUFFTCxJQUFJVyxPQUFPaEIsSUFBSWlCLGtCQUFrQixDQUFDLFNBQVM7UUFBRUMsTUFBTTtRQUFXQyxRQUFRO0lBQVU7SUFDaEYsSUFBSUMsT0FBTyxJQUFLQyxLQUFLQyxjQUFjLENBQUMsU0FBUztRQUFFQyxXQUFXO0lBQU8sR0FBSUMsTUFBTSxDQUFDeEI7SUFFNUUsSUFBSUUsVUFBUztRQUNYLE1BQU11QixVQUFVLElBQUl4QixLQUFLQyxTQUFVd0IsYUFBYTtRQUVoRFYsT0FBT1MsUUFBUVIsa0JBQWtCLENBQUMsU0FBUztZQUFFQyxNQUFNO1lBQVdDLFFBQVE7UUFBVTtRQUNoRkMsT0FBTyxJQUFLQyxLQUFLQyxjQUFjLENBQUMsU0FBUztZQUFFQyxXQUFXO1FBQU8sR0FBSUMsTUFBTSxDQUFDQztJQUMxRTtJQUVBLElBQUdyQixhQUFhLENBQUNGLFVBQVM7UUFDeEIscUJBQ0UsOERBQUN5QjtZQUFRQyxXQUFVOzs4QkFFakIsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFrRDs7Ozs7OzhCQUNoRSw4REFBQ0U7b0JBQUdGLFdBQVU7OEJBQTJDOzs7Ozs7Ozs7Ozs7SUFHL0Q7SUFFQSxxQkFDRSw4REFBQ0Q7UUFBUUMsV0FBVTs7MEJBRWpCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBa0Q7Ozs7OztZQUU1RCxFQUFDMUIscUJBQUFBLCtCQUFBQSxTQUFVNkIsaUJBQWlCLG1CQUM1Qiw4REFBQ2xDLDZEQUFRQTtnQkFBQytCLFdBQVU7Ozs7OztZQUdwQjFCLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVTZCLGlCQUFpQixtQkFDM0IsOERBQUNDO2dCQUFJSixXQUFVOztrQ0FDYiw4REFBQ2hDLCtGQUFRQTt3QkFBQ2dDLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFrQzFCLHFCQUFBQSwrQkFBQUEsU0FBVTZCLGlCQUFpQjs7Ozs7Ozs7Ozs7O1lBSWhGLENBQUM3QiwwQkFBWSw4REFBQ0wsNkRBQVFBO2dCQUFDK0IsV0FBVTs7Ozs7O1lBRWhDMUIsMEJBQ0EsOERBQUNKLGlEQUFJQTtnQkFBQ21DLE1BQU8saUJBQWlCL0IsU0FBU2dDLEVBQUU7Z0JBQ25DTixXQUFXLG1DQUFvRSxPQUFqQ3RCLE1BQU1KLHFCQUFBQSwrQkFBQUEsU0FBVWlDLGVBQWUsR0FBRTswQkFFbkYsNEVBQUNIO29CQUFJSixXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUdGLFdBQVU7c0NBQTBDMUIscUJBQUFBLCtCQUFBQSxTQUFVa0MsVUFBVTs7Ozs7O3NDQUU1RSw4REFBQ0o7NEJBQUlKLFdBQVU7O2dDQUNYMUIsMEJBQVksOERBQUMyQjtvQ0FBR0QsV0FBVTs4Q0FBa0RaOzs7Ozs7Z0NBQzVFZCwwQkFBWSw4REFBQ21DO29DQUFFVCxXQUFVOzhDQUE4Q1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTy9FLEVBQUNsQixxQkFBQUEsK0JBQUFBLFNBQVVvQyxRQUFRLG1CQUNuQiw4REFBQ3pDLDZEQUFRQTtnQkFBQytCLFdBQVU7Ozs7OztZQUdwQjFCLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVW9DLFFBQVEsbUJBQ2xCLDhEQUFDTjtnQkFBSUosV0FBVTs7a0NBQ2IsOERBQUNqQywrRkFBVUE7d0JBQUNpQyxXQUFVOzs7Ozs7a0NBQ3RCLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBa0MxQixxQkFBQUEsK0JBQUFBLFNBQVVvQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUU7R0F2Rk12QztLQUFBQTtBQXlGTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvb3QpLyhob21lKS9wYWdlLnRzeD9iMzkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEV2ZW50U2NoZW1hIH0gZnJvbSAnQC9zY2hlbWFzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNYXBQaW5JY29uLCBJbmZvSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IFthY3Rpdml0eSwgc2V0QWN0aXZpdHldID0gdXNlU3RhdGU8ei5pbmZlcjx0eXBlb2YgRXZlbnRTY2hlbWE+PigpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIGNvbnN0IGdldEJnID0gKGltYWdlX2ZpbGVuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHtcclxuICAgIGlmIChpbWFnZV9maWxlbmFtZSl7XHJcbiAgICAgIHJldHVybiBgYmctW3VybCgnL2ltYWdlcy8ke2ltYWdlX2ZpbGVuYW1lfScpXWBcclxuICAgIH1cclxuICAgIHJldHVybiBcImJnLWhlcm9cIlxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyAnL2V2ZW50cy91cGNvbWluZycpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHsgc2V0QWN0aXZpdHkocmVzcG9uc2UuZGF0YSk7IH0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7Y29uc29sZS5sb2coZXJyb3IpfSlcclxuICAgIHNldElzTG9hZGluZyhmYWxzZSlcclxuICB9LCBbXSlcclxuXHJcbiAgbGV0IHRpbWUgPSBub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCdydS1SVScsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICBsZXQgZGF0ZSA9IChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRhdGVTdHlsZTogJ2Z1bGwnIH0pKS5mb3JtYXQobm93KTtcclxuXHJcbiAgaWYgKGFjdGl2aXR5KXtcclxuICAgIGNvbnN0IGRiX3RpbWUgPSBuZXcgRGF0ZShhY3Rpdml0eSEuc3RhcnRpbmdfdGltZSlcclxuXHJcbiAgICB0aW1lID0gZGJfdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoJ3J1LVJVJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xyXG4gICAgZGF0ZSA9IChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRhdGVTdHlsZTogJ2Z1bGwnIH0pKS5mb3JtYXQoZGJfdGltZSk7XHJcbiAgfVxyXG5cclxuICBpZihpc0xvYWRpbmcgJiYgIWFjdGl2aXR5KXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBzaXplLWZ1bGwgZmxleC1jb2wgZ2FwLTVcclxuICAgIGJnLWxpZ2h0LTMgcC02IHJvdW5kZWQtWzE0cHhdIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93Jz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMyB0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCBsZzp0ZXh0LTR4bCc+0JHQu9C40LbQsNC50YjQtdC1INC80LXRgNC+0L/RgNC40Y/RgtC40LU8L2gxPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxnOnRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LWJsYWNrXCI+0JIg0LHQu9C40LbQsNC50YjQtdC1INCy0YDQtdC80Y8g0LzQtdGA0L7Qv9GA0LjRj9GC0LjQuSDQvdC10YIhPC9oMj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZmxleCBzaXplLWZ1bGwgZmxleC1jb2wgZ2FwLTVcclxuICAgIGJnLWxpZ2h0LTMgcC02IHJvdW5kZWQtWzE0cHhdIGJvcmRlciBib3JkZXItZ3JheS0zMDAgc2hhZG93Jz5cclxuICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1ibHVlLTMgdGV4dC0yeGwgZm9udC1leHRyYWJvbGQgbGc6dGV4dC00eGwnPtCR0LvQuNC20LDQudGI0LXQtSDQvNC10YDQvtC/0YDQuNGP0YLQuNC1PC9oMT5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAhYWN0aXZpdHk/LmV2ZW50X2Rlc2NyaXB0aW9uICYmXHJcbiAgICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwiaC04IHctZnVsbFwiLz5cclxuICAgICAgICB9XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYWN0aXZpdHk/LmV2ZW50X2Rlc2NyaXB0aW9uICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC14LTMgdGV4dC1ibGFjayBwdC1bNnB4XVwiPlxyXG4gICAgICAgICAgICA8SW5mb0ljb24gY2xhc3NOYW1lPVwiaC04IHctOCBtaW4tdy02XCIvPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1iYXNlIGxnOnRleHQtbGcnPnthY3Rpdml0eT8uZXZlbnRfZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIHshYWN0aXZpdHkgJiYgPFNrZWxldG9uIGNsYXNzTmFtZT1cImgtWzMwMHB4XSB3LWZ1bGwgcm91bmRlZC1bMjBweF1cIi8+fVxyXG4gICAgICB7XHJcbiAgICAgICAgYWN0aXZpdHkgJiZcclxuICAgICAgICA8TGluayBocmVmPSB7XCIuLi9hY3Rpdml0eS9cIiArIGFjdGl2aXR5LmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtWzMwMHB4XSB3LWZ1bGwgcm91bmRlZC1bMjBweF0gJHtnZXRCZyhhY3Rpdml0eT8uaW1hZ2VfZmlsZV9uYW1lKX1cclxuICAgICAgICAgICAgICAgICAgICAgICBiZy1jb3ZlciBiZy1jZW50ZXIgYmctemluYy01MDAgYmctYmxlbmQtbXVsdGlwbHkgdGV4dC13aGl0ZSBjdXJzb3ItcG9pbnRlcmB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1mdWxsIGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtYXgtbWQ6cHgtNSBtYXgtbWQ6cHktOCBwLTYgbGc6cC0xMSAnPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYXgtdy1bNjAwcHhdIHJvdW5kZWQgcHktMiBmb250LW5vcm1hbCc+e2FjdGl2aXR5Py5ldmVudF9uYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMiB3LWZpdCc+XHJcbiAgICAgICAgICAgICAgeyBhY3Rpdml0eSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCBsZzp0ZXh0LTZ4bCB0ZXh0LXNreS0yJz57dGltZX08L2gxPiB9XHJcbiAgICAgICAgICAgICAgeyBhY3Rpdml0eSAmJiA8cCBjbGFzc05hbWU9J3RleHQtbGcgZm9udC1tZWRpdW0gbGc6dGV4dC0yeGwgdGV4dC1za3ktMSc+e2RhdGV9PC9wPiB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MaW5rID5cclxuICAgICAgfVxyXG5cclxuICAgICAge1xyXG4gICAgICAgICFhY3Rpdml0eT8ubG9jYXRpb24gJiZcclxuICAgICAgICA8U2tlbGV0b24gY2xhc3NOYW1lPVwiaC04IHctZnVsbFwiLz5cclxuICAgICAgfVxyXG4gICAgICB7XHJcbiAgICAgICAgYWN0aXZpdHk/LmxvY2F0aW9uICYmXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAteC0zIHRleHQtbXV0ZWQtZm9yZWdyb3VuZFwiPlxyXG4gICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPVwiaC04IHctOCBtaW4tdy02XCIvPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT0nZm9udC1ib2xkIHRleHQtYmFzZSBsZzp0ZXh0LWxnJz57YWN0aXZpdHk/LmxvY2F0aW9ufTwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuXHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lXHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkFQSV9VUkwiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1hcFBpbkljb24iLCJJbmZvSWNvbiIsIlNrZWxldG9uIiwiTGluayIsIkhvbWUiLCJub3ciLCJEYXRlIiwiYWN0aXZpdHkiLCJzZXRBY3Rpdml0eSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImdldEJnIiwiaW1hZ2VfZmlsZW5hbWUiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ0aW1lIiwidG9Mb2NhbGVUaW1lU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImRhdGUiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJkYXRlU3R5bGUiLCJmb3JtYXQiLCJkYl90aW1lIiwic3RhcnRpbmdfdGltZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJoMSIsImgyIiwiZXZlbnRfZGVzY3JpcHRpb24iLCJkaXYiLCJocmVmIiwiaWQiLCJpbWFnZV9maWxlX25hbWUiLCJldmVudF9uYW1lIiwicCIsImxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/(home)/page.tsx\n"));

/***/ })

});