// $(document).ready(function(){

var menu = ["Home", "About", "Contact", "Blog"];

var nav = function(x) {
	var markup = "";
	var i;

	for(i = 0; i < x.length; i++) {
		item = "<li>" + x[i] + "</i>";
		console.log(item);
	}
}
nav(menu);

// });