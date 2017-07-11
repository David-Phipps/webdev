movies = [{
	title: "In Bruges",
	rating: 5,
	hasWatched: true
	},
	{
	title: "Frozen",
	rating: 4.5,
	hasWatched: false
	},
	{
	title: "Mad max",
	rating: 5,
	hasWatched: true
	},
	{
	title: "Les Misarbles",
	rating: 3.5,
	hasWatched: false
	},
]

for(i=0; i<movies.length; i++){
	var strWatch = true;
	if (movies[i].hasWatched === true) {
		strWatch = "watched "
	}
	else {
		strWatch = "not seen "
	}
	console.log("You have " + strWatch + "\""+ movies[i].title + "\" - " + movies[i].rating + " stars")

}