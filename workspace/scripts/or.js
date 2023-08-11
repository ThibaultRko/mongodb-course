const db = connect( "mongodb://root:test123*@localhost:27017").getSiblingDB('sample_mflix');

const comediesOR2010 = db.movies.find({
    $or: [
        {
            genres: "Comedy"
        },
        {
            year: 2012
        }
    ]
}).projection({
    genres: 1,
    year: 1
})

const comedies = comediesOR2010.toArray();

const comediesFrom2012 = comedies.filter((c) => {
    // genres est possiblement vide
    const genres = c.genres ? c.genres : [];
    return c.year === 2012 && !genres.includes("Comedy");
});

console.log(comediesFrom2012);