
$(document).ready(function(){

    'use strict';
   //Scrollspy
   $('body').scrollspy({target: ".navbar-nav", offset:67});

   // Add smooth scrolling to all links
   $(".navbar-nav a").on('click', function(event) {

       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
           scrollTop: $(hash).offset().top
       }, 200, function(){

           // Add hash (#) to URL when done scrolling (default click behavior)
           window.location.hash = hash;
       });
           // Hide navbar on mobile
       $(".navbar-collapse").collapse("hide");
       } // End if
   });

  /*====================================
			Header Fixed
======================================*/
window.onscroll=function(){
    const docScrollTop=document.documentElement.scrollTop;

    if(window.innerWidth>991){
        if(docScrollTop>60){
            document.querySelector("header").classList.add("fixed")
        }
        else {
            document.querySelector("header").classList.remove("fixed")
        }
    }

}

});


  /*====================================
			Animate Css   - https://animate.style/
======================================*/
$(function () {
    var $win = $(window);

    $win.scroll(function () {
        var nosotrosHead = $('#nosotrosHead');
        var nosotrosContent = $('#nosotrosContent');
        var servicio = $('#servicio');

        if (esVisible(nosotrosHead))$('#nosotrosHead').addClass('animate__backInLeft');
        if (esVisible(nosotrosContent))$('#nosotrosContent').addClass('animate__backInLeft');
        if (esVisible(servicio))$('#servicio').addClass('animate__jackInTheBox');
    });
    
    

  });

  function esVisible(elem){
    /* Ventana de Visualización*/
    var posTopView = $(window).scrollTop();
    var posButView = posTopView + $(window).height();
    /* Elemento a validar*/
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    /* Comparamos los dos valores tanto del elemento como de la ventana*/
    return ((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}


  /*====================================
			Particles JS
======================================*/

particlesJS("homeContainer", {
    "particles": {
        "number":
        {
            "value": 80, "density": {
                "enable": true, "value_area": 800
            }
        }, "color": {
            "value": "#fff"
        }, "shape": {
            "type": "polygon", "stroke": {
                "width": 0,
                "color": "#000000"
            }, "polygon": {
                "nb_sides": 5
            }, "image": {
                "src": "img/github.svg", "width": 100, "height": 100
            }
        }, "opacity": {
            "value": 0.5, "random": false, "anim": {
                "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
            }
        }, "size": {
            "value": 3, "random": true, "anim": {
                "enable": false, "speed": 40, "size_min": 0.1, "sync": false
            }
        }, "line_linked": {
            "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1
        }, "move": {
            "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": {
                "enable": false, "rotateX": 600, "rotateY": 1200
            }
        }
    }, "interactivity": {
        "detect_on": "canvas", "events": {
            "onhover": {
                "enable": true, "mode": "repulse"
            }, "onclick": {
                "enable": true, "mode": "push"
            }, "resize": true
        }, "modes": {
            "grab": {
                "distance": 400, "line_linked": {
                    "opacity": 1
                }
            }, "bubble": {
                "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
            }, "repulse": {
                "distance": 200, "duration": 0.4
            }, "push": {
                "particles_nb": 4
            }, "remove": {
                "particles_nb": 2
            }
        }
    }, "retina_detect": true
});


var count_particles, stats, update;

stats = new Stats;

stats.setMode(0);

stats.domElement.style.position = 'absolute';

stats.domElement.style.left = '0px';

stats.domElement.style.top = '0px';

document.body.appendChild(stats.domElement);

count_particles = document.querySelector('.js-count-particles');

update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);