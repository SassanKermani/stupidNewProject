/*=============================
=            Setup            =
=============================*/

const fs = require('fs');
const bcrypt = require('bcryptjs');

/*=====  End of Setup  ======*/
/*=================================
=            Funcitons            =
=================================*/

//test funciton two : testing controllors
let testFunctionTwo = (req, res)=>{
	res.send('test Function is good');
}


/* body for testFunctionThree : creating a new user
	name : <userName>,
	password : <password>
*/
let testFunctionThree = (req, res)=>{
	//making shure thing is good
	if( req.body.password != undefined && req.body.name != undefined ){
		//making shrue there is not alread a thing
		if( fs.existsSync(`./db/user/${req.body.name}.json`) == false ){
			bcrypt.genSalt(13, function(err, salt){
				bcrypt.hash(req.body.password, salt, function(err, hash){
					fs.writeFile(`./db/user/${req.body.name}.json`, JSON.stringify({name : req.body.name, password : hash}), (err)=>{
						if(err){
							console.log(err);
							return;
						}
						console.log(`${req.body.name}.json has been created`);
						res.send(`welcome ${req.body.name}`);
					});
				});
			});
		}else{
			res.send(`${req.body.name} : username is taken`);
			console.log(fs.existsSync(`./db/user/${req.body.name}.json`));
		}
	}else{
		res.send('no password or name sent');
	}
}

/* body for testFunctionFour : cheach user vladation
	name : <userName>,
	password : <password>
*/
let testFunctionFour = (req, res)=>{
	//making shure thing is good
	if( req.body.password != undefined && req.body.name != undefined ){
		//making shrue there is not alread a thing
		if( fs.existsSync(`./db/user/${req.body.name}.json`) == true ){

			fs.readFile(`./db/user/${req.body.name}.json`, (err, data)=>{
				if (err){
					throw err;
					console.log(err)
					res.send(`you hit a bug thats neet : ${err}`);
				}else{
					//cheack user password
					bcrypt.compare(req.body.password, JSON.parse(data).password, (err, bcryptRess)=>{
						if(bcryptRess == true){
							res.send('valid log in')
						}else{
							res.send('password is dose not match')
						}
					})

					// console.log(`typeof data :${ typeof data}`);
					// console.log(`JSON.parse(data).name : ${ JSON.parse(data).name }`);
					// res.send(data);
				}
			});

		}else{
			console.log(fs.existsSync(`./db/user/${req.body.name}.json`));
			res.send(`${req.body.name} : username is not made`);
		}
	}else{
		res.send('no password or name sent');
	}
}

/* body for testFunctionFour : create message
	"userObject" : {
		name : <userName>,
		password : <password>
	},
	"chatObject" : {
		"title" : <title>,
		"message" : <message>
	}
*/
let testFunctionFive = (req, res)=>{
	if( req.body.userObject.password != undefined && req.body.userObject.name != undefined && req.body.chatObject.title != undefined && req.body.chatObject.message != undefined ){
		//making shrue there is not alread a thing
		if( fs.existsSync(`./db/user/${req.body.userObject.name}.json`) == true ){

			fs.readFile(`./db/user/${req.body.userObject.name}.json`, (err, data)=>{
				if (err){
					throw err;
					console.log(err)
					res.send(`you hit a bug thats neet : ${err}`);
				}else{
					//cheack user password
					bcrypt.compare(req.body.userObject.password, JSON.parse(data).password, (err, bcryptRess)=>{
						if(bcryptRess == true){

							fs.writeFile(`./db/messages/${req.body.chatObject.title}.json`, JSON.stringify({title : req.body.chatObject.title, message : req.body.chatObject.message}), (err)=>{
								if(err){
									console.log(err);
									return;
								}
								// console.log(`${req.body.name}.json has been created`);
								res.send(JSON.stringify({title : req.body.chatObject.title, message : req.body.chatObject.message}));
							});

						}else{
							res.send('password is dose not match')
						}
					})

					// console.log(`typeof data :${ typeof data}`);
					// console.log(`JSON.parse(data).name : ${ JSON.parse(data).name }`);
					// res.send(data);
				}
			});

		}else{
			console.log(fs.existsSync(`./db/user/${req.body.userObject.name}.json`));
			res.send(`${req.body.userObject.name} : username is not made`);
		}
	}else{
		res.send('no password or name sent');
	}
}

/* body for testFunctionFour : create message
	"userObject" : {
		name : <userName>,
		password : <password>
	},
	"chatObject" : {
		"title" : <title>,
		"message" : <message>
	}
*/
let testFunctionSix = (req, res)=>{
	
}

/*=====  End of Funcitons  ======*/
/*----------  Export  ----------*/
module.exports = {
	testFunctionTwo,
	testFunctionThree,
	testFunctionFour,
	testFunctionFive
}