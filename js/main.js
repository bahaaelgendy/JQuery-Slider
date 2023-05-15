//effect
//hide
//show
//toggle
//fadeIn
//fadeOut
//fadeTo
//slideDown
//slideUp
//slideToggle


//event
//click

//setter
//getter

//css

//$(`.test`).hide()
// $(".btn").click(function () {
//     $(`.test`).slideToggle(1000)
// })

// $("#myBtn").click(function(){
//   let x =  $(`.test`).css( "background")
//   console.log(x)

// })


// $("#myBtn").click(function(){
//      $(`.test`).animate({ width:"400px" } , 1000)
//      $(`.test`).animate({ height:"400px" } , 1000)

// })

// $(".about").animate({width:"100%"} , 1000 , function(){
//     $(".about").animate({height:"100vh"} , 1000 , function(){
//         $(".card").slideDown(1000)
//     })
    
// })



// $(".about").animate({width:"100%" ,height:"100vh"} , 1000)

// let lis = $(".colors li")

// $(".colors li").eq(0).css("background-color" , "red")
// $(".colors li").eq(1).css("background-color" , "green")
// $(".colors li").eq(2).css("background-color" , "#09c")
// $(".colors li").eq(3).css("background-color" , "teal")
// $(".colors li").eq(4).css("background-color" , "tomato")


// $(".colors li").click(function(){
//     let bgColor = $(this).css("background-color")
//     $("h1 , h2 , h3").css("color" , bgColor)
// })




// let x = $(".test").outerWidth()
// console.log(x)




// $("document").ready(function(){
//     $(".loading").fadeOut(1000 , function(){
//         $("body").css("overflow-y" , "auto")
//     })
// })



$('#owlHome').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-circle-left"></i>`, `<i class="fa-solid fa-circle-right"></i>`],
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})

$('#owlAbout').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})