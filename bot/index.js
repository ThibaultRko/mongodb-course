import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./register-commands.js";
import { citationCommand } from "./commands/citations.js";
import { connectToDatabase } from "./database-connection.js";
import { readFileSync } from "fs";

// lis le fichier .env et l'injecte dans le process.env
dotenv.config({
    path: '.env'
});

// LE TOKEN DU BOT
const TOKEN = process.env.TOKEN;
// LE NUMERO UNIQUE DE l'APPLICATION
const CLIENT_ID = process.env.CLIENT_ID;
const DATABASE_URL = process.env.DATABASE_URL;

async function init() {
    await registerCommands(TOKEN, CLIENT_ID);
    const db = await connectToDatabase(DATABASE_URL);

    // importe des données de base du fichier seed.json
    // const file = JSON.parse(readFileSync("seed.json", "utf-8"));

    // await db.collection("citations").insertMany(file.citations.map((citation) => {
    //     return {
    //         text: citation
    //     }
    // }));

    // on crée le client discord
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });

    // on écoute sur l'évènement "interactionCreate". Qui capture les commandes faites à votre bot
    client.on("interactionCreate", (interaction) => {
        console.log(
            interaction.commandName, 
            // l'argument citation passé à la commande
            interaction.options.getString("citation")
        );
        if (interaction.commandName === "citation") {
            citationCommand(interaction, db);
        }
        if (interaction.commandName === "add_citation") {
            const collection = db.collection("citations");collection.insertOne({text: "citation"});
            interaction.reply('c\'est dans la boite baby')
        }
    })

    await client.login(TOKEN);

    console.log("Le bot est activé !");
}

init();