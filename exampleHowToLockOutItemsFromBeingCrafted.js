//CHecks if you're allowed to craft this item
ItemEvents.crafted(event => {
    const player = event.player;
    const item = event.item;

    // Check if it's a diamond or related item
    if (item.id == 'minecraft:diamond_sword') {
        if (!player.stages.has('Diamonds')) {
            player.tell("§cYou aren't allowed to own this item!");

            // Log attempt
            const now = new Date();
            const timestamp = now.toTimeString().split(' ')[0];
            console.log(`[${timestamp}] ${player.name.string} tried to craft: ${item.count}x ${item.displayName} without 'Diamonds' stage.`);
            
            //Deletes the item
            player.inventory.clear(item.id)
        }
    }
});
