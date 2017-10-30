let express = require('express'),
	app = express();

app.use(express.static(__dirname + '/frontend'));
app.all('*', function(req, res) {
	// Just send the index.html for other files to support HTML5Mode
	res.sendFile('/frontend/index.html', { 'root': __dirname });
});

app.listen(3199, function() {
	console.log('Server started on port 3199');
});