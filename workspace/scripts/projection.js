let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("sample_mflix");

// inclus ou exclu des éléments du résultat
const moviesTitle = db.movies.find({}).projection({
    title: 0,
})

// 0 = exclu , 1 = présent
console.log(moviesTitle);