
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            $(".navbar").addClass("sticky-nav");
        } else {
            $(".navbar").removeClass("sticky-nav");
        }
    });

    
   $('#section_1').backstretch([ 
      "images/slide/img2.jpg"])

    $('#section_3').backstretch([ 
        "images/slide/img4.jpg"])

    $('#section_6').backstretch([ 
        "images/slide/img4.jpg"])

    // BACKSTRETCH SLIDESHOW
    $('#section_1').backstretch([ 
     "images/slide/img2.jpg",
      "images/slide/img3.jpg",
      "images/slide/img1.jpg"
    ],  {duration: 3000, fade: 950});
    
  })(window.jQuery);


