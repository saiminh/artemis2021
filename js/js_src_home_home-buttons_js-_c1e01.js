/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkartemis2021"] = self["webpackChunkartemis2021"] || []).push([["js_src_home_home-buttons_js-_c1e01"],{

/***/ "./js/src/home/home-buttons.js":
/*!*************************************!*\
  !*** ./js/src/home/home-buttons.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homeButtons\": () => (/* binding */ homeButtons)\n/* harmony export */ });\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n\n\n\nfunction homeButtons(){\n\n  const homeBtns = document.querySelectorAll('.home-navigation .wp-block-button');\n  \n  homeBtns.forEach( function(homeBtn) {\n    let bgshape = document.createElement('DIV');\n    bgshape.classList.add('homeBtn-bgshape');\n    let bgshapeImg = document.createElement('DIV');\n    bgshapeImg.classList.add('homeBtn-bgshapeImg');\n    // bgshapeImg.setAttribute('src', '/wp-content/themes/artemis2021/img/artemis-bg.png');\n    let homeBtn_bgshape = homeBtn.appendChild(bgshape);\n    let homeBtn_bgshapeImg = homeBtn_bgshape.appendChild(bgshapeImg);\n    \n    let homeBtn_bgshapeImg_movetl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline( { paused: true, repeat: -1, defaults: { duration: 5, ease: \"cubic.inOut\" } } )\n      .to(homeBtn_bgshapeImg, { backgroundPosition: \"100% 100%\" })\n      .to(homeBtn_bgshapeImg, { backgroundPosition: \"0% 100%\" })\n      .to(homeBtn_bgshapeImg, { backgroundPosition: \"100% 0%\" })\n      .to(homeBtn_bgshapeImg, { backgroundPosition: \"0% 0%\" })\n    ;\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(homeBtn_bgshape, {\n      scale: 0\n    });\n    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.set(homeBtn_bgshapeImg, {\n      scale: 1\n    });\n    let homeBtn_bgshape_in_tl = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.timeline({ paused: true }).to( homeBtn_bgshape, { scale: 1, duration: .3, ease: 'power2.inOut' } );\n    \n    homeBtn.addEventListener('mouseover', (e) => {\n      homeBtn_bgshape_in_tl.play();\n      homeBtn_bgshapeImg_movetl.play();\n    });\n    homeBtn.addEventListener('mouseleave', (e) => {\n      homeBtn_bgshapeImg_movetl.pause();\n      homeBtn_bgshape_in_tl.reverse();\n    });\n    homeBtn.addEventListener('mousemove', (e) => {\n      let homeBtnX = homeBtn.getBoundingClientRect().left + homeBtn.clientWidth/2;\n      let homeBtnY = homeBtn.getBoundingClientRect().top - window.scrollY + homeBtn.clientHeight/2 +  window.scrollY;\n      let mouseX = e.clientX;\n      let mouseY = e.clientY;\n      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(homeBtn_bgshape, {\n        rotationY: (homeBtnX - mouseX)/8,\n        rotationX: (homeBtnY - mouseY)/2,\n        duration: .3\n      });\n      gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(homeBtn_bgshapeImg, {\n        x: (homeBtnX - mouseX),\n        y: (homeBtnY - mouseY)\n      });\n    })\n  })\n}\n\n\n//# sourceURL=webpack://artemis2021/./js/src/home/home-buttons.js?");

/***/ })

}]);