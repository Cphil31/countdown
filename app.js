console.log('hello world')
var timer;
var interval;

	function reset(){
			timer = 5;
		interval = setInterval(function (){
			timer--;
		console.log(interval);
			$('#countdown_sec').html(timer);
			if(timer===0){
			clearInterval(interval);
						}
	}, 1000);
	}

$("#reset").click(function(){
	reset();

});
reset();