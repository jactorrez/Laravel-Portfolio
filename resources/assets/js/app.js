$(function(){

	/* ----- Third Party Libraries ----- */ 
	particlesJS.load('particles-bg', 'js/particles.json');
	var particles_bg = $("#particles-bg");

	/* ----- Affected By Window Change ------ */

	//var bg_height = $("footer").offset().top + $("footer").outerHeight() - 16;
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
		var about_link = $(".menu-container li a[href='#aboutme']");
		var work_link = $(".menu-container li a[href='#work']");
		var contact_link = $(".menu-container li a[href='#contact']");

	/* ----- EVENT: On Window Resize  ----- */
	$(window).on('resize', function(){
		particles_bg.css("height", bg_height);
		
		/* ---- Updating Heights ---- */
		window_height = $(window).height();
		document_height = $(document).height();
		hero_section_height = hero_section.height();
	});

	/* ----- EVENT: On Window Load  ----- */ 
	hero_section.css("transform", "translateY(0)");	

	setTimeout(function(){
		$("nav").css("opacity", "1");
		$(".logo").css("opacity", "1");
		hero_section.css("opacity", "1");
	}, 600);


	/* ----- EVENT LISTENER: On Scroll  ----- */ 
	$(window).on('scroll', function(){
		const scrollAmnt = $(document).scrollTop();
		// const hero_section_fromTop = (hero_section.offset().top + hero_section_height);
		const about_section_fromTop = (about_section.offset().top + about_section_height);
	
	   
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
		if(scrollAmnt < (about_section.offset().top + about_section_height) && scrollAmnt < (about_section.offset().top + about_section_height) - 50){
			about_link.removeClass().addClass("active");
		}
		else{
			about_link.removeClass();
		}

		if((scrollAmnt > (about_section.offset().top + about_section_height) - 50) && scrollAmnt < (document_height - window_height)){
			work_link.removeClass().addClass("active");
		}
		else{
			work_link.removeClass();
		}

		if(scrollAmnt >= (document_height - window_height)){
			contact_link.removeClass().addClass("active");
		}
		else{
			contact_link.removeClass();
		}

		/* -----  Section: Hero Section  ----- */
		/* ---- Control Movement ---- */
		if(scrollAmnt >= 0 && scrollAmnt < about_section.offset().top){
			var newPos = -(scrollAmnt / 3);
			hero_section.css('transform', 'translateY(' + (newPos * 2) + 'px)');
			var trigger_calc = hero_section.offset().top - scrollAmnt;

			/* -- Control Opacity -- */
			if(Math.abs(trigger_calc) > hero_section_trigger){
				let calc_begin = Math.abs(trigger_calc) - (hero_section_trigger);
				var calc_opacity = Math.max(0, 1 - calc_begin/100); 
				var new_opacity = calc_opacity;

				hero_section.css('opacity', new_opacity);
		    } 

		    if(scrollAmnt < hero_section_fromTop){
		    	hero_section.css("opacity", 1);
		    }
		}

		/* -----  Section: About Section  ----- */
		if((scrollAmnt + window_height) > (about_section_offset + 40)){
			
			let scroll_calc = (scrollAmnt + window_height) - about_section_offset + 40;
			var scroll_by = - (scroll_calc/4);
			about_section.css({ "transform": "translateY(" + scroll_by + "px)", 
								"opacity": "1"});
		}
		else if((scrollAmnt + window_height) < (about_section_offset - 10)){
			about_section.css({ "transform": "translateY(22rem)", 
								"opacity": "0"} );
		}

		/* ----- Section: Work Section ----- */ 
		 if(scrollAmnt > (about_section_fromTop - 170)){
		 	about_section.css("opacity", "0");
			work_section.css({"opacity" : "1", "transform" : "translateY(0)"});
		}

		else{
			work_section.css({"opacity" : "0", "transform" : "translateY(20rem)"});
		}

		/* ----- Section: Footer  ----- */ 
		if((scrollAmnt + $(window).height()) >= footer_section_offset){
			footer_section.css("opacity", "1");
		}
		else{
			footer_section.css("opacity", "0");
		}

		/* ----- Section: Images ----- */


	});

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


