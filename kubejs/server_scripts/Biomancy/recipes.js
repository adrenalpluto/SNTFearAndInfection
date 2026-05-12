// priority: 0

// Visit the wiki for more info - https://kubejs.com/

//console.info('Hello, World! (Loaded server scripts)')

ServerEvents.recipes(event => {

	event.recipes.biomancy.bio_forging(['#immersive_weathering:bark', 'biomancy:tough_fibers', 'biomancy:organic_matter', 'biomancy:toxin_extract', 'biomancy:acid_extract'], 'kubejs:treated_bark', 'biomancy:misc').nutrientsCost(1)


})
