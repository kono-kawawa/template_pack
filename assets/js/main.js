(function ($) {
	"use strict";

    jQuery(document).ready(function($){
        
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop:true,
            nav:true,
            dots:true,
            navText:["<i class='fa fa-long-arrow-left'></i>","<i class='fa fa-long-arrow-right'>"],
            autoplay:true,
        });
        
        $(".case-study-carousel").owlCarousel({
            items: 3,
            loop:true,
            margin:30,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".case-study-carousel-2").owlCarousel({
            items: 5,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".testimonial-carousel").owlCarousel({
            items: 1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".logo-carousel").owlCarousel({
            items: 7,
            margin:30,
            loop:true,
            nav:false,
            dots:false,
			autoplay:true,
        });
        
        $(".testimonial-carousel-homepage-2").owlCarousel({
            items: 1,
            loop:true,
            nav:false,
            dots:true,
            autoplay:true,
        });
        
        $(".memu-trigger").on('click',function(){
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
        });
        
        $(".menu-close,.off-canvas-menu-shade").on('click',function(){
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });
        
        $(".single-testimonial-box").hover(function() {
            $(".single-testimonial-box").removeClass('active');
            $(this).addClass('active');
        });
        
        $(".video-play-btn").magnificPopup({
            type: 'video',
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	