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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GetCurrentUser: function() { return /* binding */ GetCurrentUser; },\n/* harmony export */   Profile: function() { return /* binding */ Profile; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui/dropdown-menu */ \"(app-pages-browser)/./components/ui/dropdown-menu.tsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/button */ \"(app-pages-browser)/./components/ui/button.tsx\");\n/* harmony import */ var _ui_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/avatar */ \"(app-pages-browser)/./components/ui/avatar.tsx\");\n/* harmony import */ var _barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=LogOut,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=LogOut,User!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/log-out.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ui_skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ui/skeleton */ \"(app-pages-browser)/./components/ui/skeleton.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* __next_internal_client_entry_do_not_use__ GetCurrentUser,Profile auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction GetCurrentUser() {\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();\n    axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].defaults.withCredentials = true;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(_constants__WEBPACK_IMPORTED_MODULE_4__.API_URL + \"/auth/me\").then((response)=>{\n            setUser({\n                email: response.data[\"email\"],\n                first_name: response.data[\"first_name\"],\n                last_name: response.data[\"last_name\"],\n                paternity: response.data[\"paternity\"],\n                avatar_filename: response.data[\"avatar_file_name\"]\n            });\n        }).catch((error)=>{\n            console.log(\"Unexpected error:\", error);\n        });\n    }, []);\n    return user;\n}\n_s(GetCurrentUser, \"hT6C72rcbfRUedrDq+TPaFfRI/M=\");\n_c = GetCurrentUser;\nfunction Profile() {\n    _s1();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const user = GetCurrentUser();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuTrigger, {\n                asChild: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    variant: \"ghost\",\n                    className: \"p-px rounded-full self-center h-10 w-10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, {\n                        children: [\n                            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                className: \"h-12 w-12 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 38\n                            }, this),\n                            (user === null || user === void 0 ? void 0 : user.avatar_filename) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarImage, {\n                                src: \"../public/images/\".concat(user === null || user === void 0 ? void 0 : user.avatar_filename)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 29\n                            }, this),\n                            user && !(user === null || user === void 0 ? void 0 : user.avatar_filename) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_avatar__WEBPACK_IMPORTED_MODULE_3__.AvatarFallback, {\n                                children: (user === null || user === void 0 ? void 0 : user.first_name.slice(0, 1)) + (user === null || user === void 0 ? void 0 : user.last_name.slice(0, 1))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuContent, {\n                className: \"w-56 mr-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuLabel, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Мой аккаунт\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 21\n                            }, this),\n                            !user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_skeleton__WEBPACK_IMPORTED_MODULE_7__.Skeleton, {\n                                className: \"w-full h-4\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this),\n                            user && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-muted-foreground overflow-hidden text-ellipsis\",\n                                children: (user === null || user === void 0 ? void 0 : user.first_name) + \" \" + (user === null || user === void 0 ? void 0 : user.last_name)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuGroup, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuSeparator, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuGroup, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuItem, {\n                                asChild: true,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    href: \"/profile\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            className: \"mr-2 h-4 w-4\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"Профиль\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__.DropdownMenuItem, {\n                                onClick: ()=>{\n                                    axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].post(_constants__WEBPACK_IMPORTED_MODULE_4__.API_URL + \"/auth/logout\").then(()=>{\n                                        router.push(\"/sign-in\");\n                                    }).catch((e)=>{\n                                        console.log(\"Unexpected error\", e);\n                                    });\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_LogOut_User_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        className: \"mr-2 h-4 w-4\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Выход\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n                lineNumber: 76,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Admin\\\\Desktop\\\\course_work\\\\front\\\\components\\\\profile.tsx\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s1(Profile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c1 = Profile;\nvar _c, _c1;\n$RefreshReg$(_c, \"GetCurrentUser\");\n$RefreshReg$(_c1, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvcHJvZmlsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMEI7QUFXRTtBQUNTO0FBQzZCO0FBQ3RCO0FBQ047QUFDTTtBQUNBO0FBRUg7QUFDWjtBQUV0QixTQUFTb0I7O0lBQ1osTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQTtJQUVoQ2pCLDZDQUFLQSxDQUFDdUIsUUFBUSxDQUFDQyxlQUFlLEdBQUc7SUFDN0JSLGdEQUFTQSxDQUFDO1FBQ1ZoQiw2Q0FBS0EsQ0FBQ3lCLEdBQUcsQ0FBQ1gsK0NBQU9BLEdBQUcsWUFDbkJZLElBQUksQ0FBQyxDQUFDQztZQUNITCxRQUFRO2dCQUNKTSxPQUFPRCxTQUFTRSxJQUFJLENBQUMsUUFBUTtnQkFDN0JDLFlBQVlILFNBQVNFLElBQUksQ0FBQyxhQUFhO2dCQUN2Q0UsV0FBV0osU0FBU0UsSUFBSSxDQUFDLFlBQVk7Z0JBQ3JDRyxXQUFXTCxTQUFTRSxJQUFJLENBQUMsWUFBWTtnQkFDckNJLGlCQUFpQk4sU0FBU0UsSUFBSSxDQUFDLG1CQUFtQjtZQUN0RDtRQUNKLEdBQ0NLLEtBQUssQ0FBQyxDQUFDQztZQUNKQyxRQUFRQyxHQUFHLENBQUMscUJBQXFCRjtRQUNyQztJQUNKLEdBQUcsRUFBRTtJQUVMLE9BQU9kO0FBQ1g7R0FyQmdCRDtLQUFBQTtBQXVCVCxTQUFTa0I7O0lBQ1osTUFBTUMsU0FBU3hCLDBEQUFTQTtJQUN4QixNQUFNTSxPQUFPRDtJQUViLHFCQUNJLDhEQUFDbkIsMkRBQVlBOzswQkFDVCw4REFBQ00sa0VBQW1CQTtnQkFBQ2lDLE9BQU87MEJBQ3hCLDRFQUFDaEMsOENBQU1BO29CQUNIaUMsU0FBUztvQkFDVEMsV0FBVTs4QkFFViw0RUFBQ2pDLDhDQUFNQTs7NEJBRUMsQ0FBQ1ksc0JBQVEsOERBQUNILGtEQUFRQTtnQ0FBQ3dCLFdBQVU7Ozs7Ozs0QkFHN0JyQixDQUFBQSxpQkFBQUEsMkJBQUFBLEtBQU1ZLGVBQWUsbUJBQ3JCLDhEQUFDdEIsbURBQVdBO2dDQUFDZ0MsS0FBSyxvQkFBMEMsT0FBdEJ0QixpQkFBQUEsMkJBQUFBLEtBQU1ZLGVBQWU7Ozs7Ozs0QkFHM0RaLFFBQVEsRUFBQ0EsaUJBQUFBLDJCQUFBQSxLQUFNWSxlQUFlLG1CQUM5Qiw4REFBQ3ZCLHNEQUFjQTswQ0FDVFcsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNUyxVQUFVLENBQUNjLEtBQUssQ0FBQyxHQUFHLE9BQU12QixpQkFBQUEsMkJBQUFBLEtBQU1VLFNBQVMsQ0FBQ2EsS0FBSyxDQUFDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTS9FLDhEQUFDMUMsa0VBQW1CQTtnQkFBQ3dDLFdBQVU7O2tDQUMzQiw4REFBQ3JDLGdFQUFpQkE7OzBDQUNkLDhEQUFDd0M7MENBQUU7Ozs7Ozs0QkFFQyxDQUFDeEIsc0JBQ0QsOERBQUNILGtEQUFRQTtnQ0FBQ3dCLFdBQVU7Ozs7Ozs0QkFHcEJyQixzQkFDQSw4REFBQ3dCO2dDQUFFSCxXQUFVOzBDQUNSckIsQ0FBQUEsaUJBQUFBLDJCQUFBQSxLQUFNUyxVQUFVLElBQUcsT0FBTVQsaUJBQUFBLDJCQUFBQSxLQUFNVSxTQUFTOzs7Ozs7Ozs7Ozs7a0NBS3JELDhEQUFDNUIsZ0VBQWlCQTs7Ozs7a0NBQ2xCLDhEQUFDRyxvRUFBcUJBOzs7OztrQ0FDdEIsOERBQUNILGdFQUFpQkE7OzBDQUNkLDhEQUFDQywrREFBZ0JBO2dDQUFDb0MsT0FBTzswQ0FDckIsNEVBQUNyQixpREFBSUE7b0NBQ0QyQixNQUFNOztzREFFTiw4REFBQ2pDLHdGQUFJQTs0Q0FBQzZCLFdBQVU7Ozs7OztzREFDaEIsOERBQUNLO3NEQUFLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHZCw4REFBQzNDLCtEQUFnQkE7Z0NBQUM0QyxTQUFTO29DQUN2QmhELDZDQUFLQSxDQUFDaUQsSUFBSSxDQUFDbkMsK0NBQU9BLEdBQUcsZ0JBQ3BCWSxJQUFJLENBQUM7d0NBQ0ZhLE9BQU9XLElBQUksQ0FBQztvQ0FDaEIsR0FDQ2hCLEtBQUssQ0FBQyxDQUFDaUI7d0NBQ0pmLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JjO29DQUNwQztnQ0FDSjs7a0RBQ0ksOERBQUN2Qyx3RkFBTUE7d0NBQUM4QixXQUFVOzs7Ozs7a0RBQ2xCLDhEQUFDSztrREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTlCO0lBdEVnQlQ7O1FBQ0d2QixzREFBU0E7OztNQURadUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wcm9maWxlLnRzeD82ZGRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIlxyXG5cclxuaW1wb3J0IHtcclxuICAgIERyb3Bkb3duTWVudSxcclxuICAgIERyb3Bkb3duTWVudUNvbnRlbnQsXHJcbiAgICBEcm9wZG93bk1lbnVHcm91cCxcclxuICAgIERyb3Bkb3duTWVudUl0ZW0sXHJcbiAgICBEcm9wZG93bk1lbnVMYWJlbCxcclxuICAgIERyb3Bkb3duTWVudVNlcGFyYXRvcixcclxuICAgIERyb3Bkb3duTWVudVRyaWdnZXJcclxufSBmcm9tIFwiLi91aS9kcm9wZG93bi1tZW51XCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL3VpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIEF2YXRhckZhbGxiYWNrLCBBdmF0YXJJbWFnZSB9IGZyb20gXCIuL3VpL2F2YXRhclwiO1xyXG5pbXBvcnQgeyBMb2dPdXQsIFVzZXIgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJTY2hlbWEgfSBmcm9tIFwiQC9zY2hlbWFzXCI7XHJcbmltcG9ydCB7IFNrZWxldG9uIH0gZnJvbSBcIi4vdWkvc2tlbGV0b25cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEdldEN1cnJlbnRVc2VyKCl7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTx6LmluZmVyPHR5cGVvZiBVc2VyU2NoZW1hPj4oKTtcclxuXHJcbiAgICBheGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KEFQSV9VUkwgKyAnL2F1dGgvbWUnKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRVc2VyKHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiByZXNwb25zZS5kYXRhWydlbWFpbCddLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogcmVzcG9uc2UuZGF0YVsnZmlyc3RfbmFtZSddLFxyXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiByZXNwb25zZS5kYXRhWydsYXN0X25hbWUnXSxcclxuICAgICAgICAgICAgICAgIHBhdGVybml0eTogcmVzcG9uc2UuZGF0YVsncGF0ZXJuaXR5J10sXHJcbiAgICAgICAgICAgICAgICBhdmF0YXJfZmlsZW5hbWU6IHJlc3BvbnNlLmRhdGFbJ2F2YXRhcl9maWxlX25hbWUnXSxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuZXhwZWN0ZWQgZXJyb3I6JywgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiB1c2VyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB1c2VyID0gR2V0Q3VycmVudFVzZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEcm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVUcmlnZ2VyIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17J2dob3N0J31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLXB4IHJvdW5kZWQtZnVsbCBzZWxmLWNlbnRlciBoLTEwIHctMTBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICF1c2VyICYmIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJoLTEyIHctMTIgcm91bmRlZC1mdWxsXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXI/LmF2YXRhcl9maWxlbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckltYWdlIHNyYz17YC4uL3B1YmxpYy9pbWFnZXMvJHt1c2VyPy5hdmF0YXJfZmlsZW5hbWV9YH0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgJiYgIXVzZXI/LmF2YXRhcl9maWxlbmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhckZhbGxiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodXNlcj8uZmlyc3RfbmFtZS5zbGljZSgwLCAxKSEgKyB1c2VyPy5sYXN0X25hbWUuc2xpY2UoMCwgMSkhKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQXZhdGFyRmFsbGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L0F2YXRhcj5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0Ryb3Bkb3duTWVudVRyaWdnZXI+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVDb250ZW50IGNsYXNzTmFtZT1cInctNTYgbXItMlwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtCc0L7QuSDQsNC60LrQsNGD0L3RgjwvcD5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICF1c2VyICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LW11dGVkLWZvcmVncm91bmQgb3ZlcmZsb3ctaGlkZGVuIHRleHQtZWxsaXBzaXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt1c2VyPy5maXJzdF9uYW1lICsgJyAnICsgdXNlcj8ubGFzdF9uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51TGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51R3JvdXA+PC9Ecm9wZG93bk1lbnVHcm91cD5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVTZXBhcmF0b3IvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVJdGVtIGFzQ2hpbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXsnL3Byb2ZpbGUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7Qn9GA0L7RhNC40LvRjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51SXRlbSBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoQVBJX1VSTCArICcvYXV0aC9sb2dvdXQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3NpZ24taW4nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmV4cGVjdGVkIGVycm9yJywgZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExvZ091dCBjbGFzc05hbWU9XCJtci0yIGgtNCB3LTRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPtCS0YvRhdC+0LQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVHcm91cD5cclxuICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVDb250ZW50PlxyXG4gICAgICAgIDwvRHJvcGRvd25NZW51PlxyXG4gICAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkRyb3Bkb3duTWVudSIsIkRyb3Bkb3duTWVudUNvbnRlbnQiLCJEcm9wZG93bk1lbnVHcm91cCIsIkRyb3Bkb3duTWVudUl0ZW0iLCJEcm9wZG93bk1lbnVMYWJlbCIsIkRyb3Bkb3duTWVudVNlcGFyYXRvciIsIkRyb3Bkb3duTWVudVRyaWdnZXIiLCJCdXR0b24iLCJBdmF0YXIiLCJBdmF0YXJGYWxsYmFjayIsIkF2YXRhckltYWdlIiwiTG9nT3V0IiwiVXNlciIsIkFQSV9VUkwiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNrZWxldG9uIiwiTGluayIsIkdldEN1cnJlbnRVc2VyIiwidXNlciIsInNldFVzZXIiLCJkZWZhdWx0cyIsIndpdGhDcmVkZW50aWFscyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImVtYWlsIiwiZGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJwYXRlcm5pdHkiLCJhdmF0YXJfZmlsZW5hbWUiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlByb2ZpbGUiLCJyb3V0ZXIiLCJhc0NoaWxkIiwidmFyaWFudCIsImNsYXNzTmFtZSIsInNyYyIsInNsaWNlIiwicCIsImhyZWYiLCJzcGFuIiwib25DbGljayIsInBvc3QiLCJwdXNoIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/profile.tsx\n"));

/***/ })

});