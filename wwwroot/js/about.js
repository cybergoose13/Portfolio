$(document).ready(function (params) {
    // $('#title1').slideDown(1000);
    $('#title1').hide();
    $('#title2').hide();
    $('#title1').slideDown(2000);
    // $('#title2').show(2000);
    $('#title2').slideDown(2000);
    // var t2 = $("#title2:not(:visible)");
    // var height = t2.css({
    //     display: "block"
    // }).height();
    
    // t2.css({
    //     overflow: "hidden",
    //     marginTop: height,
    //     height: 0
    // }).animate({
    //     marginTop: 0,
    //     height: height
    // }, 1500, function (){
    //     $(this).css({
    //         display: "",
    //         overflow: "",
    //         height: "",
    //         marginTop:""
    //     });
    // });

    // $('#_img').hide();
    // $('#_img').show(3000);

});

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
        // "value": '#464646'
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 1,
          "color": "#00aa00"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#aaffff",
        "opacity": 0.5,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 200,
          "size": 10,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);