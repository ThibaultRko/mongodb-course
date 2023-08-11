let db = connect("mongodb://root:test123*@localhost:27017")
    .getSiblingDB("sample_mflix");

const transactions = db.movies.find().limit(1);

// SELECT COUNT(*) AS total FROM transations GROUP BY account_id;
const aggregated = db.movies.aggregate([
    {
        $match : {
            year: {
                $gte: 2000
            }
        }
    },
    {
        $group: {
            _id: "$year",
            releasedThisYear : {
                // $count 
                $count : {}
            }
        }
    },
    {
        $project: {
            _id: 0
        }
    }
]);

console.log(aggregated);

db = db.getSiblingDB("sample_analytics");

const unwind = db.transactions.aggregate([
    {
        $match: {
            account_id: 716662
        }
    },
    {
        $unwind: '$transactions'
    },
    {
        $project: {
            'transactions.amount': 1,
            'transactions.date': 1
        }
    },
    {
        $sort: {
            'transactions.amount': -1
        }
    },
    {
        $limit : 1
    },
    {
        $addFields: {
            year: {
                $year: "$transactions.date"
            }
        }
    }
]);

console.log(unwind);