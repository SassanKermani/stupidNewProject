/*=============================
=            Setup            =
=============================*/

const express = require('express');
const router = express.Router();
const controllor = require('../controllers/apiV1Controllers.js');

/*=====  End of Setup  ======*/
/*=============================
=            Routs            =
=============================*/

router.post("/createUser", controllor.createUser);

// router.post('')

/*=====  End of Routs  ======*/
/*==============================
=            Defult            =
==============================*/

let defult = {
	status : 'apiV1Routs',
	"get" : {
		"/" : "all routs",
	},
	"post" : {
		"/" : "all routs",
		"/createUser" : "creates new user not doe yes",

	}
}

router.get("/", (req, res)=>{
	res.send(JSON.stringify(defult));
});
router.post("/", (req, res)=>{
	res.send(JSON.stringify(defult));
})

/*=====  End of Defult  ======*/
/*----------  Export  ----------*/
module.exports = router;