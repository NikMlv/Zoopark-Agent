/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = 'NDA0MjQxMTc5NTM0Njg4MjY2.DUTCXQ.Wcjlf7JbzP9Mb81m0DCCbaTjrlI';

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord after ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same channel
    message.channel.send('pong');
  }
});

// Log our bot in
client.login(token);
