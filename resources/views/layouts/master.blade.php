<!DOCTYPE html>
<html lang="en">
    <head>
        @include("partials._head")
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div class="container">
            @include("partials._navbar")
            @yield('content')
            <div id="particles-bg"></div>
        </div>
        <!-- JS files -->
        <script
          src="https://code.jquery.com/jquery-3.1.1.min.js"
          integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
          crossorigin="anonymous"></script>
        <script src='{{ asset("js/app.js") }}'></script>
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    </body>
</html>
