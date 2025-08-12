//Activates every tick for every player
PlayerEvents.tick(event => {
    //saving the player of the event in player
    const player = event.player;
    //Checks if dimension is equal to "the end"
    if (player.level.dimension == "minecraft:the_end") {
        //CHecks if the player is permited to be in the end
        if (!player.stages.has('EndPermited')) {
            //Writes into chat in red that the player is not permited to enter the end
            player.tell("§cYou're not permited to enter the end!");
            //kills the player
            player.kill();
        }
    }
});
