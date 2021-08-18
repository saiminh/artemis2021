/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkartemis2021"] = self["webpackChunkartemis2021"] || []).push([["js_src_home_home-scroll_js"],{

/***/ "./js/src/home/home-scroll.js":
/*!************************************!*\
  !*** ./js/src/home/home-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeScroll\": () => (/* binding */ homeScroll)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap/SplitText */ \"./node_modules/gsap/SplitText.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger, gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText);\n\nfunction homeScroll(data) {\n  let splitHomeContent = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_2__.SplitText(data.container.querySelectorAll('.home-content p'), { type: \"words, lines\" });\n  splitHomeContent.lines.forEach( (element) => {\n    element.style.overflow = 'hidden';\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.from(splitHomeContent.words, {\n    opacity: 0,\n    yPercent: 100,\n    stagger: .05,\n    ease: 'power3.out',\n    duration: .3,\n    scrollTrigger: {\n      trigger: data.container.querySelector('.home-content'),\n      start: 'top 75%',\n      toggleActions: 'play complete play reverse',\n    }\n  });\n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to( '.home-hero-headline', {\n    scrollTrigger: {\n      trigger: data.container.querySelector('.home-hero'),\n      start: 'top top',\n      end: 'bottom top',\n      scrub: true,\n    },\n    yPercent: 33,\n  })\n}\n\n\n//# sourceURL=webpack://artemis2021/./js/src/home/home-scroll.js?");

/***/ })

}]);