const db = connect("mongodb://root:test123*@localhost:27017").getSiblingDB('sample_mflix');

const condition = {
    cast: {
        $in: ['Charlize Theron']
    }
};

// peut-être plusieurs films, donc updateMany
db.movies.updateMany(condition, {
    $inc: {
        'imdb.rating': 5
    }
})

const charliesMovies = db.movies.find(condition);

console.log(charliesMovies);

const removeHarald = db.movies.deleteMany({
    directors: {
        $in: ['Harald Zwart']
    }
})

console.log(removeHarald);

const Kiki = db.movies.updateMany({
    title: {
        $in: ['+1','Anamorph']
    }
}, {
    // ajoute si il n'existe pas déjà (différent du push)
    $addToSet: {
        cast: 'Key Key'
    }
})

console.log(Kiki);

const result = db.movies.find({
    title: {
        // note: +1 n'existe pas
        $in: ['+1','Anamorph']
    }
});

console.log(result);

const removeNeoCondition = {
    title: 'The Matrix'
};

const removeNeo = db.movies.updateOne(removeNeoCondition, {
    $pull: {
        cast: 'Keanu Reeves'
    }
});

console.log(removeNeo);

const theMatrix = db.movies.find(removeNeoCondition);

console.log(theMatrix);
