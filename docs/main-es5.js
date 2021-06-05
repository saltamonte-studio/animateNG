(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-demo></app-demo>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/demo/demo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/demo/demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=container>\r\n\r\n\t<div class=\"wrap\">\r\n\t\t<div class=\"container-animation\">\r\n\t\t\t<p class=\"demoElement\" [@animateGallery]=\"state\" (@animateGallery.done)=\"resetAnimation()\" (@animateGallery.start)=\"startAnimation()\">\r\n\t\t\t\tAnimate NG\r\n\t\t\t</p>\r\n\t\t</div>\r\n\r\n\t\t<div class=\"form\">\r\n\t\t\t<div class=\"select-container\">\r\n\t\t\t\t<select (change)=\"apliAnimation($event.target.value)\">\r\n\t\t\t\t\t<optgroup *ngFor=\"let groups of animations\" label=\"{{groups.groupTitle}}\">\r\n\t\t\t\t\t\t<option *ngFor=\"let option of groups.options\" value=\"{{option}}\">{{option}}</option>\r\n\t\t\t\t\t</optgroup>\r\n\t\t\t\t</select>\r\n\t\t\t\t<div class=\"arrows\">\r\n\t\t\t\t\t<span></span>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<button (click)=\"apliAnimation(selectedState)\">Animate it</button>\r\n\t\t</div>\r\n\t\t<!-- form -->\r\n\t\t<hr>\r\n\t\t<p>by <a href=\"\">Saltamonte</a> base on Animate.css or <a href=\"\">\tView on GitHub</a></p>\r\n\t</div>\r\n\t<!-- wrap -->\r\n\r\n</div>\r\n<!-- container -->\r\n<!-- \r\n\t<select class=\"input input--dropdown js--animations\">\r\n\t\t<optgroup label=\"Attention Seekers\">\r\n\t\t\t<option value=\"bounce\">bounce</option>\r\n\t\t\t<option value=\"flash\">flash</option>\r\n\t\t\t<option value=\"pulse\">pulse</option>\r\n\t\t\t<option value=\"rubberBand\">rubberBand</option>\r\n\t\t\t<option value=\"shake\">shake</option>\r\n\t\t\t<option value=\"swing\">swing</option>\r\n\t\t\t<option value=\"tada\">tada</option>\r\n\t\t\t<option value=\"wobble\">wobble</option>\r\n\t\t\t<option value=\"jello\">jello</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Bouncing Entrances\">\r\n\t\t\t<option value=\"bounceIn\">bounceIn</option>\r\n\t\t\t<option value=\"bounceInDown\">bounceInDown</option>\r\n\t\t\t<option value=\"bounceInLeft\">bounceInLeft</option>\r\n\t\t\t<option value=\"bounceInRight\">bounceInRight</option>\r\n\t\t\t<option value=\"bounceInUp\">bounceInUp</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Bouncing Exits\">\r\n\t\t\t<option value=\"bounceOut\">bounceOut</option>\r\n\t\t\t<option value=\"bounceOutDown\">bounceOutDown</option>\r\n\t\t\t<option value=\"bounceOutLeft\">bounceOutLeft</option>\r\n\t\t\t<option value=\"bounceOutRight\">bounceOutRight</option>\r\n\t\t\t<option value=\"bounceOutUp\">bounceOutUp</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Fading Entrances\">\r\n\t\t\t<option value=\"fadeIn\">fadeIn</option>\r\n\t\t\t<option value=\"fadeInDown\">fadeInDown</option>\r\n\t\t\t<option value=\"fadeInDownBig\">fadeInDownBig</option>\r\n\t\t\t<option value=\"fadeInLeft\">fadeInLeft</option>\r\n\t\t\t<option value=\"fadeInLeftBig\">fadeInLeftBig</option>\r\n\t\t\t<option value=\"fadeInRight\">fadeInRight</option>\r\n\t\t\t<option value=\"fadeInRightBig\">fadeInRightBig</option>\r\n\t\t\t<option value=\"fadeInUp\">fadeInUp</option>\r\n\t\t\t<option value=\"fadeInUpBig\">fadeInUpBig</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Fading Exits\">\r\n\t\t\t<option value=\"fadeOut\">fadeOut</option>\r\n\t\t\t<option value=\"fadeOutDown\">fadeOutDown</option>\r\n\t\t\t<option value=\"fadeOutDownBig\">fadeOutDownBig</option>\r\n\t\t\t<option value=\"fadeOutLeft\">fadeOutLeft</option>\r\n\t\t\t<option value=\"fadeOutLeftBig\">fadeOutLeftBig</option>\r\n\t\t\t<option value=\"fadeOutRight\">fadeOutRight</option>\r\n\t\t\t<option value=\"fadeOutRightBig\">fadeOutRightBig</option>\r\n\t\t\t<option value=\"fadeOutUp\">fadeOutUp</option>\r\n\t\t\t<option value=\"fadeOutUpBig\">fadeOutUpBig</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Flippers\">\r\n\t\t\t<option value=\"flip\">flip</option>\r\n\t\t\t<option value=\"flipInX\">flipInX</option>\r\n\t\t\t<option value=\"flipInY\">flipInY</option>\r\n\t\t\t<option value=\"flipOutX\">flipOutX</option>\r\n\t\t\t<option value=\"flipOutY\">flipOutY</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Lightspeed\">\r\n\t\t\t<option value=\"lightSpeedIn\">lightSpeedIn</option>\r\n\t\t\t<option value=\"lightSpeedOut\">lightSpeedOut</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Rotating Entrances\">\r\n\t\t\t<option value=\"rotateIn\">rotateIn</option>\r\n\t\t\t<option value=\"rotateInDownLeft\">rotateInDownLeft</option>\r\n\t\t\t<option value=\"rotateInDownRight\">rotateInDownRight</option>\r\n\t\t\t<option value=\"rotateInUpLeft\">rotateInUpLeft</option>\r\n\t\t\t<option value=\"rotateInUpRight\">rotateInUpRight</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Rotating Exits\">\r\n\t\t\t<option value=\"rotateOut\">rotateOut</option>\r\n\t\t\t<option value=\"rotateOutDownLeft\">rotateOutDownLeft</option>\r\n\t\t\t<option value=\"rotateOutDownRight\">rotateOutDownRight</option>\r\n\t\t\t<option value=\"rotateOutUpLeft\">rotateOutUpLeft</option>\r\n\t\t\t<option value=\"rotateOutUpRight\">rotateOutUpRight</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Sliding Entrances\">\r\n\t\t\t<option value=\"slideInUp\">slideInUp</option>\r\n\t\t\t<option value=\"slideInDown\">slideInDown</option>\r\n\t\t\t<option value=\"slideInLeft\">slideInLeft</option>\r\n\t\t\t<option value=\"slideInRight\">slideInRight</option>\r\n\r\n\t\t</optgroup>\r\n\t\t<optgroup label=\"Sliding Exits\">\r\n\t\t\t<option value=\"slideOutUp\">slideOutUp</option>\r\n\t\t\t<option value=\"slideOutDown\">slideOutDown</option>\r\n\t\t\t<option value=\"slideOutLeft\">slideOutLeft</option>\r\n\t\t\t<option value=\"slideOutRight\">slideOutRight</option>\r\n\t\t\t\r\n\t\t</optgroup>\r\n\t\t\r\n\t\t<optgroup label=\"Zoom Entrances\">\r\n\t\t\t<option value=\"zoomIn\">zoomIn</option>\r\n\t\t\t<option value=\"zoomInDown\">zoomInDown</option>\r\n\t\t\t<option value=\"zoomInLeft\">zoomInLeft</option>\r\n\t\t\t<option value=\"zoomInRight\">zoomInRight</option>\r\n\t\t\t<option value=\"zoomInUp\">zoomInUp</option>\r\n\t\t</optgroup>\r\n\t\t\r\n\t\t<optgroup label=\"Zoom Exits\">\r\n\t\t\t<option value=\"zoomOut\">zoomOut</option>\r\n\t\t\t<option value=\"zoomOutDown\">zoomOutDown</option>\r\n\t\t\t<option value=\"zoomOutLeft\">zoomOutLeft</option>\r\n\t\t\t<option value=\"zoomOutRight\">zoomOutRight</option>\r\n\t\t\t<option value=\"zoomOutUp\">zoomOutUp</option>\r\n\t\t</optgroup>\r\n\r\n\t\t<optgroup label=\"Specials\">\r\n\t\t\t<option value=\"hinge\">hinge</option>\r\n\t\t\t<option value=\"jackInTheBox\">jackInTheBox</option>\r\n\t\t\t<option value=\"rollIn\">rollIn</option>\r\n\t\t\t<option value=\"rollOut\">rollOut</option>\r\n\t\t</optgroup>\r\n\t</select> \r\n-->"

/***/ }),

/***/ "./src/app/animations/animations.component.ts":
/*!****************************************************!*\
  !*** ./src/app/animations/animations.component.ts ***!
  \****************************************************/
/*! exports provided: AnimateGallery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateGallery", function() { return AnimateGallery; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var AnimateGallery = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("animateGallery", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideInLeft", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideOutLeft", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: '0', transform: 'translate(-100% 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideInRight", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideOutRight", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: '0', transform: 'translate(100%, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideInUp", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideOutUp", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: '0', transform: 'translate(0, -100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideInDown", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("slideOutDown", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'none', opacity: '0', transform: 'translate(0, 100%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("fadeIn", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("fadeOut", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("wobble", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("swing", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("accordionClose", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: "0px", overflow: 'hidden', display: 'none', padding: '0' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("accordionOpen", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: "*", overflow: 'visible', display: 'block', padding: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('bounceInDown', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', height: '*', overflow: 'visible', display: 'block', padding: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("turnInDown", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("turnOutDown", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(60deg) translate(0, 1000%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("turnInUp", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("turnOutUp", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(-60deg) translate(0, -1000%)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])("buzz", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0, 0)' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideInLeft, void => slideInLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(-100%, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideOutLeft, void => slideOutLeft', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(-100%, 0)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideInRight, void => slideInRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(100%, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideOutRight, void => slideOutRight', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(100%, 0)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideInUp, void => slideInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, -100%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideOutUp, void => slideOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, -100%)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideInDown, void => slideInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, 100%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => slideOutDown, void => slideOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, 100%)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeIn, void => fadeIn', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => fadeOut, void => fadeOut', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '0', transform: 'translate(0, 0)', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => wobble, void => wobble', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-25%, 0) rotate( -5deg)', offset: .15 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(20%, 0) rotate( 3deg)', offset: .30 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-15%, 0) rotate( -3deg)', offset: .45 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(10%, 0) rotate( 2deg)', offset: .60 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-5%, 0) rotate( -1deg)', offset: .75 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => swing, void => swing', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(15%)', offset: .2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-10%)', offset: .4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(5%)', offset: .6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-5%)', offset: .8 }),
            //style({ transform: 'translate3d(0, 0, 1, 0deg)', offset: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 }),
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => accordionOpen', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', display: 'block', padding: '0', height: '0', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', display: 'block', padding: '*', height: '*', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => accordionClose', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', display: 'block', padding: '*', height: '*', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ overflow: 'hidden', display: 'block', padding: '0', height: '0', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => bounceInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('500ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', height: '0', overflow: 'hidden', padding: '0', transform: 'translate(0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', height: '*', overflow: 'hidden', padding: '*', transform: 'translate(0, 10px) ', offset: .3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: '1', height: '*', overflow: 'hidden', padding: '*', transform: 'translate(0, 0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => turnInDown, void => turnInDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(60deg) translate(0, 1000%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => turnOutDown, void => turnOutDown', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(60deg) translate(0, 1000%)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => turnInUp, void => turnInUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(-60deg) translate(0, -1000%)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => turnOutUp, void => turnOutUp', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(0) translate(0,0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ display: 'block', opacity: '1', transform: 'rotateZ(-60deg) translate(0, -1000%)', offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => buzz', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1000ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(0, 0) 	 rotate( 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(3px, 0)  rotate( 0.3deg)', offset: .1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-3px, 0) rotate( -0.3deg)', offset: .2 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(3px, 0)  rotate( 0.3deg)', offset: .3 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-3px, 0) rotate( -0.3deg)', offset: .4 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(3px, 0)  rotate( 0.3deg)', offset: .5 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-3px, 0) rotate( -0.3deg)', offset: .6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(3px, 0)  rotate( 0.3deg)', offset: .7 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(-3px, 0) rotate(-0.3deg)', offset: .8 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translate(3px, 0)  rotate(0.3deg)', offset: .9 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'none', offset: 1 }),
        ]))
    ]),
]);


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'animateNG';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _demo_demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  position: relative;\n  top: 100%;\n}\n.container .wrap {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-align: center;\n  color: #7b8993;\n}\n.container .wrap a {\n  color: inherit;\n  text-decoration: underline;\n}\n.container .wrap a:hover {\n  color: #f35626;\n}\n.container .wrap hr {\n  border: none;\n  height: 1px;\n  background-color: #e6e6e6;\n  background-image: -webkit-linear-gradient(0deg, #fff, #c0c8c9, #fff);\n  width: 450px;\n}\n/* \n.container:before {\n\tcontent: '';\n\tdisplay: inline-block;\n\theight: 100%;\n\tvertical-align: middle;\n} */\n.container-animation {\n  overflow: hidden;\n  height: 120px;\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 3px 0px 39px 0px;\n  /*   border-top: 1px solid $line;\n  border-bottom: 1px solid $line; */\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n}\n.demoElement {\n  width: 50%;\n  margin: 0 auto;\n  text-align: center;\n  padding: 5px;\n  color: #f35626;\n  font-size: 5rem;\n  line-height: 1.2;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 100;\n}\n.form {\n  text-align: center;\n}\nbutton,\nselect {\n  padding: 0.75rem;\n  margin: 0.375rem;\n  background-color: transparent;\n}\n.select-container {\n  position: relative;\n  display: inline-block;\n}\n.select-container .arrows {\n  position: absolute;\n  right: 16px;\n  top: 22px;\n}\n.select-container .arrows :before,\n.select-container .arrows :after {\n  content: \" \";\n  width: 0;\n  height: 0;\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  position: absolute;\n  right: 0;\n}\n.select-container .arrows :before {\n  border-top: 4px solid grey;\n  top: 10px;\n}\n.select-container .arrows :after {\n  border-bottom: 4px solid grey;\n  top: 0;\n}\nbutton {\n  border: 2px solid #f35626;\n  line-height: 1.375;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n  font-weight: 700;\n  color: #f35626;\n  cursor: pointer;\n}\nselect {\n  border: 1px solid #e6e6e6;\n  border-radius: 4px;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  font: inherit;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtby9DOlxceGFtcHBcXGh0ZG9jc1xcY29kZVxccGVyc1xcYW5pbWF0ZU5HL3NyY1xcYXBwXFxkZW1vXFxkZW1vLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUNESjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFFQSx3Q0FBQTtVQUFBLGdDQUFBO0VBRUEsa0JBQUE7RUFDQSxjQUFBO0FDSFI7QURJUTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtBQ0ZaO0FER1k7RUFDSSxjQXBCUjtBQ21CUjtBRElRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkEzQkw7RUE0Qkssb0VBQUE7RUFDQSxZQUFBO0FDRlo7QURPQTs7Ozs7O0dBQUE7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBO21DQUFBO0VBRUEsaUNBQUE7RUFDQSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBMURJO0VBMkRKLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRFFBOztFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDTEo7QURNSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUNKUjtBREtROztFQUlJLFlBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNMWjtBRE9RO0VBR0ksMEJBQUE7RUFDQSxTQUFBO0FDUFo7QURTUTtFQUdJLDZCQUFBO0VBQ0EsTUFBQTtBQ1RaO0FEY0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FwSEk7RUFxSEosZUFBQTtBQ1hKO0FEY0E7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNYSiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRsaW5lOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiRjb2xvcjogI2YzNTYyNjtcclxuLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDEwMCU7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIC53cmFwIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjN2I4OTkzO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaW5lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmLCAjYzBjOGM5LCAjZmZmKTtcclxuICAgICAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyogXHJcbi5jb250YWluZXI6YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn0gKi9cclxuXHJcbi5jb250YWluZXItYW5pbWF0aW9uIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4IDM5cHggMHB4O1xyXG4gICAgLyogICBib3JkZXItdG9wOiAxcHggc29saWQgJGxpbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaW5lOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG4uZGVtb0VsZW1lbnQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgY29sb3I6ICRjb2xvcjtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7IC8vYmFja2dyb3VuZDogJGxpbmU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uLFxyXG5zZWxlY3Qge1xyXG4gICAgcGFkZGluZzogMC43NXJlbTtcclxuICAgIG1hcmdpbjogMC4zNzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnNlbGVjdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLmFycm93cyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRvcDogMjJweDtcclxuICAgICAgICA6YmVmb3JlLFxyXG5cdFx0OmFmdGVyLCBcclxuICAgIC8qIC5hcnJvdy11cCxcclxuICAgIC5hcnJvdy1kb3duICovIHtcclxuICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6YmVmb3JlXHJcblx0XHQvLy5hcnJvdy11cFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGdyZXk7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOmFmdGVyXHJcblx0XHQvLy5hcnJvdy1kb3duXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiA0cHggc29saWQgZ3JleTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM3NTtcclxuICAgIHBhZGRpbmctbGVmdDogMS41cmVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAkY29sb3I7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnNlbGVjdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbGluZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMDAlO1xufVxuLmNvbnRhaW5lciAud3JhcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM3Yjg5OTM7XG59XG4uY29udGFpbmVyIC53cmFwIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uY29udGFpbmVyIC53cmFwIGE6aG92ZXIge1xuICBjb2xvcjogI2YzNTYyNjtcbn1cbi5jb250YWluZXIgLndyYXAgaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgwZGVnLCAjZmZmLCAjYzBjOGM5LCAjZmZmKTtcbiAgd2lkdGg6IDQ1MHB4O1xufVxuXG4vKiBcbi5jb250YWluZXI6YmVmb3JlIHtcblx0Y29udGVudDogJyc7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAxMDAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufSAqL1xuLmNvbnRhaW5lci1hbmltYXRpb24ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwYWRkaW5nOiAzcHggMHB4IDM5cHggMHB4O1xuICAvKiAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkbGluZTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaW5lOyAqL1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmRlbW9FbGVtZW50IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogI2YzNTYyNjtcbiAgZm9udC1zaXplOiA1cmVtO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbixcbnNlbGVjdCB7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIG1hcmdpbjogMC4zNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlbGVjdC1jb250YWluZXIgLmFycm93cyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE2cHg7XG4gIHRvcDogMjJweDtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5hcnJvd3MgOmJlZm9yZSxcbi5zZWxlY3QtY29udGFpbmVyIC5hcnJvd3MgOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuLnNlbGVjdC1jb250YWluZXIgLmFycm93cyA6YmVmb3JlIHtcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIGdyZXk7XG4gIHRvcDogMTBweDtcbn1cbi5zZWxlY3QtY29udGFpbmVyIC5hcnJvd3MgOmFmdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIGdyZXk7XG4gIHRvcDogMDtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YzNTYyNjtcbiAgbGluZS1oZWlnaHQ6IDEuMzc1O1xuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2YzNTYyNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _animations_animations_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animations/animations.component */ "./src/app/animations/animations.component.ts");



var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
        this.state = 'turnInUp'; //'fadeIn'
        this.selectedState = this.state;
        this.animationInProgress = false;
        this.animations = [
            {
                groupTitle: "Fades",
                options: [
                    "fadeIn",
                    "fadeOut",
                ]
            }, {
                groupTitle: "Slides",
                options: [
                    "slideInLeft",
                    "slideOutLeft",
                    "slideInRight",
                    "slideOutRight",
                    "slideInDown",
                    "slideOutDown",
                    "slideInUp",
                    "slideOutUp",
                    "turnInDown",
                    "turnOutDown",
                    "turnInUp",
                    "turnOutUp",
                ]
            }, {
                groupTitle: "Atention",
                options: [
                    "wobble",
                    "swing",
                    "buzz",
                ]
            }, {
                groupTitle: "Accordion",
                options: [
                    "accordionOpen",
                    "accordionClose",
                    "bounceInDown",
                ]
            }
        ];
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.apliAnimation = function (animation) {
        this.state = animation;
        this.selectedState = animation;
        console.log("state: ", this.state);
    };
    DemoComponent.prototype.startAnimation = function () {
        this.animationInProgress = true;
    };
    DemoComponent.prototype.resetAnimation = function () {
        var _this = this;
        this.animationInProgress = false;
        if (this.state != "") {
            setTimeout(function () {
                if (_this.animationInProgress == false) {
                    if (_this.state.includes("Out")) {
                        _this.state = "fadeIn";
                    }
                    else {
                        _this.state = "";
                    }
                    console.log("state: ", _this.state);
                }
            }, 300);
        }
    };
    DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/index.js!./src/app/demo/demo.component.html"),
            animations: [_animations_animations_component__WEBPACK_IMPORTED_MODULE_2__["AnimateGallery"]],
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")]
        })
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\code\pers\animateNG\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map