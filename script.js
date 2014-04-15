$(document).ready(function() {

	var menuArray = ["home", "about", "blog", "contact"];

	var menuFunk = function(data){
		

		for(i=0; i<data.length; i++) {
			$('.nav').append('<li><a href =' +'"' + data[i] + '.html" </a>' + data[i] + '</li>');
			
		}
	}


	menuFunk(menuArray);

	var picGen = function(){

		for(i=1; i<=6; i++) {
			$('.images').append('<img src="img/aerial0' + i + '.jpg">');
		}
	}
	picGen();

	// var gradient = function(){
	// 	for(i=0; i<9; i++);
	// 		$('.container').append('<style')
	// }

	var nameArray = ['jim', 'john', 'jake', 'jingleheimer', 'schmidt'];

	var squares = function(){
		for(i=1000; i>2; i=i/2) {
			$('.container2').append('<div style = "width:' + i + 'px"</div>');


		}
	}
	squares();

	var curve = function() {
		for(i=1; i<255; i=i+3) {
			$('.container3').append('<div style = "width:' + i + 'px; background-color: rgba(' + i + ',' + i + ',' + i + ',1);" </div>');
		}
	}
	curve();


	var circle = function() {
		for(i=1; i<100; i=i+3) {
			$('.container4').append('<div style = "border-radius:' + i + 'px;" </div>');
		}
	}
	circle();
});