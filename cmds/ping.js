module.exports.run = async (bot, message, args) => {
    if (message.author.id == 166125035092836352) {
        const m = await message.channel.send('Pong!');
        m.edit(`:ping_pong: Pong! \`${m.createdTimestamp - message.createdTimestamp}ms\``);
    }
    return;
}; //stolen from https://github.com/RayzrDev/RayzrDevBot.git

module.exports.help = {
    name: 'ping',
    usage: 'ping',
    type: "Private",
    description: 'Pings the bot. Restricted to the bot owner.'
};