let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("sample_mflix");

// récupère tous les films dont le titre est différent de "Jurassic Park"
const result = db.movies.find({
    directors: {
        $all: ["James Cameron", "Steven Spielberg"]
    }
});

// on affiche tout !
printjson(result.toArray());

// cherche dans les directors le nom "James Cameron"
db.movies.find({
    directors: "James Cameron"
});

const ARRAY_TYPE = 4;

const moviesWithDirectorsArray = db.movies.find({
    directors: {
        $type: ARRAY_TYPE
    }
});

console.log(moviesWithDirectorsArray);


// évitez les regex dans les trop grosses collections
const avatar = db.movies.find({
    title: {
        $regex: /Jesus/i 
    }
});

for (const movie of avatar.toArray()) {
    console.log(movie.title);
}