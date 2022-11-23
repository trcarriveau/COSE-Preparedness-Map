db = connect( 'mongodb://localhost/COSE-Preparedness-Map' );

db['cose-maps'].drop()
db['cose-skills'].drop()
db['cose-types'].drop()