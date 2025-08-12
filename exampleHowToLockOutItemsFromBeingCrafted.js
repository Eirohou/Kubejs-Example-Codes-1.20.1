//Checks if you're allowed to craft this item
ItemEvents.crafted(event => {
    const player = event.player;
    const item = event.item;

    // Check if it's a diamond sword
    if (item.id == 'minecraft:diamond_sword') {
        //Check if player has the stage "Diamonds
        if (!player.stages.has('Diamonds')) {
            //prints red message into chat which states "You aren't allowed to own this item"
            player.tell("§cYou aren't allowed to own this item!");

            // Log attempt/Logs everything into the log file (Date, player name, item, item count)
            const now = new Date();
            const timestamp = now.toTimeString().split(' ')[0];
            console.log(`[${timestamp}] ${player.name.string} tried to craft: ${item.count}x ${item.displayName} without 'Diamonds' stage.`);
            
            //Deletes the item
            player.inventory.clear(item.id)
        }
    }
});
