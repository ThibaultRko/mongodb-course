import { REST, Routes, SlashCommandBuilder } from "discord.js";

export async function registerCommands(token, clientId) {
    const COMMANDS = [
        {
            name: "citation",
            description: "envoie une citation d'un philosophe connu ou méconnu"
        },
        new SlashCommandBuilder()
            .setName('add_citation')
            .setDescription('Ajoute une citation')
            .addStringOption(option =>
                option.setName('citation')
                    .setDescription('La citation')
            )
    ];
    
    const rest = new REST({ version: '10' }).setToken(token);
    // ça enregistre les commandes pour votre bot à discord
    await rest.put(Routes.applicationCommands(clientId), { body: COMMANDS });
}