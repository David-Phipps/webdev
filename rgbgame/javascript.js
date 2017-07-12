var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var messageDisplay = document.querySelector("#message")
colorDisplay.textContent = pickedColor;

for(var i = 0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(pickedColor);
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}		
	});
}

function changeColors(color){
	//loop through all squares
	//change each color to match given color
	for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	//Math.random generates a float between 0 and 1.
	//Math.floor to chop off decimal numbers 
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};