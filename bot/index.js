import { Client, GatewayIntentBits, REST, Routes } from "discord.js";
import dotenv from "dotenv";

// lis le fichier .env et l'injecte dans le process.env
dotenv.config({
    path: '.env'
});

// LE TOKEN DU BOT
const TOKEN = process.env.TOKEN;
// LE NUMERO UNIQUE DE l'APPLICATION
const CLIENT_ID = process.env.CLIENT_ID;


const COMMANDS = [
    {
        name: "citation",
        description: "envoie une citation d'un philosophe connu ou méconnu"
    }
];

const rest = new REST({ version: '10' }).setToken(TOKEN);
// ça enregistre les commandes pour votre bot à discord
await rest.put(Routes.applicationCommands(CLIENT_ID), { body: COMMANDS });


async function init() {
    // on crée le client discord
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });

    await client.login(TOKEN);

    console.log("Le bot est activé !");
}

init();