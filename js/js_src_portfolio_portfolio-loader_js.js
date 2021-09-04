/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkartemis2021"] = self["webpackChunkartemis2021"] || []).push([["js_src_portfolio_portfolio-loader_js"],{

/***/ "./js/src/portfolio/portfolio-loader.js":
/*!**********************************************!*\
  !*** ./js/src/portfolio/portfolio-loader.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"portfolioLoader\": () => (/* binding */ portfolioLoader)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\nfunction portfolioLoader(){\n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set('.artemis-preloader', {\n    autoAlpha: 1,\n  });    \n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set('.site-main', {\n    autoAlpha: 0,\n  });    \n  gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set('.artemis-preloader-logos', {\n    scale: 3,\n    y: 0\n  });  \n\n  //Loading animation\n  let loadingTl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({\n    paused: false, \n    onComplete: ()=>{\n      if(\n        document.readyState === 'complete'\n      ) {\n        curtainsUp();\n      } else {\n        loadingTl.play(0);\n      }\n    } \n  });\n  loadingTl.fromTo('.artemis-preloader svg:nth-child(2) path', {\n    autoAlpha: 0\n  },{ \n    autoAlpha: 1,\n    stagger: 0.1\n  });\n  // curtainsup animation\n  function curtainsUp() {\n    let tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline()            \n      .to('.artemis-preloader-logos', {\n        // y: -window.innerHeight/1.75,\n        ease: \"circ.inOut\",\n        duration: .75, \n        onComplete: () => {\n          gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to('.artemis-preloader svg:nth-child(2) path', {\n            autoAlpha: 0\n          })\n        }\n      }, 0)\n      .fromTo('.site-main', {\n        autoAlpha: 0\n      }, {\n        autoAlpha: 1,\n        ease: \"power3.inOut\",\n        duration: 1.25\n      })\n    return tl;\n  }\n}\n\n\n//# sourceURL=webpack://artemis2021/./js/src/portfolio/portfolio-loader.js?");

/***/ })

}]);