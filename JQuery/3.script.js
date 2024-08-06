$(document).ready(function(){
    // console.log("we are using jquery");
    // $("p").click(function(){
    //     console.log("you clicked on p",this);
    // });

    // $("p").dblclick(function(){
    //     console.log("you double clicked on p",this);
    // });
    
    // $("p").mouseenter(function(){
    //     console.log("you entered:",this);
    // });

    // $("p").hover(function(){
    //     console.log("you hovered on",this);
    // });

    // it is another command which will show 1 upon hovering and 1 upon leaving
    // $("p").hover(function(){
    //     console.log("you hovered on",this);
    // },
    // function(){
    //     console.log("thanks for coming");
    // });

    // on method
    // using multiple events
    $("p").on(
        {
            click:function(){
                console.log("thanks for clicking", this);
            },
            mouseleave:function(){
                console.log("mouse leave", this);
            }
        });

        // $("#container").hide(1000, function(){ // will take 1000ms to hide and function will execute upon completion of animation
        //     console.log("hidden");
        // }); 
        // $("#container").show(1000, function(){
        //     console.log("shown");
        // });

    $("#button").click(function(){
        $("#container").fadeOut(5000); // fadeOut, fadeIn, fadeToogle, fadeTo
    })
    // $("#container").slideToggle(1000, function(){  // slideDown, slideUp and takes speed and callback parameter(both parameters are optional)
    //     console.log("done");
    // }) 

    // animate function
    // $("#container").animate({opacity:0.3},2000)
    // $("#container").animate({opacity:0.3,
    //     height:"150px",
    //     width:"350px",
    // },2000)  // slow and fast instead of time

    // queue i.e. turn by turn
    $("#container").animate({opacity:0.3},4000);
    $("#container").animate({opacity:0.9},4000);
    $("#container").animate({width:"350px"},12000);
    // $("#container").stop() // used to stop animation at a point. run in console
});

// css properties
$("#container").css("background-color","red");
// to check the background colour. run in console
// $("#container").css("background-color");