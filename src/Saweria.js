const axios = require("axios");
const utils = require("./util.js");
const fs = require("fs");

function webhookTest(req) {
	let embed = JSON.parse(fs.readFileSync("src/embed.json", "utf8"));

	let tempEmbed = {
		embeds: [{
			title: embed.embeds[0].title,
			description: embed.embeds[0].description,
			image: {
				url: embed.embeds[0].image.url
			},
			thumbnail: {
				url: embed.embeds[0].thumbnail.url
			},
			footer: {
				text: embed.embeds[0].footer.text
			},
			color: parseInt(embed.embeds[0].color.replace("#", "0x"))
		}]
	};
	let embeds = tempEmbed.embeds[0];


	for(let [k,v] of Object.entries(tempEmbed.embeds[0])) {
		if(typeof v !== "object") {

			if(k === "color")
				continue;

			embeds[k] = embeds[k].replace(/{message}/g, req.body.message);
			embeds[k] = embeds[k].replace(/{donator_name}/g, req.body.donator_name);
			embeds[k] = embeds[k].replace(/{amount}/g, utils.format(req.body.amount_raw));
		}

	}
	axios.post(process.env.DISCORD_WEBHOOK, tempEmbed);
}

function handlePostReq(req, res) {
	if(req.query.secret === process.env.SECRET && req.body.type === "donation") {
		webhookTest(req);
		return res.status(200).send("ok");
	} else {
		return res.status(404).send("Not Found");
	}
}

function handleEditEmbed(req, res) {
	if(req.body.token !== process.env.SECRET) {
		return res.status(301).redirect(req.get("host"));
	}
	let tempEmbed = {
		embeds: [{
			title: req.body.title,
			description: req.body.description,
			image: {
				url: req.body.imageUrl
			},
			thumbnail: {
				url: req.body.thumbnailUrl
			},
			footer: {
				text: req.body.footerText
			},
			color: req.body.color
		}]
	};

	fs.writeFileSync("src/embed.json", JSON.stringify(tempEmbed, null, 2));
	return res.status(301).redirect(req.get("host"));
}


module.exports = {
 handlePostReq,
 handleEditEmbed,
 webhookTest
};