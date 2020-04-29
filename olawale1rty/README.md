ECX HACKATHON BACKEND FILES

## Routes
Each routes make use of jsonwebtoken for authentification at the header.
The token is gotten when the user login.
Method:Server/route

### post:server/signup
Request Format
{
	"name": "olawale", 
	"username": "olax", 
	"email": "olawale@gmail.com", 
	"number": 2348065687890, 
	"slackAccount": "olax", 
	"age": 19, 
	"track": "health", 
	"institution": "unilag",
	"password": "backend"
} 

Response Format 
Successfully Signed Up 

### post:server/contact
Request Format
{
	"name": "olawale",  
	"email": "olawale@gmail.com", 
	"message": "I am a backend developer"
} 

Response Format 
Successfully Saved contact

### post:server/login
Request Format
{
	"email": "olawale@gmail.com",
	"password": "backend"
}

Response Format
{
	message:"Authentication Successful",
	token: token_pass
}

### get:server/getuser
Request Format
{
	"email": "olawale@gmail.com"
}

Response Format
{
	name,
	username,
	email,
	number,
	slackAccount,
	age,
	track,
	institution
}

### delete:server/deleteuser
Request Format
{
	"username": "olax",
}

Response Format
username has been deleted

### delete:server/deleteContact
Request Format
{
	"email": "olawale@gmail.com"
}

Response Format
email has been deleted

### put:server/updateuser
Request Format
{
	"email": "olawale@gmail.com",
	"password": "backend",
	"username": "olax"
}

Response Format
Password has been updated Successfully

### get:server/getContacts
Request Format
{
	"email": "olawale@gmail.com"
}
Response Format
{
	"name": "olawale",  
	"email": "olawale@gmail.com", 
	"message": "I am a backend developer"
} 

### get:server/alluser
It returns all the users in the database and their details.


### get:server/getAllContacts
It returns all the users in the contact database and their details.



