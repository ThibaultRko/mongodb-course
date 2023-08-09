let db = connect("mongodb://root:test123*@localhost:27017");

// URL <protocol>:<username>:<password>@<host>:<port>
console.log("Coucou, je suis la DB", db);

// use technocite;
db = db.getSiblingDB("technocite");

//recuperation de données
//equivalent du SELECT * FROM classrooms WHERE code="Gaston"
const classrooms = db.classrooms.find({
    code : { $eq: "Gaston"},
    // $gt = >
    capacity: { $gt: 10}
})

console.log(classrooms);