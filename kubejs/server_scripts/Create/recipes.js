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

event.remove({ id: 'create:item_application/andesite_casing_from_wood' })

})

