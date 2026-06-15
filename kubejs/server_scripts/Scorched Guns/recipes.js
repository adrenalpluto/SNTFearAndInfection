// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(event => {

event.shaped('scguns:antique_blueprint', [// arg 1: output
  '  B',
  ' C ',
  'G  '  
], {
  B: 'scguns:stone_gun_barrel',
  C: 'minecraft:copper_ingot',
  G: 'scguns:gun_grip'
}
)

event.shaped('scguns:antique_blueprint', [// arg 1: output
  ' P ',
  'PTP',
  ' P '  
], {
  T: 'kubejs:antique_token',
  P: 'minecraft:paper'
}
)

event.shaped('scguns:frontier_blueprint', [// arg 1: output
  ' P ',
  'PBP',
  ' P '  
], {
  B: 'kubejs:frontier_badge',
  P: 'minecraft:paper'
}
)

event.shaped('scguns:macerator', [// arg 1: output
  'S S',
  'ABA',
  'CCC'  
], {
  B: 'minecraft:blast_furnace',
  A: 'scguns:anthralite_ingot',
  C: 'minecraft:cobblestone',
  S: 'minecraft:smooth_stone_slab'
}
)

event.shaped('scguns:mechanical_press', [// arg 1: output
  'CIC',
  'ABA',
  'CCC'  
], {
  B: 'minecraft:blast_furnace',
  A: 'scguns:anthralite_ingot',
  C: 'minecraft:cobblestone',
  I: 'minecraft:iron_block'
}
)

event.shaped('kubejs:diascite_gun_frame', [// arg 1: output
  ' D ',
  'D D',
  'DDD'  
], {
  D: 'sculkhorde:diascite'
}
)

event.remove({ id: 'scguns:flare_pistol' })
event.remove({ id: 'scguns:antique_blueprint' })
event.remove({ id: 'scguns:frontier_blueprint' })
event.remove({ id: 'scguns:macerator' })
event.remove({ id: 'scguns:mechanical_press' })
event.remove({ id: 'scguns:macerator/treated_brass_blend_from_brass_mask_from_macerating' })
event.remove({ id: 'scguns:macerator/diamond_steel_blend_from_macerating' })
event.remove({ id: 'scguns:macerator/treated_brass_blend_from_macerating' })
event.remove({ id: 'scguns:macerator/nether_star_fragment_from_macerating' })
event.remove({ id: 'scguns:macerator/scorched_blend_from_macerating' })
event.remove({ id: 'scguns:powered_macerator/powered_scorched_blend_from_macerating' })
event.remove({ id: 'scguns:scorched_blueprint' })

})

