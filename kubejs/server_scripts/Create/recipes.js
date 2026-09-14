// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')

ServerEvents.tags('item', event => {

  event.remove('forge:nuggets/copper', 'create:copper_nugget')

})


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

event.shaped('create:belt_connector', [// arg 1: output
  'DDD',
  'KPK',
  'DDD'
], {
  D: 'minecraft:dried_kelp',
  K: 'survival_instinct:tier_i_kevlar',
  P: 'survival_instinct:polyethylene_sheet'
}
)

event.shaped('create:mechanical_piston', [// arg 1: output
  ' P ',
  'MCM',
  ' E '
], {
  M: 'kubejs:andesite_mortar',
  P: 'minecraft:piston',
  C: 'create:andesite_casing',
  E: 'create:piston_extension_pole'
}
)

event.shaped('create:gantry_carriage', [// arg 1: output
  ' P ',
  'MCM',
  ' W '
], {
  M: 'kubejs:andesite_mortar',
  P: 'minecraft:sticky_piston',
  C: 'create:andesite_casing',
  W: 'create:cogwheel'
}
)

event.shaped('create:windmill_bearing', [// arg 1: output
  'MPM',
  'MSM',
  ' T '
], {
  M: 'kubejs:andesite_mortar',
  P: 'minecraft:sticky_piston',
  S: '#forge:stone',
  T: 'create:shaft'
}
)

event.shaped('create:white_sail', [// arg 1: output
  'BNB',
  'NCN',
  'BNB'
], {
  B: 'minecraft:bamboo',
  C: 'survival_instinct:cloth',
  N: 'survival_instinct:nail'
}
)

event.shapeless(
  Item.of('create:white_sail'), // arg 1: output
  [
    'create:sail_frame',
    'minecraft:white_wool'
  ]
)

event.shaped('create:mechanical_bearing', [// arg 1: output
  ' P ',
  'MCM',
  ' T '
], {
  M: 'kubejs:andesite_mortar',
  P: 'minecraft:sticky_piston',
  C: 'create:andesite_casing',
  T: 'create:shaft'
}
)

event.shaped('create:cart_assembler', [// arg 1: output
  'ASA',
  'MCM',
  'T T'
], {
  M: 'kubejs:andesite_mortar',
  S: 'minecraft:sticky_piston',
  C: 'spelunkery:cinnabar_block',
  T: 'kubejs:treated_planks',
  A: 'create:andesite_alloy'
}
)

event.shaped('clanginghowl:battery_panel', [// arg 1: output
  'DRR',
  'BSP'
], {
  D: 'clanginghowl:diamond_diode',
  R: 'clanginghowl:redstone_wire',
  B: 'clanginghowl:energy_battery',
  S: 'clanginghowl:extraterrestrial_steel_plate',
  P: 'survival_instinct:electronic_scrap'
}
)

event.shaped('clanginghowl:redstone_wire', [// arg 1: output
  ' RW',
  'RWR',
  'WR '
], {
  W: 'powergrid:wire',
  R: 'minecraft:redstone'
}
)

event.shaped('clanginghowl:redstone_wire', [// arg 1: output
  ' RW',
  'RWR',
  'WR '
], {
  W: 'caverns_and_chasms:waxed_copper_ingot',
  R: 'minecraft:redstone'
}
)

event.shaped('kubejs:bronze_block', [// arg 1: output
  'BBB',
  'BBB',
  'BBB'
], {
  B: 'kubejs:bronze_ingot'
}
)

event.shapeless(
  Item.of('kubejs:bronze_ingot', 9), // arg 1: output
  [
    'kubejs:bronze_block'
  ]
)

event.shaped('create:fluid_tank', [// arg 1: output
  'B',
  'T',
  'B'
], {
  B: 'create:copper_sheet',
  T: 'neepmeat:flex_tank'
}
)

event.shaped('immersive_aircraft:hull', [// arg 1: output
  'III',
  'TTT',
  'III'
], {
  I: 'createdeco:industrial_iron_ingot',
  T: 'kubejs:treated_planks'
}
)

event.shaped('immersive_aircraft:boiler', [// arg 1: output
  'CIC',
  'CTC',
  'IBI'
], {
  I: 'createdeco:industrial_iron_ingot',
  T: 'clanginghowl:techno_heart',
  C: 'caverns_and_chasms:waxed_copper_ingot',
  B: 'minecraft:blast_furnace'
}
)

event.shaped('immersive_aircraft:sail', [// arg 1: output
  'FAF',
  'AAA',
  'FAF'
], {
  A: 'neepmeat:asbestos_fabric',
  F: 'create:sail_frame'
}
)

event.shaped('immersive_aircraft:propeller', [// arg 1: output
  'ISI',
  'SPS',
  'ISI'
], {
  P: 'create:propeller',
  I: 'minecraft:iron_ingot',
  S: 'clanginghowl:extraterrestrial_steel_ingot'
}
)

event.shaped('immersive_aircraft:enhanced_propeller', [// arg 1: output
  'BB ',
  ' P ',
  ' BB'
], {
  P: 'immersive_aircraft:propeller',
  B: 'create:brass_ingot'
}
)

event.shaped('immersive_aircraft:bomb_bay', [// arg 1: output
  'STS',
  'S S'
], {
  T: 'minecraft:tnt',
  S: 'clanginghowl:extraterrestrial_steel_ingot'
}
)

event.shaped('immersive_aircraft:nether_engine', [// arg 1: output
  'MNM',
  'BEB',
  'RSR'
], {
  M: 'minecraft:magma_cream',
  R: 'minecraft:nether_brick',
  B: 'minecraft:blaze_rod',
  N: 'minecraft:netherite_ingot',
  E: 'immersive_aircraft:engine',
  S: 'alexsmobs:straddlite'
}
)

event.shaped('immersive_aircraft:gyroscope_hud', [// arg 1: output
  'BGB',
  'IEI',
  'NYL'
], {
  G: 'minecraft:glass_pane',
  I: 'minecraft:gold_ingot',
  N: 'minecraft:note_block',
  L: 'minecraft:lever',
  B: 'create:brass_nugget',
  E: 'powergrid:electrical_gizmo',
  Y: 'immersive_aircraft:gyroscope'
}
)

event.shaped('immersive_aircraft:gyroscope_dials', [// arg 1: output
  'VCE',
  'IYL'
], {
  C: 'minecraft:clock',
  I: 'powergrid:integrated_circuit',
  V: 'powergrid:vfet',
  L: 'minecraft:lever',
  E: 'create:electron_tube',
  Y: 'immersive_aircraft:gyroscope'
}
)

event.shaped('immersive_aircraft:hull_reinforcement', [// arg 1: output
  'SIS',
  'HHH',
  'SIS'
], {
  I: 'create:industrial_iron_block',
  S: 'alexsmobs:straddlite',
  H: 'immersive_aircraft:hull'
}
)

event.shaped('immersive_aircraft:improved_landing_gear', [// arg 1: output
  ' II',
  'DPI',
  'KD '
], {
  I: 'minecraft:iron_ingot',
  P: 'survival_instinct:polyethylene_sheet',
  D: 'minecraft:dried_kelp',
  K: 'survival_instinct:tier_i_kevlar'
}
)

event.shaped('immersive_aircraft:rotary_cannon', [// arg 1: output
  'SDS',
  'WGW',
  'CCC'
], {
  C: 'caverns_and_chasms:waxed_copper_ingot',
  S: 'kubejs:copper_sheet',
  D: 'minecraft:dispenser',
  W: 'clanginghowl:redstone_wire',
  G: 'immersive_aircraft:industrial_gears'
}
)

event.shaped('immersive_aircraft:engine', [// arg 1: output
  'BSB',
  'BEB',
  'ORO'
], {
  B: 'kubejs:bronze_ingot',
  S: 'neepmeat:stator',
  E: 'immersive_aircraft:boiler',
  R: 'create:brass_ingot',
  O: 'neepmeat:bioelectric_organ'
}
)

event.shaped('immersive_aircraft:steel_boiler', [// arg 1: output
  'III',
  'IBI',
  'TFT'
], {
  I: 'minecraft:iron_ingot',
  B: 'immersive_aircraft:boiler',
  T: 'scguns:treated_iron_ingot',
  F: 'minecraft:blast_furnace'
}
)

event.shaped('immersive_aircraft:industrial_gears', [// arg 1: output
  ' TT',
  'ELT',
  'EE '
], {
  E: 'clanginghowl:extraterrestrial_steel_ingot',
  L: 'minecraft:lever',
  T: 'scguns:treated_brass_ingot'
}
)

event.shaped('immersive_aircraft:sturdy_pipes', [// arg 1: output
  '  C',
  'ECE',
  'C  '
], {
  E: 'clanginghowl:extraterrestrial_steel_ingot',
  C: 'caverns_and_chasms:waxed_copper_ingot'
}
)

event.shaped('immersive_aircraft:gyroscope', [// arg 1: output
  'Q Q',
  'RCR',
], {
  R: 'minecraft:comparator',
  C: 'minecraft:compass',
  Q: 'create:polished_rose_quartz'
}
)

event.shaped('powergrid:electric_fan', [// arg 1: output
  ' MA',
  'EGP',
  ' MA'
], {
  E: 'powergrid:electric_motor',
  P: 'create:propeller',
  M: 'kubejs:andesite_mortar',
  A: 'create:andesite_alloy',
  G: 'powergrid:electrical_gizmo'
}
)


event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
event.remove({ id: 'create:item_application/copper_casing_from_wood' })
event.remove({ id: 'create:item_application/brass_casing_from_wood' })
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
event.remove({ id: 'create:crafting/kinetics/belt_connector' })
event.remove({ id: 'create:crafting/kinetics/mechanical_piston' })
event.remove({ id: 'create:crafting/kinetics/gantry_carriage' })
event.remove({ id: 'create:crafting/kinetics/windmill_bearing' })
event.remove({ id: 'create:crafting/kinetics/white_sail' })
event.remove({ id: 'create:crafting/kinetics/white_sail_from_conversion' })
event.remove({ id: 'create:crafting/kinetics/mechanical_bearing' })
event.remove({ id: 'create:crafting/kinetics/cart_assembler' })
event.remove({ id: 'create:crafting/kinetics/fluid_tank' })
event.remove({ id: 'create:crafting/kinetics/fluid_pipe_vertical' })
event.remove({ id: 'immersive_weathering:mortar' })
event.remove({ id: 'clanginghowl:ex_steel/extraterrestrial_steel_plate' })
event.remove({ id: 'clanginghowl:battery_panel' })
event.remove({ id: 'clanginghowl:redstone_wire' })
event.remove({ id: 'darkerdepths:forsaken_bronze_ingot_from_scrap' })
event.remove({ id: 'scguns:create/ancient_brass_brass_from_mixing' })
event.remove({ id: 'immersive_aircraft:airship' })
event.remove({ id: 'immersive_aircraft:cargo_airship' })
event.remove({ id: 'immersive_aircraft:warship' })
event.remove({ id: 'immersive_aircraft:biplane' })
event.remove({ id: 'immersive_aircraft:gyrodyne' })
event.remove({ id: 'immersive_aircraft:quadrocopter' })
event.remove({ id: 'immersive_aircraft:bamboo_hopper' })
event.remove({ id: 'immersive_aircraft:hull' })
event.remove({ id: 'immersive_aircraft:boiler' })
event.remove({ id: 'immersive_aircraft:sail' })
event.remove({ id: 'immersive_aircraft:propeller' })
event.remove({ id: 'immersive_aircraft:bomb_bay' })
event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
event.remove({ id: 'immersive_aircraft:nether_engine' })
event.remove({ id: 'immersive_aircraft:gyroscope_hud' })
event.remove({ id: 'immersive_aircraft:gyroscope_dials' })
event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
event.remove({ id: 'immersive_aircraft:rotary_cannon' })
event.remove({ id: 'immersive_aircraft:engine' })
event.remove({ id: 'immersive_aircraft:steel_boiler' })
event.remove({ id: 'immersive_aircraft:industrial_gears' })
event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
event.remove({ id: 'immersive_aircraft:gyroscope' })
event.remove({ id: 'powergrid:crafting/electric_fan' })

})

