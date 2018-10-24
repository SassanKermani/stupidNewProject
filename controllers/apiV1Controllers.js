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
 
/*	CREATE USER 			IN THE FUTER I PLAN TO ROVET THIS RUT AND OR ONLY LET ME USE IT
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
			if(fs.existsSync(`./db/user/${(req.body.user.name).toLowerCase()}.json`) != true){
				// res.send(`${(req.body.user.name).toLowerCase()}`);

				bcrypt.genSalt(13, function(err, salt){
					bcrypt.hash(req.body.user.password, salt, (err, hash)=>{
						fs.writeFile(`./db/user/${(req.body.user.name).toLowerCase()}.json`, JSON.stringify({
							"name" : `${req.body.user.name}` , 
							"password" : `${hash}`,
							"dateJoined" : `${date.getFullYear()}:${date.getMonth()}:${date.getDate()}`
						}), (err)=>{
							if(err){
								console.log(err);
								return;
							}
							res.send(`Welcme ${req.body.user.name}`)
						});
					})
				})

			}else{
				res.send("that user name is taken use anothr one");
			}
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