/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkartemis2021"] = self["webpackChunkartemis2021"] || []).push([["home"],{

/***/ "./js/src/home.js":
/*!************************!*\
  !*** ./js/src/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\n// import { homeHero } from './home/home-hero.js';\n// import { homeButtons } from './home/home-buttons.js';\n// import { homeIntro } from './home/home-intro.js';\n// import { homeScroll } from './home/home-scroll.js';\nfunction home(){\n  Promise.all(/*! import() | homeHero */[__webpack_require__.e(\"vendors-node_modules_gsap_PixiPlugin_js-node_modules_pixi_js_dist_esm_pixi_js\"), __webpack_require__.e(\"homeHero\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-hero.js */ \"./js/src/home/home-hero.js\")).then( module => {\n    const homeHero = module.default;\n    homeHero();\n  } );\n  __webpack_require__.e(/*! import() | homeIntro */ \"homeIntro\").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-intro.js */ \"./js/src/home/home-intro.js\")).then( module => {\n    const homeIntro = module.default;\n    homeIntro();\n  } );\n  __webpack_require__.e(/*! import() | homeButtons */ \"homeButtons\").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-buttons.js */ \"./js/src/home/home-buttons.js\")).then( module => {\n    const homeButtons = module.default;\n    homeButtons();\n  } );\n  Promise.all(/*! import() | homeScroll */[__webpack_require__.e(\"vendors-node_modules_gsap_ScrollTrigger_js-node_modules_gsap_SplitText_js\"), __webpack_require__.e(\"homeScroll\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home-scroll.js */ \"./js/src/home/home-scroll.js\")).then( module => {\n    const homeScroll = module.default;\n    homeScroll();\n  } );\n}\n\n\n\n//# sourceURL=webpack://artemis2021/./js/src/home.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./js/src/home.js"));
/******/ }
]);