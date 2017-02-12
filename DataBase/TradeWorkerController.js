var TradeWorker = require ('./TradeWorkerModel');

module.exports = {
	signin : function (req, res, next) {
		TradeWorker.findOne({username : req.body.username})
 			.exec(function (error, user) {
	 			if(user){
	 				next(new Error('TradeWorker already exist!'));
	 			}else{
					var newTradeWorker = new TradeWorker ({
						username : req.body.username,
			        	password : req.body.password,
			        	place : req.body.place,
			        	service : req.body.service,
			        	phone : req.body.phone,
			        	experiance : req.body.experiance
					});
					newTradeWorker.save(function(err, newTradeWorker){
			    		if(err){
			       		 	res.status(500).send(err);
			    		}else{
			    			res.json(newTradeWorker)
			    		};
					});
				}
			})
	},
	
	signup: function (req, res, next) {
		var username = req.body.username;
		var password = req.body.password;
		// check to see if user already exists
		findOne({username: req.body.username})
		.then(function (TradeWorker) {
			if (TradeWorker) {
				new Error('TradeWorker already exist!');
			}else{
			// make a new TradeWorker if not one
			signin();
			}
		})
	},	
}