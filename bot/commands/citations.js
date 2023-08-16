export async function citationCommand(interaction, databaseConnection) {
    const collection = databaseConnection.collection("citations");

    // récupère toutes les citations de la collection citations
    const citations = await collection.find().toArray();

    if (citations.length === 0) {
        interaction.reply("Désolé, il n'y a aucun citation présente :(");
        // on s'arrête là
        return;
    }
    
    const randomCitation = citations[Math.floor(Math.random() * citations.length)];
    console.log(interaction.user.displayName, "a fait", interaction.commandName);
    interaction.reply(randomCitation.text);
}