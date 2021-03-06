/*==============================
=            Set up            =
==============================*/
/*----------  dependencies  ----------*/
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
const bodyParser = require('body-parser');

//prot
const port = 3000;

//app
const app = express();

//app.use
app.use(morgan("common"));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(helmet());
app.use(cors({
	origine : ["http://localhost:3000"],
	methods : ["GET", "POST"],
	allowedHeaders : ["Content-Type", "Authorization"]
}));
app.use(compression());

/*=====  End of Set up  ======*/

/*==========================================
=            hand off to config            =
==========================================*/

const testRouter = require("./config/testRouts.js");
const apiV1Router = require("./config/apiV1Routs.js")

app.use("/test", testRouter);
app.use("/apiV1", apiV1Router);

/*=====  End of hand off to config  ======*/

/*==============================
=            Defult            =
==============================*/

let endpints = JSON.stringify(
	{
		"status" : 'api is up',
		"get" : {
			"/" : "list of all endpints",
			"/test" : "all test endpints"
		},
		"post" : {
			"/" : "list of all endpints",
			"/test" : "all test endpints"
		},
	}
);

app.get("*", (req, res)=>{
	res.send(endpints)
});

app.post("*", (req, res)=>{
	res.send(endpints)
});

/*=====  End of Defult  ======*/

/*----------  Listen  ----------*/
app.listen(port, ()=>{
	console.log(`up at ${port}`);
});

/*----------  Export  ----------*/
module.exports = app;