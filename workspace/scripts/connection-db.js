modul.exports = async (connect) => {
    const db = connect("mongodb://root:test123*@localhost:27017").getSiblingDB("sample_mflix")
    console.log(db.getSiblingDB);
    return db;
}