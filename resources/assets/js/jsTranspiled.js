/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("$(function(){\r\n\t/* ----- Third Party Libraries ----- */ \r\n\tparticlesJS.load('particles-bg', 'js/particles.json');\r\n\tvar particles_bg = $(\"#particles-bg\");\r\n\r\n\t/* ----- Affected By Window Change ------ */\r\n\r\n\t//var bg_height = $(\"footer\").offset().top + $(\"footer\").outerHeight() - 16;\r\n\tvar window_height = $(window).height();\r\n\tvar document_height = $(document).height();\r\n\tvar isScrolling; \r\n\r\n\t/* ----- Hero Section ----- */ \r\n\tvar hero_section = $(\"section.brief-intro\");\r\n\tvar hero_section_height = hero_section.height();\r\n\tvar hero_section_trigger = (hero_section_height / 2) - 100;\r\n\r\n\t/* ----- About Section ----- */\r\n\tvar about_section = $(\".about\");\r\n\tvar about_section_height = about_section.innerHeight();\r\n\tvar about_section_offset = about_section.offset().top;\r\n\r\n\t/* ------ Work Section ------ */ \r\n\tvar work_section = $(\"section.work-container\");\r\n\tvar work_section_offset = work_section.offset().top; \r\n\r\n\t/* ------ Footer Section ------ */ \r\n\tvar footer_section = $(\"footer\");\r\n\tvar footer_section_offset = footer_section.offset().top; \r\n\r\n\t/* ------ Navigation ----- */ \r\n\tvar menu = $(\"nav .menu\");\r\n\r\n\t\t/* -- Link --*/\r\n\t\tvar about_link = $(\".menu-container li a[href='#aboutme']\");\r\n\t\tvar work_link = $(\".menu-container li a[href='#work']\");\r\n\t\tvar contact_link = $(\".menu-container li a[href='#contact']\");\r\n\r\n\t/* ----- EVENT: On Window Resize  ----- */\r\n\t$(window).on('resize', function(){\r\n\t\t//bg_height = $(\"footer\").offset().top + $(\"footer\").outerHeight() - 16;\r\n\t\tparticles_bg.css(\"height\", bg_height);\r\n\r\n\t\t/* ---- Updating Heights ---- */\r\n\t\twindow_height = $(window).height();\r\n\t\tdocument_height = $(document).height();\r\n\t\thero_section_height = hero_section.height();\r\n\t});\r\n\r\n\t/* ----- EVENT: On Window Load  ----- */ \r\n\thero_section.css(\"transform\", \"translateY(0)\");\t\r\n\r\n\tsetTimeout(function(){\r\n\t\t$(\"nav\").css(\"opacity\", \"1\");\r\n\t\t$(\".logo\").css(\"opacity\", \"1\");\r\n\t\thero_section.css(\"opacity\", \"1\");\r\n\t}, 600);\r\n\r\n\r\n\t/* ----- EVENT LISTENER: On Scroll  ----- */ \r\n\t$(window).on('scroll', function(){\r\n\t\tvar scrollAmnt = $(document).scrollTop();\r\n\t\tvar hero_section_fromTop = (hero_section.offset().top + hero_section_height);\r\n\t\tvar about_section_fromTop = (about_section.offset().top + about_section_height);\r\n\t\r\n\t   \r\n\t\t/* ----- Control Navigation Behavior On Scroll ----- */\r\n\t\tisScrolling = true;\r\n\t\tif(isScrolling){\r\n\t\t\tmenu.css('opacity', 0.5);\r\n\t\t}\r\n\t\tclearInterval($.data(this, \"scrollCheck\")); \r\n\r\n\t\t$.data(this, \"scrollCheck\", setInterval(function(){\r\n\t\t\tisScrolling = false;\r\n\t\t\tchangeOpacity();\r\n\t\t}, 250));\r\n\r\n\t\tfunction changeOpacity(){\n\t\t\tvar this$1 = this;\n\r\n\t\t\tmenu.css('opacity', 1);\r\n\t\t\tsetTimeout(function () {\r\n\t\t\t\tclearInterval($.data(this$1, \"scrollCheck\")); \r\n\t\t\t}, 250);\r\n\t\t}\r\n\r\n\t\t/* ----- Adjust Navigation Elements Active State ----- */\r\n\t\tif(scrollAmnt < (about_section.offset().top + about_section_height) && scrollAmnt < (about_section.offset().top + about_section_height) - 50){\r\n\t\t\tabout_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tabout_link.removeClass();\r\n\t\t}\r\n\r\n\t\tif((scrollAmnt > (about_section.offset().top + about_section_height) - 50) && scrollAmnt < (document_height - window_height)){\r\n\t\t\twork_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\twork_link.removeClass();\r\n\t\t}\r\n\r\n\t\tif(scrollAmnt >= (document_height - window_height)){\r\n\t\t\tcontact_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tcontact_link.removeClass();\r\n\t\t}\r\n\r\n\t\t/* -----  Section: Hero Section  ----- */\r\n\t\t/* ---- Control Movement ---- */\r\n\t\tif(scrollAmnt > 0 && scrollAmnt < about_section.offset().top){\r\n\t\t\tvar newPos = - (scrollAmnt / 3);\r\n\t\t\thero_section.css('transform', 'translateY(' + (newPos * 2) + 'px)');\r\n\t\t\tvar trigger_calc = hero_section.offset().top - scrollAmnt;\r\n\r\n\t\t\t/* -- Control Opacity -- */\r\n\t\t\tif(Math.abs(trigger_calc) > hero_section_trigger){\r\n\t\t\t\tvar calc_begin = Math.abs(trigger_calc) - (hero_section_trigger);\r\n\t\t\t\tvar calc_opacity = Math.max(0, 1 - calc_begin/100); \r\n\t\t\t\tvar new_opacity = calc_opacity;\r\n\r\n\t\t\t\thero_section.css('opacity', new_opacity);\r\n\t\t    }\r\n\r\n\t\t    if(scrollAmnt < hero_section_fromTop){\r\n\t\t    \thero_section.css(\"opacity\", 1);\r\n\t\t    }\r\n\t\t}\r\n\r\n\t\t/* -----  Section: About Section  ----- */\r\n\t\tif((scrollAmnt + window_height) > (about_section_offset + 40)){\r\n\t\t\thero_section.css(\"opacity\", 0);\r\n\t\t\tvar scroll_calc = (scrollAmnt + window_height) - about_section_offset + 40;\r\n\t\t\tvar scroll_by = - (scroll_calc/4);\r\n\t\t\tabout_section.css({ \"transform\": \"translateY(\" + scroll_by + \"px)\", \r\n\t\t\t\t\t\t\t\t\"opacity\": \"1\"});\r\n\t\t}\r\n\t\telse if((scrollAmnt + window_height) < (about_section_offset - 10)){\r\n\t\t\tabout_section.css({ \"transform\": \"translateY(22rem)\", \r\n\t\t\t\t\t\t\t\t\"opacity\": \"0\"} );\r\n\t\t}\r\n\r\n\t\t/* ----- Section: Work Section ----- */ \r\n\t\t if(scrollAmnt > (about_section_fromTop - 170)){\r\n\t\t \tabout_section.css(\"opacity\", \"0\");\r\n\t\t\twork_section.css({\"opacity\" : \"1\", \"transform\" : \"translateY(0)\"});\r\n\t\t}\r\n\r\n\t\telse{\r\n\t\t\twork_section.css({\"opacity\" : \"0\", \"transform\" : \"translateY(20rem)\"});\r\n\t\t}\r\n\r\n\t\t/* ----- Section: Footer  ----- */ \r\n\t\tif((scrollAmnt + $(window).height()) >= footer_section_offset){\r\n\t\t\tfooter_section.css(\"opacity\", \"1\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tfooter_section.css(\"opacity\", \"0\");\r\n\t\t}\r\n\r\n\t});\r\n\r\n\t/* ---- Smooth Scrolling ---- */ \r\n\tvar currentHashtag = \"\";\r\n\t$(\".menu a\").click(function(e){\r\n\t\te.preventDefault();\r\n\r\n\t\tif(currentHashtag !== this.hash){\r\n\t\t\t//Calculate Destination\r\n\t\t\tvar href = this.hash;\r\n\t\t\tvar dest = 0;\r\n\t\t\tif($(this.hash).offset().top > $(document).height() - $(window).height()){\r\n\t\t\t\tdest = $(document).height() - $(window).height();\r\n\t\t\t}\r\n\r\n\t\t\telse if(this.hash === \"#work\"){\r\n\t\t\t\tvar that = this;\r\n\t\t\t\tdest = $(that.hash).offset().top - 100;\r\n\r\n\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\tdest = $(that.hash).offset().top - 100;\r\n\t\t\t\t\tscrollbarTo(dest, href);\r\n\t\t\t\t}, 1000);\r\n\t\t\t}\r\n\t\t\telse if(this.hash === \"#aboutme\"){\r\n\t\t\t\tdest = 0;\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tdest = $(this.hash).offset().top;\r\n\t\t\t}\r\n\r\n\t\t\tscrollbarTo(dest, href);\r\n\t\t}\r\n\t});\r\n\r\n\tfunction scrollbarTo(dest, href){\r\n\t\t$(\"html, body\").animate({\r\n\t\t\t\tscrollTop: dest\r\n\t\t\t}, 800, 'easeInOutExpo', function(){\r\n\t\t\t\twindow.location.hash = href;\r\n\t\t});\r\n\t}\r\n\t\r\n});\r\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHQvKiAtLS0tLSBUaGlyZCBQYXJ0eSBMaWJyYXJpZXMgLS0tLS0gKi8gXHJcblx0cGFydGljbGVzSlMubG9hZCgncGFydGljbGVzLWJnJywgJ2pzL3BhcnRpY2xlcy5qc29uJyk7XHJcblx0dmFyIHBhcnRpY2xlc19iZyA9ICQoXCIjcGFydGljbGVzLWJnXCIpO1xyXG5cclxuXHQvKiAtLS0tLSBBZmZlY3RlZCBCeSBXaW5kb3cgQ2hhbmdlIC0tLS0tLSAqL1xyXG5cclxuXHQvL3ZhciBiZ19oZWlnaHQgPSAkKFwiZm9vdGVyXCIpLm9mZnNldCgpLnRvcCArICQoXCJmb290ZXJcIikub3V0ZXJIZWlnaHQoKSAtIDE2O1xyXG5cdHZhciB3aW5kb3dfaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xyXG5cdHZhciBkb2N1bWVudF9oZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHR2YXIgaXNTY3JvbGxpbmc7IFxyXG5cclxuXHQvKiAtLS0tLSBIZXJvIFNlY3Rpb24gLS0tLS0gKi8gXHJcblx0dmFyIGhlcm9fc2VjdGlvbiA9ICQoXCJzZWN0aW9uLmJyaWVmLWludHJvXCIpO1xyXG5cdHZhciBoZXJvX3NlY3Rpb25faGVpZ2h0ID0gaGVyb19zZWN0aW9uLmhlaWdodCgpO1xyXG5cdHZhciBoZXJvX3NlY3Rpb25fdHJpZ2dlciA9IChoZXJvX3NlY3Rpb25faGVpZ2h0IC8gMikgLSAxMDA7XHJcblxyXG5cdC8qIC0tLS0tIEFib3V0IFNlY3Rpb24gLS0tLS0gKi9cclxuXHR2YXIgYWJvdXRfc2VjdGlvbiA9ICQoXCIuYWJvdXRcIik7XHJcblx0dmFyIGFib3V0X3NlY3Rpb25faGVpZ2h0ID0gYWJvdXRfc2VjdGlvbi5pbm5lckhlaWdodCgpO1xyXG5cdHZhciBhYm91dF9zZWN0aW9uX29mZnNldCA9IGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wO1xyXG5cclxuXHQvKiAtLS0tLS0gV29yayBTZWN0aW9uIC0tLS0tLSAqLyBcclxuXHR2YXIgd29ya19zZWN0aW9uID0gJChcInNlY3Rpb24ud29yay1jb250YWluZXJcIik7XHJcblx0dmFyIHdvcmtfc2VjdGlvbl9vZmZzZXQgPSB3b3JrX3NlY3Rpb24ub2Zmc2V0KCkudG9wOyBcclxuXHJcblx0LyogLS0tLS0tIEZvb3RlciBTZWN0aW9uIC0tLS0tLSAqLyBcclxuXHR2YXIgZm9vdGVyX3NlY3Rpb24gPSAkKFwiZm9vdGVyXCIpO1xyXG5cdHZhciBmb290ZXJfc2VjdGlvbl9vZmZzZXQgPSBmb290ZXJfc2VjdGlvbi5vZmZzZXQoKS50b3A7IFxyXG5cclxuXHQvKiAtLS0tLS0gTmF2aWdhdGlvbiAtLS0tLSAqLyBcclxuXHR2YXIgbWVudSA9ICQoXCJuYXYgLm1lbnVcIik7XHJcblxyXG5cdFx0LyogLS0gTGluayAtLSovXHJcblx0XHR2YXIgYWJvdXRfbGluayA9ICQoXCIubWVudS1jb250YWluZXIgbGkgYVtocmVmPScjYWJvdXRtZSddXCIpO1xyXG5cdFx0dmFyIHdvcmtfbGluayA9ICQoXCIubWVudS1jb250YWluZXIgbGkgYVtocmVmPScjd29yayddXCIpO1xyXG5cdFx0dmFyIGNvbnRhY3RfbGluayA9ICQoXCIubWVudS1jb250YWluZXIgbGkgYVtocmVmPScjY29udGFjdCddXCIpO1xyXG5cclxuXHQvKiAtLS0tLSBFVkVOVDogT24gV2luZG93IFJlc2l6ZSAgLS0tLS0gKi9cclxuXHQkKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uKCl7XHJcblx0XHQvL2JnX2hlaWdodCA9ICQoXCJmb290ZXJcIikub2Zmc2V0KCkudG9wICsgJChcImZvb3RlclwiKS5vdXRlckhlaWdodCgpIC0gMTY7XHJcblx0XHRwYXJ0aWNsZXNfYmcuY3NzKFwiaGVpZ2h0XCIsIGJnX2hlaWdodCk7XHJcblxyXG5cdFx0LyogLS0tLSBVcGRhdGluZyBIZWlnaHRzIC0tLS0gKi9cclxuXHRcdHdpbmRvd19oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblx0XHRkb2N1bWVudF9oZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHRcdGhlcm9fc2VjdGlvbl9oZWlnaHQgPSBoZXJvX3NlY3Rpb24uaGVpZ2h0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8qIC0tLS0tIEVWRU5UOiBPbiBXaW5kb3cgTG9hZCAgLS0tLS0gKi8gXHJcblx0aGVyb19zZWN0aW9uLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVkoMClcIik7XHRcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0JChcIm5hdlwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHRcdCQoXCIubG9nb1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHRcdGhlcm9fc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHR9LCA2MDApO1xyXG5cclxuXHJcblx0LyogLS0tLS0gRVZFTlQgTElTVEVORVI6IE9uIFNjcm9sbCAgLS0tLS0gKi8gXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3Qgc2Nyb2xsQW1udCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc3QgaGVyb19zZWN0aW9uX2Zyb21Ub3AgPSAoaGVyb19zZWN0aW9uLm9mZnNldCgpLnRvcCArIGhlcm9fc2VjdGlvbl9oZWlnaHQpO1xyXG5cdFx0Y29uc3QgYWJvdXRfc2VjdGlvbl9mcm9tVG9wID0gKGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wICsgYWJvdXRfc2VjdGlvbl9oZWlnaHQpO1xyXG5cdFxyXG5cdCAgIFxyXG5cdFx0LyogLS0tLS0gQ29udHJvbCBOYXZpZ2F0aW9uIEJlaGF2aW9yIE9uIFNjcm9sbCAtLS0tLSAqL1xyXG5cdFx0aXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cdFx0aWYoaXNTY3JvbGxpbmcpe1xyXG5cdFx0XHRtZW51LmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHR9XHJcblx0XHRjbGVhckludGVydmFsKCQuZGF0YSh0aGlzLCBcInNjcm9sbENoZWNrXCIpKTsgXHJcblxyXG5cdFx0JC5kYXRhKHRoaXMsIFwic2Nyb2xsQ2hlY2tcIiwgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0Y2hhbmdlT3BhY2l0eSgpO1xyXG5cdFx0fSwgMjUwKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hhbmdlT3BhY2l0eSgpe1xyXG5cdFx0XHRtZW51LmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKCQuZGF0YSh0aGlzLCBcInNjcm9sbENoZWNrXCIpKTsgXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gQWRqdXN0IE5hdmlnYXRpb24gRWxlbWVudHMgQWN0aXZlIFN0YXRlIC0tLS0tICovXHJcblx0XHRpZihzY3JvbGxBbW50IDwgKGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wICsgYWJvdXRfc2VjdGlvbl9oZWlnaHQpICYmIHNjcm9sbEFtbnQgPCAoYWJvdXRfc2VjdGlvbi5vZmZzZXQoKS50b3AgKyBhYm91dF9zZWN0aW9uX2hlaWdodCkgLSA1MCl7XHJcblx0XHRcdGFib3V0X2xpbmsucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGFib3V0X2xpbmsucmVtb3ZlQ2xhc3MoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZigoc2Nyb2xsQW1udCA+IChhYm91dF9zZWN0aW9uLm9mZnNldCgpLnRvcCArIGFib3V0X3NlY3Rpb25faGVpZ2h0KSAtIDUwKSAmJiBzY3JvbGxBbW50IDwgKGRvY3VtZW50X2hlaWdodCAtIHdpbmRvd19oZWlnaHQpKXtcclxuXHRcdFx0d29ya19saW5rLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR3b3JrX2xpbmsucmVtb3ZlQ2xhc3MoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzY3JvbGxBbW50ID49IChkb2N1bWVudF9oZWlnaHQgLSB3aW5kb3dfaGVpZ2h0KSl7XHJcblx0XHRcdGNvbnRhY3RfbGluay5yZW1vdmVDbGFzcygpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0Y29udGFjdF9saW5rLnJlbW92ZUNsYXNzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gIFNlY3Rpb246IEhlcm8gU2VjdGlvbiAgLS0tLS0gKi9cclxuXHRcdC8qIC0tLS0gQ29udHJvbCBNb3ZlbWVudCAtLS0tICovXHJcblx0XHRpZihzY3JvbGxBbW50ID4gMCAmJiBzY3JvbGxBbW50IDwgYWJvdXRfc2VjdGlvbi5vZmZzZXQoKS50b3Ape1xyXG5cdFx0XHR2YXIgbmV3UG9zID0gLSAoc2Nyb2xsQW1udCAvIDMpO1xyXG5cdFx0XHRoZXJvX3NlY3Rpb24uY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgKG5ld1BvcyAqIDIpICsgJ3B4KScpO1xyXG5cdFx0XHR2YXIgdHJpZ2dlcl9jYWxjID0gaGVyb19zZWN0aW9uLm9mZnNldCgpLnRvcCAtIHNjcm9sbEFtbnQ7XHJcblxyXG5cdFx0XHQvKiAtLSBDb250cm9sIE9wYWNpdHkgLS0gKi9cclxuXHRcdFx0aWYoTWF0aC5hYnModHJpZ2dlcl9jYWxjKSA+IGhlcm9fc2VjdGlvbl90cmlnZ2VyKXtcclxuXHRcdFx0XHRsZXQgY2FsY19iZWdpbiA9IE1hdGguYWJzKHRyaWdnZXJfY2FsYykgLSAoaGVyb19zZWN0aW9uX3RyaWdnZXIpO1xyXG5cdFx0XHRcdHZhciBjYWxjX29wYWNpdHkgPSBNYXRoLm1heCgwLCAxIC0gY2FsY19iZWdpbi8xMDApOyBcclxuXHRcdFx0XHR2YXIgbmV3X29wYWNpdHkgPSBjYWxjX29wYWNpdHk7XHJcblxyXG5cdFx0XHRcdGhlcm9fc2VjdGlvbi5jc3MoJ29wYWNpdHknLCBuZXdfb3BhY2l0eSk7XHJcblx0XHQgICAgfVxyXG5cclxuXHRcdCAgICBpZihzY3JvbGxBbW50IDwgaGVyb19zZWN0aW9uX2Zyb21Ub3Ape1xyXG5cdFx0ICAgIFx0aGVyb19zZWN0aW9uLmNzcyhcIm9wYWNpdHlcIiwgMSk7XHJcblx0XHQgICAgfVxyXG5cdFx0fVxyXG5cclxuXHRcdC8qIC0tLS0tICBTZWN0aW9uOiBBYm91dCBTZWN0aW9uICAtLS0tLSAqL1xyXG5cdFx0aWYoKHNjcm9sbEFtbnQgKyB3aW5kb3dfaGVpZ2h0KSA+IChhYm91dF9zZWN0aW9uX29mZnNldCArIDQwKSl7XHJcblx0XHRcdGhlcm9fc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIDApO1xyXG5cdFx0XHRsZXQgc2Nyb2xsX2NhbGMgPSAoc2Nyb2xsQW1udCArIHdpbmRvd19oZWlnaHQpIC0gYWJvdXRfc2VjdGlvbl9vZmZzZXQgKyA0MDtcclxuXHRcdFx0dmFyIHNjcm9sbF9ieSA9IC0gKHNjcm9sbF9jYWxjLzQpO1xyXG5cdFx0XHRhYm91dF9zZWN0aW9uLmNzcyh7IFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWShcIiArIHNjcm9sbF9ieSArIFwicHgpXCIsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IFwiMVwifSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmKChzY3JvbGxBbW50ICsgd2luZG93X2hlaWdodCkgPCAoYWJvdXRfc2VjdGlvbl9vZmZzZXQgLSAxMCkpe1xyXG5cdFx0XHRhYm91dF9zZWN0aW9uLmNzcyh7IFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgyMnJlbSlcIiwgXHJcblx0XHRcdFx0XHRcdFx0XHRcIm9wYWNpdHlcIjogXCIwXCJ9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gU2VjdGlvbjogV29yayBTZWN0aW9uIC0tLS0tICovIFxyXG5cdFx0IGlmKHNjcm9sbEFtbnQgPiAoYWJvdXRfc2VjdGlvbl9mcm9tVG9wIC0gMTcwKSl7XHJcblx0XHQgXHRhYm91dF9zZWN0aW9uLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG5cdFx0XHR3b3JrX3NlY3Rpb24uY3NzKHtcIm9wYWNpdHlcIiA6IFwiMVwiLCBcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDApXCJ9KTtcclxuXHRcdH1cclxuXHJcblx0XHRlbHNle1xyXG5cdFx0XHR3b3JrX3NlY3Rpb24uY3NzKHtcIm9wYWNpdHlcIiA6IFwiMFwiLCBcInRyYW5zZm9ybVwiIDogXCJ0cmFuc2xhdGVZKDIwcmVtKVwifSk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gU2VjdGlvbjogRm9vdGVyICAtLS0tLSAqLyBcclxuXHRcdGlmKChzY3JvbGxBbW50ICsgJCh3aW5kb3cpLmhlaWdodCgpKSA+PSBmb290ZXJfc2VjdGlvbl9vZmZzZXQpe1xyXG5cdFx0XHRmb290ZXJfc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGZvb3Rlcl9zZWN0aW9uLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG5cdFx0fVxyXG5cclxuXHR9KTtcclxuXHJcblx0LyogLS0tLSBTbW9vdGggU2Nyb2xsaW5nIC0tLS0gKi8gXHJcblx0dmFyIGN1cnJlbnRIYXNodGFnID0gXCJcIjtcclxuXHQkKFwiLm1lbnUgYVwiKS5jbGljayhmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRpZihjdXJyZW50SGFzaHRhZyAhPT0gdGhpcy5oYXNoKXtcclxuXHRcdFx0Ly9DYWxjdWxhdGUgRGVzdGluYXRpb25cclxuXHRcdFx0dmFyIGhyZWYgPSB0aGlzLmhhc2g7XHJcblx0XHRcdHZhciBkZXN0ID0gMDtcclxuXHRcdFx0aWYoJCh0aGlzLmhhc2gpLm9mZnNldCgpLnRvcCA+ICQoZG9jdW1lbnQpLmhlaWdodCgpIC0gJCh3aW5kb3cpLmhlaWdodCgpKXtcclxuXHRcdFx0XHRkZXN0ID0gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGVsc2UgaWYodGhpcy5oYXNoID09PSBcIiN3b3JrXCIpe1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHRkZXN0ID0gJCh0aGF0Lmhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMDtcclxuXHJcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0ZGVzdCA9ICQodGhhdC5oYXNoKS5vZmZzZXQoKS50b3AgLSAxMDA7XHJcblx0XHRcdFx0XHRzY3JvbGxiYXJUbyhkZXN0LCBocmVmKTtcclxuXHRcdFx0XHR9LCAxMDAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKHRoaXMuaGFzaCA9PT0gXCIjYWJvdXRtZVwiKXtcclxuXHRcdFx0XHRkZXN0ID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdGRlc3QgPSAkKHRoaXMuaGFzaCkub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY3JvbGxiYXJUbyhkZXN0LCBocmVmKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0ZnVuY3Rpb24gc2Nyb2xsYmFyVG8oZGVzdCwgaHJlZil7XHJcblx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuXHRcdFx0XHRzY3JvbGxUb3A6IGRlc3RcclxuXHRcdFx0fSwgODAwLCAnZWFzZUluT3V0RXhwbycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBocmVmO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG59KTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);