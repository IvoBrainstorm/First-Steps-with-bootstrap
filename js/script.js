/* ======================================================
                        SERVICES
=========================================================*/
$(function(){
      //Animare on sroll
    new WOW().init();
});


/* ======================================================
                        WORK
=========================================================*/
$(function(){
    $("#work").magnificPopup({
        delegate: 'a',  // Child item selector, by clicking on it popup will open 
        type: 'image',
        gallery:{
           enabled: true        
        }
    });
});

/* ======================================================
                        TEAM
=========================================================*/
$(function(){
    $("#team-members").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true
    });
});
/* ======================================================
                        TESTIMONIAL
=========================================================*/
$(function(){
    $("#costumers-testimonials").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        items: 1
    });
});
/* ======================================================
                        STATS
=========================================================*/
$(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/* ======================================================
                        CLIENTS
=========================================================*/
$(function(){
    $("#clients-list").owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        items: 6
    });
});