let db = connect("mongodb://root:test123*@localhost:27017");
// use technocite;
db = db.getSiblingDB("sample_mflix");

const ASC = 1;
const DESC = -1;

// ORDER BY ASC|DESC
const moviesAscendant = db.movies.find().projection({
    title: 1,
}).sort({
    title: DESC
});

console.log(moviesAscendant);

