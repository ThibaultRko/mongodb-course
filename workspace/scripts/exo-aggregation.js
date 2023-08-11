let db = connect("mongodb://root:test123*@localhost:27017");

// URL <protocol>:<username>:<password>@<host>:<port>
console.log("Coucou, je suis la DB", db);


db = db.getSiblingDB("sample_mflix");

const worstDirectors = db.movies.aggregate([
    {
      $match: {
        'imdb.rating': {
          $lte: 5
        }
      }
    },
    {
      $unwind: '$directors'
    },
    {
      $group: {
        _id: '$directors',
        countOfMovies: { $sum: 1 }
      }
    },
    {
      $sort: {
        countOfMovies: -1
      }
    }
  ]);

  console.log(worstDirectors);