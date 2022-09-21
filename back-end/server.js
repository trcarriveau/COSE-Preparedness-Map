const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

app.use(bodyParser.json());

app.get('/test_api', (req, res) => {
	console.log('Hit test_api');
	res.json({message: 'hello from the back end :)'});
});

app.listen(port, () => {
	console.log(`Server listening on the port::${port}`);
});