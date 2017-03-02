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
			parallaxEl.elHeight = parallaxEl.element.height(); 
			parallaxEl.elOffset = parallaxEl.element.offset().top;
			parallaxEl.elBottom = parallaxEl.element.offset().top + (parallaxEl.elHeight);

			parallaxElements.push(parallaxEl);
		});
	}

	calcProps(); 	

	function onScroll2(){
		currentScrollY = $(document).scrollTop();
		requestUpdate(); 
	}

	function requestUpdate(){
		if(!ticking){
			requestAnimationFrame(update);
			ticking = true; 
		}
	}

	function update(){

		let scrollBy = -(currentScrollY / 2).toFixed(2);
		console.log(scrollBy);

		parallaxElements.forEach(function(el, i){
			let currentEl = el.element;
			currentEl.css('transform', `translate3d(0, ${scrollBy * 2}px, 0`);
		});

		ticking = false;
	}

	/* ----- EVENT LISTENER: On Scroll  ----- */ 
	$(window).on('scroll', onScroll2);

	function onScroll(){	
		const currentScrollY = $(document).scrollTop();
		const hero_section_fromTop = (hero_section.offset().top + hero_section_height);
		const about_section_fromTop = (about_section.offset().top + about_section_height);

		let parallaxElements = document.querySelectorAll("[data-parallax]");

		for(let i = 0, len = parallaxElements.length; i < len; i++){
			console.log("running");
		}

		/* ----- Control Navigation Behavior On Scroll ----- */
		isScrolling = true;
		if(isScrolling){
			menu.css('opacity', 0.5);
		}
		clearInterval($.data(this, "scrollCheck")); 

		$.data(this, "scrollCheck", setInterval(function(){
			isScrolling = false;
			changeOpacity();
		}, 250));

		function changeOpacity(){
			menu.css('opacity', 1);
			setTimeout(() => {
				clearInterval($.data(this, "scrollCheck")); 
			}, 250);
		}

		/* ----- Adjust Navigation Elements Active State ----- */
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

		/* -----  Section: Hero Section  ----- */

		/* ---- Control Movement ---- */
		if(currentScrollY > 0 && currentScrollY < about_section.offset().top){
			var newPos = -(currentScrollY / 3);
			hero_section.css('transform', 'translateY(' + (newPos * 2) + 'px)');
			var trigger_calc = hero_section.offset().top - currentScrollY;
			

			/* -- Control Opacity -- */
			if(trigger_calc < 0){
				if(Math.abs(trigger_calc) > hero_section_trigger){
				
					let calc_begin = Math.abs(trigger_calc) - (hero_section_trigger);
					var calc_opacity = Math.max(0, 1 - calc_begin/100); 
					var new_opacity = calc_opacity;

					hero_section.css('opacity', new_opacity);
			    } 
			}

		    if(currentScrollY < (hero_section_fromTop - 200)){
		    	hero_section.css("opacity", 1);
		    }
		}

		/* -----  Section: About Section  ----- */
		if((currentScrollY + window_height) > (about_section_offset + 40)){
			
			let scroll_calc = (currentScrollY + window_height) - about_section_offset + 40;
			var scroll_by = - (scroll_calc/4);
			about_section.css({ "transform": "translateY(" + scroll_by + "px)", 
								"opacity": "1"});
		}
		else if((currentScrollY + window_height) < (about_section_offset - 10)){
			about_section.css({ "transform": "translateY(22rem)", 
								"opacity": "0"} );
		}

		/* ----- Section: Work Section ----- */ 
		 if(currentScrollY > (about_section_fromTop - 170)){
		 	about_section.css("opacity", "0");
			work_section.css({"opacity" : "1", "transform" : "translateY(0)"});
		}

		else{
			work_section.css({"opacity" : "0", "transform" : "translateY(20rem)"});
		}

		/* ----- Section: Footer  ----- */ 
		if((currentScrollY + $(window).height()) >= footer_section_offset){
			footer_section.css("opacity", "1");
		}
		else{
			footer_section.css("opacity", "0");
		}
	}



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


