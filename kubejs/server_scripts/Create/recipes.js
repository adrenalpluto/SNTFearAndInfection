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

event.remove({ id: 'create:item_application/andesite_casing_from_wood' })
event.remove({ id: 'create:crafting/materials/andesite_alloy' })
event.remove({ id: 'create:crafting/materials/andesite_alloy_from_zinc' })
event.remove({ id: 'create:mixing/andesite_alloy_from_zinc' })
event.remove({ id: 'create:mixing/andesite_alloy' })
event.remove({ id: 'create:crafting/kinetics/shaft' })
event.remove({ id: 'create:crafting/kinetics/cogwheel' })
event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
event.remove({ id: 'create:crafting/kinetics/large_cogwheel_from_little' })

})

