/*=============================
=            Setup            =
=============================*/

const fs = require("fs");
const bcrypt = require('bcryptjs');
const date = new Date();

/*=====  End of Setup  ======*/
/*=================================
=            Functions            =
=================================*/

/*	CREATE USER
req.body {
	user : {
		name : <name>,
		password : <password>
	}
}
*/ 
let createUser = (req,res)=>{
	
	if(req.body.user != undefined){
		if(req.body.user.name != undefined && req.body.user.password != undefined){
			res.send("user.name or user.password is defined");
		}else{
			res.send("user.name or user.password is undefined");
		}
	}else{
		res.send("user is undefined")
	}
}

/*=====  End of Functions  ======*/
/*----------  Exports  ----------*/
module.exports = {
	createUser,

}