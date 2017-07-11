var button = document.querySelector("button")


//using toggle
button.addEventListener("click", function() {
	document.body.classList.toggle("color-changer")
});



// another way with booleans

// var isPurple = false;
// button.addEventListener("click", function() {
// 	if(isPurple){
// 		document.body.style.background = "white";
	
// 	}
// 	else{
// 		document.body.style.background = "purple";
	
// 	}
// 	isPurple = !isPurple;
// });