"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("middleware",{

/***/ "(middleware)/./middleware.ts":
/*!***********************!*\
  !*** ./middleware.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ middleware)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(middleware)/./node_modules/next/dist/esm/api/server.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/constants */ \"(middleware)/./constants/index.ts\");\n\n\nfunction middleware(req) {\n    const isAuthorized = req.cookies.get(\"Authorization\");\n    const url = req.url;\n    if (_constants__WEBPACK_IMPORTED_MODULE_1__.imgExtensions.some((elem)=>url.includes(elem))) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.next();\n    }\n    if (!isAuthorized && !_constants__WEBPACK_IMPORTED_MODULE_1__.signingPages.some((link)=>url.includes(link))) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(_constants__WEBPACK_IMPORTED_MODULE_1__.WEBSITE_URL + \"/sign-in\");\n    }\n    if (isAuthorized && _constants__WEBPACK_IMPORTED_MODULE_1__.signingPages.some((link)=>url.includes(link))) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.redirect(_constants__WEBPACK_IMPORTED_MODULE_1__.WEBSITE_URL);\n    }\n// добавить логику (бан чужих профилей, неаппрувнутых мероприятий)\n}\nconst config = {\n    matcher: [\n        /*\r\n     * Match all request paths except for the ones starting with:\r\n     * - api (API routes)\r\n     * - _next/static (static files)\r\n     * - _next/image (image optimization files)\r\n     * - favicon.ico (favicon file)\r\n     */ \"/((?!api|_next/static|_next/image|favicon.ico).*)\"\n    ]\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKG1pZGRsZXdhcmUpLy4vbWlkZGxld2FyZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdEO0FBQ2M7QUFFdkQsU0FBU0ksV0FBV0MsR0FBZ0I7SUFDakQsTUFBTUMsZUFBZUQsSUFBSUUsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFDckMsTUFBTUMsTUFBTUosSUFBSUksR0FBRztJQUVuQixJQUFHTixxREFBYUEsQ0FBQ08sSUFBSSxDQUFDQyxDQUFBQSxPQUFRRixJQUFJRyxRQUFRLENBQUNELFFBQU87UUFDaEQsT0FBT1gscURBQVlBLENBQUNhLElBQUk7SUFDMUI7SUFFQSxJQUFHLENBQUNQLGdCQUFnQixDQUFDSixvREFBWUEsQ0FBQ1EsSUFBSSxDQUFDSSxDQUFBQSxPQUFRTCxJQUFJRyxRQUFRLENBQUNFLFFBQU87UUFDakUsT0FBT2QscURBQVlBLENBQUNlLFFBQVEsQ0FBQ2QsbURBQVdBLEdBQUc7SUFDN0M7SUFFQSxJQUFJSyxnQkFBZ0JKLG9EQUFZQSxDQUFDUSxJQUFJLENBQUNJLENBQUFBLE9BQVFMLElBQUlHLFFBQVEsQ0FBQ0UsUUFBTztRQUNoRSxPQUFPZCxxREFBWUEsQ0FBQ2UsUUFBUSxDQUFDZCxtREFBV0E7SUFDMUM7QUFFQSxrRUFBa0U7QUFDcEU7QUFFTyxNQUFNZSxTQUFTO0lBQ3BCQyxTQUFTO1FBQ1A7Ozs7OztLQU1DLEdBQ0Q7S0FDRDtBQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbWlkZGxld2FyZS50cz80MjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSwgTmV4dFJlcXVlc3QgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgV0VCU0lURV9VUkwsIHNpZ25pbmdQYWdlcywgaW1nRXh0ZW5zaW9ucyB9IGZyb20gXCJAL2NvbnN0YW50c1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGV3YXJlKHJlcTogTmV4dFJlcXVlc3Qpe1xyXG4gIGNvbnN0IGlzQXV0aG9yaXplZCA9IHJlcS5jb29raWVzLmdldChcIkF1dGhvcml6YXRpb25cIik7XHJcbiAgY29uc3QgdXJsID0gcmVxLnVybFxyXG5cclxuICBpZihpbWdFeHRlbnNpb25zLnNvbWUoZWxlbSA9PiB1cmwuaW5jbHVkZXMoZWxlbSkpKXtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UubmV4dCgpXHJcbiAgfVxyXG5cclxuICBpZighaXNBdXRob3JpemVkICYmICFzaWduaW5nUGFnZXMuc29tZShsaW5rID0+IHVybC5pbmNsdWRlcyhsaW5rKSkpe1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5yZWRpcmVjdChXRUJTSVRFX1VSTCArICcvc2lnbi1pbicpXHJcbiAgfVxyXG5cclxuICBpZiAoaXNBdXRob3JpemVkICYmIHNpZ25pbmdQYWdlcy5zb21lKGxpbmsgPT4gdXJsLmluY2x1ZGVzKGxpbmspKSl7XHJcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLnJlZGlyZWN0KFdFQlNJVEVfVVJMKVxyXG4gIH1cclxuXHJcbiAgLy8g0LTQvtCx0LDQstC40YLRjCDQu9C+0LPQuNC60YMgKNCx0LDQvSDRh9GD0LbQuNGFINC/0YDQvtGE0LjQu9C10LksINC90LXQsNC/0L/RgNGD0LLQvdGD0YLRi9GFINC80LXRgNC+0L/RgNC40Y/RgtC40LkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgbWF0Y2hlcjogW1xyXG4gICAgLypcclxuICAgICAqIE1hdGNoIGFsbCByZXF1ZXN0IHBhdGhzIGV4Y2VwdCBmb3IgdGhlIG9uZXMgc3RhcnRpbmcgd2l0aDpcclxuICAgICAqIC0gYXBpIChBUEkgcm91dGVzKVxyXG4gICAgICogLSBfbmV4dC9zdGF0aWMgKHN0YXRpYyBmaWxlcylcclxuICAgICAqIC0gX25leHQvaW1hZ2UgKGltYWdlIG9wdGltaXphdGlvbiBmaWxlcylcclxuICAgICAqIC0gZmF2aWNvbi5pY28gKGZhdmljb24gZmlsZSlcclxuICAgICAqL1xyXG4gICAgJy8oKD8hYXBpfF9uZXh0L3N0YXRpY3xfbmV4dC9pbWFnZXxmYXZpY29uLmljbykuKiknLFxyXG4gIF0sXHJcbn1cclxuIl0sIm5hbWVzIjpbIk5leHRSZXNwb25zZSIsIldFQlNJVEVfVVJMIiwic2lnbmluZ1BhZ2VzIiwiaW1nRXh0ZW5zaW9ucyIsIm1pZGRsZXdhcmUiLCJyZXEiLCJpc0F1dGhvcml6ZWQiLCJjb29raWVzIiwiZ2V0IiwidXJsIiwic29tZSIsImVsZW0iLCJpbmNsdWRlcyIsIm5leHQiLCJsaW5rIiwicmVkaXJlY3QiLCJjb25maWciLCJtYXRjaGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(middleware)/./middleware.ts\n");

/***/ })

});