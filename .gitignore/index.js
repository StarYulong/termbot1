   const Discord = require ("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjE4ODcyMTEzNzUwODY3OTg4.XXADmQ.bEr7r1h3j_vR-feI0pSMgb5OlLY");


client.on("message", message =>{
    if(message.content === prefix + "dérivées"){
        message.channel.send({files: ["dérivées.png"] })
    }
 
});

client.on("message", message =>{
    if(message.content === prefix + "calculssuites"){
        message.channel.send({files: ["suitesArithmetiquesGeometriques.gif"] })
        message.channel.send("'r' et 'q' sont les raisons des suites")
    }
        
});   

client.on("message", message =>{
    if(message.content === prefix + "aidemath"){
        message.channel.send({files: ["aidemaths.jpg"] })
    }
 
});

client.on("message", message =>{
    if(message.content === prefix + "trinomes"){
        message.channel.send({files: ["delta.jpg"]})
    }
        
});


client.on("message", message =>{
    if(message.content === prefix + "cercletrigo"){
        message.channel.send({files: ["cercle_trigo.jpg"]})
    }
        
});


client.on("message", message =>{
    if(message.content === prefix + "WW2"){
        message.channel.send("30 Janvier 1933 -> Hitler arrive au pouvoir                                    2 septembre 1939 -> Hitler envahit la Pologne et provoque la seconde guerre mondiale.                                                                     Février 1945 -> Conférence de Yalta, rassemblant Staline (URSS), Roosevelt (Etats- Unis), et Churchill (Angleterre), fin de la guerre.")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "guerrefroide"){
        message.channel.send("1947 -> Début de la guerre froide.                                               Juin 1947 -> Lancement du plan Marshall : aide des Etats- Unis proposé aux pays pour leur reconstruction.                             1948 – 1949 : Blocus de Berlin : Staline bloque toutes les issus de Berlin- Ouest. Les Etats- Unis s'oppose à ce blocus par un pont aérien.                                                                        1961 -> Construction du mur de Berlin pour empêcher la population de migrer de l’Est vers l’Ouest.                                                           1962 : Crise de Cuba.                                                                                                     9 novembre 1989 : Chute du mur de Berlin.                                     25 septembre 1991 : Fin de l’URSS. ")
    }
        
});


client.on("message", message =>{
    if(message.content === prefix + "Alain"){
        message.channel.send("'L'inconscient est une méprise sur le Moi, c'est une idolâtrie du corps.'                                                                'Penser, c'est dire non.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Arendt"){
        message.channel.send("'La société de masse ne veut pas la culture mais les loisirs.'")
    }
        
});


client.on("message", message =>{
    if(message.content === prefix + "Aristote"){
        message.channel.send("'Le bonheur est quelque chose de parfait et qui se suffit à soi-même, et il est la fin de nos actions.'                                                         'L'Homme est naturellement un animal politique.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Bachelard"){
        message.channel.send("'Il ne saurait y avoir de vérité première. Il n'y a que des erreurs premières.'")
    }
        
});


client.on("message", message =>{
    if(message.content === prefix + "Berkeley"){
        message.channel.send("'Exister c'est percevoir ou être perçu.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Comte"){
        message.channel.send("'La formule sacrée des positivistes : l'amour pour principe, l'ordre pour base, et le progrès pour but.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Descartes"){
        message.channel.send("'Je pense donc je suis.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Epicure"){
        message.channel.send("'Le plaisir est le principe et la fin de la vie bienheureuse.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Freud"){
        message.channel.send("'Le moi n'est pas maître dans sa propre maison.'                                          'Là où était le ça, le je doit advenir.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Hegel"){
        message.channel.send("'Tout ce qui est réel est rationnel et tout ce qui est rationnel est réel.'                                                             'L'histoire universelle est le progrès dans la conscience de la liberté.'                                                                                                       'Rien de grand ne s'est accompli dans le monde sans passion.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Hobbes"){
        message.channel.send("'L'homme est un loup pour l'homme.'                                    'Hors de l'état civil, chacun jouit sans doute d'une liberté entière, mais stérile.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Hume"){
        message.channel.send("'Toute connaissance dégénère en probabilité.'                                   'La raison est, et elle ne peut qu'être l'esclave des passions ; elle ne peut prétendre à d'autres rôles qu'à les servir et à leur obéir.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Husserl"){
        message.channel.send("'Tout état de conscience en général est en lui-même conscience de quelque chose.'")
    }
         
});

client.on("message", message =>{
    if(message.content === prefix + "Marx"){
        message.channel.send("'Les philosophes n'ont fait qu'interpréter le monde, de différentes manières, mais il s'agit de le transformer.'                                                     'Ce n'est pas la conscience des hommes qui détermine leur existence, c'est au contraire leur existence sociale qui détermine leur conscience.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Montaigne"){
        message.channel.send("'Chacun appelle barbarie ce qui n'est pas de son usage.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Nietzsche"){
        message.channel.send("'Les vérités sont des illusions dont on a oublié qu'elles le sont.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Pascal"){
        message.channel.send("'La dernière démarche de la raison est de reconnaître qu'il y a une infinité de choses qui la dépassent.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Platon"){
        message.channel.send("'S'étonner : voilà un sentiment qui est tout à fait d'un philosophe. La philosophie, en effet, n'a pas d'autre origine.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Rousseau"){
        message.channel.send("'L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Sartre"){
        message.channel.send("'L'existence précède l'essence.'                                                   'L'enfer, c'est les autres.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Spinoza"){
        message.channel.send("'Les hommes sont conduits plutôt par le désir aveugle que par la raison.'                                                                                     'En vérité, le but de l'État, c'est la liberté.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "Tocqueville"){
        message.channel.send("'Qui cherche dans la liberté autre chose qu'elle-même est fait pour servir.'")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "photo"){
        message.channel.send("")
    }
        
});

client.on("message", message =>{
    if(message.content === prefix + "formulesphysiques"){
        message.channel.send({files: ["formulesphysiques.jpg"] })
    }
 
});
