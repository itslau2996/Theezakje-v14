const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription(`Get all the commands`),
    async execute(interaction) {
        const HelpEmbed = new EmbedBuilder()
            .setColor('DarkVividPink')
            .setURL('https://discord.gg/xF7C3Cf37j')
            .setTitle('Commands')
            .addFields(
                { name: 'Help', value: `This message!\nUsage: </help:1016090136418713690>`, inline: false},
                { name: 'Topic', value: `Get a random subject to talk about!\nUsage: </topic:1015765607838400542>`, inline: false},
                { name: 'Server', value: `Get the info of the current server!\nUsage: </server:1022601385914667113>`, inline:false}
            )
        await interaction.reply({ embeds: [HelpEmbed]})
    }
}
