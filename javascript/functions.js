function factorial(i){
	while(i<0){
		var myNum = 0;
		myNum += i*(i-1);
		i--;
	return myNum;
	}
	
}

factorial(5);


function factorial(i){
	for(i; i<=0; i--){
		i = i*(i-1);
	}
return i;
}




function kebabToSnake(word){
	var str = word
	return str.replace(/-/g,"_")
}



function factorial(i){
	while(i<0){
		var myNum;
		myNum += i*(i-1);
		i--;
	return myNum;
	}
	
}

function factorial(num){
	var result = 1;
	for(var i = 2; i<= num; i++){
		result *= result *i;

	}
	return result;
}