jQuery.easing['jswing'] = jQuery.easing['swing']; jQuery.extend(jQuery.easing, { easeOutBounce: function (x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b } else if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b } else if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b } } });
$(document).ready(function () {
    var previousMarginLeft = $("#aboutMePic").css("margin-left");
    console.log(previousMarginLeft);
    $("#aboutMe")
        .mouseenter(function () {
            console.log(previousMarginLeft);
            $(this).find("img").animate({
                marginLeft: 0
            }, 500, "easeOutBounce");
            $(".aboutMeScrollingText").remove();
        })
        .mouseleave(function () {
           console.log("exiting...");
           $(this).find("img").stop().animate({
            marginLeft: previousMarginLeft
        }, 500, "easeOutBounce");
        $("#aboutMeScroll").prepend("<div class='scroll-text aboutMeScrollingText'>I'm Shane Schroeder, Software Engineer.</div>");
        });

});