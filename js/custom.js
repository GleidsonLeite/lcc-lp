"use strict";
$(document).ready(function() {
    $("select").niceSelect();


    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        Fancybox Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/


    if (jQuery(".popup-btn").length > 0) {
        $("a.popup-btn").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200
        });
    }

    if (jQuery(".popup-img").length > 0) {
        $("a.popup-img").fancybox({
            'transitionIn': 'elastic',
            'transitionOut': 'elastic',
            'speedIn': 600,
            'speedOut': 200
        });
    }
    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
             Sticky Header
      <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
           Input Count Up Button
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $(".count-btn").on("click", function() {
        var $button = $(this);
        var oldValue = $button
            .parent(".count-input-btns")
            .parent()
            .find("input")
            .val();
        if ($button.hasClass("inc-ammount")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent(".count-input-btns").parent().find("input").val(newVal);
    });
    // Table BTN Trigger
    $('#l5-pricing-btn .toggle-btn').on("click", function(e) {
        console.log($(e.target).parent().parent().hasClass("monthly-active"))
        $(e.target).toggleClass("clicked");
        if ($(e.target).parent().parent().hasClass("monthly-active")) {
            $(e.target).parent().parent().removeClass("monthly-active").addClass("yearly-active");
        } else {
            $(e.target).parent().parent().removeClass("yearly-active").addClass("monthly-active");
        }
    })

    $("[data-pricing-trigger]").on("click", function(e) {
        $(e.target).addClass("active").siblings().removeClass("active");
        var target = $(e.target).attr("data-target");
        console.log($(target).attr("data-value-active") == "monthly");
        if ($(target).attr("data-value-active") == "monthly") {
            $(target).attr("data-value-active", "yearly");
        } else {
            $(target).attr("data-value-active", "monthly");
        }
    })


    $(document).ready(function() {
        // Add smooth scrolling to all links
        $(".goto").on('click', function(event) {
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
                }, 2000, function() {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
        //       $("[data-pricing-trigger]").on("click",function(e){
        //             var target = $(e.target).attr("data-target");

        //           if($(e.target).attr("data-value-active") == "monthly"){
        //                   $(e.target).attr("data-value-active","yearly");
        //                   $(target).attr("data-value-active","yearly");
        //           }else{
        //             $(e.target).attr("data-value-active","monthly");
        //             $(target).attr("data-value-active","monthly");
        //           }




        //       //     else if($(e.target).attr("data-value-active") == "yearly"){
        //       //             $(e.target).attr("data-value-active","monthly");
        //       //             $(target).attr("data-value-active","monthly");
        //       //       } else{
        //       //             alert("please add the active value")
        //       //       }



        //     })
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });
});

/*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      Preloader Activation
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

$(window).load(function() {
    setTimeout(function() {
        $("#loading").fadeOut(500);
    }, 1000);
    setTimeout(function() {
        $("#loading").remove();
    }, 2000);
});

var lang = {
    "html": "100%",
    "css": "90%",
    "javascript": "70%",
    "php": "55%"
};

var multiply = 4;

$.each(lang, function(language, pourcent) {

    var delay = 700;

    setTimeout(function() {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});


$(".LaminationClickforMoreInfo label").on("click", function() {
    window.open("https://pacerlabel.com/page/label");
    console.log("clicked");
});
$(".LaminationClickforMoreInfo label").on("click", function() {
    window.open("https://pacerlabel.com/page/lamination");
    console.log("clicked");
});

$(function() {

    var $bars = $(".skillbar-bar"),
        total = $bars.length,
        index = -1,
        timer = null,
        select = function(i) {
            var $bar = $bars.eq(i);
            $bar.css("width", $bar.parent().data("percent"));
            $bar.parent().addClass("complete");
        },
        action = function() {
            index++;
            if (index == total - 1) {
                clearTimeout(timer);
            }
            select(index);
            setTimeout(action, 500);

        };


    timer = setTimeout(action, 500);

});



//***ISOTOPE***
// init Isotope




// filter items on button click
$('.jobs-filter__menu').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: filterValue
    });
});

// filter items on button click
$('.portfolio-menu').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('.grid').isotope({
        filter: filterValue
    });
});
