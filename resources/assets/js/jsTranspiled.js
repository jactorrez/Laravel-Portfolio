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

eval("$(function(){\r\n\r\n\t/* ----- Third Party Libraries ----- */ \r\n\tparticlesJS.load('particles-bg', 'js/particles.json');\r\n\tvar particles_bg = $(\"#particles-bg\");\r\n\r\n\t/* ----- Affected By Window Change ------ */\r\n\r\n\tvar bg_height = $(\"footer\").offset().top + $(\"footer\").outerHeight() - 16;\r\n\tvar window_height = $(window).height();\r\n\tvar document_height = $(document).height();\r\n\tvar isScrolling; \r\n\r\n\t/* ----- Hero Section ----- */ \r\n\tvar hero_section = $(\".brief-intro\");\r\n\tvar hero_section_height = hero_section.height();\r\n\tvar hero_section_trigger = (hero_section_height / 2) - 100;\r\n\tvar hero_section_fromTop = (hero_section.offset().top + hero_section_height);\r\n\r\n\t/* ----- About Section ----- */\r\n\tvar about_section = $(\".about\");\r\n\tvar about_section_height = about_section.innerHeight();\r\n\tvar about_section_offset = about_section.offset().top;\r\n\r\n\t/* ------ Work Section ------ */ \r\n\tvar work_section = $(\"section.work-container\");\r\n\tvar work_section_offset = work_section.offset().top; \r\n\r\n\t\t/* ----- Image Containers ----- */\r\n\r\n\t\tvar img_container = $(\".img-container\");\r\n\t\tvar img_container_offset = img_container.offset().top;\r\n\r\n\t/* ------ Footer Section ------ */ \r\n\tvar footer_section = $(\"footer\");\r\n\tvar footer_section_offset = footer_section.offset().top; \r\n\r\n\t/* ------ Navigation ----- */ \r\n\tvar menu = $(\"nav .menu\");\r\n\r\n\t\t/* -- Link --*/\r\n\t\tvar about_link = $(\".menu-container li a[href='#aboutme']\");\r\n\t\tvar work_link = $(\".menu-container li a[href='#work']\");\r\n\t\tvar contact_link = $(\".menu-container li a[href='#contact']\");\r\n\r\n\t/* ----- EVENT: On Window Resize  ----- */\r\n\t$(window).on('resize', function(){\r\n\t\tparticles_bg.css(\"height\", bg_height);\r\n\t\t\r\n\t\t/* ---- Updating Heights ---- */\r\n\t\twindow_height = $(window).height();\r\n\t\tdocument_height = $(document).height();\r\n\t\thero_section_height = hero_section.height();\r\n\t});\r\n\r\n\t/* ----- EVENT: On Window Load  ----- */ \r\n\thero_section.css(\"transform\", \"translateY(0)\");\t\r\n\r\n\tsetTimeout(function(){\r\n\t\t$(\"nav\").css(\"opacity\", \"1\");\r\n\t\t$(\".logo\").css(\"opacity\", \"1\");\r\n\t\thero_section.css(\"opacity\", \"1\");\r\n\t}, 600);\r\n\r\n\r\n\t/* ----- EVENT LISTENER: On Scroll  ----- */ \r\n\t$(window).on('scroll', function(){\r\n\t\tvar scrollAmnt = $(document).scrollTop();\r\n\t\tvar hero_section_fromTop = (hero_section.offset().top + hero_section_height);\r\n\t\tvar about_section_fromTop = (about_section.offset().top + about_section_height);\r\n\t\r\n\t   \r\n\t\t/* ----- Control Navigation Behavior On Scroll ----- */\r\n\t\tisScrolling = true;\r\n\t\tif(isScrolling){\r\n\t\t\tmenu.css('opacity', 0.5);\r\n\t\t}\r\n\t\tclearInterval($.data(this, \"scrollCheck\")); \r\n\r\n\t\t$.data(this, \"scrollCheck\", setInterval(function(){\r\n\t\t\tisScrolling = false;\r\n\t\t\tchangeOpacity();\r\n\t\t}, 250));\r\n\r\n\t\tfunction changeOpacity(){\n\t\t\tvar this$1 = this;\n\r\n\t\t\tmenu.css('opacity', 1);\r\n\t\t\tsetTimeout(function () {\r\n\t\t\t\tclearInterval($.data(this$1, \"scrollCheck\")); \r\n\t\t\t}, 250);\r\n\t\t}\r\n\r\n\t\t/* ----- Adjust Navigation Elements Active State ----- */\r\n\t\tif(scrollAmnt < (about_section.offset().top + about_section_height) && scrollAmnt < (about_section.offset().top + about_section_height) - 50){\r\n\t\t\tabout_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tabout_link.removeClass();\r\n\t\t}\r\n\r\n\t\tif((scrollAmnt > (about_section.offset().top + about_section_height) - 50) && scrollAmnt < (document_height - window_height)){\r\n\t\t\twork_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\twork_link.removeClass();\r\n\t\t}\r\n\r\n\t\tif(scrollAmnt >= (document_height - window_height)){\r\n\t\t\tcontact_link.removeClass().addClass(\"active\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tcontact_link.removeClass();\r\n\t\t}\r\n\r\n\t\t/* -----  Section: Hero Section  ----- */\r\n\t\t/* ---- Control Movement ---- */\r\n\t\tif(scrollAmnt >= 0 && scrollAmnt < about_section.offset().top){\r\n\t\t\tvar newPos = -(scrollAmnt / 3);\r\n\t\t\thero_section.css('transform', 'translateY(' + (newPos * 2) + 'px)');\r\n\t\t\tvar trigger_calc = hero_section.offset().top - scrollAmnt;\r\n\t\t\t\r\n\r\n\t\t\t/* -- Control Opacity -- */\r\n\t\t\tif(trigger_calc < 0){\r\n\t\t\t\tif(Math.abs(trigger_calc) > hero_section_trigger){\r\n\t\t\t\t\r\n\t\t\t\t\tvar calc_begin = Math.abs(trigger_calc) - (hero_section_trigger);\r\n\t\t\t\t\tvar calc_opacity = Math.max(0, 1 - calc_begin/100); \r\n\t\t\t\t\tvar new_opacity = calc_opacity;\r\n\r\n\t\t\t\t\thero_section.css('opacity', new_opacity);\r\n\t\t\t    } \r\n\t\t\t}\r\n\r\n\t\t    if(scrollAmnt < (hero_section_fromTop - 200)){\r\n\t\t    \thero_section.css(\"opacity\", 1);\r\n\t\t    }\r\n\t\t}\r\n\r\n\t\t/* -----  Section: About Section  ----- */\r\n\t\tif((scrollAmnt + window_height) > (about_section_offset + 40)){\r\n\t\t\t\r\n\t\t\tvar scroll_calc = (scrollAmnt + window_height) - about_section_offset + 40;\r\n\t\t\tvar scroll_by = - (scroll_calc/4);\r\n\t\t\tabout_section.css({ \"transform\": \"translateY(\" + scroll_by + \"px)\", \r\n\t\t\t\t\t\t\t\t\"opacity\": \"1\"});\r\n\t\t}\r\n\t\telse if((scrollAmnt + window_height) < (about_section_offset - 10)){\r\n\t\t\tabout_section.css({ \"transform\": \"translateY(22rem)\", \r\n\t\t\t\t\t\t\t\t\"opacity\": \"0\"} );\r\n\t\t}\r\n\r\n\t\t/* ----- Section: Work Section ----- */ \r\n\t\t if(scrollAmnt > (about_section_fromTop - 170)){\r\n\t\t \tabout_section.css(\"opacity\", \"0\");\r\n\t\t\twork_section.css({\"opacity\" : \"1\", \"transform\" : \"translateY(0)\"});\r\n\t\t}\r\n\r\n\t\telse{\r\n\t\t\twork_section.css({\"opacity\" : \"0\", \"transform\" : \"translateY(20rem)\"});\r\n\t\t}\r\n\r\n\t\t/* ----- Section: Footer  ----- */ \r\n\t\tif((scrollAmnt + $(window).height()) >= footer_section_offset){\r\n\t\t\tfooter_section.css(\"opacity\", \"1\");\r\n\t\t}\r\n\t\telse{\r\n\t\t\tfooter_section.css(\"opacity\", \"0\");\r\n\t\t}\r\n\r\n\t\t/* ----- Section: Images ----- */\r\n\r\n\r\n\t});\r\n\r\n\t/* ---- Smooth Scrolling ---- */ \r\n\tvar currentHashtag = \"\";\r\n\t$(\".menu a\").click(function(e){\r\n\t\te.preventDefault();\r\n\r\n\t\tif(currentHashtag !== this.hash){\r\n\t\t\t//Calculate Destination\r\n\t\t\tvar href = this.hash;\r\n\t\t\tvar dest = 0;\r\n\t\t\tif($(this.hash).offset().top > $(document).height() - $(window).height()){\r\n\t\t\t\tdest = $(document).height() - $(window).height();\r\n\t\t\t}\r\n\r\n\t\t\telse if(this.hash === \"#work\"){\r\n\t\t\t\tvar that = this;\r\n\t\t\t\tdest = $(that.hash).offset().top - 100;\r\n\r\n\t\t\t\tsetTimeout(function(){\r\n\t\t\t\t\tdest = $(that.hash).offset().top - 100;\r\n\t\t\t\t\tscrollbarTo(dest, href);\r\n\t\t\t\t}, 1000);\r\n\t\t\t}\r\n\t\t\telse if(this.hash === \"#aboutme\"){\r\n\t\t\t\tdest = 0;\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tdest = $(this.hash).offset().top;\r\n\t\t\t}\r\n\r\n\t\t\tscrollbarTo(dest, href);\r\n\t\t}\r\n\t});\r\n\r\n\tfunction scrollbarTo(dest, href){\r\n\t\t$(\"html, body\").animate({\r\n\t\t\t\tscrollTop: dest\r\n\t\t\t}, 800, 'easeInOutExpo', function(){\r\n\t\t\t\twindow.location.hash = href;\r\n\t\t});\r\n\t}\r\n});\r\n\r\n\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcclxuXHJcblx0LyogLS0tLS0gVGhpcmQgUGFydHkgTGlicmFyaWVzIC0tLS0tICovIFxyXG5cdHBhcnRpY2xlc0pTLmxvYWQoJ3BhcnRpY2xlcy1iZycsICdqcy9wYXJ0aWNsZXMuanNvbicpO1xyXG5cdHZhciBwYXJ0aWNsZXNfYmcgPSAkKFwiI3BhcnRpY2xlcy1iZ1wiKTtcclxuXHJcblx0LyogLS0tLS0gQWZmZWN0ZWQgQnkgV2luZG93IENoYW5nZSAtLS0tLS0gKi9cclxuXHJcblx0dmFyIGJnX2hlaWdodCA9ICQoXCJmb290ZXJcIikub2Zmc2V0KCkudG9wICsgJChcImZvb3RlclwiKS5vdXRlckhlaWdodCgpIC0gMTY7XHJcblx0dmFyIHdpbmRvd19oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblx0dmFyIGRvY3VtZW50X2hlaWdodCA9ICQoZG9jdW1lbnQpLmhlaWdodCgpO1xyXG5cdHZhciBpc1Njcm9sbGluZzsgXHJcblxyXG5cdC8qIC0tLS0tIEhlcm8gU2VjdGlvbiAtLS0tLSAqLyBcclxuXHR2YXIgaGVyb19zZWN0aW9uID0gJChcIi5icmllZi1pbnRyb1wiKTtcclxuXHR2YXIgaGVyb19zZWN0aW9uX2hlaWdodCA9IGhlcm9fc2VjdGlvbi5oZWlnaHQoKTtcclxuXHR2YXIgaGVyb19zZWN0aW9uX3RyaWdnZXIgPSAoaGVyb19zZWN0aW9uX2hlaWdodCAvIDIpIC0gMTAwO1xyXG5cdGNvbnN0IGhlcm9fc2VjdGlvbl9mcm9tVG9wID0gKGhlcm9fc2VjdGlvbi5vZmZzZXQoKS50b3AgKyBoZXJvX3NlY3Rpb25faGVpZ2h0KTtcclxuXHJcblx0LyogLS0tLS0gQWJvdXQgU2VjdGlvbiAtLS0tLSAqL1xyXG5cdHZhciBhYm91dF9zZWN0aW9uID0gJChcIi5hYm91dFwiKTtcclxuXHR2YXIgYWJvdXRfc2VjdGlvbl9oZWlnaHQgPSBhYm91dF9zZWN0aW9uLmlubmVySGVpZ2h0KCk7XHJcblx0dmFyIGFib3V0X3NlY3Rpb25fb2Zmc2V0ID0gYWJvdXRfc2VjdGlvbi5vZmZzZXQoKS50b3A7XHJcblxyXG5cdC8qIC0tLS0tLSBXb3JrIFNlY3Rpb24gLS0tLS0tICovIFxyXG5cdHZhciB3b3JrX3NlY3Rpb24gPSAkKFwic2VjdGlvbi53b3JrLWNvbnRhaW5lclwiKTtcclxuXHR2YXIgd29ya19zZWN0aW9uX29mZnNldCA9IHdvcmtfc2VjdGlvbi5vZmZzZXQoKS50b3A7IFxyXG5cclxuXHRcdC8qIC0tLS0tIEltYWdlIENvbnRhaW5lcnMgLS0tLS0gKi9cclxuXHJcblx0XHR2YXIgaW1nX2NvbnRhaW5lciA9ICQoXCIuaW1nLWNvbnRhaW5lclwiKTtcclxuXHRcdHZhciBpbWdfY29udGFpbmVyX29mZnNldCA9IGltZ19jb250YWluZXIub2Zmc2V0KCkudG9wO1xyXG5cclxuXHQvKiAtLS0tLS0gRm9vdGVyIFNlY3Rpb24gLS0tLS0tICovIFxyXG5cdHZhciBmb290ZXJfc2VjdGlvbiA9ICQoXCJmb290ZXJcIik7XHJcblx0dmFyIGZvb3Rlcl9zZWN0aW9uX29mZnNldCA9IGZvb3Rlcl9zZWN0aW9uLm9mZnNldCgpLnRvcDsgXHJcblxyXG5cdC8qIC0tLS0tLSBOYXZpZ2F0aW9uIC0tLS0tICovIFxyXG5cdHZhciBtZW51ID0gJChcIm5hdiAubWVudVwiKTtcclxuXHJcblx0XHQvKiAtLSBMaW5rIC0tKi9cclxuXHRcdHZhciBhYm91dF9saW5rID0gJChcIi5tZW51LWNvbnRhaW5lciBsaSBhW2hyZWY9JyNhYm91dG1lJ11cIik7XHJcblx0XHR2YXIgd29ya19saW5rID0gJChcIi5tZW51LWNvbnRhaW5lciBsaSBhW2hyZWY9JyN3b3JrJ11cIik7XHJcblx0XHR2YXIgY29udGFjdF9saW5rID0gJChcIi5tZW51LWNvbnRhaW5lciBsaSBhW2hyZWY9JyNjb250YWN0J11cIik7XHJcblxyXG5cdC8qIC0tLS0tIEVWRU5UOiBPbiBXaW5kb3cgUmVzaXplICAtLS0tLSAqL1xyXG5cdCQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuXHRcdHBhcnRpY2xlc19iZy5jc3MoXCJoZWlnaHRcIiwgYmdfaGVpZ2h0KTtcclxuXHRcdFxyXG5cdFx0LyogLS0tLSBVcGRhdGluZyBIZWlnaHRzIC0tLS0gKi9cclxuXHRcdHdpbmRvd19oZWlnaHQgPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblx0XHRkb2N1bWVudF9oZWlnaHQgPSAkKGRvY3VtZW50KS5oZWlnaHQoKTtcclxuXHRcdGhlcm9fc2VjdGlvbl9oZWlnaHQgPSBoZXJvX3NlY3Rpb24uaGVpZ2h0KCk7XHJcblx0fSk7XHJcblxyXG5cdC8qIC0tLS0tIEVWRU5UOiBPbiBXaW5kb3cgTG9hZCAgLS0tLS0gKi8gXHJcblx0aGVyb19zZWN0aW9uLmNzcyhcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZVkoMClcIik7XHRcclxuXHJcblx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0JChcIm5hdlwiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHRcdCQoXCIubG9nb1wiKS5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHRcdGhlcm9fc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIFwiMVwiKTtcclxuXHR9LCA2MDApO1xyXG5cclxuXHJcblx0LyogLS0tLS0gRVZFTlQgTElTVEVORVI6IE9uIFNjcm9sbCAgLS0tLS0gKi8gXHJcblx0JCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG5cdFx0Y29uc3Qgc2Nyb2xsQW1udCA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpO1xyXG5cdFx0Y29uc3QgaGVyb19zZWN0aW9uX2Zyb21Ub3AgPSAoaGVyb19zZWN0aW9uLm9mZnNldCgpLnRvcCArIGhlcm9fc2VjdGlvbl9oZWlnaHQpO1xyXG5cdFx0Y29uc3QgYWJvdXRfc2VjdGlvbl9mcm9tVG9wID0gKGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wICsgYWJvdXRfc2VjdGlvbl9oZWlnaHQpO1xyXG5cdFxyXG5cdCAgIFxyXG5cdFx0LyogLS0tLS0gQ29udHJvbCBOYXZpZ2F0aW9uIEJlaGF2aW9yIE9uIFNjcm9sbCAtLS0tLSAqL1xyXG5cdFx0aXNTY3JvbGxpbmcgPSB0cnVlO1xyXG5cdFx0aWYoaXNTY3JvbGxpbmcpe1xyXG5cdFx0XHRtZW51LmNzcygnb3BhY2l0eScsIDAuNSk7XHJcblx0XHR9XHJcblx0XHRjbGVhckludGVydmFsKCQuZGF0YSh0aGlzLCBcInNjcm9sbENoZWNrXCIpKTsgXHJcblxyXG5cdFx0JC5kYXRhKHRoaXMsIFwic2Nyb2xsQ2hlY2tcIiwgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0aXNTY3JvbGxpbmcgPSBmYWxzZTtcclxuXHRcdFx0Y2hhbmdlT3BhY2l0eSgpO1xyXG5cdFx0fSwgMjUwKSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY2hhbmdlT3BhY2l0eSgpe1xyXG5cdFx0XHRtZW51LmNzcygnb3BhY2l0eScsIDEpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKCQuZGF0YSh0aGlzLCBcInNjcm9sbENoZWNrXCIpKTsgXHJcblx0XHRcdH0sIDI1MCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gQWRqdXN0IE5hdmlnYXRpb24gRWxlbWVudHMgQWN0aXZlIFN0YXRlIC0tLS0tICovXHJcblx0XHRpZihzY3JvbGxBbW50IDwgKGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wICsgYWJvdXRfc2VjdGlvbl9oZWlnaHQpICYmIHNjcm9sbEFtbnQgPCAoYWJvdXRfc2VjdGlvbi5vZmZzZXQoKS50b3AgKyBhYm91dF9zZWN0aW9uX2hlaWdodCkgLSA1MCl7XHJcblx0XHRcdGFib3V0X2xpbmsucmVtb3ZlQ2xhc3MoKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdGFib3V0X2xpbmsucmVtb3ZlQ2xhc3MoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZigoc2Nyb2xsQW1udCA+IChhYm91dF9zZWN0aW9uLm9mZnNldCgpLnRvcCArIGFib3V0X3NlY3Rpb25faGVpZ2h0KSAtIDUwKSAmJiBzY3JvbGxBbW50IDwgKGRvY3VtZW50X2hlaWdodCAtIHdpbmRvd19oZWlnaHQpKXtcclxuXHRcdFx0d29ya19saW5rLnJlbW92ZUNsYXNzKCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHR3b3JrX2xpbmsucmVtb3ZlQ2xhc3MoKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZihzY3JvbGxBbW50ID49IChkb2N1bWVudF9oZWlnaHQgLSB3aW5kb3dfaGVpZ2h0KSl7XHJcblx0XHRcdGNvbnRhY3RfbGluay5yZW1vdmVDbGFzcygpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0Y29udGFjdF9saW5rLnJlbW92ZUNsYXNzKCk7XHJcblx0XHR9XHJcblxyXG5cdFx0LyogLS0tLS0gIFNlY3Rpb246IEhlcm8gU2VjdGlvbiAgLS0tLS0gKi9cclxuXHRcdC8qIC0tLS0gQ29udHJvbCBNb3ZlbWVudCAtLS0tICovXHJcblx0XHRpZihzY3JvbGxBbW50ID49IDAgJiYgc2Nyb2xsQW1udCA8IGFib3V0X3NlY3Rpb24ub2Zmc2V0KCkudG9wKXtcclxuXHRcdFx0dmFyIG5ld1BvcyA9IC0oc2Nyb2xsQW1udCAvIDMpO1xyXG5cdFx0XHRoZXJvX3NlY3Rpb24uY3NzKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgKG5ld1BvcyAqIDIpICsgJ3B4KScpO1xyXG5cdFx0XHR2YXIgdHJpZ2dlcl9jYWxjID0gaGVyb19zZWN0aW9uLm9mZnNldCgpLnRvcCAtIHNjcm9sbEFtbnQ7XHJcblx0XHRcdFxyXG5cclxuXHRcdFx0LyogLS0gQ29udHJvbCBPcGFjaXR5IC0tICovXHJcblx0XHRcdGlmKHRyaWdnZXJfY2FsYyA8IDApe1xyXG5cdFx0XHRcdGlmKE1hdGguYWJzKHRyaWdnZXJfY2FsYykgPiBoZXJvX3NlY3Rpb25fdHJpZ2dlcil7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgY2FsY19iZWdpbiA9IE1hdGguYWJzKHRyaWdnZXJfY2FsYykgLSAoaGVyb19zZWN0aW9uX3RyaWdnZXIpO1xyXG5cdFx0XHRcdFx0dmFyIGNhbGNfb3BhY2l0eSA9IE1hdGgubWF4KDAsIDEgLSBjYWxjX2JlZ2luLzEwMCk7IFxyXG5cdFx0XHRcdFx0dmFyIG5ld19vcGFjaXR5ID0gY2FsY19vcGFjaXR5O1xyXG5cclxuXHRcdFx0XHRcdGhlcm9fc2VjdGlvbi5jc3MoJ29wYWNpdHknLCBuZXdfb3BhY2l0eSk7XHJcblx0XHRcdCAgICB9IFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0ICAgIGlmKHNjcm9sbEFtbnQgPCAoaGVyb19zZWN0aW9uX2Zyb21Ub3AgLSAyMDApKXtcclxuXHRcdCAgICBcdGhlcm9fc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIDEpO1xyXG5cdFx0ICAgIH1cclxuXHRcdH1cclxuXHJcblx0XHQvKiAtLS0tLSAgU2VjdGlvbjogQWJvdXQgU2VjdGlvbiAgLS0tLS0gKi9cclxuXHRcdGlmKChzY3JvbGxBbW50ICsgd2luZG93X2hlaWdodCkgPiAoYWJvdXRfc2VjdGlvbl9vZmZzZXQgKyA0MCkpe1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHNjcm9sbF9jYWxjID0gKHNjcm9sbEFtbnQgKyB3aW5kb3dfaGVpZ2h0KSAtIGFib3V0X3NlY3Rpb25fb2Zmc2V0ICsgNDA7XHJcblx0XHRcdHZhciBzY3JvbGxfYnkgPSAtIChzY3JvbGxfY2FsYy80KTtcclxuXHRcdFx0YWJvdXRfc2VjdGlvbi5jc3MoeyBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoXCIgKyBzY3JvbGxfYnkgKyBcInB4KVwiLCBcclxuXHRcdFx0XHRcdFx0XHRcdFwib3BhY2l0eVwiOiBcIjFcIn0pO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZigoc2Nyb2xsQW1udCArIHdpbmRvd19oZWlnaHQpIDwgKGFib3V0X3NlY3Rpb25fb2Zmc2V0IC0gMTApKXtcclxuXHRcdFx0YWJvdXRfc2VjdGlvbi5jc3MoeyBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMjJyZW0pXCIsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJvcGFjaXR5XCI6IFwiMFwifSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIC0tLS0tIFNlY3Rpb246IFdvcmsgU2VjdGlvbiAtLS0tLSAqLyBcclxuXHRcdCBpZihzY3JvbGxBbW50ID4gKGFib3V0X3NlY3Rpb25fZnJvbVRvcCAtIDE3MCkpe1xyXG5cdFx0IFx0YWJvdXRfc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKTtcclxuXHRcdFx0d29ya19zZWN0aW9uLmNzcyh7XCJvcGFjaXR5XCIgOiBcIjFcIiwgXCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgwKVwifSk7XHJcblx0XHR9XHJcblxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0d29ya19zZWN0aW9uLmNzcyh7XCJvcGFjaXR5XCIgOiBcIjBcIiwgXCJ0cmFuc2Zvcm1cIiA6IFwidHJhbnNsYXRlWSgyMHJlbSlcIn0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qIC0tLS0tIFNlY3Rpb246IEZvb3RlciAgLS0tLS0gKi8gXHJcblx0XHRpZigoc2Nyb2xsQW1udCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gZm9vdGVyX3NlY3Rpb25fb2Zmc2V0KXtcclxuXHRcdFx0Zm9vdGVyX3NlY3Rpb24uY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XHJcblx0XHR9XHJcblx0XHRlbHNle1xyXG5cdFx0XHRmb290ZXJfc2VjdGlvbi5jc3MoXCJvcGFjaXR5XCIsIFwiMFwiKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKiAtLS0tLSBTZWN0aW9uOiBJbWFnZXMgLS0tLS0gKi9cclxuXHJcblxyXG5cdH0pO1xyXG5cclxuXHQvKiAtLS0tIFNtb290aCBTY3JvbGxpbmcgLS0tLSAqLyBcclxuXHR2YXIgY3VycmVudEhhc2h0YWcgPSBcIlwiO1xyXG5cdCQoXCIubWVudSBhXCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdGlmKGN1cnJlbnRIYXNodGFnICE9PSB0aGlzLmhhc2gpe1xyXG5cdFx0XHQvL0NhbGN1bGF0ZSBEZXN0aW5hdGlvblxyXG5cdFx0XHR2YXIgaHJlZiA9IHRoaXMuaGFzaDtcclxuXHRcdFx0dmFyIGRlc3QgPSAwO1xyXG5cdFx0XHRpZigkKHRoaXMuaGFzaCkub2Zmc2V0KCkudG9wID4gJChkb2N1bWVudCkuaGVpZ2h0KCkgLSAkKHdpbmRvdykuaGVpZ2h0KCkpe1xyXG5cdFx0XHRcdGRlc3QgPSAkKGRvY3VtZW50KS5oZWlnaHQoKSAtICQod2luZG93KS5oZWlnaHQoKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0ZWxzZSBpZih0aGlzLmhhc2ggPT09IFwiI3dvcmtcIil7XHJcblx0XHRcdFx0dmFyIHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcdGRlc3QgPSAkKHRoYXQuaGFzaCkub2Zmc2V0KCkudG9wIC0gMTAwO1xyXG5cclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRkZXN0ID0gJCh0aGF0Lmhhc2gpLm9mZnNldCgpLnRvcCAtIDEwMDtcclxuXHRcdFx0XHRcdHNjcm9sbGJhclRvKGRlc3QsIGhyZWYpO1xyXG5cdFx0XHRcdH0sIDEwMDApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYodGhpcy5oYXNoID09PSBcIiNhYm91dG1lXCIpe1xyXG5cdFx0XHRcdGRlc3QgPSAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0ZGVzdCA9ICQodGhpcy5oYXNoKS5vZmZzZXQoKS50b3A7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNjcm9sbGJhclRvKGRlc3QsIGhyZWYpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHRmdW5jdGlvbiBzY3JvbGxiYXJUbyhkZXN0LCBocmVmKXtcclxuXHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcDogZGVzdFxyXG5cdFx0XHR9LCA4MDAsICdlYXNlSW5PdXRFeHBvJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhyZWY7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);