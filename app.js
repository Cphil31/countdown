console.log('hello world')
	var interval;


	var timer;
function reset(){
	console.log(timer);
	
		interval = setInterval(function (){

		timer--;
		var minute = parseInt(timer/60, 10);
		console.log(minute);
		var seconde = parseInt(timer - minute*60, 10);
		if(minute < 10){
			minute = '0'+ minute; 
		}
		if(seconde < 10){
			seconde = '0' + seconde;
		}
								
		if(timer===0){
			clearInterval(interval);
		}
		

	
	}, 1000);
}

$("#go").click(function(){
timer = $("#seconde").val();
console.log(timer);
reset();
});


$("#reset").click(function(){
			reset();

});


// function twoDigit(number) {
//   var twodigit = number >= 10 ? number : "0"+number.toString();
//   return twodigit;
// }