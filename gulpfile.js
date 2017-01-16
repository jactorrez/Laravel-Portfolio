const elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('app.scss')
       .copy('node_modules/particlesjs/particles.js', 'resources/assets/js/particles.js')
       .webpack('app.js', './resources/assets/js/jsTranspiled.js')
       .scripts(['particles.js', 'jsTranspiled.js', 'jqueryEasing.js'], 'public/js/app.js')
       .browserSync({
       		proxy: 'portfolio.dev'
       	});
});
