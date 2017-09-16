var wins = 0;
var losses = 0;
var number = 0;

// //target number
var target;
//crystal power number
var white;
var rainbow;
var flower;
var blue;
$(".wins").text(wins);
$(".losses").text(losses);

$(".start").on("click", function(){

    wins=0;
    losses=0;
    $(".wins").text(wins);
    $(".losses").text(losses);
    reset ();
})
var reset = function () {
    number = 0;
    target = Math.floor((Math.random() * 100) + 24);
    white = Math.floor((Math.random() * 9) + 1);
    rainbow = Math.floor((Math.random() * 9) + 1);
    flower = Math.floor((Math.random() * 9) + 1);
    blue = Math.floor((Math.random() * 9) + 1);
    $(".number").text(number);

    $("#target").empty();
    $("#target").text(target);
    console.log(target);
    console.log(white);
    console.log(blue);
    console.log(flower);
    console.log(rainbow);
    

}

 var checkScore = function() {
    if (number===target) {
        $(".number").text("You Win!");
        wins ++;
         reset();
         $(".wins").text(wins);
         $(".losses").text(losses);
     }
     if (number > target) {
         $(".number").text("You Lose");
         losses ++;
         reset();
         $(".wins").text(wins);
         $(".losses").text(losses);
     }
    }
    


$(".white").on("click", function () {
    number += white;
    console.log(number);
    $(".number").text(number);
    checkScore();
});
$(".flower").on("click", function () {
    number += flower;
    console.log(number);
    $(".number").text(number);
    checkScore();
});
$(".rainbow").on("click", function () {
    number += rainbow;
    console.log(number);
    $(".number").text(number);
    checkScore();
});
$(".blue").on("click", function () {
    number += blue;
    console.log(number);
    $(".number").text(number);
    checkScore();
});

reset();