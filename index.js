const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits, ActivityType } = require('discord.js');
const { config } = require('dotenv')

config();

const token = process.env.token;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
	client.user.setActivity(`Slashcommands in ${client.guilds.cache.size} servers!`, { type: ActivityType.Listening });
	function Status() { client.user.setActivity(`Slashcommands in ${client.guilds.cache.size} servers!`, { type: ActivityType.Listening }); }
    setInterval(Status, 600000);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction, client);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(token);