import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { registerCommands } from "./register-commands.js";
import { citationCommand } from "./commands/citations.js";

// lis le fichier .env et l'injecte dans le process.env
dotenv.config({
    path: '.env'
});

// LE TOKEN DU BOT
const TOKEN = process.env.TOKEN;
// LE NUMERO UNIQUE DE l'APPLICATION
const CLIENT_ID = process.env.CLIENT_ID;

async function init() {
    await registerCommands(TOKEN, CLIENT_ID);

    // on crée le client discord
    const client = new Client({
        intents: [GatewayIntentBits.Guilds]
    });

    // on écoute sur l'évènement "interactionCreate". Qui capture les commandes faites à votre bot
    client.on("interactionCreate", (interaction) => {
        citationCommand(interaction);
    })

    await client.login(TOKEN);

    console.log("Le bot est activé !");
}

init();