const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
require("dotenv").config();
const { handlePostReq, handleEditEmbed } = require("./Saweria.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/web/views"));
app.use(express.static(path.join(__dirname, "/web/public")));

app.post("/callback/discord", handlePostReq);
app.get("/", (req, res) => {
	const embed = JSON.parse(fs.readFileSync("src/embed.json", "utf8"));
	res.render("index.ejs", {embed: embed.embeds[0]});
});
app.post("/edit/embed", handleEditEmbed);

app.listen(process.env.PORT, () => {
	console.log("Web Server siap!");
})