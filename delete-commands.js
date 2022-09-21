const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { clientId, guildId } = require('./config.json');
require('dotenv').config();
const token = process.env.token;

const rest = new REST({ version: '10' }).setToken(token);

// ...

// for guild-based commands
rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(console.error);

// for global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(console.error);