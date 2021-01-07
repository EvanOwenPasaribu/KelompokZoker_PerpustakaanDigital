/***************************************************
                 TUTORIAL
****************************************************/
var kondisi = false;
var textCari = "amerika";
$(function () {
    //animate to scroll
    new WOW().init();
});

/***************************************************
                 NAVIGATION
****************************************************/

// Show/Hide transparent black navigation
$(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            // hide nav
            $("nav").removeClass("kosan-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            // show nav
            $("nav").addClass("kosan-top-nav");
            $("#back-to-top").fadeIn();
        }
        var y = $(".navbar-toggle").attr("aria-expanded");
        if(y === "true")
        {
            $(".navbar-toggle").click();
        }
        $(".overlay2").click()
    });
});

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top-64
        }, 1250, "easeInOutExpo");
    });
});

//close mobile menu onclick
$(function(){
    $(".navbar-toggle").click(function(){
        var y = $(".navbar-toggle").attr("aria-expanded");
        if(y === "true")
        {
            $(".overlay").fadeOut();
        }
        else {
            $(".overlay").fadeIn();
        }
    })
    
    $(".navbar-collapse ul li a").on("click touch",function(){
        $(".navbar-toggle").click();
    });
    
    $(".navbar-collapse").click(function(){
        var y = $(".navbar-toggle").attr("aria-expanded");
        if(y === "true")
        {
            $(".navbar-toggle").click();
        }
    })
    
    $(".overlay").click(function(){
        var y = $(".navbar-toggle").attr("aria-expanded");
        if(y === "true")
        {
            $(".navbar-toggle").click();
        }
    });
});

//icon 
$(function(){
    $(".hasil a").click(function(){
        var x = $(this).attr("aria-expanded");
        if(x == "true")
        {
            $(".hasil a i").removeClass("fa-caret-square-up");
            $(".hasil a i").addClass("fa-caret-square-down")
        }
        else
        {
            $(".hasil a i").removeClass("fa-caret-square-down");
            $(".hasil a i").addClass("fa-caret-square-up")
        } 
    })    
})

//cari 
$(function(){
    $(".cari").click(function(){
        if(kondisi == true)
        {
            $(".overlay2").click();
        }
        else {
            kondisi = true;
            $(".Blockcari").fadeIn();
            $(".overlay2").fadeIn();
            $("input").val("");
        }
    })
    
    $(".overlay2").click(function(){
        kondisi = false;
        $(".Blockcari").fadeOut();
        $(".overlay2").fadeOut();
    })
    
    $(".tombolCari").click(function(){
        textCari = $(".inputCari").val();
    })
    //$(".description-search").text();
})