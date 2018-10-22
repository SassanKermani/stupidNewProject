/*=============================
=            Setup            =
=============================*/

const express = require('express');
const router = express.Router();
const controllor = require('../controllers/testControllers.js');

/*=====  End of Setup  ======*/
/*=============================
=            Routs            =
=============================*/

//test one
router.get("/one", (req, res)=>{
	res.send('test')
})

//test two
router.get("/two", controllor.testFunction);

//test three
// router.get("/three", controllor.)

/*=====  End of Routs  ======*/

/*==============================
=            Defult            =
==============================*/

let endpints = JSON.stringify(
	{
		status : 'api is up',
		"test" : {
			"get" : {
			"/" : "list of all endpints",
			},
			"post" : {
				"/" : "list of all endpints",
			}
		}
	}
);

router.get("*", (req, res)=>{
	res.send(endpints);
});

router.post("*", (req, res)=>{
	res.send(endpints);
})

/*=====  End of Defult  ======*/


/*----------  Export  ----------*/
module.exports = router;