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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=InfoIcon,MapPinIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/info.js\");\n/* harmony import */ var _barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=InfoIcon,MapPinIcon!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/map-pin.js\");\n/* harmony import */ var _components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Home = ()=>{\n    _s();\n    const now = new Date();\n    const [activity, setActivity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const getBg = (image_filename)=>{\n        if (image_filename) {\n            return \"bg-[url('/images/\".concat(image_filename, \"')]\");\n        }\n        return \"bg-hero\";\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(_constants__WEBPACK_IMPORTED_MODULE_1__.API_URL + \"/events/upcoming\").then((response)=>{\n            setActivity(response.data);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    }, []);\n    let time = now.toLocaleTimeString(\"ru-RU\", {\n        hour: \"2-digit\",\n        minute: \"2-digit\"\n    });\n    let date = new Intl.DateTimeFormat(\"ru-RU\", {\n        dateStyle: \"full\"\n    }).format(now);\n    if (activity) {\n        const db_time = new Date(activity.starting_time);\n        time = db_time.toLocaleTimeString(\"ru-RU\", {\n            hour: \"2-digit\",\n            minute: \"2-digit\"\n        });\n        date = new Intl.DateTimeFormat(\"ru-RU\", {\n            dateStyle: \"full\"\n        }).format(db_time);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex size-full flex-col gap-5   bg-light-3 p-6 rounded-[14px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-blue-3 text-2xl font-extrabold lg:text-4xl\",\n                children: \"Ближайшее мероприятие\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            !(activity === null || activity === void 0 ? void 0 : activity.event_description) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                className: \"h-8 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 11\n            }, undefined),\n            (activity === null || activity === void 0 ? void 0 : activity.event_description) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-x-3 text-black\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        className: \"h-8 w-8 min-w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-base lg:text-lg\",\n                        children: activity === null || activity === void 0 ? void 0 : activity.event_description\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[300px] w-full rounded-[20px] \".concat(getBg(activity === null || activity === void 0 ? void 0 : activity.image_file_name), \"\\n                       bg-cover bg-center bg-zinc-500 bg-blend-multiply text-white\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-full flex-col justify-between max-md:px-5 max-md:py-8 p-6 lg:p-11 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"max-w-[600px] rounded py-2 font-normal\",\n                            children: activity === null || activity === void 0 ? void 0 : activity.event_name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col gap-2 w-fit\",\n                            children: [\n                                !activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                                    className: \"w-50 h-14\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 28\n                                }, undefined),\n                                activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-4xl font-extrabold lg:text-6xl text-sky-2\",\n                                    children: time\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 27\n                                }, undefined),\n                                activity && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-lg font-medium lg:text-2xl text-sky-1\",\n                                    children: date\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 27\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            !(activity === null || activity === void 0 ? void 0 : activity.location) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_skeleton__WEBPACK_IMPORTED_MODULE_3__.Skeleton, {\n                className: \"h-8 w-full\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 69,\n                columnNumber: 9\n            }, undefined),\n            (activity === null || activity === void 0 ? void 0 : activity.location) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row items-center gap-x-3 text-muted-foreground\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_InfoIcon_MapPinIcon_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        className: \"h-8 w-8 min-w-6\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"font-bold text-base lg:text-lg\",\n                        children: activity === null || activity === void 0 ? void 0 : activity.location\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\app\\\\(root)\\\\(home)\\\\page.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"KGRS+w+I8IXavF5yDVqF2zWI25o=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm9vdCkvKGhvbWUpL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRzBCO0FBRVk7QUFFSztBQUNTO0FBQ0E7QUFFcEQsTUFBTU8sT0FBTzs7SUFDWCxNQUFNQyxNQUFNLElBQUlDO0lBQ2hCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUE7SUFFeEMsTUFBTVMsUUFBUSxDQUFDQztRQUNiLElBQUlBLGdCQUFlO1lBQ2pCLE9BQU8sb0JBQW1DLE9BQWZBLGdCQUFlO1FBQzVDO1FBQ0EsT0FBTztJQUNUO0lBRUFYLGdEQUFTQSxDQUFDO1FBQ1JGLDZDQUFLQSxDQUFDYyxHQUFHLENBQUNiLCtDQUFPQSxHQUFHLG9CQUNuQmMsSUFBSSxDQUFDLENBQUNDO1lBQWNMLFlBQVlLLFNBQVNDLElBQUk7UUFBQyxHQUM5Q0MsS0FBSyxDQUFDLENBQUNDO1lBQVdDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFBTTtJQUN2QyxHQUFHLEVBQUU7SUFFTCxJQUFJRyxPQUFPZCxJQUFJZSxrQkFBa0IsQ0FBQyxTQUFTO1FBQUVDLE1BQU07UUFBV0MsUUFBUTtJQUFVO0lBQ2hGLElBQUlDLE9BQU8sSUFBS0MsS0FBS0MsY0FBYyxDQUFDLFNBQVM7UUFBRUMsV0FBVztJQUFPLEdBQUlDLE1BQU0sQ0FBQ3RCO0lBRTVFLElBQUlFLFVBQVM7UUFDWCxNQUFNcUIsVUFBVSxJQUFJdEIsS0FBS0MsU0FBVXNCLGFBQWE7UUFFaERWLE9BQU9TLFFBQVFSLGtCQUFrQixDQUFDLFNBQVM7WUFBRUMsTUFBTTtZQUFXQyxRQUFRO1FBQVU7UUFDaEZDLE9BQU8sSUFBS0MsS0FBS0MsY0FBYyxDQUFDLFNBQVM7WUFBRUMsV0FBVztRQUFPLEdBQUlDLE1BQU0sQ0FBQ0M7SUFDMUU7SUFFQSxxQkFDRSw4REFBQ0U7UUFBUUMsV0FBVTs7MEJBRWpCLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBa0Q7Ozs7OztZQUU1RCxFQUFDeEIscUJBQUFBLCtCQUFBQSxTQUFVMEIsaUJBQWlCLG1CQUM1Qiw4REFBQzlCLDZEQUFRQTtnQkFBQzRCLFdBQVU7Ozs7OztZQUdwQnhCLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVTBCLGlCQUFpQixtQkFDM0IsOERBQUNDO2dCQUFJSCxXQUFVOztrQ0FDYiw4REFBQzdCLCtGQUFRQTt3QkFBQzZCLFdBQVU7Ozs7OztrQ0FDcEIsOERBQUNJO3dCQUFHSixXQUFVO2tDQUFrQ3hCLHFCQUFBQSwrQkFBQUEsU0FBVTBCLGlCQUFpQjs7Ozs7Ozs7Ozs7OzBCQUlqRiw4REFBQ0M7Z0JBQUlILFdBQVcsbUNBQW9FLE9BQWpDdEIsTUFBTUYscUJBQUFBLCtCQUFBQSxTQUFVNkIsZUFBZSxHQUFFOzBCQUVsRiw0RUFBQ0Y7b0JBQUlILFdBQVU7O3NDQUNiLDhEQUFDSTs0QkFBR0osV0FBVTtzQ0FBMEN4QixxQkFBQUEsK0JBQUFBLFNBQVU4QixVQUFVOzs7Ozs7c0NBRTVFLDhEQUFDSDs0QkFBSUgsV0FBVTs7Z0NBQ1gsQ0FBQ3hCLDBCQUFZLDhEQUFDSiw2REFBUUE7b0NBQUM0QixXQUFVOzs7Ozs7Z0NBQ2pDeEIsMEJBQVksOERBQUN5QjtvQ0FBR0QsV0FBVTs4Q0FBa0RaOzs7Ozs7Z0NBQzVFWiwwQkFBWSw4REFBQytCO29DQUFFUCxXQUFVOzhDQUE4Q1I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSzdFLEVBQUNoQixxQkFBQUEsK0JBQUFBLFNBQVVnQyxRQUFRLG1CQUNuQiw4REFBQ3BDLDZEQUFRQTtnQkFBQzRCLFdBQVU7Ozs7OztZQUdwQnhCLENBQUFBLHFCQUFBQSwrQkFBQUEsU0FBVWdDLFFBQVEsbUJBQ2xCLDhEQUFDTDtnQkFBSUgsV0FBVTs7a0NBQ2IsOERBQUM5QiwrRkFBVUE7d0JBQUM4QixXQUFVOzs7Ozs7a0NBQ3RCLDhEQUFDSTt3QkFBR0osV0FBVTtrQ0FBa0N4QixxQkFBQUEsK0JBQUFBLFNBQVVnQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUU7R0FyRU1uQztLQUFBQTtBQXVFTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvb3QpLyhob21lKS9wYWdlLnRzeD9iMzkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0ICogYXMgeiBmcm9tIFwiem9kXCJcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICdAL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEV2ZW50U2NoZW1hIH0gZnJvbSAnQC9zY2hlbWFzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBNYXBQaW5JY29uLCBJbmZvSWNvbiB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcclxuaW1wb3J0IHsgU2tlbGV0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL3NrZWxldG9uXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcclxuICBjb25zdCBbYWN0aXZpdHksIHNldEFjdGl2aXR5XSA9IHVzZVN0YXRlPHouaW5mZXI8dHlwZW9mIEV2ZW50U2NoZW1hPj4oKTtcclxuXHJcbiAgY29uc3QgZ2V0QmcgPSAoaW1hZ2VfZmlsZW5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4ge1xyXG4gICAgaWYgKGltYWdlX2ZpbGVuYW1lKXtcclxuICAgICAgcmV0dXJuIGBiZy1bdXJsKCcvaW1hZ2VzLyR7aW1hZ2VfZmlsZW5hbWV9JyldYFxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiYmctaGVyb1wiXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyAnL2V2ZW50cy91cGNvbWluZycpXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtzZXRBY3Rpdml0eShyZXNwb25zZS5kYXRhKX0pXHJcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7Y29uc29sZS5sb2coZXJyb3IpfSlcclxuICB9LCBbXSlcclxuXHJcbiAgbGV0IHRpbWUgPSBub3cudG9Mb2NhbGVUaW1lU3RyaW5nKCdydS1SVScsIHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9KTtcclxuICBsZXQgZGF0ZSA9IChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRhdGVTdHlsZTogJ2Z1bGwnIH0pKS5mb3JtYXQobm93KTtcclxuXHJcbiAgaWYgKGFjdGl2aXR5KXtcclxuICAgIGNvbnN0IGRiX3RpbWUgPSBuZXcgRGF0ZShhY3Rpdml0eSEuc3RhcnRpbmdfdGltZSlcclxuXHJcbiAgICB0aW1lID0gZGJfdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoJ3J1LVJVJywgeyBob3VyOiAnMi1kaWdpdCcsIG1pbnV0ZTogJzItZGlnaXQnIH0pO1xyXG4gICAgZGF0ZSA9IChuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgncnUtUlUnLCB7IGRhdGVTdHlsZTogJ2Z1bGwnIH0pKS5mb3JtYXQoZGJfdGltZSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdmbGV4IHNpemUtZnVsbCBmbGV4LWNvbCBnYXAtNVxyXG4gICAgYmctbGlnaHQtMyBwLTYgcm91bmRlZC1bMTRweF0nPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LWJsdWUtMyB0ZXh0LTJ4bCBmb250LWV4dHJhYm9sZCBsZzp0ZXh0LTR4bCc+0JHQu9C40LbQsNC50YjQtdC1INC80LXRgNC+0L/RgNC40Y/RgtC40LU8L2gxPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgICFhY3Rpdml0eT8uZXZlbnRfZGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTggdy1mdWxsXCIvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB7XHJcbiAgICAgICAgICBhY3Rpdml0eT8uZXZlbnRfZGVzY3JpcHRpb24gJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLXgtMyB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICAgIDxJbmZvSWNvbiBjbGFzc05hbWU9XCJoLTggdy04IG1pbi13LTZcIi8+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWJhc2UgbGc6dGV4dC1sZyc+e2FjdGl2aXR5Py5ldmVudF9kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLVszMDBweF0gdy1mdWxsIHJvdW5kZWQtWzIwcHhdICR7Z2V0QmcoYWN0aXZpdHk/LmltYWdlX2ZpbGVfbmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgYmctY292ZXIgYmctY2VudGVyIGJnLXppbmMtNTAwIGJnLWJsZW5kLW11bHRpcGx5IHRleHQtd2hpdGVgfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLWZ1bGwgZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1heC1tZDpweC01IG1heC1tZDpweS04IHAtNiBsZzpwLTExICc+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYXgtdy1bNjAwcHhdIHJvdW5kZWQgcHktMiBmb250LW5vcm1hbCc+e2FjdGl2aXR5Py5ldmVudF9uYW1lfTwvaDI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgZ2FwLTIgdy1maXQnPlxyXG4gICAgICAgICAgICB7ICFhY3Rpdml0eSAmJiA8U2tlbGV0b24gY2xhc3NOYW1lPVwidy01MCBoLTE0XCIvPn1cclxuICAgICAgICAgICAgeyBhY3Rpdml0eSAmJiA8aDEgY2xhc3NOYW1lPSd0ZXh0LTR4bCBmb250LWV4dHJhYm9sZCBsZzp0ZXh0LTZ4bCB0ZXh0LXNreS0yJz57dGltZX08L2gxPiB9XHJcbiAgICAgICAgICAgIHsgYWN0aXZpdHkgJiYgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIGZvbnQtbWVkaXVtIGxnOnRleHQtMnhsIHRleHQtc2t5LTEnPntkYXRlfTwvcD4gfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgIWFjdGl2aXR5Py5sb2NhdGlvbiAmJlxyXG4gICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTggdy1mdWxsXCIvPlxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBhY3Rpdml0eT8ubG9jYXRpb24gJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC14LTMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kXCI+XHJcbiAgICAgICAgICA8TWFwUGluSWNvbiBjbGFzc05hbWU9XCJoLTggdy04IG1pbi13LTZcIi8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdmb250LWJvbGQgdGV4dC1iYXNlIGxnOnRleHQtbGcnPnthY3Rpdml0eT8ubG9jYXRpb259PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiQVBJX1VSTCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTWFwUGluSWNvbiIsIkluZm9JY29uIiwiU2tlbGV0b24iLCJIb21lIiwibm93IiwiRGF0ZSIsImFjdGl2aXR5Iiwic2V0QWN0aXZpdHkiLCJnZXRCZyIsImltYWdlX2ZpbGVuYW1lIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGltZSIsInRvTG9jYWxlVGltZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJkYXRlIiwiSW50bCIsIkRhdGVUaW1lRm9ybWF0IiwiZGF0ZVN0eWxlIiwiZm9ybWF0IiwiZGJfdGltZSIsInN0YXJ0aW5nX3RpbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJldmVudF9kZXNjcmlwdGlvbiIsImRpdiIsImgyIiwiaW1hZ2VfZmlsZV9uYW1lIiwiZXZlbnRfbmFtZSIsInAiLCJsb2NhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(root)/(home)/page.tsx\n"));

/***/ })

});