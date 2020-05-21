const config = require("config");
const express = require("express");
const router = express.Router()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User, validate } = require('../model/user');
const { contact, validateContact } = require('../model/contact');

//routes

router.post('/signup',(req, res)=>{
	const { error } = validate(req.body);
  	if (error) return res.status(400).send(error.details[0].message);
    
    const{firstname, lastname, email, password} = req.body;
	  let inputData = new User({
	  	firstname: firstname,
		lastname: lastname,
		email: email,
	  	password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
	  });
	  inputData.save()
	  	.then(doc =>{
	  		//console.log(doc);
	  		res.json("Successfully Signed Up");
	  		
	  	})
	  	.catch(err=>{
	  		//console.log(err);
	  		res.json("Failed to signup")
	  	})
});

router.post('/contact',(req, res)=>{
	const { error } = validateContact(req.body);
  	if (error) return res.status(400).send(error.details[0].message);

    const{email, name, message} = req.body;
	  contacts = new contact({
	  	email: email,
		name: name,
		message: message,
	  });
	  contacts.save()
	  	.then(doc =>{
	  		//console.log(doc);
	  		res.json("Successfully Saved Contact");
	  	})
	  	.catch(err=>{
	  		//console.log(err);
	  		res.json("Failed to Save Contact")
	  	})
});

// authetication of the login and getuser  
// let secret='ecx-unilag'; 
//middleware to check if the authetification is correct

let checkToken = (req, res, next)=>{
	try{
		let token = req.headers["x-access-token"] || req.headers['authorization'];
		if (token.startsWith('Bearer')){
			token = token.slice(7, token.length);
		}
		if (token){
			jwt.verify(token, config.get("secret"), (err, decoded)=>{
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
				//console.log(index);
				bcrypt.compare(password,index.password).then((result) => {
					if( index.email == email && result ){
						let token_pass = jwt.sign({email: email, isAdmin: this.isAdmin},
							config.get("secret"), {expiresIn: '24h'});
						res.header("x-auth-token", token_pass)
						res.json({  
							message:"Authentication Successful",
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
    const{lastname} = req.body;	  
	  User
		.find({
			lastname: lastname
		})
		.then(doc=>{
			let index = doc[0];
			//console.log(doc);
			let firstname = index.firstname;
			let lastname = index.lastname;
			let email = index.email;
			res.json({
				firstname,
				lastname,
				email,			
	    	});
		})
		.catch(err=>{
			res.json("Incorrect username");
		})		
	});		

//delete path details
router.delete('/deleteuser', checkToken, (req, res)=>{
    const{lastname} = req.body;
   // console.log(req.body)
		  User
			.findOneAndRemove({
				lastname: lastname
			})
			.then(doc=>{
				//console.log(doc);
				res.json(
					lastname + ' has been deleted.'	
		    	);
			})
			.catch(err=>{
				res.json("Unable to delete " + lastname);
				//console.log(err)
			})
	  	
	  });		

router.delete('/deleteContact', checkToken, (req, res)=>{
    const{email} = req.body;
		  contact
			.findOneAndRemove({
				email: email
			})
			.then(doc=>{
				//console.log(doc);
				res.json(
					email + ' has been deleted.'
					
		    	);
			})
			.catch(err=>{
				res.json("Unable to delete contact");
				//console.log(err)
			})
	  	
	  });		
// update path details
router.put('/updateuser', checkToken, (req, res)=>{
    const{email, password, lastname} = req.body;  
	  if(password == undefined){
		//query for the username
		  User
			.findOneAndUpdate({
				email: email
			}, {
				lastname: lastname,
			}, {new: true})
			.then(doc=>{
				//console.log(doc);
				let user = doc.lastname;
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
				//console.log(doc);
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
				//console.log(doc);	
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
			//console.log(doc);
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
				//console.log(doc);	
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