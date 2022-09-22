const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const topic_nl = ["#1 Welk seizoen vind jij het leukst?",
    "#2 Wat is jouw favoriete LOG seizoen?",
    "#3 Wat is jouw favoriete tijd van je leven?",
    "#4 Wat doe jij het liefst 'savonds?",
    "#5 Hoe zou jij je kind noemen en waarom?",
    "#6 Wat zou jij graag nog een keer doen in jouw leven?",
    "#7 Welk land wil jij nog heel graag bezoeken?",
    "#8 Welk vak haat je het meest en waarom?",
    "#9 Hoe vaak ben je nog na 01.00 uur wakker?",
    "#10 Ben je wel eens bang in het donker?",
    "#11 Wat staat bovenaan je bucketlist?",
    "#12 Wat waren je favoriete televisieshows toen je jong was?",
    "#13 Ben je ooit in echt gevaar geweest?",
    "#15 Wat zou je liever hebben; een droomauto of een geweldig huis?",
    "#16 Wat is je “guilty pleasure” als je moet ontspannen?",
    "#17 Wie is de persoon in je leven die je het gelukkigst maakt?",
    "#18 Als je gestrest bent, wat doe je dan om te ontspannen?",
    "#19 Als je een nieuwe voornaam zou mogen kiezen, wat zou het dan worden?",
    "#20 Als je een periode in je leven opnieuw zou kunnen doen, wat kies je dan?",
    "#21 Waar breng je gedurende de dag de meeste tijd door?",
    "#22 Wat is de gekste droom die je ooit hebt gehad?",
    "#22 Is er iets gebeurd in je leven dat niet te verklaren valt?",
    "#23 Wie heeft een belangrijke rol gespeeld in hoe jij nu bent?",
    "#24 Wat is de mooiste plek die je ooit hebt bezocht?",
    "#25 Waar ben je geweest op je laatste vakantie?",
    "#26 Wat vind je leuk aan je werk/school?",
    "#27 Wie is je favoriete artiest?",
    "#28 Ben je graag actief als je vrij bent of wil je dan ontspannen?",
    "#29 Ben je nog steeds vrienden met een basisschoolvrienden?",
    "#30 Kun je zonder problemen een toespraak voor een groep houden?",
    "#31 Wat is het enige waar je de beste in bent?",
    "#32 Waar hang je het liefst in je huis rond?",
    "#33 Houd je van reality-tv?",
    "#34 Hoe voel je je over huisdieren?",
    "#35 Wat was het laatste project waar je je voor 100% hebt ingezet om het zo goed mogelijk af te maken?",
    "#36 Wat is je favoriete bezit?",
    "#37 Welke drie woorden beschrijven jou het beste?",
    "#38 Wie bewonder je?",
    "#39 Wat is je meest nutteloze talent?",
    "#40 Wat is het beste cadeau dat je ooit op je verjaardag hebt gekregen?",
    "#42 Als je zelf een bedrijf zou starten, wat zou je dan beginnen?",
    "#43 Wat is je favoriete manier om je tijd te verdoen?",
    "#44 Wat zou je je tegen je jongere zelf zeggen",
    "#45 Hoe ziet je perfecte weekend eruit?",
    "#46 Welk soort nieuws volg je dagelijks?",
    "#47 Als je kon kiezen om onsterfelijk te zijn, zou je het dan willen?",
    "#48 Wat voor soort dier zou je zijn als je een dier zou kunnen zijn?",
    "#49 Zou je liever in staat zijn om als een vogel te vliegen of onder water te ademen als een vis?",
    "#50 Zou je liever het vermogen hebben om te vliegen of om gedachten te lezen?",
    "#51 Denk je dat mensen ooit iets zullen uitvinden dat tijdreizen mogelijk maakt?",
    "#52 Wat is volgens jou de grootste uitvinding in de komende 5 jaar?",
    "#53 Denk je dat technologie onze levens beter of slechter maakt?",
    "#54 Maakt de technologie het leven eenvoudiger of gecompliceerder?",
    "#55 Als je 500 jaar terug in de tijd kon reizen en slechts één stukje technologie kon meenemen, wat zou je kiezen?",
    "#56 Denk je dat de wereld er over 25 jaar helemaal anders zal uitzien?",
    "#57 Wat is de mogelijkheid waar je het meest enthousiast over bent voor de toekomst?",
    "#58 Welke technologie die momenteel worden ontwikkeld heeft volgens jou de meeste mogelijkheden?",
    "#59 Welke technologie of ontdekking denk je dat de wereld het meest heeft veranderd?",
    "#60 Wat denk je dat het volgende wereldveranderende stukje technologie zal zijn?",
    "#61 Welke wetenschappelijke vooruitgang of technologie denk je dat het slechtst is voor de wereld?",
    "#62 Wat staat bovenaan op je bucketlist?",
    "#63 Wat is belangrijker voor je; geld, carrière of familie?",
    "#64 Als je aan de toekomst denkt, wat voor beeld zie je dan voor je?",
    "#65 Wanneer wil je met pensioen gaan?",
    "#66 Wat wil je het komende jaar bereiken?",
    "#67 Wil je de wereld veranderen of een stukje van de maatschappij?",
    "#68 Welke impact hebben jouw ouders op je toekomstverwachtingen?",
    "#69 *nice* Wat voor een huis wil je later bezitten?",
    "#70 Waar ben je het meest trots op in je leven?",
    "#71 Zijn je doelen en prioriteiten veranderd naarmate je ouder bent geworden?",
    "#72 Wat is jouw favoriete MCC moment",
    "#73 Wat is jouw favoriete MCC seizoen",
    "#74 Wat beschouw je als de grofste gewoonte die sommige mensen hebben?",
    "#75 Ben je georganiseerd in je privéleven of aardig rommelig?"
]

const topic_en = [
    "#1 Which season do you like the most",
    "#2 Whats your favorite MCC?",
    "#3 What is your favorite moment of your life",
    "#4 How do you wanna name your kid?",
    "#5 What is something you really want to do in your life?",
    "#6 Which country you would like to visit once?",
    "#7 Which subject do you hate and why?",
    "#8 How often are you awake after 01:00?",
    "#9 Are you afraid of the dark?",
    "#10 Have you ever been in real danger?",
    "#10 What do you do to relax? ",
    "#11 Who is the person that makes you the happiest?",
    "#12 If you're stressed, what is that one thing you do to relax?",
    "#13 If you had too chance your name, what would it chance too?",
    "#14 What period in your life you want to do again?",
    "#15 Where do you spend the most time in your house?",
    "#22 What is the weirdest dream you ever had?",
    "#22 What is something you would like to chance about yourself?",
    "#23 Who has the most influence in your life?",
    "#24 What is the place you like the most?",
    "#25 Where did you go on your last vacation?",
    "#26 What do you like the most about work/school?",
    "#27 Who's your favorite artist?",
    "#30 Are u able to present to big groups?",
    "#31 What is that one thing that you're really good at?",
    "#32 What is your favorite place in your house?",
    "#34 Do you like pets?",
    "#35 What is the last project you put the most time in?",
    "#36 What is your favorite possesion?",
    "#37 Which three words describe you the best?",
    "#39 What is your biggest talent?",
    "#40 What is the best present you ever had on a birthday?",
    "#42 If you had to start a company, what would it do?",
    "#43 What do you like to do to spend your time?",
    "#44 What would you say to your younger self?",
    "#45 How does your favorite weekend look like?",
    "#46 Which sort of news do you follow daily?",
    "#47 If you could choose to be immortal, would you do that?",
    "#48 If u were an animal, what kind of animal are you?",
    "#49 Would you rather be able to fly like a bird or be able to swim like a fish?",
    "#50 Would you rather have the ability to read minds or the ability to fly?",
    "#51 Do you think that time travelling will be available?",
    "52 What will be the biggest invention in the next 5 years?",
    "#54 Does technology makes your life easier or more complicated?",
    "#55 If you could travel 500 years back in time, what whould you take with you?",
    "#56 How does the world look like in 50 years?",
    "#57 What is something you're really excited about?",
    "#58 Which piece of technology has your interest?",
    "#59 Which invention changed the world the most?",
    "#60 What is going to be the biggest lifechanger in 20 years?",
    "#61 What is something you would like to change about the world?",
    "#62 What is on top of your bucketlist?",
    "#63 What is the importants to you, love, family or your career?",
    "#64 What do you think will be the standard tech in 50 years?",
    "#65 At what age do you wanna retire?",
    "#66 What is something you would like to achieve next year?",
    "#67 Do you wanna change the world if you need to give up your family?",
    "#68 What impact do your parents have for your future?",
    "#69 *nice* What kind of house do you wanna own?",
    "#70 What is something your the proudest of?",
    "#71 Did your lifegoals change through the years?",
]

const hints = ["Hint: Try to make your answer as detailed as possible to get the most out of this topic", `Hi, Thanks for using Theezakje, This is a reminder to report grammar and other mistakes at the [support server](https://discord.gg/xF7C3Cf37j) `," ", " ", " ", " "]


module.exports = {
    data: new SlashCommandBuilder()
        .setName('topic')
        .setDescription('Get a subject to talk about!')
        .addStringOption(option =>
            option.setName('language')
                .setDescription('What language the topic should be in')
                .setRequired(true)
                .addChoices(
                    { name: 'English', value: 'En_topic' },
                    { name: 'Dutch', value: 'NL_topic' },
                )
        ),
    async execute(interaction) {
        const choice = interaction.options.getString('language')
        if (choice === 'NL_topic') {
            const randomMessage = topic_nl[Math.floor(Math.random() * topic_nl.length)];
            const PromoMessage = hints[Math.floor(Math.random() * hints.length)];
            const nl_topic_embed = new EmbedBuilder()
                .setColor("#ff0000")
                .setTitle('Topic')
                .setDescription(`${randomMessage}\n${PromoMessage}`)
            await interaction.reply({ embeds: [nl_topic_embed]})

        } else if (choice === 'En_topic') {
            const randomMessage = topic_en[Math.floor(Math.random() * topic_en.length)];
            const PromoMessage = hints[Math.floor(Math.random() * hints.length)];
            const en_topic_embed = new EmbedBuilder()
                .setColor("#D5A6BD")
                .setTitle('Topic')
                .setDescription(`${randomMessage}\n${PromoMessage}`)
            await interaction.reply({ embeds: [en_topic_embed] })
        } else {

        }

    },
};