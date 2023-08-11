let db = connect("mongodb://root:test123*@localhost:27017");

// URL <protocol>:<username>:<password>@<host>:<port>
console.log("Coucou, je suis la DB", db);


db = db.getSiblingDB("sample_mflix");

//les films de Keanu Reeves

const result1 = db.movies.find({
    cast: { $eq: "Keanu Reeves"},

}).projection({
    title: 1, _id : 0
})

console.log(result1);

//Les comédies

const result2 = db.movies.find({
    genres: { $eq: "Comedy"}
}).projection({
    title: 1, _id : 0
})

console.log(result2);

const result3 = db.movies.find({
    year : { $gt: 2001, $lt: 2009}
}).projection({
    title: 1, _id : 0
})

console.log(result3);

const result4 = db.movies.find({
    cast: { $all: ["Chris O'Donnell", "Matt Damon"]}
}).projection({
    title: 1, _id : 0
})

console.log(result4);

const result5 = db.movies.find({
    directors: { $in: ["Neil Burger", "Brad Furman"]}
}).projection({
    title: 1, _id : 0
})

console.log(result5);




