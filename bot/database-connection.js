import { MongoClient  } from "mongodb";

export async function connectToDatabase(databaseUrl) {
    const client = new MongoClient(databaseUrl);

    await client.connect();
    console.log("Connecté au serveur avec succès !");

    return client.db("bot");
}