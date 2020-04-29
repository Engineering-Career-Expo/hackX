const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Ecx:unilag-ecx@hackx-ykqen.mongodb.net/test?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> console.log("Database Connected Successfully"))
	.catch(err=>console.log(err));
	



