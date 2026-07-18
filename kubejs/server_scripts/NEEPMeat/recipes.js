// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(event => {

event.shaped('neepmeat:sacrificial_dagger', [// arg 1: output
  ' RC',
  'FBI',
  'CCW'  
], {
  F: 'minecraft:furnace',
  I: 'minecraft:iron_ingot',
  B: 'minecraft:iron_block',
  W: 'spelunkery:cinnabar',
  C: 'scguns:anthralite_ingot',
  R: 'minecraft:redstone'
}
)

event.shaped('neepmeat:alloy_kiln', [// arg 1: output
  'RRR',
  'RSR',
  'BFB'  
], {
  F: 'minecraft:blast_furnace',
  R: 'neepmeat:refractory_brick',
  B: 'neepmeat:sandy_bricks',
  S: 'kubejs:powdered_shell'
}
)

event.shaped('neepmeat:flywheel', [// arg 1: output
  ' G ',
  'GSG',
  ' G '  
], {
  G: 'minecraft:gold_ingot',
  S: 'survival_instinct:steellium'
}
)

event.shaped('neepmeat:stator', [// arg 1: output
  'RCR',
  'C C',
  'ICI'  
], {
  I: 'neepmeat:internal_components',
  C: 'neepmeat:copper_coil',
  R: 'clanginghowl:redstone_wire'
}
)

event.shaped('neepmeat:meat_steel_component', [// arg 1: output
  ' M ',
  'MNM',
  ' M '  
], {
  M: 'neepmeat:meat_steel_ingot',
  N: 'clanginghowl:extraterrestrial_steel_nugget'
}
)

event.shaped('neepmeat:claws', [// arg 1: output
  'M M',
  'M M',
  'N N'  
], {
  M: 'neepmeat:meat_steel_ingot',
  N: 'clanginghowl:extraterrestrial_steel_ingot'
}
)

event.shaped(
  Item.of('neepmeat:copper_coil', 4),  [// arg 1: output
  'FCF',
  'CSC',
  'FCF'  
], {
  C: 'minecraft:copper_ingot',
  F: 'spore:mutated_fiber',
  S: 'spore:spine_fragment'
}
)

event.shaped(
  Item.of('neepmeat:bioelectric_organ', 2),  [// arg 1: output
  'FGF',
  'CIC',
  'RGR'  
], {
  G: 'minecraft:gold_ingot',
  I: 'neepmeat:internal_components',
  C: 'neepmeat:copper_coil',
  F: 'clanginghowl:chunk_of_technoflesh',
  R: 'clanginghowl:redstone_wire'
}
)

event.shaped(
  Item.of('neepmeat:internal_components', 4),  [// arg 1: output
  'MIM',
  'FSF',
  'RCR'  
], {
  M: 'spore:mutated_fiber',
  I: 'neepmeat:integration_charge_crude',
  C: 'neepmeat:copper_coil',
  F: 'clanginghowl:chunk_of_technoflesh',
  R: 'clanginghowl:redstone_wire',
  S: '#neepmeat:charnel_substrate'
}
)


event.remove({ id: 'neepmeat:ingredients/sacrifical_dagger' })
event.remove({ id: 'neepmeat:thermal/alloy_kiln' })
event.remove({ id: 'neepmeat:ingredients/copper_coil' })
event.remove({ id: 'neepmeat:ingredients/bioelectric_organ' })
event.remove({ id: 'neepmeat:ingredients/flywheel' })
event.remove({ id: 'neepmeat:ingredients/stator' })
event.remove({ id: 'neepmeat:ingredients/meat_steel_component' })
event.remove({ id: 'neepmeat:ingredients/internal_components' })
event.remove({ id: 'neepmeat:tools/claws' })

})


