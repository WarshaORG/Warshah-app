var UserController = require('../DataBase/userController.js');
 var TradeWorkerController = require('../DataBase/TradeWorkerController.js');


module.exports = function (app, express) {
		
	////////////////////////////user/////////////////////////////////////
		app.post('/api/signin', UserController.signin);
		app.post('/api/signup',UserController.signup);

	//////////////////////////TradeWorker///////////////////////////////
		app.post('/api/insert',TradeWorkerController.insert);
		app.get('/api/all',TradeWorkerController.getAllTradeWorker);
};


