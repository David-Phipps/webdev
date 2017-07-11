//Write a funciton printReverse() that takes an array as an argument and prints out the elements in reverse
var numbers = [1,2,3,4,5,"six", "seven"]

function printReverse(arr) {
	reverseArr = arr.reverse();
	reverseArr.forEach(function(i){
		console.log(i);
	});
}


//Write a funciton isUniform() which takes an array as an argument and returns true if all items are the same

function isUniform(arr) {
	var value = arr[0];
	for(var i = 0; i < arr.length; i++) {
		if (arr[i] !== value) {
			return false
		}
	}
}








// Write a function sumArray() that acepts an array of numbers and returns their sum


// Write a funciton max() that acepts an array of numbers and returns the max number in the array
