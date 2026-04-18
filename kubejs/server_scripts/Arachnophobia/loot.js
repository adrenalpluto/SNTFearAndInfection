// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')

LootJS.modifiers((event) => {
    event.addLootTypeModifier(LootType.UNKNOWN).replaceLoot("arachnophobia:raw_spider_legs", "miners_delight:arthropod", true);
    // or .replaceLoot("minecraft:flint", "minecraft:diamond", true) if you want to preserve the stack size

    /*event
        .addLootTypeModifier([LootType.ENTITY])
        .matchEntity((entity) => {
            entity.isArthropodMob
        })
        .addLoot("minecraft:magma_cream");*/

    event
        .addLootTypeModifier([LootType.ENTITY])
        .matchEntity((entity) => {
            entity.anyType("#arachnophobia:spider");            
        })
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.8)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.3)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.4)),
        )              
        .pool((p) => {
        p.addLoot("miners_delight:arthropod");
        p.applyLootingBonus([1]);
        })

    event
        .addEntityLootModifier("arachnophobia:scorpion")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.8)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.3)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.7)),
        )              
        .pool((p) => {
        p.addLoot("miners_delight:arthropod");
        p.applyLootingBonus([1]);
        })

event
        .addEntityLootModifier("neapolitan:plantain_spider")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(0.8)),
        )              
        .pool((p) => {
        p.addLoot("miners_delight:arthropod");
        p.applyLootingBonus([1]);
        })

    event
        .addEntityLootModifier("arachnophobia:giant_antarctic_sea_spider")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:huntsman_spider")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:tarantula")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:brazilian_wandering_spider")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:jungle_stalker")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:heteropoda_maxima")
        .addSequenceLoot(
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
            LootEntry.of("miners_delight:arthropod").when((c) => c.randomChance(1)),
        );

    event
        .addEntityLootModifier("arachnophobia:baby_spider")
        .removeLoot("miners_delight:arthropod");

    event
        .addEntityLootModifier("arachnophobia:baby_spider_on_a_string")
        .removeLoot("miners_delight:arthropod");

    event
        .addEntityLootModifier("arachnophobia:diving_bell_spider_bubble")
        .removeLoot("miners_delight:arthropod");
        })