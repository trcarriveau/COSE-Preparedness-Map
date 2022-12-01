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

	console.log('Map Array:')
	console.log(maps);

	const mapsDisColl = await cmpDB.collection('cose-maps').distinct("map_items.item_year_semester.year");
	// const mapDis = await mapsDisColl.toArray();

	console.log('\n\nMap Distinct Array:')
	console.log(mapsDisColl);

	client.close();
});
