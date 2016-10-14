console.log('hello world')
var timer = 120;
var interval;


function reset(){
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
		
		
		
				
	
		$("#minute").html(minute);
		$("#seconde").html(seconde);
		
		if(timer===0){
			clearInterval(interval);
		}
		
	}, 1000);
}


reset();

// function twoDigit(number) {
//   var twodigit = number >= 10 ? number : "0"+number.toString();
//   return twodigit;
// }