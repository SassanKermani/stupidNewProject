/*=============================
=            Setup            =
=============================*/

const fs = require('fs');
const bcrypt = require('bcryptjs');

/*=====  End of Setup  ======*/
/*=================================
=            Funcitons            =
=================================*/

//test funciton one
let testFunction = (req, res)=>{
	res.send('test Function is good');
}


/*	body for testFunctionTwo
	name : <userName>,
	password : <password>
*/
let testFunctionTwo = (req, res)=>{
	if( req.body.password && req.body.namn ){
		bcrypt.genSalt(13, function(err, salt){
			bcrypt.hash(req.body.password, salt, function(err, hash){
				fs.writeFile(req.body.namn, JSON.stringify({name : req.body.name, password : hash}));
			});
		});
	}else{
		res.send('no password found')
	}
}

/*=====  End of Funcitons  ======*/
/*----------  Export  ----------*/
module.exports = {
	testFunction
}