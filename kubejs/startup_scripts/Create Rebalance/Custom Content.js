// priority: 0

// Visit the wiki for more info - https://kubejs.com/

StartupEvents.registry('block', event => {
  event.create('treated_planks') // Create a new block
    .displayName('Treated Planks') // Set a custom name
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(2) // Set hardness (affects mining time)
    .resistance(2) // Set resistance (to explosions, etc)
    .tagBlock('planks') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    //.tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
    //.tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    //.tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
  event.create('composite_planks') // Create a new block
    .displayName('Composite Planks') // Set a custom name
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(2) // Set hardness (affects mining time)
    .resistance(2) // Set resistance (to explosions, etc)
    .tagBlock('planks') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    //.tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
    //.tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    //.tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
  event.create('restructured_planks') // Create a new block
    .displayName('Restructured Planks') // Set a custom name
    .soundType('wood') // Set a material (affects the sounds and some properties)
    .hardness(2) // Set hardness (affects mining time)
    .resistance(2) // Set resistance (to explosions, etc)
    .tagBlock('planks') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(false) // Requires a tool or it won't drop (see tags below)
    //.tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock('minecraft:mineable/axe') //can be mined faster with an axe
    //.tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    //.tagBlock('minecraft:needs_iron_tool') // the tool tier must be at least iron
  event.create('bronze_block') // Create a new block
    .displayName('Block of Bronze') // Set a custom name
    .soundType('copper') // Set a material (affects the sounds and some properties)
    .hardness(3) // Set hardness (affects mining time)
    .resistance(6) // Set resistance (to explosions, etc)
    //.tagBlock('copper') // Tag the block with `#minecraft:my_custom_tag` (can have multiple tags)
    .requiresTool(true) // Requires a tool or it won't drop (see tags below)
    //.tagBlock('my_namespace:my_other_tag') // Tag the block with `#my_namespace:my_other_tag`
    .tagBlock('minecraft:mineable/pickaxe') //can be mined faster with an axe
    //.tagBlock('minecraft:mineable/pickaxe') // or a pickaxe
    .tagBlock('minecraft:needs_stone_tool') // the tool tier must be at least iron
})

StartupEvents.registry('item', event => {
    event.create('treated_bark').displayName('Treated Bark')
    event.create('andesite_blend').displayName('Andesite Blend')
    event.create('powdered_shell').displayName('Powdered Shell')
    event.create('andesite_mortar').displayName('Andesite Mortar')
    event.create('zinc_blend').displayName('Zinc Blend')
    event.create('zinc_aluminum_alloy').displayName('Zinc-Aluminum Alloy')
    event.create('bronze_ingot').displayName('Bronze Ingot')
    event.create('copper_nugget').displayName('Copper Nugget')
    event.create('copper_sheet').displayName('Copper Sheet')
    event.create('crushed_raw_copper').displayName('Crushed Raw Copper')
})
