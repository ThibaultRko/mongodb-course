let db = connect("mongodb://root:test123*@localhost:27017");

// URL <protocol>:<username>:<password>@<host>:<port>
console.log("Coucou, je suis la DB", db);

// use technocite;
db = db.getSiblingDB("technocite");

const result = db.classrooms.insertOne({
  code: "Spirou",
  capacity: 20,
  teachers: ["Sébastien","James Hugues", "Jean-Michel Zecca"]
});

console.log(result);


const toInsert = [
    {
        code: "Tintin",
        capacity: 20,
    },
    {
        code: "Gaston", 
        capacity: 20,
    }
];

const multiResults = db.classrooms.insertMany(toInsert);

const classrooms = [];

for (let i = 0; i < 1000000; i++) {
    classrooms.push({
        code: `${i.toString()}`,
    });
}

db.classrooms.insertMany(classrooms);