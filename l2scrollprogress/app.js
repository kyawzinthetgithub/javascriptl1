var getprogessbar = document.getElementById("progress-bar");

window.onscroll = function(){
	scrollpoint();
};

function scrollpoint(){
	// console.log('i am working');


	// scrolltop
	// project height
	// client height (or) current view height

	// project height -client height

	// Math.round(scrolltop * 100 / (project height -client height));

	var getscrolltop = document.documentElement.scrollTop;
	// console.log(getscrolltop);
	var getscrollheight = document.documentElement.scrollHeight;
	// console.log(getscrollheight);
	var getclientheight = document.documentElement.clientHeight;
	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;
	// console.log(calcheight);

	// var getfinal = Math.round((getscrolltop * 100) / calcheight);
	// console.log(getfinal);

	var getfinal = Math.round((getscrolltop / calcheight) * 100);
	// console.log(getfinal);

	getprogessbar.style.width = `${getfinal}%`


};


function printme(){
	window.print();
}