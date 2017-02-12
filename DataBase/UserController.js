var User = require ('./UserModel');

module.exports = {
	
	signin : function (req, res, next) {
		User.findOne({username : req.body.username})
 			.exec(function (error, user) {
	 			if(user){
	 				next(new Error('User already exist!'));
	 			}else{
					var newUser = new User ({
						username : req.body.username,
			        	password : req.body.password,
			        	email : req.body.email 
					});
					newUser.save(function(err, newUser){
			    		if(err){
			       		 	res.status(500).send(err);
			    		}else{
			    			res.json(newUser)
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
		.then(function (user) {
			if (user) {
				new Error('User already exist!');
			}else{
			// make a new user if not one
			signin();
			}
		})
	},
}