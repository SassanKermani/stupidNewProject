
/*----------  Funciton  ----------*/

const fs = require('fs');
const bcrypt = require('bcryptjs');


/*----------  Creation lab  ----------*/

let name = `Sassan`;

let userObject = {
	name : "Sassan",
	password : ""
}

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash)
        console.log(`salt : ${salt}`);

        // Load hash from your password DB.
		bcrypt.compare("B4c0/\/", hash, function(err, res) {
		    // res === true
		    console.log(res);
		});
		
		bcrypt.compare("not_bacon", hash, function(err, res) {
		    // res === false
		    console.log(res);
		});
		 


    });
});

let newHash = "$2a$10$C/oxvZnBuSVKmOv/SBGaDOOKIvhlO33TTc1SOuTzKgMzUh.q9NXre";

bcrypt.compare("B4c0/\/", newHash, (err, res)=>{
	console.log(`res for my thing : ${res}`);
})



