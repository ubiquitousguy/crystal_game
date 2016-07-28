
$(document).ready(function(){
  //  console.log( "ready!" );
var numToMatch;
var score = 0;
var wins = 0;
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

total = 0;
$('#total').html(total);
};
start();

// function for gem1
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

// function for gem2
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
// function for gem3
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
// function for gem4
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
