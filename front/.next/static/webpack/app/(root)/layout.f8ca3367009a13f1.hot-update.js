"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/profile.tsx":
/*!********************************!*\
  !*** ./components/profile.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown-menu */ \"(app-pages-browser)/./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=LogOut,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=LogOut,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ Profile auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Profile() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].defaults.withCredentials = true;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].get(_constants__WEBPACK_IMPORTED_MODULE_4__.API_URL + \"/auth/me\").then((response)=>{\n            setUser({\n                email: response.data[\"email\"],\n                first_name: response.data[\"first_name\"],\n                last_name: response.data[\"last_name\"],\n                paternity: response.data[\"paternity\"],\n                avatar_filename: response.data[\"avatar_file_name\"]\n            });\n        }).catch((error)=>{\n            console.log(\"Unexpected error:\", error);\n        });\n    }, []);\n    console.log(user);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    className: \"p-px rounded-full self-center h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                        src: \"https://github.com/shadcn.png\",\n                        alt: (user === null || user === void 0 ? void 0 : user.first_name) + \" \" + (user === null || user === void 0 ? void 0 : user.last_name),\n                        className: \"h-10 w-10\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuContent, {\n                className: \"w-56 mr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuLabel, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Мой аккаунт\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-muted-foreground overflow-hidden text-ellipsis\",\n                                children: \"Parik\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuGroup, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuGroup, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuItem, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    href: \"/profile\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Профиль\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuItem, {\n                                onClick: ()=>{\n                                    axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(_constants__WEBPACK_IMPORTED_MODULE_4__.API_URL + \"/auth/logout\").then(()=>{\n                                        router.push(\"/sign-in\");\n                                    }).catch((e)=>{\n                                        console.log(\"Unexpected error\", e);\n                                    });\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Выход\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                        lineNumber: 88,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n        lineNumber: 48,\n        columnNumber: 9\n    }, this);\n}\n_s(Profile, \"j9OvWbTsFvYyMqBaspp4ct74Be0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Profile;\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVTRCO0FBQ1M7QUFFTztBQUNmO0FBQ1M7QUFDWjtBQUNrQjtBQUNBO0FBR2I7QUFFeEIsU0FBU2lCOztJQUNaLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLENBQUNNLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBO0lBRWhDSCw2Q0FBS0EsQ0FBQ1MsUUFBUSxDQUFDQyxlQUFlLEdBQUc7SUFDN0JSLGdEQUFTQSxDQUFDO1FBQ1ZGLDZDQUFLQSxDQUFDVyxHQUFHLENBQUNaLCtDQUFPQSxHQUFHLFlBQ25CYSxJQUFJLENBQUMsQ0FBQ0M7WUFDSEwsUUFBUTtnQkFDSk0sT0FBT0QsU0FBU0UsSUFBSSxDQUFDLFFBQVE7Z0JBQzdCQyxZQUFZSCxTQUFTRSxJQUFJLENBQUMsYUFBYTtnQkFDdkNFLFdBQVdKLFNBQVNFLElBQUksQ0FBQyxZQUFZO2dCQUNyQ0csV0FBV0wsU0FBU0UsSUFBSSxDQUFDLFlBQVk7Z0JBQ3JDSSxpQkFBaUJOLFNBQVNFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEQ7UUFDSixHQUNDSyxLQUFLLENBQUMsQ0FBQ0M7WUFDSkMsUUFBUUMsR0FBRyxDQUFDLHFCQUFxQkY7UUFDckM7SUFDSixHQUFHLEVBQUU7SUFFTEMsUUFBUUMsR0FBRyxDQUFDaEI7SUFFWixxQkFDSSw4REFBQ25CLDJEQUFZQTs7MEJBQ1QsOERBQUNNLGtFQUFtQkE7Z0JBQUM4QixPQUFPOzBCQUN4Qiw0RUFBQzdCLDhDQUFNQTtvQkFDSDhCLFNBQVM7b0JBQ1RDLFdBQVU7OEJBRVYsNEVBQUN0QixrREFBS0E7d0JBQ0Z1QixLQUFLO3dCQUNMQyxLQUFLckIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNUyxVQUFVLElBQUcsT0FBTVQsaUJBQUFBLDJCQUFBQSxLQUFNVSxTQUFTO3dCQUM3Q1MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7OzswQkFHdEIsOERBQUNyQyxrRUFBbUJBO2dCQUFDcUMsV0FBVTs7a0NBQzNCLDhEQUFDbEMsZ0VBQWlCQTs7MENBQ2QsOERBQUNxQzswQ0FBRTs7Ozs7OzBDQUNILDhEQUFDQTtnQ0FBRUgsV0FBVTswQ0FBOEQ7Ozs7Ozs7Ozs7OztrQ0FJL0UsOERBQUNwQyxnRUFBaUJBOzs7OztrQ0FDbEIsOERBQUNHLG9FQUFxQkE7Ozs7O2tDQUN0Qiw4REFBQ0gsZ0VBQWlCQTs7MENBQ2QsOERBQUNDLCtEQUFnQkE7Z0NBQUNpQyxPQUFPOzBDQUNyQiw0RUFBQzFCLGlEQUFJQTtvQ0FDRGdDLE1BQU07O3NEQUVOLDhEQUFDakMsdUZBQUlBOzRDQUFDNkIsV0FBVTs7Ozs7O3NEQUNoQiw4REFBQ0s7c0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQUdkLDhEQUFDeEMsK0RBQWdCQTtnQ0FBQ3lDLFNBQVM7b0NBQ3ZCaEMsNkNBQUtBLENBQUNpQyxJQUFJLENBQUNsQywrQ0FBT0EsR0FBRyxnQkFDcEJhLElBQUksQ0FBQzt3Q0FDRk4sT0FBTzRCLElBQUksQ0FBQztvQ0FDaEIsR0FDQ2QsS0FBSyxDQUFDLENBQUNlO3dDQUNKYixRQUFRQyxHQUFHLENBQUMsb0JBQW9CWTtvQ0FDcEM7Z0NBQ0o7O2tEQUNJLDhEQUFDdkMsd0ZBQU1BO3dDQUFDOEIsV0FBVTs7Ozs7O2tEQUNsQiw4REFBQ0s7a0RBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU05QjtHQXRFZ0IxQjs7UUFDR0osc0RBQVNBOzs7S0FEWkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlLnRzeD82ZGRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgICBEcm9wZG93bk1lbnVHcm91cCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICAgIERyb3Bkb3duTWVudVNlcGFyYXRvcixcclxuICAgIERyb3Bkb3duTWVudVRyaWdnZXJcclxufSBmcm9tIFwiLi91aS9kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXJJbWFnZSB9IGZyb20gXCIuL3VpL2F2YXRhclwiO1xyXG5pbXBvcnQgeyBMb2dPdXQsIFVzZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIlxyXG5pbXBvcnQgeyBVc2VyU2NoZW1hIH0gZnJvbSBcIkAvc2NoZW1hc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx6LmluZmVyPHR5cGVvZiBVc2VyU2NoZW1hPj4oKTtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyAnL2F1dGgvbWUnKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5kYXRhWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogcmVzcG9uc2UuZGF0YVsnZmlyc3RfbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiByZXNwb25zZS5kYXRhWydsYXN0X25hbWUnXSxcclxuICAgICAgICAgICAgICAgIHBhdGVybml0eTogcmVzcG9uc2UuZGF0YVsncGF0ZXJuaXR5J10sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJfZmlsZW5hbWU6IHJlc3BvbnNlLmRhdGFbJ2F2YXRhcl9maWxlX25hbWUnXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgZXJyb3I6JywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RHJvcGRvd25NZW51PlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51VHJpZ2dlciBhc0NoaWxkPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9eydnaG9zdCd9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC1weCByb3VuZGVkLWZ1bGwgc2VsZi1jZW50ZXIgaC0xMCB3LTEwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtcImh0dHBzOi8vZ2l0aHViLmNvbS9zaGFkY24ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dXNlcj8uZmlyc3RfbmFtZSArICcgJyArIHVzZXI/Lmxhc3RfbmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMCB3LTEwXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51VHJpZ2dlcj5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudUNvbnRlbnQgY2xhc3NOYW1lPVwidy01NiBtci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+0JzQvtC5INCw0LrQutCw0YPQvdGCPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1tdXRlZC1mb3JlZ3JvdW5kIG92ZXJmbG93LWhpZGRlbiB0ZXh0LWVsbGlwc2lzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBhcmlrXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVMYWJlbD5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVHcm91cD48L0Ryb3Bkb3duTWVudUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVNlcGFyYXRvci8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUl0ZW0gYXNDaGlsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eycvcHJvZmlsZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyIGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCf0YDQvtGE0LjQu9GMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChBUElfVVJMICsgJy9hdXRoL2xvZ291dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvc2lnbi1pbicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgZXJyb3InLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9nT3V0IGNsYXNzTmFtZT1cIm1yLTIgaC00IHctNFwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+0JLRi9GF0L7QtDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUdyb3VwPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUNvbnRlbnQ+XHJcbiAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVHcm91cCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVMYWJlbCIsIkRyb3Bkb3duTWVudVNlcGFyYXRvciIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJCdXR0b24iLCJMb2dPdXQiLCJVc2VyIiwiTGluayIsIkFQSV9VUkwiLCJheGlvcyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJQcm9maWxlIiwicm91dGVyIiwidXNlciIsInNldFVzZXIiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwiZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwYXRlcm5pdHkiLCJhdmF0YXJfZmlsZW5hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImFzQ2hpbGQiLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwicCIsImhyZWYiLCJzcGFuIiwib25DbGljayIsInBvc3QiLCJwdXNoIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/profile.tsx\n"));

/***/ })

});