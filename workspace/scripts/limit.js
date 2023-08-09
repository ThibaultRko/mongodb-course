let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("sample_mflix");

// récupérer max 5 films
const movies = db.movies.find().limit(5);

// on affiche le nombre de films récupérés
console.log(movies.toArray().length);