var UserController = require('../DataBase/UserController.js');
// var TradeWorkerController = require('../DataBase/TradeWorkerController.js');


module.exports = function (app, express) {
		
		app.get('/', function (req, res) {
			res.json('Hello World');
		});

	////////////////////////////user/////////////////////////////////////
		app.post('/api/signin', UserController.signin);
		app.get('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);
		// app.get('/api/signup',UserController.signup);

	//////////////////////////TradeWorker///////////////////////////////
		// app.post('/api/signin',TradeWorkerController.signin);
		// app.get('/api/signin',TradeWorkerController.signin);
		// app.post('/api/signup',TradeWorkerController.signup);
		// app.get('/api/signup',TradeWorkerController.signup);	
};


