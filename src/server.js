const express = require("express");
const app = express();
require("dotenv").config();
const axios = require("axios");
const utils = require("./util.js");


app.use(express.json());

app.post("/callback/discord", (req, res) => {

	if(req.query.secret === process.env.SECRET && req.body.type === "donation") {
		axios.post(process.env.DISCORD_WEBHOOK_TEST, {
			embeds: [{
				title: `Sankyu ${req.body.donator_name}! telah nyawer Rp${utils.format(req.body.amount_raw)}`,
				description: `Pesan:\n \`\`\`${req.body.message}\`\`\``,
				image: {
					url: "https://c.tenor.com/z89eTLYza68AAAAd/yuudachi-poi.gif"
				},
				thumbnail: {
					url: "https://saweria.co/twitter_card.png"
				},
				footer: {
					text: "https://saweria.co/JadlionHD"
				},
				color: 0x25ba0e
			}]
		})
		return res.status(200).send("ok");
	} else {
		return res.status(404).send("Not Found");
	}
})

app.listen(parseInt(process.env.PORT), () => {
	console.log("Server siap!")
})