export default (interaction) => {
    switch (interaction.commandName) {
        case "ping":
            interaction.reply("Pong!");
            break;
    }
};
//# sourceMappingURL=commandHandler.js.map