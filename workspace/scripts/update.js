let db = connect("mongodb://root:test123*@localhost:27017");

db = db.getSiblingDB("sample_airbnb");

const result = db.listingsAndReviews.find({
    _id: '10009999',
});

db.listingsAndReviews.updateOne({
    _id: '10009999',
},{
    $set: {
        bedrooms: 5
    }
})

console.log(result);


