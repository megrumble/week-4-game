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

var reset = function () {
    number = 0;
    target = Math.floor((Math.random() * 100) + 24);
    white = Math.floor((Math.random() * 5) + 1);
    rainbow = Math.floor((Math.random() * 5) + 1);
    flower = Math.floor((Math.random() * 5) + 1);
    blue = Math.floor((Math.random() * 5) + 1);

    $("#target").empty();
    $("#target").text(target);
    console.log(target);
}
$(".white").on("click", function () {
  number += (white)
});

reset();