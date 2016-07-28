
$(document).ready(function(){
  //  console.log( "ready!" );
var numToMatch;
var score = 0;
var win = 0;
var losses = 0;
var total = 0;
var gem1;
var gem2;
var gem3;
var gem4;
//create a function to pull up a random number between 19-120

var getranNum = function(min, max) {
return Math.floor(Math.random() * (max - min) + min);
}

function start() {
// random number for user to match (game number)
$("#numToMatch").html(function(){
	numToMatch = getranNum(19, 120);
	//console.log(numToMatch);
	return(numToMatch);
});
// sets values for each gem on load
gem1 = getranNum(1, 12);
console.log(gem1)
gem2 = getranNum(1, 12);
console.log(gem2)
gem3 = getranNum(1, 12);
console.log(gem3)
gem4 = getranNum(1, 12);
console.log(gem4)

//empty the stats
//$("#total").empty(); doesnt present 0
total = 0;
$('#total').html(total);
};
start();

// function for crystal #1
$("#gem1").click(function(){
	total = gem1 + total;
	//console.log(total);

	if (total < numToMatch) {
		$("#total").html(total);
		return(total);
	}
	else if (total > numToMatch) {
		$("#total").html(total);
		alert("you went over the number to match, you lose!");
		losses++;
		$("#losses").html(losses);
		start();
	}
	else {
		$("#total").html(total);
		wins++;
		$('#wins').html(wins);
		alert("You won!");
		start();
	}
});

// function for crystal #2
$("#gem2").click(function(){
	total = gem2 + total;
	//console.log(total);

	if (total < numToMatch) {
		$("#total").html(total);
		return(total);
	}
	else if (total > numToMatch) {
		$("#total").html(total);
		alert("you went over the number to match, you lose!");
		losses++;
		$("#losses").html(losses);
		start();
	}
	else {
		$("#total").html(total);
		wins++;
		$('#wins').html(wins);
		alert("You won!");
		start();
	}

});
// function for crystal #3
$("#gem3").click(function(){
	total = gem3 + total;
	//console.log(total);

	if (total < numToMatch) {
		$("#total").html(total);
		return(total);
	}
	else if (total > numToMatch) {
		$("#total").html(total);
		alert("you went over the number to match, you lose!");
		losses++;
		$("#losses").html(losses);
		start();
	}
	else {
		$("#total").html(total);
		wins++;
		$('#wins').html(wins);
		alert("You won!");
		start();
	}

});
// function for crystal #4
$("#gem4").click(function(){
	total = gem4 + total;
	//console.log(total);

	if (total < numToMatch) {
		$("#total").html(total);
		return(total);
	}
	else if (total > numToMatch) {
		$("#total").html(total);
		alert("you went over the number to match, you lose!");
		losses++;
		$("#losses").html(losses);
		start();
	}
	else {
		$("#total").html(total);
		wins++;
		$('#wins').html(wins);
		alert("You won!");
		start();
	}
 });
});
// var ranNum=Math.floor((Math.random() * 102) + 19);
// var gem1=Math.floor((Math.random() * 13) + 0);
// var gem2=Math.floor((Math.random() * 13) + 0);
// var gem3=Math.floor((Math.random() * 13) + 0);
// var gem4=Math.floor((Math.random() * 13) + 0);
// console.log(ranNum);
//
// //create the onclick jquery function for the gems
// $("#num").html(ranNum);
// score = score + gem1;
// $("#sum").html(score);
// function showScore (score){
//   gem1 = gem1.getAttribute("data-score");
//   console.log(gem1);
// }

  // $('#gem1').on('click', function(){
  //   total=gem1+total
  // });


//create the function to pick 1 of four crystals and each choice will attach a set value to the crystals for the duration of the game.

//create another function to add the value of each crystal when chosen for the duration of the game.

//
