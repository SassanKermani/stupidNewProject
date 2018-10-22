/*=============================
=            Setup            =
=============================*/

const fs = require('fs');

/*=====  End of Setup  ======*/
/*=================================
=            Funcitons            =
=================================*/

//test funciton one
let testFunction = (req, res)=>{
	res.send('test Function is good');
}



/*=====  End of Funcitons  ======*/
/*----------  Export  ----------*/
module.exports = {
	testFunction
}