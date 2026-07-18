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

event.shapeless(
  Item.of('scguns:dragon_salve'), // arg 1: output
  [
    'minecraft:dragon_breath',
    'minecraft:golden_apple',
    'desert:crystallized_tear',
    'minecraft:ghast_tear',
    'scguns:anthralite_ingot'
  ]
)

event.shapeless(
  Item.of('scguns:enchanted_bandage'), // arg 1: output
  [
    'minecraft:lapis_lazuli',
    'minecraft:golden_apple',
    'create:experience_nugget',
    'minecraft:ghast_tear',
    'legendarysurvivaloverhaul:bandage'
  ]
)

event.shapeless(
  Item.of('scguns:honey_sulfur_poultice'), // arg 1: output
  [
    'minecraft:honey_bottle',
    'minecraft:dandelion',
    'scguns:sulfur_dust',
    'spelunkery:sulfur',
    'minecraft:paper'
  ]
)

event.shapeless(
  Item.of('scguns:basic_poultice'), // arg 1: output
  [
    'minecraft:dandelion',
    'minecraft:dandelion',
    'minecraft:paper'
  ]
)

event.shaped(
  Item.of('scguns:swarm_bomb', 2),  [// arg 1: output
  ' R ',
  'RFR',
  ' G '  
], {
  F: 'scguns:weird_flesh',
  R: 'minecraft:rotten_flesh',
  G: '#forge:glass'
}
)

event.shaped('scguns:repair_kit', [// arg 1: output
  'NTN',
  'LHL',
  'CCC'  
], {
  L: 'minecraft:leather',
  T: 'scguns:treated_iron_ingot',
  N: 'survival_instinct:nail',
  H: 'scguns:heavy_gun_parts',
  C: 'survival_instinct:cloth'
}
)

event.shaped('clanginghowl:x_ray_goggles', [// arg 1: output
  'SBS',
  'NET',
  'GGG'  
], {
  S: 'clanginghowl:extraterrestrial_steel_plate',
  N: 'scguns:night_vision_module',
  B: 'clanginghowl:energy_battery',
  T: 'scguns:target_tracker_module',
  E: 'clanginghowl:advanced_electronics',
  G: 'minecraft:tinted_glass'
}
)

event.shaped('scguns:target_tracker_module', [// arg 1: output
  'TCT',
  'ROR'  
], {
  O: 'clanginghowl:techno_optics',
  T: 'scguns:treated_iron_ingot',
  C: 'scguns:charged_amethyst_shard',
  R: 'minecraft:redstone'
}
)

event.shaped('scguns:night_vision_module', [// arg 1: output
  'ORT',
  'P T'  
], {
  O: 'clanginghowl:techno_optics',
  T: 'scguns:treated_iron_ingot',
  P: 'scguns:plasma_nugget',
  R: 'minecraft:redstone'
}
)

event.shaped('clanginghowl:jet_boots', [// arg 1: output
  ' E ',
  'BJB',
  'FSF'  
], {
  F: 'clanginghowl:fireproof_steel_coating',
  J: 'scguns:jetpack_module',
  B: 'clanginghowl:blaze_fuel_cylinder',
  S: 'scguns:shock_absorber',
  E: 'clanginghowl:advanced_electronics'
}
)

event.shaped('clanginghowl:tendon_strengthener', [// arg 1: output
  'SBS',
  'TER',
  'D D'  
], {
  S: 'clanginghowl:extraterrestrial_steel_plate',
  T: 'alexsmobs:elastic_tendon',
  B: 'clanginghowl:battery_panel',
  R: 'scguns:rabbit_module',
  D: 'clanginghowl:steel_rod',
  E: 'clanginghowl:advanced_electronics'
}
)

event.shaped('scguns:suit_grease', [// arg 1: output
  'NA',
  ' T',
  ' A'  
], {
  A: 'scguns:anthralite_ingot',
  N: 'scguns:anthralite_nugget',
  T: 'immersive_weathering:tallow'
}
)

event.shaped('scguns:armor_pouches', [// arg 1: output
  'NB',
  'LL'
], {
  L: 'minecraft:leather',
  N: 'scguns:anthralite_nugget',
  B: 'bagofholding:leather_bag_of_holding'
}
)

event.shaped('scguns:heavy_armor_pouches', [// arg 1: output
  'NB',
  'LL'
], {
  L: 'minecraft:leather',
  N: 'scguns:armor_pouches',
  B: 'bagofholding:iron_bag_of_holding'
}
)

event.shaped('clanginghowl:reanimator', [// arg 1: output
  'STS',
  'SHS',
  'BEB'  
], {
  S: 'clanginghowl:extraterrestrial_steel_plate',
  T: 'clanginghowl:techno_heart',
  H: 'spore:amalgamated_heart',
  B: 'clanginghowl:small_energy_battery',
  E: 'clanginghowl:advanced_electronics'
}
)

event.shaped('survival_instinct:polyethylene_sheet', [// arg 1: output
  'CLC',
  'SGS',
  'ARA'  
], {
  C: 'minecraft:charcoal',
  L: 'survival_instinct:steellium',
  S: 'spelunkery:sulfur',
  G: 'survival_instinct:gasoline_can',
  A: 'survival_instinct:aluminium',
  R: 'minecraft:redstone'
}
)

event.shaped('legendarysurvivaloverhaul:medkit', [// arg 1: output
  'CIC',
  'BGB',
  'WAW'  
], {
  I: 'minecraft:iron_ingot',
  C: 'survival_instinct:cloth',
  G: 'minecraft:gold_ingot',
  A: 'survival_instinct:alcohol_wipes',
  B: 'legendarysurvivaloverhaul:bandage',
  W: '#minecraft:wool'
}
)

event.shaped('survival_instinct:barricade', [// arg 1: output
  'PN',
  'NP'
], {
  N: 'survival_instinct:nail',
  P: 'minecraft:oak_planks'
}
)

event.shaped('survival_instinct:rope_trap', [// arg 1: output
  'TRT'
], {
  R: 'supplementaries:rope',
  T: 'minecraft:stick'
}
)

event.shaped('survival_instinct:homemade_mine', [// arg 1: output
  ' W ',
  'CGN',
  'BAE'  
], {
  W: 'minecraft:heavy_weighted_pressure_plate',
  C: 'survival_instinct:cloth',
  G: 'minecraft:gunpowder',
  N: 'survival_instinct:coins',
  B: 'survival_instinct:batteries',
  A: 'survival_instinct:can',
  E: 'survival_instinct:electronic_scrap'
}
)

event.shaped('scguns:vicious_acid_bucket', [// arg 1: output
  'RNS',
  'HAT',
  'GPB'  
], {
  R: 'minecraft:redstone',
  N: 'scguns:nitro_powder',
  S: 'scguns:sulfur_dust',
  T: 'scguns:niter_dust',
  B: 'minecraft:blaze_powder',
  P: 'scguns:plasma',
  G: 'minecraft:glowstone_dust',
  H: 'scguns:phosphor_dust',
  A: 'biomancy:acid_bucket'
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
event.remove({ id: 'scguns:dragon_salve' })
event.remove({ id: 'scguns:enchanted_bandage' })
event.remove({ id: 'scguns:honey_sulfur_poultice' })
event.remove({ id: 'scguns:basic_poultice' })
event.remove({ id: 'scguns:swarm_bomb' })
event.remove({ id: 'scguns:repair_kit_1' })
event.remove({ id: 'scguns:repair_kit' })
event.remove({ id: 'clanginghowl:ex_steel/tools/x_ray_goggles' })
event.remove({ id: 'scguns:target_tracker_module' })
event.remove({ id: 'scguns:night_vision_module' })
event.remove({ id: 'clanginghowl:ex_steel/tools/jet_boots' })
event.remove({ id: 'clanginghowl:ex_steel/tools/tendon_strengthener' })
event.remove({ id: 'scguns:suit_grease' })
event.remove({ id: 'scguns:armor_pouches' })
event.remove({ id: 'scguns:heavy_armor_pouches' })
event.remove({ id: 'clanginghowl:ex_steel/tools/reanimator' })
event.remove({ id: 'survival_instinct:wheat_seeds_recipe' })
event.remove({ id: 'survival_instinct:pumpkin_seeds' })
event.remove({ id: 'survival_instinct:melon_seeds_recipe' })
event.remove({ id: 'survival_instinct:carrots_recipe' })
event.remove({ id: 'survival_instinct:potato_recipe' })
event.remove({ id: 'survival_instinct:beetroot_package_seeds' })
event.remove({ id: 'survival_instinct:kevlar_i_leather_recipe' })
event.remove({ id: 'legendarysurvivaloverhaul:medkit' })
event.remove({ id: 'survival_instinct:barricade_recipe' })
event.remove({ id: 'survival_instinct:plank_recipe' })
event.remove({ id: 'survival_instinct:lance_with_screw_driver_recipe' })
event.remove({ id: 'scguns:vicious_acid' })

})

MoreJSEvents.filterAvailableEnchantments(e => {
    if (e.item.id == 'scguns:ribs_glory') {
        e.remove('minecraft:mending')
    }
})
