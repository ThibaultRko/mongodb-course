import { MongoClient } from "mongodb";

const citations = [
    "pas besoin de dents pour être heureux !",
    "(bruit de vomi) oupsy...",
    "mon lit est en carton.",
    "Zoriez pas une petite pièce ou un sadwich au caca ?",
    "Mes cheveux...c'est naturel !",
    "j'ai un truc qui colle dans mon dos...",
    "je m'appel Soufiane est je sent fort...",
    "avant j'avais un amis qui s'appelait tibo mais je ne l'ai pas écouté...",
    "je pense donc j'essuie...",
    "j'ai mangé mon chien...",
    "en hiver il fait froid !"
];


export async  function citationCommand(interaction) {
    const client = new MongoClient(
        "mongodb://root:test123*@localhost:27017"
    );

    await client.connect();
    console.log("Connecté au serveur avec succès !");

    const db = client.db('bot');

    const collection = db.collection('citations');
    //récupère toutes les citation de la collection citation
    const citations = await collection.find().toArray();

    if (citations.lenght === 0) {
        interaction.reply("désolé il n'y à aucune citation...")
        //on s'arrête là
        return;
    }
    
    const randomCitation = citations[Math.floor(Math.random() * citations.length)];
    console.log(interaction.user.displayName, "a fait", interaction.commandName);
    interaction.reply(randomCitation.text);
}