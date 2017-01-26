@extends('layouts.master')

@section('title', 'Home')

@section('content')
	<main>
		<header>
			<section class="brief-intro">
				<div class="intro-main">
					<p>I'm a <span class="merriweather-bold">Front-End Engineer</span> and <span class="merriweather-bold">User Interface Designer</span> with a passion for solving problems and bringing ideas to life.</p>
				</div>
				<div class="intro-social">
					<ul class="social-links">
						<li><a href="#">Twitter</a></li>
						<li><a href="#">Github</a></li>
						<li><a href="#">LinkedIn</a></li>
						<li><a href="#">Mail</a></li>
					</ul>
				</div>
			</section>
		</header>

		<section id="aboutme" class="about">
			<p class="source-code-5 about-me">Hello, I'm Javier Torrez. I work closely with established companies and startups who want to <span class="merriweather-bold-gold">prototype, build, and launch their next product ideas</span>. I'm currently freelancing, but I'm also looking for opportunities to work as a front-end engineer with companies and teams <span class="merriweather-bold-gold">working on challenging problems.</span> 

			If you'd like to hire me, get a free consulation, or just grab coffee, feel free to <a href="" class="u-link">get in touch.</a></p>
		</section>

		<section id="work" class="work-container grid-container">
			<div class="row">
				<div class="col-1">
					<div class="img-container">
						<img src="{{ asset("img/docnow-2.jpg") }}" alt="">
						<a href="" class="button"></a>
					</div>
				</div>
				<div class="col-1">
					<div href="#" class="img-container">
						<img src="{{ asset("img/skybox-1.jpg") }}" alt="">
						<a href="" class="button"></a>
					</div>
				</div>
			
				<div class="col-1">
					<div class="img-container">
						<img src="{{ asset("img/rise-2.jpg") }}" alt="">
						<a href="" class="button"></a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer id="contact">
			<section class="skillset-section">
				<h2>Skillset</h2>
				<div class="skills-list">
					<ul class="list code-list">
						<h3>Code</h3>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript (ES6)</li>
						<li>ReactJS</li>
						<li>JQuery</li>
						<li>Laravel</li>
						<li>PHP</li>
						<li>TDD (Mocha, Chai)</li>
					</ul>
					<ul class="list design-list">
						<h3>Design</h3>
						<li>Adobe Illustrator</li>
						<li>Adobe Photoshop</li>
						<li>Sketch</li>
					</ul>
					<ul class="list learning-list">
						<h3>Learning</h3>
						<li>NodeJS</li>
						<li>MySQL</li>
					</ul>
					<ul class="list reading-list">
						<h3>Reading</h3>
						<li><a class="u-link" href="#">Start With Why</a></li>
					</ul>
				</div>
			</section>

			<section id="contact" class="contact-section">
				<h2>Get in touch</h2>
				<div>
					<address><a href="" class="u-link">javierctorrez@gmail.com</a></address>
					<p>If you'd like to hire me, or if you have an idea you'd like to collaborate on, let's talk!</p>
				</div>
				<div class="social">
					<ul>
						<li><a href="#">Twitter</a></li>
						<li><a href="https://github.com/jactorrez">Github</a></li>
						<li><a href="#">LinkedIn</a></li>
						<li><a href="#">Mail</a></li>
					</ul>
				</div>
			</section>
	</footer>
@stop

