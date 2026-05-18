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
  A: 'kubejs:andesite_mortar'
}
)

event.shaped('create:mechanical_drill', [// arg 1: output
  'MCM',
  'ARA',
  ' D '
], {
  M: 'kubejs:andesite_mortar',
  R: 'quark:iron_rod',
  C: 'create:andesite_casing',
  A: 'create:andesite_alloy',
  D: 'clanginghowl:drill_bit'
}
)

event.shaped('create:millstone', [// arg 1: output
  'MCM',
  'MAM'
], {
  M: 'kubejs:andesite_mortar',
  C: 'create:cogwheel',
  A: 'create:andesite_casing'
}
)

event.shaped('create:mechanical_press', [// arg 1: output
  'MSM',
  'ACA',
  ' T '
], {
  M: 'kubejs:andesite_mortar',
  S: 'create:shaft',
  C: 'create:andesite_casing',
  A: 'create:andesite_alloy',
  T: 'scguns:treated_iron_block'
}
)

event.shaped('create:mechanical_mixer', [// arg 1: output
  'MGM',
  'ACA',
  ' W '
], {
  M: 'kubejs:andesite_mortar',
  G: 'create:cogwheel',
  C: 'create:andesite_casing',
  A: 'create:andesite_alloy',
  W: 'create:whisk'
}
)

event.shaped('create:whisk', [// arg 1: output
  ' A ',
  'SAS',
  'SSS'
], {
  S: 'clanginghowl:extraterrestrial_steel_plate',
  A: 'create:andesite_alloy'
}
)

event.shaped('create:basin', [// arg 1: output
  'A A',
  'T T',
  'ASA'
], {
  S: 'alexsmobs:straddlite',
  A: 'create:andesite_alloy',
  T: 'scguns:treated_iron_ingot'
}
)

event.shaped('create:mechanical_saw', [// arg 1: output
  'MCM',
  'ASA',
  ' T '
], {
  M: 'kubejs:andesite_mortar',
  T: 'clanginghowl:chainsaw_teeth',
  C: 'create:andesite_casing',
  A: 'create:andesite_alloy',
  S: 'clanginghowl:extraterrestrial_steel_ingot'
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
event.remove({ id: 'create:crafting/kinetics/mechanical_drill' })
event.remove({ id: 'create:crafting/kinetics/millstone' })
event.remove({ id: 'create:crafting/kinetics/mechanical_press' })
event.remove({ id: 'create:crafting/kinetics/mechanical_mixer' })
event.remove({ id: 'create:crafting/kinetics/whisk' })
event.remove({ id: 'create:crafting/kinetics/basin' })
event.remove({ id: 'create:crafting/kinetics/mechanical_saw' })
event.remove({ id: 'create:crafting/kinetics/encased_fan' })
event.remove({ id: 'create:crafting/kinetics/empty_blaze_burner' })
event.remove({ id: 'immersive_weathering:mortar' })
event.remove({ id: 'clanginghowl:ex_steel/extraterrestrial_steel_plate' })

})

