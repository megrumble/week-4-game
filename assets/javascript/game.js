var wins= 0;
var losses =0;
var math=0;

//target number
var target = Math.floor((Math.random()* 100)+1) ; 
//crystal power number
var white = Math.floor((Math.random()* 5) + 1);
var rainbow =Math.floor((Math.random()* 5) + 1);
var flower = Math.floor((Math.random()* 5) + 1);
var blue = Math.floor((Math.random()* 5) + 1);

var reset = function(){
	math = 0;
    target = Math.floor((Math.random()* 100) + 1);

	$("#target").empty();
    $("#target").append(target);
    console.log(target);
}
// reset();