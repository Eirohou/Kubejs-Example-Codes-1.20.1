PlayerEvents.tick(event => {
    const player = event.player;
    if (player.level.dimension == "minecraft:the_end") {
        if (!player.stages.has('EndPermited')) {
            player.tell("§cYou're not permited to enter the end!");
            player.kill();
        }
    }
});

