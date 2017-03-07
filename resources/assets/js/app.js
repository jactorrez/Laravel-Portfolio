$(function(){
	const debounce = require("lodash.debounce");

	/* ------------ Fallbacks/Polyfills ---------------- */
	/* -- rAF -- */
	window.requestAnimationFrame = window.requestAnimationFrame
                                   || window.mozRequestAnimationFrame
                                   || window.webkitRequestAnimationFrame
                                   || window.msRequestAnimationFrame
                                   || function(f){return setTimeout(f, 1000/60)}

	window.cancelAnimationFrame = window.cancelAnimationFrame
	                              || window.mozCancelAnimationFrame
	                              || function(requestID){clearTimeout(requestID)} 


	/* ----- Third Party Libraries ----- */ 
	particlesJS.load('particles-bg', 'js/particles.json');
	var particles_bg = $("#particles-bg");

	/* ----- Affected By Window Change ------ */
	var bg_height = $("footer").offset().top + $("footer").outerHeight() - 16;
	var window_height = $(window).height();
	var document_height = $(document).height();
	var isScrolling; 

	/* ----- Hero Section ----- */ 
	var hero_section = $(".brief-intro");
	var hero_section_height = hero_section.height();
	var hero_section_trigger = (hero_section_height / 2) - 100;
	const hero_section_fromTop = (hero_section.offset().top + hero_section_height);

	/* ----- About Section ----- */
	var about_section = $(".about");
	var about_section_height = about_section.innerHeight();
	var about_section_offset = about_section.offset().top;

	/* ------ Work Section ------ */ 
	var work_section = $("section.work-container");
	var work_section_offset = work_section.offset().top; 

		/* ----- Image Containers ----- */
		var img_container = $(".img-container");
		var img_container_offset = img_container.offset().top;

	/* ------ Footer Section ------ */ 
	var footer_section = $("footer");
	var footer_section_offset = footer_section.offset().top; 

	/* ------ Navigation ----- */ 
	var menu = $("nav .menu");

		/* -- Link --*/
		var about_link = $("a[href='#aboutme']");
		var work_link = $("a[href='#work']");
		var contact_link = $("a[href='#contact']");

	/* ----- EVENT: On Window Resize  ----- */

	function onResize(){
		particles_bg.css("height", bg_height);

		/* ---- Updating Heights ---- */
		window_height = $(window).height();
		document_height = $(document).height();
		hero_section_height = hero_section.height();
	}

	$(window).on('resize', debounce(onResize, 150));

	/* ----- EVENT: On Window Load  ----- */ 
	hero_section.css("transform", "translateY(0)");	

	setTimeout(function(){
		$("nav").css("opacity", "1");
		$(".logo").css("opacity", "1");
		hero_section.css("opacity", "1");
	}, 600);


	/* ----- TESTING NEW SCROLL OPTIMIZATION ------ */
	let ticking = false,
		currentScrollY = 0; 

	let parallaxElements = [];

	function calcProps(){	
		$("[data-parallax]").each((i, el) => {

			let parallaxEl = {};
			parallaxEl.element = $(el);
			parallaxEl.height = parallaxEl.element.height(); 
			parallaxEl.offset = parallaxEl.element.offset().top;
			parallaxEl.bottom = parallaxEl.element.offset().top + (parallaxEl.elHeight);

			parallaxElements.push(parallaxEl);
		});
	}

	calcProps(); 	

	function onScroll(){
		currentScrollY = $(document).scrollTop();
		requestUpdate(); 
	}

	function requestUpdate(){
		if(!ticking){
			requestAnimationFrame(update);
			ticking = true; 
		}
	}

	function changeMenuOpacity(){
		// Set opacity to 50% of original while use is scrolling
		menu.css('opacity', 0.5);

		// On last scroll, if 450ms pass, menu opacity will go back to normal (user stopped scrolling)
		setTimeout(function(){
			menu.css('opacity', 1);
		}, 450);
	}

	function update(){
		// Change menu opacity while scrolling
		
		// Calculate displacement of parallax elements based on scroll position
		let scrollBy = parseInt(-(currentScrollY / 3).toFixed(2));

		let aboutSecBottom = parseInt((about_section.offset().top + about_section_height).toFixed(0));
		let aboutDifFromTop = (about_section.offset().top - currentScrollY).toFixed(0);
		let isNotPastAbout = currentScrollY < (aboutSecBottom + 350);
		let workSecFromTop = work_section.offset().top;


		// Check if user scrolled beyond last parallax element (about section)
		// If not, execute looping logic on each parallax element
		if(isNotPastAbout){

			// Loop through each parallax element
			parallaxElements.forEach(function(el, i){

				// Store information re: current parallax element in the loop
				let currentEl = el.element;
				let currentElHeight = currentEl.height;
				let currentElBottom = parseInt($(currentEl).offset().top.toFixed(0)) + el.height;

				// Abstract conditionals
				let isBriefIntro = currentEl[0].className.includes('brief-intro');
				let isAboutSec = currentEl[0].className.includes('about');

				// Check if user scrolled past current parallax element
				let isNotScrolledPast = (currentScrollY + 100) < currentElBottom;

				// Check if current parallax element is visible to user (on screen)
				let isOnScreen = (currentScrollY + $(window).height()) > (currentElBottom - (el.height/2));

				// Set a "locked" location after user scrolls a certain about of pixels down the page
				// This is done to limit how far a parallax element goes off the page, 
				// stops browser from doing unessesary and expensive calculations (no repaints!)
				if(isBriefIntro && (scrollBy <= -120)){
					currentEl.css('transform', 'translate3d(0, -120px, 0');
				} 
				else if(isAboutSec && (scrollBy <= -100)){
					currentEl.css('transform', `translate3d(0, -100}px, 0`);
				} 
				else {
					currentEl.css('transform', `translate3d(0, ${scrollBy * 2.5}px, 0`);
				}

				// Check if user scrolled past an element (change opacity to 0) or if they didn't
				// and element is also visible on the screen (change opacity to 1)
				if(isNotScrolledPast && isOnScreen){
					currentEl.css('opacity', '1');
				} else {
					currentEl.css('opacity', '0');
				}
			});
		}

		// Change visibilty of work section based on how far the user has scrolled 
		let workSectionIsVisible = (currentScrollY + window_height) > (aboutSecBottom + 120) &&
								   (currentScrollY) < 600;

		let workSectionIsNotVisible = (currentScrollY + window_height) < (aboutSecBottom + 120)

		if(workSectionIsVisible){
			work_section.css({"opacity" : "1", "transform": "translateY(-11rem)"});
		} else if(workSectionIsNotVisible){
			work_section.css({"opacity" : "0", "transform" : "translateY(8rem)"});
		}

		// Change visibility of work section based on how far the user has scrolled

		let footerIsVisible = (currentScrollY + window_height) >= footer_section_offset;

		if(footerIsVisible){
			footer_section.css("opacity", "1");
		}
		else{
			footer_section.css("opacity", "0");
		}

		changeMenuOpacity();
		adjustNavLinkState();

		ticking = false;
	}

	function adjustNavLinkState(){
		if(currentScrollY < (about_section.offset().top + about_section_height) && currentScrollY < (about_section.offset().top + about_section_height) - 50){
			about_link.removeClass().addClass("active");
		}
		else{
			about_link.removeClass();
		}

		if((currentScrollY > (about_section.offset().top + about_section_height) - 50) && currentScrollY < (document_height - window_height)){
			work_link.removeClass().addClass("active");
		}
		else{
			work_link.removeClass();
		}

		if(currentScrollY >= (document_height - window_height)){
			contact_link.removeClass().addClass("active");
		}
		else{
			contact_link.removeClass();
		}

	}

	/* ----- EVENT LISTENER: On Scroll  ----- */ 
	$(window).on('scroll', onScroll);

	/* ---- Smooth Scrolling ---- */ 
	var currentHashtag = "";
	$(".menu a").click(function(e){
		e.preventDefault();

		if(currentHashtag !== this.hash){
			//Calculate Destination
			var href = this.hash;
			var dest = 0;
			if($(this.hash).offset().top > $(document).height() - $(window).height()){
				dest = $(document).height() - $(window).height();
			}

			else if(this.hash === "#work"){
				var that = this;
				dest = $(that.hash).offset().top - 100;

				setTimeout(function(){
					dest = $(that.hash).offset().top - 100;
					scrollbarTo(dest, href);
				}, 1000);
			}
			else if(this.hash === "#aboutme"){
				dest = 0;
			}
			else{
				dest = $(this.hash).offset().top;
			}

			scrollbarTo(dest, href);
		}
	});

	function scrollbarTo(dest, href){
		$("html, body").animate({
				scrollTop: dest
			}, 800, 'easeInOutExpo', function(){
				window.location.hash = href;
		});
	}
});


