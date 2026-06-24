// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes(event => {

event.shaped('scguns:flare_pistol', [// arg 1: output
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

event.shaped('scguns:powered_macerator', [// arg 1: output
  'S S',
  'IMI',
  'CBC'  
], {
  M: 'scguns:macerator',
  I: 'scguns:treated_iron_ingot',
  C: 'minecraft:smooth_stone',
  S: 'minecraft:smooth_stone_slab',
  B: 'scguns:lightning_battery'
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

event.shaped('scguns:powered_mechanical_press', [// arg 1: output
  'IBI',
  'IPI',
  'CLC'  
], {
  P: 'scguns:mechanical_press',
  I: 'scguns:treated_iron_ingot',
  C: 'minecraft:smooth_stone',
  L: 'scguns:lightning_battery',
  B: 'minecraft:iron_block'
}
)

event.shaped('scguns:polar_generator', [// arg 1: output
  'IRI',
  'ICI',
  'SBS'  
], {
  B: 'minecraft:blast_furnace',
  I: 'scguns:treated_iron_ingot',
  S: 'minecraft:smooth_stone',
  C: 'scguns:copper_disc',
  R: 'minecraft:redstone_block'
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
event.remove({ id: 'scguns:powered_macerator' })
event.remove({ id: 'scguns:mechanical_press' })
event.remove({ id: 'scguns:powered_mechanical_press' })
event.remove({ id: 'scguns:polar_generator' })
event.remove({ id: 'scguns:macerator/treated_brass_blend_from_brass_mask_from_macerating' })
event.remove({ id: 'scguns:macerator/diamond_steel_blend_from_macerating' })
event.remove({ id: 'scguns:macerator/treated_brass_blend_from_macerating' })
event.remove({ id: 'scguns:macerator/nether_star_fragment_from_macerating' })
event.remove({ id: 'scguns:macerator/scorched_blend_from_macerating' })
event.remove({ id: 'scguns:powered_macerator/powered_scorched_blend_from_macerating' })
event.remove({ id: 'scguns_cnc:mech_press/copper_slug'})
event.remove({ id: 'scguns:mech_press/hog_round'})
event.remove({ id: 'scguns:mech_press/sculk_cell'})
event.remove({ id: 'scguns:mech_press/hog_round'})
event.remove({ id: 'scguns:mech_press/beowulf_round'})
event.remove({ id: 'scguns:mech_press/medium_brass_casing'})
event.remove({ id: 'scguns:mech_press/krahg_round'})
event.remove({ id: 'scguns:mech_press/bearpack_shell'})
event.remove({ id: 'scguns:mech_press/compact_advanced_round'})
event.remove({ id: 'scguns:mech_press/antique_flare'})
event.remove({ id: 'scguns:mech_press/medium_diamond_steel_casing'})
event.remove({ id: 'scguns:mech_press/large_brass_casing'})
event.remove({ id: 'scguns:mech_press/fire_grenade_round'})
event.remove({ id: 'scguns:mech_press/shulkshot'})
event.remove({ id: 'scguns:mech_press/hardened_bullet_2'})
event.remove({ id: 'scguns:mech_press/energy_core'})
event.remove({ id: 'scgextra:mechanical_shulker_casing_from_end_shell'})
event.remove({ id: 'scguns:mech_press/gas_grenade_round'})
event.remove({ id: 'scguns:mech_press/he_grenade_round'})
event.remove({ id: 'scguns:mech_press/ramrod_round'})
event.remove({ id: 'scguns:mech_press/shatter_round'})
event.remove({ id: 'scguns:mech_press/osborne_slug'})
event.remove({ id: 'scguns:mech_press/gibbs_round'})
event.remove({ id: 'scguns:mech_press/advanced_round'})
event.remove({ id: 'scguns:mech_press/shulker_casing'})
event.remove({ id: 'scguns_cnc:mech_press/ricoshot_round'})
event.remove({ id: 'scguns:mech_press/energy_cell'})
event.remove({ id: 'scguns:mech_press/exo_suit_core'})
event.remove({ id: 'scguns:mech_press/frontier_flare'})
event.remove({ id: 'scguns:mech_press/small_brass_casing'})
event.remove({ id: 'scguns:mech_press/bouncy_grenade_round'})
event.remove({ id: 'scguns:mech_press/small_diamond_steel_casing'})
event.remove({ id: 'scguns:powered_mech_press/powered_antique_flare'})
event.remove({ id: 'scguns:powered_mech_press/powered_frontier_flare'})
event.remove({ id: 'scguns:scorched_blueprint' })

})

MoreJSEvents.filterAvailableEnchantments(e => {
    if (e.item.id == 'scguns:ribs_glory') {
        e.remove('minecraft:mending')
    }
})
