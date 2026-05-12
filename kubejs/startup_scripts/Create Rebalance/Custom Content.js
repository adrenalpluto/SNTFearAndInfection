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
})

