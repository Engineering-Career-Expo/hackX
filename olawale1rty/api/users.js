const express = require("express");
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../model/user');
const contact = require('../model/contact');

//routes

router.post('/signup',(req, res)=>{
    const{name, username, email, number, slackAccount, age, track, institution, password} = req.body;
	  let inputData = new User({
	  	name: name,
		username: username,
		email: email,
		number: number,
		slackAccount: slackAccount,
		age: age,
		track: track,
		institution: institution,
	  	password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
	  });
	  inputData.save()
	  	.then(doc =>{
	  		console.log(doc);
	  		res.json("Successfully Signed Up");
	  		
	  	})
	  	.catch(err=>{
	  		console.log(err);
	  		res.json("Failed to signup")
	  	})
});

router.post('/contact',(req, res)=>{
    const{email, name, message} = req.body;
	  contacts = new contact({
	  	email: email,
		name: name,
		message: message,
	  });
	  contacts.save()
	  	.then(doc =>{
	  		console.log(doc);
	  		res.json("Successfully Saved Contact");
	  	})
	  	.catch(err=>{
	  		console.log(err);
	  		res.json("Failed to Save Contact")
	  	})
});

// authetication of the login and getuser  
let secret='ecx-unilag'; 
//middleware to check if the authetification is correct

let checkToken = (req, res, next)=>{
	try{
		let token = req.headers['authorization'];
		if (token.startsWith('Bearer')){
			token = token.slice(7, token.length);
		}
		if (token){
			jwt.verify(token, secret, (err, decoded)=>{
				if(err){
					return res.json('Token is not valid');
				}else{
					req.decoded = decoded;
					next();
				}
			});
		}
	}catch(error){
		return res.json('Auth token is not supplied');
	}
};


router.post('/login',(req, res)=>{
	  const{email, password} = req.body;
		  User
			.find({
				email: email
			})
			.then(doc=>{
				let index = doc[0];
				console.log(index);
				bcrypt.compare(password,index.password).then((result) => {
					if( index.email == email && result ){
						let token_pass = jwt.sign({email: email},
							secret, {expiresIn: '24h'});
						res.json({  
							message:"Authentication Successful",
							token: token_pass
						});
					}else{
						res.json( "Login Incorrect" );
					}
		    	});
			})
			.catch(err=>{
				res.json("Login Incorrect");
			})	  	
});

router.get('/getuser', checkToken, (req, res)=>{
    const{username} = req.body;	  
	  User
		.find({
			username: username
		})
		.then(doc=>{
			let index = doc[0];
			console.log(doc);
			let name = index.name;
			let username = index.username;
			let email = index.email;
			let number = index.number;
			let slackAccount = index.slackAccount;
			let age = index.age;
			let track = index.track;
			let institution = index.institution;
			res.json({
				name,
				username,
				email,
				number,
				slackAccount,
				age,
				track,
				institution
				
	    	});
		})
		.catch(err=>{
			res.json("Incorrect username");
		})		
	});		

//delete path details
router.delete('/deleteuser', checkToken, (req, res)=>{
    const{username} = req.body;
    console.log(req.body)
		  User
			.findOneAndRemove({
				username: username
			})
			.then(doc=>{
				console.log(doc);
				res.json(
					username + ' has been deleted.'	
		    	);
			})
			.catch(err=>{
				res.json("Unable to delete " + username);
				console.log(err)
			})
	  	
	  });		

router.delete('/deleteContact', checkToken, (req, res)=>{
    const{email} = req.body;
		  contact
			.findOneAndRemove({
				email: email
			})
			.then(doc=>{
				console.log(doc);
				res.json(
					email + ' has been deleted.'
					
		    	);
			})
			.catch(err=>{
				res.json("Unable to delete contact");
				console.log(err)
			})
	  	
	  });		
// update path details
router.put('/updateuser', checkToken, (req, res)=>{
    const{email, password, username} = req.body;  
	  if(password == undefined){
		//query for the username
		  User
			.findOneAndUpdate({
				email: email
			}, {
				username: username,
			}, {new: true})
			.then(doc=>{
				console.log(doc);
				let user = doc.username;
				res.json(
					user + ' has been updated Successfully.'	
		    	);
			})
			.catch(err=>{
				res.json("Unable to update Username");
				
			})
	 }else{
	 	//query for the password
		  User
			.findOneAndUpdate({
				email: email
			}, {
				password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
			}, {new: true})
			.then(doc=>{
				console.log(doc);
				res.json(
					'Password has been updated Successfully.'	
		    	);
			})
			.catch(err=>{
				res.json("Unable to update Password");	
			})
	 }	
	  	
	  });	
// all users path details
router.get('/alluser', checkToken, (req, res)=>{
			User
			.find()
			.then(doc=>{
				console.log(doc);	
				res.json({
					doc
				})
			})
			.catch(err=>{
				res.json("Error in getting users");
				// console.log(err);	
			})	  
});

router.get('/getContacts', checkToken, (req, res)=>{
    const{email} = req.body;	  
	  contact
		.find({
			email: email
		})
		.then(doc=>{
			let index = doc[0];
			console.log(doc);
			res.json({
				index
	    	});
		})
		.catch(err=>{
			res.json("Unable to get contact");
		})		
	});		

//transactions
router.get('/getAllContacts/', checkToken, (req, res)=>{
	  
	  	contact
			.find()
			.then(doc=>{
				console.log(doc);	
				res.json({
					doc
				})
			})
			.catch(err=>{
				res.json("Unable to get contacts");
				// console.log(err);
				
			})	  
});
	

module.exports = router