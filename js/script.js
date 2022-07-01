$('.close').click(function () {
    $('.notification').slideUp(500);
})

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            420:{
                items:1
            },
             992:{
                items:3
            },

            1030:{
                items:5
            }
        }
    });
});
        