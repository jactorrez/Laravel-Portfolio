/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */

var pJS = function(tag_id, params){

  var canvas_el = document.querySelector('#'+tag_id+' > .particles-js-canvas-el');

  /* particles.js variables with default values */
  this.pJS = {
    canvas: {
      el: canvas_el,
      w: canvas_el.offsetWidth,
      h: canvas_el.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#fff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#ff0000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: '',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 20,
        random: false,
        anim: {
          enable: false,
          speed: 20,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: '#fff',
        opacity: 1,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 3000,
          rotateY: 3000
        }
      },
      array: []
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab:{
          distance: 100,
          line_linked:{
            opacity: 1
          }
        },
        bubble:{
          distance: 200,
          size: 80,
          duration: 0.4
        },
        repulse:{
          distance: 200,
          duration: 0.4
        },
        push:{
          particles_nb: 4
        },
        remove:{
          particles_nb: 2
        }
      },
      mouse:{}
    },
    retina_detect: false,
    fn: {
      interact: {},
      modes: {},
      vendors:{}
    },
    tmp: {}
  };

  var pJS = this.pJS;

  /* params settings */
  if(params){
    Object.deepExtend(pJS, params);
  }

  pJS.tmp.obj = {
    size_value: pJS.particles.size.value,
    size_anim_speed: pJS.particles.size.anim.speed,
    move_speed: pJS.particles.move.speed,
    line_linked_distance: pJS.particles.line_linked.distance,
    line_linked_width: pJS.particles.line_linked.width,
    mode_grab_distance: pJS.interactivity.modes.grab.distance,
    mode_bubble_distance: pJS.interactivity.modes.bubble.distance,
    mode_bubble_size: pJS.interactivity.modes.bubble.size,
    mode_repulse_distance: pJS.interactivity.modes.repulse.distance
  };


  pJS.fn.retinaInit = function(){

    if(pJS.retina_detect && window.devicePixelRatio > 1){
      pJS.canvas.pxratio = window.devicePixelRatio; 
      pJS.tmp.retina = true;
    } 
    else{
      pJS.canvas.pxratio = 1;
      pJS.tmp.retina = false;
    }

    pJS.canvas.w = pJS.canvas.el.offsetWidth * pJS.canvas.pxratio;
    pJS.canvas.h = pJS.canvas.el.offsetHeight * pJS.canvas.pxratio;

    pJS.particles.size.value = pJS.tmp.obj.size_value * pJS.canvas.pxratio;
    pJS.particles.size.anim.speed = pJS.tmp.obj.size_anim_speed * pJS.canvas.pxratio;
    pJS.particles.move.speed = pJS.tmp.obj.move_speed * pJS.canvas.pxratio;
    pJS.particles.line_linked.distance = pJS.tmp.obj.line_linked_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.grab.distance = pJS.tmp.obj.mode_grab_distance * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.distance = pJS.tmp.obj.mode_bubble_distance * pJS.canvas.pxratio;
    pJS.particles.line_linked.width = pJS.tmp.obj.line_linked_width * pJS.canvas.pxratio;
    pJS.interactivity.modes.bubble.size = pJS.tmp.obj.mode_bubble_size * pJS.canvas.pxratio;
    pJS.interactivity.modes.repulse.distance = pJS.tmp.obj.mode_repulse_distance * pJS.canvas.pxratio;

  };



  /* ---------- pJS functions - canvas ------------ */

  pJS.fn.canvasInit = function(){
    pJS.canvas.ctx = pJS.canvas.el.getContext('2d');
  };

  pJS.fn.canvasSize = function(){

    pJS.canvas.el.width = pJS.canvas.w;
    pJS.canvas.el.height = pJS.canvas.h;

    if(pJS && pJS.interactivity.events.resize){

      window.addEventListener('resize', function(){

          pJS.canvas.w = pJS.canvas.el.offsetWidth;
          pJS.canvas.h = pJS.canvas.el.offsetHeight;

          /* resize canvas */
          if(pJS.tmp.retina){
            pJS.canvas.w *= pJS.canvas.pxratio;
            pJS.canvas.h *= pJS.canvas.pxratio;
          }

          pJS.canvas.el.width = pJS.canvas.w;
          pJS.canvas.el.height = pJS.canvas.h;

          /* repaint canvas on anim disabled */
          if(!pJS.particles.move.enable){
            pJS.fn.particlesEmpty();
            pJS.fn.particlesCreate();
            pJS.fn.particlesDraw();
            pJS.fn.vendors.densityAutoParticles();
          }

        /* density particles enabled */
        pJS.fn.vendors.densityAutoParticles();

      });

    }

  };


  pJS.fn.canvasPaint = function(){
    pJS.canvas.ctx.fillRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };

  pJS.fn.canvasClear = function(){
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);
  };


  /* --------- pJS functions - particles ----------- */

  pJS.fn.particle = function(color, opacity, position){

    /* size */
    this.radius = (pJS.particles.size.random ? Math.random() : 1) * pJS.particles.size.value;
    if(pJS.particles.size.anim.enable){
      this.size_status = false;
      this.vs = pJS.particles.size.anim.speed / 100;
      if(!pJS.particles.size.anim.sync){
        this.vs = this.vs * Math.random();
      }
    }

    /* position */
    this.x = position ? position.x : Math.random() * pJS.canvas.w;
    this.y = position ? position.y : Math.random() * pJS.canvas.h;

    /* check position  - into the canvas */
    if(this.x > pJS.canvas.w - this.radius*2) this.x = this.x - this.radius;
    else if(this.x < this.radius*2) this.x = this.x + this.radius;
    if(this.y > pJS.canvas.h - this.radius*2) this.y = this.y - this.radius;
    else if(this.y < this.radius*2) this.y = this.y + this.radius;

    /* check position - avoid overlap */
    if(pJS.particles.move.bounce){
      pJS.fn.vendors.checkOverlap(this, position);
    }

    /* color */
    this.color = {};
    if(typeof(color.value) == 'object'){

      if(color.value instanceof Array){
        var color_selected = color.value[Math.floor(Math.random() * pJS.particles.color.value.length)];
        this.color.rgb = hexToRgb(color_selected);
      }else{
        if(color.value.r != undefined && color.value.g != undefined && color.value.b != undefined){
          this.color.rgb = {
            r: color.value.r,
            g: color.value.g,
            b: color.value.b
          }
        }
        if(color.value.h != undefined && color.value.s != undefined && color.value.l != undefined){
          this.color.hsl = {
            h: color.value.h,
            s: color.value.s,
            l: color.value.l
          }
        }
      }

    }
    else if(color.value == 'random'){
      this.color.rgb = {
        r: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        g: (Math.floor(Math.random() * (255 - 0 + 1)) + 0),
        b: (Math.floor(Math.random() * (255 - 0 + 1)) + 0)
      }
    }
    else if(typeof(color.value) == 'string'){
      this.color = color;
      this.color.rgb = hexToRgb(this.color.value);
    }

    /* opacity */
    this.opacity = (pJS.particles.opacity.random ? Math.random() : 1) * pJS.particles.opacity.value;
    if(pJS.particles.opacity.anim.enable){
      this.opacity_status = false;
      this.vo = pJS.particles.opacity.anim.speed / 100;
      if(!pJS.particles.opacity.anim.sync){
        this.vo = this.vo * Math.random();
      }
    }

    /* animation - velocity for speed */
    var velbase = {}
    switch(pJS.particles.move.direction){
      case 'top':
        velbase = { x:0, y:-1 };
      break;
      case 'top-right':
        velbase = { x:0.5, y:-0.5 };
      break;
      case 'right':
        velbase = { x:1, y:-0 };
      break;
      case 'bottom-right':
        velbase = { x:0.5, y:0.5 };
      break;
      case 'bottom':
        velbase = { x:0, y:1 };
      break;
      case 'bottom-left':
        velbase = { x:-0.5, y:1 };
      break;
      case 'left':
        velbase = { x:-1, y:0 };
      break;
      case 'top-left':
        velbase = { x:-0.5, y:-0.5 };
      break;
      default:
        velbase = { x:0, y:0 };
      break;
    }

    if(pJS.particles.move.straight){
      this.vx = velbase.x;
      this.vy = velbase.y;
      if(pJS.particles.move.random){
        this.vx = this.vx * (Math.random());
        this.vy = this.vy * (Math.random());
      }
    }else{
      this.vx = velbase.x + Math.random()-0.5;
      this.vy = velbase.y + Math.random()-0.5;
    }

    // var theta = 2.0 * Math.PI * Math.random();
    // this.vx = Math.cos(theta);
    // this.vy = Math.sin(theta);

    this.vx_i = this.vx;
    this.vy_i = this.vy;

    

    /* if shape is image */

    var shape_type = pJS.particles.shape.type;
    if(typeof(shape_type) == 'object'){
      if(shape_type instanceof Array){
        var shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
        this.shape = shape_selected;
      }
    }else{
      this.shape = shape_type;
    }

    if(this.shape == 'image'){
      var sh = pJS.particles.shape;
      this.img = {
        src: sh.image.src,
        ratio: sh.image.width / sh.image.height
      }
      if(!this.img.ratio) this.img.ratio = 1;
      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg != undefined){
        pJS.fn.vendors.createSvgImg(this);
        if(pJS.tmp.pushing){
          this.img.loaded = false;
        }
      }
    }

    

  };


  pJS.fn.particle.prototype.draw = function() {

    var p = this;

    if(p.radius_bubble != undefined){
      var radius = p.radius_bubble; 
    }else{
      var radius = p.radius;
    }

    if(p.opacity_bubble != undefined){
      var opacity = p.opacity_bubble;
    }else{
      var opacity = p.opacity;
    }

    if(p.color.rgb){
      var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+opacity+')';
    }else{
      var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+opacity+')';
    }

    pJS.canvas.ctx.fillStyle = color_value;
    pJS.canvas.ctx.beginPath();

    switch(p.shape){

      case 'circle':
        pJS.canvas.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
      break;

      case 'edge':
        pJS.canvas.ctx.rect(p.x-radius, p.y-radius, radius*2, radius*2);
      break;

      case 'triangle':
        pJS.fn.vendors.drawShape(pJS.canvas.ctx, p.x-radius, p.y+radius / 1.66, radius*2, 3, 2);
      break;

      case 'polygon':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius / (pJS.particles.shape.polygon.nb_sides/3.5), // startX
          p.y - radius / (2.66/3.5), // startY
          radius*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          1 // sideCountDenominator
        );
      break;

      case 'star':
        pJS.fn.vendors.drawShape(
          pJS.canvas.ctx,
          p.x - radius*2 / (pJS.particles.shape.polygon.nb_sides/4), // startX
          p.y - radius / (2*2.66/3.5), // startY
          radius*2*2.66 / (pJS.particles.shape.polygon.nb_sides/3), // sideLength
          pJS.particles.shape.polygon.nb_sides, // sideCountNumerator
          2 // sideCountDenominator
        );
      break;

      case 'image':

        function draw(){
          pJS.canvas.ctx.drawImage(
            img_obj,
            p.x-radius,
            p.y-radius,
            radius*2,
            radius*2 / p.img.ratio
          );
        }

        if(pJS.tmp.img_type == 'svg'){
          var img_obj = p.img.obj;
        }else{
          var img_obj = pJS.tmp.img_obj;
        }

        if(img_obj){
          draw();
        }

      break;

    }

    pJS.canvas.ctx.closePath();

    if(pJS.particles.shape.stroke.width > 0){
      pJS.canvas.ctx.strokeStyle = pJS.particles.shape.stroke.color;
      pJS.canvas.ctx.lineWidth = pJS.particles.shape.stroke.width;
      pJS.canvas.ctx.stroke();
    }
    
    pJS.canvas.ctx.fill();
    
  };


  pJS.fn.particlesCreate = function(){
    for(var i = 0; i < pJS.particles.number.value; i++) {
      pJS.particles.array.push(new pJS.fn.particle(pJS.particles.color, pJS.particles.opacity.value));
    }
  };

  pJS.fn.particlesUpdate = function(){

    for(var i = 0; i < pJS.particles.array.length; i++){

      /* the particle */
      var p = pJS.particles.array[i];

      // var d = ( dx = pJS.interactivity.mouse.click_pos_x - p.x ) * dx + ( dy = pJS.interactivity.mouse.click_pos_y - p.y ) * dy;
      // var f = -BANG_SIZE / d;
      // if ( d < BANG_SIZE ) {
      //     var t = Math.atan2( dy, dx );
      //     p.vx = f * Math.cos(t);
      //     p.vy = f * Math.sin(t);
      // }

      /* move the particle */
      if(pJS.particles.move.enable){
        var ms = pJS.particles.move.speed/2;
        p.x += p.vx * ms;
        p.y += p.vy * ms;
      }

      /* change opacity status */
      if(pJS.particles.opacity.anim.enable) {
        if(p.opacity_status == true) {
          if(p.opacity >= pJS.particles.opacity.value) p.opacity_status = false;
          p.opacity += p.vo;
        }else {
          if(p.opacity <= pJS.particles.opacity.anim.opacity_min) p.opacity_status = true;
          p.opacity -= p.vo;
        }
        if(p.opacity < 0) p.opacity = 0;
      }

      /* change size */
      if(pJS.particles.size.anim.enable){
        if(p.size_status == true){
          if(p.radius >= pJS.particles.size.value) p.size_status = false;
          p.radius += p.vs;
        }else{
          if(p.radius <= pJS.particles.size.anim.size_min) p.size_status = true;
          p.radius -= p.vs;
        }
        if(p.radius < 0) p.radius = 0;
      }

      /* change particle position if it is out of canvas */
      if(pJS.particles.move.out_mode == 'bounce'){
        var new_pos = {
          x_left: p.radius,
          x_right:  pJS.canvas.w,
          y_top: p.radius,
          y_bottom: pJS.canvas.h
        }
      }else{
        var new_pos = {
          x_left: -p.radius,
          x_right: pJS.canvas.w + p.radius,
          y_top: -p.radius,
          y_bottom: pJS.canvas.h + p.radius
        }
      }

      if(p.x - p.radius > pJS.canvas.w){
        p.x = new_pos.x_left;
        p.y = Math.random() * pJS.canvas.h;
      }
      else if(p.x + p.radius < 0){
        p.x = new_pos.x_right;
        p.y = Math.random() * pJS.canvas.h;
      }
      if(p.y - p.radius > pJS.canvas.h){
        p.y = new_pos.y_top;
        p.x = Math.random() * pJS.canvas.w;
      }
      else if(p.y + p.radius < 0){
        p.y = new_pos.y_bottom;
        p.x = Math.random() * pJS.canvas.w;
      }

      /* out of canvas modes */
      switch(pJS.particles.move.out_mode){
        case 'bounce':
          if (p.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
          else if (p.x - p.radius < 0) p.vx = -p.vx;
          if (p.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
          else if (p.y - p.radius < 0) p.vy = -p.vy;
        break;
      }

      /* events */
      if(isInArray('grab', pJS.interactivity.events.onhover.mode)){
        pJS.fn.modes.grabParticle(p);
      }

      if(isInArray('bubble', pJS.interactivity.events.onhover.mode) || isInArray('bubble', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.bubbleParticle(p);
      }

      if(isInArray('repulse', pJS.interactivity.events.onhover.mode) || isInArray('repulse', pJS.interactivity.events.onclick.mode)){
        pJS.fn.modes.repulseParticle(p);
      }

      /* interaction auto between particles */
      if(pJS.particles.line_linked.enable || pJS.particles.move.attract.enable){
        for(var j = i + 1; j < pJS.particles.array.length; j++){
          var p2 = pJS.particles.array[j];

          /* link particles */
          if(pJS.particles.line_linked.enable){
            pJS.fn.interact.linkParticles(p,p2);
          }

          /* attract particles */
          if(pJS.particles.move.attract.enable){
            pJS.fn.interact.attractParticles(p,p2);
          }

          /* bounce particles */
          if(pJS.particles.move.bounce){
            pJS.fn.interact.bounceParticles(p,p2);
          }

        }
      }


    }

  };

  pJS.fn.particlesDraw = function(){

    /* clear canvas */
    pJS.canvas.ctx.clearRect(0, 0, pJS.canvas.w, pJS.canvas.h);

    /* update each particles param */
    pJS.fn.particlesUpdate();

    /* draw each particle */
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p = pJS.particles.array[i];
      p.draw();
    }

  };

  pJS.fn.particlesEmpty = function(){
    pJS.particles.array = [];
  };

  pJS.fn.particlesRefresh = function(){

    /* init all */
    cancelRequestAnimFrame(pJS.fn.checkAnimFrame);
    cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
    pJS.tmp.source_svg = undefined;
    pJS.tmp.img_obj = undefined;
    pJS.tmp.count_svg = 0;
    pJS.fn.particlesEmpty();
    pJS.fn.canvasClear();
    
    /* restart */
    pJS.fn.vendors.start();

  };


  /* ---------- pJS functions - particles interaction ------------ */

  pJS.fn.interact.linkParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    /* draw a line between p1 and p2 if the distance between them is under the config distance */
    if(dist <= pJS.particles.line_linked.distance){

      var opacity_line = pJS.particles.line_linked.opacity - (dist / (1/pJS.particles.line_linked.opacity)) / pJS.particles.line_linked.distance;

      if(opacity_line > 0){        
        
        /* style */
        var color_line = pJS.particles.line_linked.color_rgb_line;
        pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
        pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
        //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
        
        /* path */
        pJS.canvas.ctx.beginPath();
        pJS.canvas.ctx.moveTo(p1.x, p1.y);
        pJS.canvas.ctx.lineTo(p2.x, p2.y);
        pJS.canvas.ctx.stroke();
        pJS.canvas.ctx.closePath();

      }

    }

  };


  pJS.fn.interact.attractParticles  = function(p1, p2){

    /* condensed particles */
    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy);

    if(dist <= pJS.particles.line_linked.distance){

      var ax = dx/(pJS.particles.move.attract.rotateX*1000),
          ay = dy/(pJS.particles.move.attract.rotateY*1000);

      p1.vx -= ax;
      p1.vy -= ay;

      p2.vx += ax;
      p2.vy += ay;

    }
    

  }


  pJS.fn.interact.bounceParticles = function(p1, p2){

    var dx = p1.x - p2.x,
        dy = p1.y - p2.y,
        dist = Math.sqrt(dx*dx + dy*dy),
        dist_p = p1.radius+p2.radius;

    if(dist <= dist_p){
      p1.vx = -p1.vx;
      p1.vy = -p1.vy;

      p2.vx = -p2.vx;
      p2.vy = -p2.vy;
    }

  }


  /* ---------- pJS functions - modes events ------------ */

  pJS.fn.modes.pushParticles = function(nb, pos){

    pJS.tmp.pushing = true;

    for(var i = 0; i < nb; i++){
      pJS.particles.array.push(
        new pJS.fn.particle(
          pJS.particles.color,
          pJS.particles.opacity.value,
          {
            'x': pos ? pos.pos_x : Math.random() * pJS.canvas.w,
            'y': pos ? pos.pos_y : Math.random() * pJS.canvas.h
          }
        )
      )
      if(i == nb-1){
        if(!pJS.particles.move.enable){
          pJS.fn.particlesDraw();
        }
        pJS.tmp.pushing = false;
      }
    }

  };


  pJS.fn.modes.removeParticles = function(nb){

    pJS.particles.array.splice(0, nb);
    if(!pJS.particles.move.enable){
      pJS.fn.particlesDraw();
    }

  };


  pJS.fn.modes.bubbleParticle = function(p){

    /* on hover event */
    if(pJS.interactivity.events.onhover.enable && isInArray('bubble', pJS.interactivity.events.onhover.mode)){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
          ratio = 1 - dist_mouse / pJS.interactivity.modes.bubble.distance;

      function init(){
        p.opacity_bubble = p.opacity;
        p.radius_bubble = p.radius;
      }

      /* mousemove - check ratio */
      if(dist_mouse <= pJS.interactivity.modes.bubble.distance){

        if(ratio >= 0 && pJS.interactivity.status == 'mousemove'){
          
          /* size */
          if(pJS.interactivity.modes.bubble.size != pJS.particles.size.value){

            if(pJS.interactivity.modes.bubble.size > pJS.particles.size.value){
              var size = p.radius + (pJS.interactivity.modes.bubble.size*ratio);
              if(size >= 0){
                p.radius_bubble = size;
              }
            }else{
              var dif = p.radius - pJS.interactivity.modes.bubble.size,
                  size = p.radius - (dif*ratio);
              if(size > 0){
                p.radius_bubble = size;
              }else{
                p.radius_bubble = 0;
              }
            }

          }

          /* opacity */
          if(pJS.interactivity.modes.bubble.opacity != pJS.particles.opacity.value){

            if(pJS.interactivity.modes.bubble.opacity > pJS.particles.opacity.value){
              var opacity = pJS.interactivity.modes.bubble.opacity*ratio;
              if(opacity > p.opacity && opacity <= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }else{
              var opacity = p.opacity - (pJS.particles.opacity.value-pJS.interactivity.modes.bubble.opacity)*ratio;
              if(opacity < p.opacity && opacity >= pJS.interactivity.modes.bubble.opacity){
                p.opacity_bubble = opacity;
              }
            }

          }

        }

      }else{
        init();
      }


      /* mouseleave */
      if(pJS.interactivity.status == 'mouseleave'){
        init();
      }
    
    }

    /* on click event */
    else if(pJS.interactivity.events.onclick.enable && isInArray('bubble', pJS.interactivity.events.onclick.mode)){


      if(pJS.tmp.bubble_clicking){
        var dx_mouse = p.x - pJS.interactivity.mouse.click_pos_x,
            dy_mouse = p.y - pJS.interactivity.mouse.click_pos_y,
            dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse),
            time_spent = (new Date().getTime() - pJS.interactivity.mouse.click_time)/1000;

        if(time_spent > pJS.interactivity.modes.bubble.duration){
          pJS.tmp.bubble_duration_end = true;
        }

        if(time_spent > pJS.interactivity.modes.bubble.duration*2){
          pJS.tmp.bubble_clicking = false;
          pJS.tmp.bubble_duration_end = false;
        }
      }


      function process(bubble_param, particles_param, p_obj_bubble, p_obj, id){

        if(bubble_param != particles_param){

          if(!pJS.tmp.bubble_duration_end){
            if(dist_mouse <= pJS.interactivity.modes.bubble.distance){
              if(p_obj_bubble != undefined) var obj = p_obj_bubble;
              else var obj = p_obj;
              if(obj != bubble_param){
                var value = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration);
                if(id == 'size') p.radius_bubble = value;
                if(id == 'opacity') p.opacity_bubble = value;
              }
            }else{
              if(id == 'size') p.radius_bubble = undefined;
              if(id == 'opacity') p.opacity_bubble = undefined;
            }
          }else{
            if(p_obj_bubble != undefined){
              var value_tmp = p_obj - (time_spent * (p_obj - bubble_param) / pJS.interactivity.modes.bubble.duration),
                  dif = bubble_param - value_tmp;
                  value = bubble_param + dif;
              if(id == 'size') p.radius_bubble = value;
              if(id == 'opacity') p.opacity_bubble = value;
            }
          }

        }

      }

      if(pJS.tmp.bubble_clicking){
        /* size */
        process(pJS.interactivity.modes.bubble.size, pJS.particles.size.value, p.radius_bubble, p.radius, 'size');
        /* opacity */
        process(pJS.interactivity.modes.bubble.opacity, pJS.particles.opacity.value, p.opacity_bubble, p.opacity, 'opacity');
      }

    }

  };


  pJS.fn.modes.repulseParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && isInArray('repulse', pJS.interactivity.events.onhover.mode) && pJS.interactivity.status == 'mousemove') {

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      var normVec = {x: dx_mouse/dist_mouse, y: dy_mouse/dist_mouse},
          repulseRadius = pJS.interactivity.modes.repulse.distance,
          velocity = 100,
          repulseFactor = clamp((1/repulseRadius)*(-1*Math.pow(dist_mouse/repulseRadius,2)+1)*repulseRadius*velocity, 0, 50);
      
      var pos = {
        x: p.x + normVec.x * repulseFactor,
        y: p.y + normVec.y * repulseFactor
      }

      if(pJS.particles.move.out_mode == 'bounce'){
        if(pos.x - p.radius > 0 && pos.x + p.radius < pJS.canvas.w) p.x = pos.x;
        if(pos.y - p.radius > 0 && pos.y + p.radius < pJS.canvas.h) p.y = pos.y;
      }else{
        p.x = pos.x;
        p.y = pos.y;
      }
    
    }


    else if(pJS.interactivity.events.onclick.enable && isInArray('repulse', pJS.interactivity.events.onclick.mode)) {

      if(!pJS.tmp.repulse_finish){
        pJS.tmp.repulse_count++;
        if(pJS.tmp.repulse_count == pJS.particles.array.length){
          pJS.tmp.repulse_finish = true;
        }
      }

      if(pJS.tmp.repulse_clicking){

        var repulseRadius = Math.pow(pJS.interactivity.modes.repulse.distance/6, 3);

        var dx = pJS.interactivity.mouse.click_pos_x - p.x,
            dy = pJS.interactivity.mouse.click_pos_y - p.y,
            d = dx*dx + dy*dy;

        var force = -repulseRadius / d * 1;

        function process(){

          var f = Math.atan2(dy,dx);
          p.vx = force * Math.cos(f);
          p.vy = force * Math.sin(f);

          if(pJS.particles.move.out_mode == 'bounce'){
            var pos = {
              x: p.x + p.vx,
              y: p.y + p.vy
            }
            if (pos.x + p.radius > pJS.canvas.w) p.vx = -p.vx;
            else if (pos.x - p.radius < 0) p.vx = -p.vx;
            if (pos.y + p.radius > pJS.canvas.h) p.vy = -p.vy;
            else if (pos.y - p.radius < 0) p.vy = -p.vy;
          }

        }

        // default
        if(d <= repulseRadius){
          process();
        }

        // bang - slow motion mode
        // if(!pJS.tmp.repulse_finish){
        //   if(d <= repulseRadius){
        //     process();
        //   }
        // }else{
        //   process();
        // }
        

      }else{

        if(pJS.tmp.repulse_clicking == false){

          p.vx = p.vx_i;
          p.vy = p.vy_i;
        
        }

      }

    }

  }


  pJS.fn.modes.grabParticle = function(p){

    if(pJS.interactivity.events.onhover.enable && pJS.interactivity.status == 'mousemove'){

      var dx_mouse = p.x - pJS.interactivity.mouse.pos_x,
          dy_mouse = p.y - pJS.interactivity.mouse.pos_y,
          dist_mouse = Math.sqrt(dx_mouse*dx_mouse + dy_mouse*dy_mouse);

      /* draw a line between the cursor and the particle if the distance between them is under the config distance */
      if(dist_mouse <= pJS.interactivity.modes.grab.distance){

        var opacity_line = pJS.interactivity.modes.grab.line_linked.opacity - (dist_mouse / (1/pJS.interactivity.modes.grab.line_linked.opacity)) / pJS.interactivity.modes.grab.distance;

        if(opacity_line > 0){

          /* style */
          var color_line = pJS.particles.line_linked.color_rgb_line;
          pJS.canvas.ctx.strokeStyle = 'rgba('+color_line.r+','+color_line.g+','+color_line.b+','+opacity_line+')';
          pJS.canvas.ctx.lineWidth = pJS.particles.line_linked.width;
          //pJS.canvas.ctx.lineCap = 'round'; /* performance issue */
          
          /* path */
          pJS.canvas.ctx.beginPath();
          pJS.canvas.ctx.moveTo(p.x, p.y);
          pJS.canvas.ctx.lineTo(pJS.interactivity.mouse.pos_x, pJS.interactivity.mouse.pos_y);
          pJS.canvas.ctx.stroke();
          pJS.canvas.ctx.closePath();

        }

      }

    }

  };



  /* ---------- pJS functions - vendors ------------ */

  pJS.fn.vendors.eventsListeners = function(){

    /* events target element */
    if(pJS.interactivity.detect_on == 'window'){
      pJS.interactivity.el = window;
    }else{
      pJS.interactivity.el = pJS.canvas.el;
    }


    /* detect mouse pos - on hover / click event */
    if(pJS.interactivity.events.onhover.enable || pJS.interactivity.events.onclick.enable){

      /* el on mousemove */
      pJS.interactivity.el.addEventListener('mousemove', function(e){

        if(pJS.interactivity.el == window){
          var pos_x = e.clientX,
              pos_y = e.clientY;
        }
        else{
          var pos_x = e.offsetX || e.clientX,
              pos_y = e.offsetY || e.clientY;
        }

        pJS.interactivity.mouse.pos_x = pos_x;
        pJS.interactivity.mouse.pos_y = pos_y;

        if(pJS.tmp.retina){
          pJS.interactivity.mouse.pos_x *= pJS.canvas.pxratio;
          pJS.interactivity.mouse.pos_y *= pJS.canvas.pxratio;
        }

        pJS.interactivity.status = 'mousemove';

      });

      /* el on onmouseleave */
      pJS.interactivity.el.addEventListener('mouseleave', function(e){

        pJS.interactivity.mouse.pos_x = null;
        pJS.interactivity.mouse.pos_y = null;
        pJS.interactivity.status = 'mouseleave';

      });

    }

    /* on click event */
    if(pJS.interactivity.events.onclick.enable){

      pJS.interactivity.el.addEventListener('click', function(){

        pJS.interactivity.mouse.click_pos_x = pJS.interactivity.mouse.pos_x;
        pJS.interactivity.mouse.click_pos_y = pJS.interactivity.mouse.pos_y;
        pJS.interactivity.mouse.click_time = new Date().getTime();

        if(pJS.interactivity.events.onclick.enable){

          switch(pJS.interactivity.events.onclick.mode){

            case 'push':
              if(pJS.particles.move.enable){
                pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
              }else{
                if(pJS.interactivity.modes.push.particles_nb == 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb, pJS.interactivity.mouse);
                }
                else if(pJS.interactivity.modes.push.particles_nb > 1){
                  pJS.fn.modes.pushParticles(pJS.interactivity.modes.push.particles_nb);
                }
              }
            break;

            case 'remove':
              pJS.fn.modes.removeParticles(pJS.interactivity.modes.remove.particles_nb);
            break;

            case 'bubble':
              pJS.tmp.bubble_clicking = true;
            break;

            case 'repulse':
              pJS.tmp.repulse_clicking = true;
              pJS.tmp.repulse_count = 0;
              pJS.tmp.repulse_finish = false;
              setTimeout(function(){
                pJS.tmp.repulse_clicking = false;
              }, pJS.interactivity.modes.repulse.duration*1000)
            break;

          }

        }

      });
        
    }


  };

  pJS.fn.vendors.densityAutoParticles = function(){

    if(pJS.particles.number.density.enable){

      /* calc area */
      var area = pJS.canvas.el.width * pJS.canvas.el.height / 1000;
      if(pJS.tmp.retina){
        area = area/(pJS.canvas.pxratio*2);
      }

      /* calc number of particles based on density area */
      var nb_particles = area * pJS.particles.number.value / pJS.particles.number.density.value_area;

      /* add or remove X particles */
      var missing_particles = pJS.particles.array.length - nb_particles;
      if(missing_particles < 0) pJS.fn.modes.pushParticles(Math.abs(missing_particles));
      else pJS.fn.modes.removeParticles(missing_particles);

    }

  };


  pJS.fn.vendors.checkOverlap = function(p1, position){
    for(var i = 0; i < pJS.particles.array.length; i++){
      var p2 = pJS.particles.array[i];

      var dx = p1.x - p2.x,
          dy = p1.y - p2.y,
          dist = Math.sqrt(dx*dx + dy*dy);

      if(dist <= p1.radius + p2.radius){
        p1.x = position ? position.x : Math.random() * pJS.canvas.w;
        p1.y = position ? position.y : Math.random() * pJS.canvas.h;
        pJS.fn.vendors.checkOverlap(p1);
      }
    }
  };


  pJS.fn.vendors.createSvgImg = function(p){

    /* set color to svg element */
    var svgXml = pJS.tmp.source_svg,
        rgbHex = /#([0-9A-F]{3,6})/gi,
        coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
          if(p.color.rgb){
            var color_value = 'rgba('+p.color.rgb.r+','+p.color.rgb.g+','+p.color.rgb.b+','+p.opacity+')';
          }else{
            var color_value = 'hsla('+p.color.hsl.h+','+p.color.hsl.s+'%,'+p.color.hsl.l+'%,'+p.opacity+')';
          }
          return color_value;
        });

    /* prepare to create img with colored svg */
    var svg = new Blob([coloredSvgXml], {type: 'image/svg+xml;charset=utf-8'}),
        DOMURL = window.URL || window.webkitURL || window,
        url = DOMURL.createObjectURL(svg);

    /* create particle img obj */
    var img = new Image();
    img.addEventListener('load', function(){
      p.img.obj = img;
      p.img.loaded = true;
      DOMURL.revokeObjectURL(url);
      pJS.tmp.count_svg++;
    });
    img.src = url;

  };


  pJS.fn.vendors.destroypJS = function(){
    cancelAnimationFrame(pJS.fn.drawAnimFrame);
    canvas_el.remove();
    pJSDom = null;
  };


  pJS.fn.vendors.drawShape = function(c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator){

    // By Programming Thomas - https://programmingthomas.wordpress.com/2013/04/03/n-sided-shapes/
    var sideCount = sideCountNumerator * sideCountDenominator;
    var decimalSides = sideCountNumerator / sideCountDenominator;
    var interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
    var interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180; // convert to radians
    c.save();
    c.beginPath();
    c.translate(startX, startY);
    c.moveTo(0,0);
    for (var i = 0; i < sideCount; i++) {
      c.lineTo(sideLength,0);
      c.translate(sideLength,0);
      c.rotate(interiorAngle);
    }
    //c.stroke();
    c.fill();
    c.restore();

  };

  pJS.fn.vendors.exportImg = function(){
    window.open(pJS.canvas.el.toDataURL('image/png'), '_blank');
  };


  pJS.fn.vendors.loadImg = function(type){

    pJS.tmp.img_error = undefined;

    if(pJS.particles.shape.image.src != ''){

      if(type == 'svg'){

        var xhr = new XMLHttpRequest();
        xhr.open('GET', pJS.particles.shape.image.src);
        xhr.onreadystatechange = function (data) {
          if(xhr.readyState == 4){
            if(xhr.status == 200){
              pJS.tmp.source_svg = data.currentTarget.response;
              pJS.fn.vendors.checkBeforeDraw();
            }else{
              console.log('Error pJS - Image not found');
              pJS.tmp.img_error = true;
            }
          }
        }
        xhr.send();

      }else{

        var img = new Image();
        img.addEventListener('load', function(){
          pJS.tmp.img_obj = img;
          pJS.fn.vendors.checkBeforeDraw();
        });
        img.src = pJS.particles.shape.image.src;

      }

    }else{
      console.log('Error pJS - No image.src');
      pJS.tmp.img_error = true;
    }

  };


  pJS.fn.vendors.draw = function(){

    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg'){

        if(pJS.tmp.count_svg >= pJS.particles.number.value){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          //console.log('still loading...');
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }else{

        if(pJS.tmp.img_obj != undefined){
          pJS.fn.particlesDraw();
          if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
          else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }else{
          if(!pJS.tmp.img_error) pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
        }

      }

    }else{
      pJS.fn.particlesDraw();
      if(!pJS.particles.move.enable) cancelRequestAnimFrame(pJS.fn.drawAnimFrame);
      else pJS.fn.drawAnimFrame = requestAnimFrame(pJS.fn.vendors.draw);
    }

  };


  pJS.fn.vendors.checkBeforeDraw = function(){

    // if shape is image
    if(pJS.particles.shape.type == 'image'){

      if(pJS.tmp.img_type == 'svg' && pJS.tmp.source_svg == undefined){
        pJS.tmp.checkAnimFrame = requestAnimFrame(check);
      }else{
        //console.log('images loaded! cancel check');
        cancelRequestAnimFrame(pJS.tmp.checkAnimFrame);
        if(!pJS.tmp.img_error){
          pJS.fn.vendors.init();
          pJS.fn.vendors.draw();
        }
        
      }

    }else{
      pJS.fn.vendors.init();
      pJS.fn.vendors.draw();
    }

  };


  pJS.fn.vendors.init = function(){

    /* init canvas + particles */
    pJS.fn.retinaInit();
    pJS.fn.canvasInit();
    pJS.fn.canvasSize();
    pJS.fn.canvasPaint();
    pJS.fn.particlesCreate();
    pJS.fn.vendors.densityAutoParticles();

    /* particles.line_linked - convert hex colors to rgb */
    pJS.particles.line_linked.color_rgb_line = hexToRgb(pJS.particles.line_linked.color);

  };


  pJS.fn.vendors.start = function(){

    if(isInArray('image', pJS.particles.shape.type)){
      pJS.tmp.img_type = pJS.particles.shape.image.src.substr(pJS.particles.shape.image.src.length - 3);
      pJS.fn.vendors.loadImg(pJS.tmp.img_type);
    }else{
      pJS.fn.vendors.checkBeforeDraw();
    }

  };




  /* ---------- pJS - start ------------ */


  pJS.fn.vendors.eventsListeners();

  pJS.fn.vendors.start();
  


};

/* ---------- global functions - vendors ------------ */

Object.deepExtend = function(destination, source) {
  for (var property in source) {
    if (source[property] && source[property].constructor &&
     source[property].constructor === Object) {
      destination[property] = destination[property] || {};
      arguments.callee(destination[property], source[property]);
    } else {
      destination[property] = source[property];
    }
  }
  return destination;
};

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    window.oRequestAnimationFrame      ||
    window.msRequestAnimationFrame     ||
    function(callback){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.cancelRequestAnimFrame = ( function() {
  return window.cancelAnimationFrame         ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame    ||
    window.oCancelRequestAnimationFrame      ||
    window.msCancelRequestAnimationFrame     ||
    clearTimeout
} )();

function hexToRgb(hex){
  // By Tim Down - http://stackoverflow.com/a/5624139/3493650
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
     return r + r + g + g + b + b;
  });
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null;
};

function clamp(number, min, max) {
  return Math.min(Math.max(number, min), max);
};

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}


/* ---------- particles.js functions - start ------------ */

window.pJSDom = [];

window.particlesJS = function(tag_id, params){

  //console.log(params);

  /* no string id? so it's object params, and set the id with default id */
  if(typeof(tag_id) != 'string'){
    params = tag_id;
    tag_id = 'particles-js';
  }

  /* no id? set the id to default id */
  if(!tag_id){
    tag_id = 'particles-js';
  }

  /* pJS elements */
  var pJS_tag = document.getElementById(tag_id),
      pJS_canvas_class = 'particles-js-canvas-el',
      exist_canvas = pJS_tag.getElementsByClassName(pJS_canvas_class);

  /* remove canvas if exists into the pJS target tag */
  if(exist_canvas.length){
    while(exist_canvas.length > 0){
      pJS_tag.removeChild(exist_canvas[0]);
    }
  }

  /* create canvas element */
  var canvas_el = document.createElement('canvas');
  canvas_el.className = pJS_canvas_class;

  /* set size canvas */
  canvas_el.style.width = "100%";
  canvas_el.style.height = "100%";

  /* append canvas */
  var canvas = document.getElementById(tag_id).appendChild(canvas_el);

  /* launch particle.js */
  if(canvas != null){
    pJSDom.push(new pJS(tag_id, params));
  }

};

window.particlesJS.load = function(tag_id, path_config_json, callback){

  /* load json config */
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path_config_json);
  xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      if(xhr.status == 200){
        var params = JSON.parse(data.currentTarget.response);
        window.particlesJS(tag_id, params);
        if(callback) callback();
      }else{
        console.log('Error pJS - XMLHttpRequest status: '+xhr.status);
        console.log('Error pJS - File config not found');
      }
    }
  };
  xhr.send();

};
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
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
//# sourceMappingURL=app.js.map
