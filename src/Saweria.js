const axios = require("axios");
const utils = require("./util.js");

function webhookTest(req) {
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
}

function handlePostReq(req, res) {
	if(req.query.secret === process.env.SECRET && req.body.type === "donation") {
		webhookTest(req);
		return res.status(200).send("ok");
	} else {
		return res.status(404).send("Not Found");
	}
}


module.exports = {
 handlePostReq,
 webhookTest
};