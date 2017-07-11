var todos = [];
var input = prompt("What would you like to do?")


while(input !== "quit") {
	//handle input
	if(input === "list") {
		listToDos();
	}
	else if(input === "new") {
		addToDo();
	}
	else if(input ==="delete"){
		deleteToDo();
	}
	//ask again for new input
	input = prompt("What else would you like to do? ")
}
console.log("OK, YOU QUIT THE APP");


function listToDos() {
	console.log("**********")
	todos.forEach(function(todo, i) {
		console.log(i + ": " + todo);
	});
	console.log("**********")
}

function addToDo() {
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log("ADDED ITEM")
}

function deleteToDo() {
	//ask for index of todo to be deleted
		var index = prompt("Enter in the index number to delete");
		//delete the todo
		//splice()
		todos.splice(index, 1);
		console.log("ITEM DELETED")
}