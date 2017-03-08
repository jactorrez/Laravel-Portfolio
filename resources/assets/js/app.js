$(function(){
	// -------- Third-party libraries --------

	const debounce = require("lodash.debounce");

	particlesJS.load('particles-bg', 'js/particles.json');
	const particles_bg = $("#particles-bg");

	// -------- Fallbacks/Polyfills --------

	// rAF
	window.requestAnimationFrame = window.requestAnimationFrame
                                   || window.mozRequestAnimationFrame
                                   || window.webkitRequestAnimationFrame
                                   || window.msRequestAnimationFrame
                                   || function(f){return setTimeout(f, 1000/60)}

	window.cancelAnimationFrame = window.cancelAnimationFrame
	                              || window.mozCancelAnimationFrame
	                              || function(requestID){clearTimeout(requestID)} 

	// -------- Variables --------

	// Affected by resize event
	let bgHeight = $("footer").offset().top + $("footer").outerHeight() - 16;
	let windowHeight = $(window).height();
	let documentHeight = $(document).height();

	// Hero section 
	let heroSection = $(".brief-intro");
	let heroSectionHeight = heroSection.height();

	// About section
	let aboutSection = $(".about");
	let aboutSectionHeight = aboutSection.innerHeight();

	// Work section 
	let workSection = $("section.work-container");

	// Footer section 
	let footerSection = $("footer");
	let footerSectionTopOffset = footerSection.offset().top; 

	// Navigation bar
	let menu = $("nav .menu");

	let ticking = false,
		currentScrollY = 0; 

	let parallaxElements = [];
	let pageElements = [];

	// -------- On window load --------
	heroSection.css("transform", "translateY(0)");	

	setTimeout(function(){
		$("nav").css("opacity", "1");
		$(".logo").css("opacity", "1");
		heroSection.css("opacity", "1");	
	}, 600);

	calcParallaxProps(); 	
	calcAllElProps();

	function calcParallaxProps(){	
		$("[data-parallax]").each((i, el) => {

			let parallaxEl = {};
			parallaxEl.element = $(el);
			parallaxEl.height = parallaxEl.element.height(); 
			parallaxEl.offset = parallaxEl.element.offset().top;
			parallaxEl.bottom = parallaxEl.element.offset().top + (parallaxEl.elHeight);

			parallaxElements.push(parallaxEl);
		});
	}

	function calcAllElProps(){
		$("[data-section]").each((i, el) => {
			let pageElement = {};
			pageElement.element = $(el);
			pageElement.height = pageElement.element.height();
			pageElements.push(pageElement);
		});	
	}

	function onResize(){
		particles_bg.css("height", bgHeight);

		/* ---- Updating Heights ---- */
		windowHeight = $(window).height();
		documentHeight = $(document).height();
		footerSectionTopOffset = footerSection.offset().top; 
	}

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

	function adjustMenuOpacity(){
		// Set opacity to 50% of original while use is scrolling
		menu.css('opacity', 0.5);

		// On last scroll, if 450ms pass, menu opacity will go back to normal (user stopped scrolling)
		setTimeout(function(){
			menu.css('opacity', 1);
		}, 450);
	}


	function adjustNavItemsState(){

		pageElements.forEach((el, i) => {
			let prevEl = pageElements[i-1] ? pageElements[i-1].element : null,
			    nextEl = pageElements[i+1] ? pageElements[i+1].element : null,
			    currentEl = el.element;
			    currentElId = el.element.attr('id');

			if(prevEl && nextEl){
				let prevElBottom = prevEl.offset().top + prevEl.height();
				let prevElId = prevEl.attr('id');
				let nextElId = nextEl.attr('id');
				let nextElTop = nextEl.offset().top;

				if(currentScrollY > (prevElBottom - (prevEl.height()/2)) && (currentScrollY + windowHeight) < (nextElTop + 200)){
					$(`a[href='#${currentElId}']`).addClass("active");
					$(`a[href='#${prevElId}'`).removeClass("active");
					$(`a[href='#${nextElId}'`).removeClass("active");
				}
			} else if(nextEl){
				let nextElId = nextEl.attr('id');

				if(currentScrollY < (el.element.offset().top + (el.element.height()/2))){
					$(`a[href='#${nextElId}'`).removeClass("active");
					$(`a[href='#${currentElId}']`).addClass("active");
				}

			} else if(prevEl){
				let prevElId = prevEl.attr('id');
				if((currentScrollY + windowHeight) > (currentEl.offset().top + 50)){
					$(`a[href='#${currentElId}']`).addClass("active");
					$(`a[href='#${prevElId}'`).removeClass("active");
				}
			}
		});	
	}

	function update(){
		
		// Calculate displacement of parallax elements based on scroll position
		let scrollBy = parseInt(-(currentScrollY / 3).toFixed(2));

		// About section props
		let aboutSecBottom = parseInt((aboutSection.offset().top + aboutSectionHeight).toFixed(0));

		// Work section props
		let workSecBottom = (workSection.offset().top + workSection.height());

		// Footer section props
		let footerSecBottom = (footerSection.offset().top + footerSection.height());

		let isNotPastAbout = currentScrollY < (aboutSecBottom + 350);

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
		let workSectionIsVisible = (currentScrollY + windowHeight) > (aboutSecBottom + 120) &&
								   (currentScrollY) < 600;

		let workSectionIsNotVisible = (currentScrollY + windowHeight) < (aboutSecBottom + 120)

		if(workSectionIsVisible){
			workSection.css({"opacity" : "1", "transform": "translateY(-11rem)"});
		} else if(workSectionIsNotVisible){
			workSection.css({"opacity" : "0", "transform" : "translateY(8rem)"});
		}

		// Change visibility of footer section based on how far the user has scrolled
		let footerIsVisible = (currentScrollY + windowHeight) >= footerSectionTopOffset;

		if(footerIsVisible){
			footerSection.css("opacity", "1");
		}
		else{
			footerSection.css("opacity", "0");
		}


		// Change menu opacity while scrolling
		adjustMenuOpacity();	

		// Change which item in navigation is 'active'
		adjustNavItemsState();

		ticking = false;
	}

	/* ----- Attaching event listeners to window  ----- */ 
	$(window).on('scroll', onScroll);
	$(window).on('resize', debounce(onResize, 150));

	// Smooth Scrolling 
	let currentHashtag = "";
	$(".menu a").click(function(e){
		e.preventDefault();

		if(currentHashtag !== this.hash){
			//Calculate values to reach destination
			let href = this.hash;
			let dest = 0;
			if($(this.hash).offset().top > ($(document).height() - $(window).height())){
				dest = $(document).height() - $(window).height();
			}

			else if(this.hash === "#work"){
				let that = this;
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
		} else {
			return;
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


