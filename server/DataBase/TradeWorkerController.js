var TradeWorker = require ('./TradeWorkerModel');

module.exports = {
	insert : function (req, res) {
		TradeWorker.findOne({username : req.body.username})
 			.exec(function (error, user) {
	 			if(user){
	 				res.json(new Error('TradeWorker already exist!'));
	 			}else{
					var newTradeWorker = new TradeWorker ({
						username : req.body.username,
			        	email:req.body.email,
			        	place : req.body.place,
			        	service : req.body.service,
			        	phone : req.body.phone,
			        	experiance : req.body.experiance,
			        	picture: req.body.picture 
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
	getAllTradeWorker : function (req, res) {
		TradeWorker.find().exec(function (err, allTradWorker) {
			if(err){
				res.status(500).send('err');
			}else{
				res.status(200).send(allTradWorker);
			}
		});
	}
	
	// signup: function (req, res, next) {
	// 	var username = req.body.username;
	// 	var password = req.body.password;
	// 	// check to see if user already exists
	// 	findOne({username: req.body.username})
	// 	.then(function (TradeWorker) {
	// 		if (TradeWorker) {
	// 			new Error('TradeWorker already exist!');
	// 		}else{
	// 		// make a new TradeWorker if not one
	// 		signin();
	// 		}
	// 	})
	// }	
}