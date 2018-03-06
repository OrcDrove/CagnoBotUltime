const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("+")

bot.on('ready', function() {
    bot.user.setPresence({ game: { name: "[+help] en dévelopement", type: 0}});
    console.log("Connected");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

    //Système de message embed 

    if (message.content === prefix + "owner"){
        message.reply("Ce bot à été créer par **_Jonathan OrcDrove_**");
        console.log("Commande owner effectué")
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor('B31F0E')
            .setTitle("Voici la liste des commandes disponible")
            .setThumbnail("https://cdn.discordapp.com/attachments/402137705879699458/419538459334672385/Logo_Final.png")
            .addField("**+help**", "Affichez les commandes disponibles")
            .addField("**+info**", "Avoir des information sur le serveur")
            .addField("**+owner**","Voir le créateur du bot")
            .addField("+partenariat","Voir les partenariats sur serveur")
            .addField("+mini-ytb","Voir les Mini-YouTuber du serveur")
            .addField("+xp","Voir ton XP")
            .setFooter(`OneNation Communauty | ${message.author.username}`)
            .setTimestamp()
        message.channel.sendEmbed(help_embed);
        console.log("Embed Help Envoyé !")
    }

    if(message.content === prefix + "partenariat"){
        var partenariat_embed = new Discord.RichEmbed()
            .setColor('40FF00')
            .setTitle("Voici la liste de nos Partenariats")
            .setThumbnail("https://cdn.discordapp.com/attachments/402137705879699458/419538459334672385/Logo_Final.png")
            .addField("LosInformaticos","Serveur ou tu peux retrouvé des cracks de jeux vidéos et autre ! [Clique ici !](https://discord.gg/zgUngZP)")
            .addField("Fortnitiens FR", "Serveur communautaire FR sur fortnite ! [Clique ici !](https://discord.gg/uZHbrTy)")
            .addField("Arkanosia","Serveur minecraft mini-jeux ! [Clique ici !](https://discord.gg/ccHAkn)")
            .addField("PZH's Community","Serveur communautaire sur du codage ! [Clique ici !](https://discord.gg/DRuyt7Q)")
            .setFooter(`OneNation Communauty | ${message.author.username}`)
            .setTimestamp()
        message.channel.sendEmbed(partenariat_embed);
        console.log("Embed Help Envoyé !")
    }

    if(message.content === prefix + "mini-ytb"){
        var miniytb_embed = new Discord.RichEmbed()
            .setColor('40FF00')
            .setTitle("Voici la liste des Mini-Youtubers du serveur")
            .setThumbnail("https://cdn.discordapp.com/attachments/402137705879699458/419538459334672385/Logo_Final.png")
            .addField("ShadowGaming","[Clique ici !](https://www.youtube.com/channel/UC4cjauYhT7ZhMp8nEnvX1ZA%22)")
            .addField("PZH", "[Clique ici !](https://www.youtube.com/channel/UC9nMiTVDQK2bzRMRvAMHuSg)")
            .addField("simsim18","[Clique ici !](https://www.youtube.com/channel/UCy7qq2n0xqlrcWr5HW1rW-g)")
            .addField("Quenos","[Clique ici !](https://www.youtube.com/channel/UCxSpgeo_cnj3gA-5EQm8C0Q)")
            .addField("Skyfight5","[Clique ici !](https://www.youtube.com/channel/UCjzzQNjlBr-AZ5j1A8lMMKw)")
            .setFooter(`OneNation Communauty | ${message.author.username}`)
            .setTimestamp()
        message.channel.sendEmbed(miniytb_embed);
        console.log("Embed Mini-YTB Envoyé !")
    }

    if(message.content === prefix + "info"){
        var info_embed = new Discord.RichEmbed()
            .setColor('80FF00')
            .setTitle("Voici quelles information sur le serveur")
            .setThumbnail("https://cdn.discordapp.com/attachments/402137705879699458/419538459334672385/Logo_Final.png")
            .addField("Fondateur","Le fondateur est Jonathan OrcDrove.")
            .addField("Ouverture", "Le serveur à ouvert le 16/01/2018.")
            .addField("Temps de création","Environ 30 heures.")
            .setFooter(`OneNation Communauty | ${message.author.username}`)
            .setTimestamp()
        message.channel.sendEmbed(info_embed);
        console.log("Embed Mini-YTB Envoyé !")
    }
});
