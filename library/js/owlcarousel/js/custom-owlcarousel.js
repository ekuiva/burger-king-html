$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
 
  });

$("#owl-demo-dua").owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:4
        }
    }
 
  });
 
$("#owl-demo-offers").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    margin:10,
    // autoWidth:true,
    responsive:{
        600:{
            items:4
        }
    }
 
  });
});