// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

event.shaped('kubejs:treated_planks', [// arg 1: output
  'NBN',
  'BSB',
  'NBN'  
], {
  B: 'kubejs:treated_bark',
  N: 'survival_instinct:nail',
  S: '#forge:stripped_logs'
}
)

event.shapeless(
  Item.of('create:cogwheel'), // arg 1: output
  [
    'create:shaft',
    'kubejs:treated_planks'
  ]
)

event.shapeless(
  Item.of('create:large_cogwheel'), // arg 1: output
  [
    'create:shaft',
    'kubejs:treated_planks',
    'kubejs:treated_planks'
  ]
)

event.shapeless(
  Item.of('create:large_cogwheel'), // arg 1: output
  [
    'create:cogwheel',
    'kubejs:treated_planks'
  ]
)

event.shapeless(
  Item.of('immersive_weathering:mortar', 16), // arg 1: output
  [
    'minecraft:water_bucket',
    'minecraft:clay_ball',
    'minecraft:bone_meal',
    'immersive_weathering:sand_layer_block',
    'spelunkery:dust'
  ]
)

event.shaped('create:water_wheel', [// arg 1: output
  'RTR',
  'TST',
  'RTR'  
], {
  T: 'kubejs:treated_planks',
  R: 'clanginghowl:steel_rod',
  S: 'create:shaft'
}
)

event.shaped('create:large_water_wheel', [// arg 1: output
  'RTR',
  'TWT',
  'RTR'  
], {
  T: 'kubejs:treated_planks',
  R: 'clanginghowl:steel_rod',
  W: 'create:water_wheel'
}
)

event.shaped('create:hand_crank', [// arg 1: output
  'TTA',
  '  S'
], {
  T: 'kubejs:treated_planks',
  S: 'create:shaft',
  A: 'create:andesite_alloy'
}
)

event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
event.remove({ id: 'create:crafting/materials/andesite_alloy' })
event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
event.remove({ id: 'create:mixing/andesite_alloy' })
event.remove({ id: 'create:crafting/kinetics/shaft' })
event.remove({ id: 'create:crafting/kinetics/cogwheel' })
event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
event.remove({ id: 'create:crafting/kinetics/large_cogwheel_from_little' })
event.remove({ id: 'create:crafting/kinetics/large_water_wheel' })
event.remove({ id: 'create:crafting/kinetics/water_wheel' })
event.remove({ id: 'create:crafting/kinetics/hand_crank' })
event.remove({ id: 'immersive_weathering:mortar' })

})

