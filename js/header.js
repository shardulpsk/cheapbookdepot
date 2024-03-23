$(document).ready(function(){
    $(".fade").fadeIn(1000);
    $(".line3").click(function(){
        $(".menus3").slideToggle();
    })
    $(".side-bar").click(function(){
        $(".book-cat").fadeToggle();
        $(".menus3").slideUp();
        // document.getElementById("side-bar").class="fa-solid fa-chevron-right";
    })


    $("#lawbooks1").click(function(){hidemin();})
    $("#compititivebooks1").click(function(){hidemin();})
    $("#generalbooks1").click(function(){hidemin();})
    $("#inspirationalbooks1").click(function(){hidemin();})
    $("#pocketeditionbooks1").click(function(){hidemin();})
    $("#subjectnotes1").click(function(){hidemin();})
    $("#stationary1").click(function(){hidemin();})
    function hidemin(){
        var w = window.innerWidth;
        if(w<=800){
            $(".book-cat").fadeOut();
        }
    }
})
