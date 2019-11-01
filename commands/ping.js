exports.run = (client, message, args) => {
    message.channel.send("Why'd you ping me?").catch(console.error);
}
