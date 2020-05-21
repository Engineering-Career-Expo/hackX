const mongoose = require('mongoose');
const config = require("config");

let name = config.get("name")
let pass = config.get("pass")
mongoose.connect('mongodb+srv://' + name +':' + pass + '@hackx-ykqen.mongodb.net/test?retryWrites=true&w=majority', {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})
	.then(()=> console.log("Database Connected Successfully"))
	.catch(err=>console.log(err));
	



