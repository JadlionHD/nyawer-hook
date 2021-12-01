const express = require("express");
const app = express();
require("dotenv").config();
const { handlePostReq } = require("./Saweria.js");

app.use(express.json());

app.post("/callback/discord", handlePostReq);

app.listen(parseInt(process.env.PORT), () => {
	console.log("Server siap!");
})