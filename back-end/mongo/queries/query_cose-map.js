const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const util = require('util')

/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */


MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true }, async function(connectErr, client) {
	assert.equal(null, connectErr);
	const cmpDB = client.db('COSE-Preparedness-Map');

	const mapsColl = cmpDB.collection('cose-maps').find( { map_name: "Software Engineering" } );
	const maps = await mapsColl.toArray();
	
	const skillsColl = cmpDB.collection('cose-skills').find( { skill_map: "Software Engineering" } );
	const skills = await skillsColl.toArray();
	
	const typesColl = cmpDB.collection('cose-types').find( { type_map: "Software Engineering" } );
	const types = await typesColl.toArray();
	
	client.close();
	mergeData(maps, skills, types)
});

async function mergeData(maps, skills, types) {
	try {
		if ( maps.length == 1 ) {
			for await(const mapItem of maps[0].map_items) {
				for await (const itemSkill of mapItem.item_skill) {
					for await (const skill of skills) {
						if (skill._id.equals(itemSkill.skill_id)) {
							itemSkill.skill_name = skill.skill_name
							itemSkill.skill_information = skill.skill_information
						}
					}
				}
		
				for await(const itemType of mapItem.item_type) {
					for await (const type of types) {
						if (type._id.equals(itemType.type_id)) {
							itemType.type_name = type.type_name
							itemType.type_information = type.type_information
						}
					}
				}
			}

			console.log('Done')
			console.log(util.inspect(maps, showHidden=true, null, colorize=true));
		} else if (maps.length > 1) {
			console.error('Got more than one map, this is not correct')
		} else if (maps.length < 1){
			console.error('Got less than one map, this is not correct')
		} else {
			console.error('Not sure how we got here... good luck :)')
		}
	} catch (error) {
		console.error(`Caught error in mergeData(): ${error}`)
	}
	
}
