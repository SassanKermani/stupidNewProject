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
router.get("/two", controllor.testFunctionTwo);
router.post("/two", controllor.testFunctionTwo);

// test three
router.post("/three", controllor.testFunctionThree);

//test four
router.post("/four", controllor.testFunctionFour);

router.post("/five", controllor.testFunctionFive);

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
				"/one" : "test",
				"/two" : "test two",
				"/three" : "create user",
				"/four" : "cheack if is valad user"
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