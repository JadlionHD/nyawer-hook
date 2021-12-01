const axios = require("axios");


// contoh request ke servernya
module.exports.test = () => {
	axios({
		url: `http://localhost:3000/callback/discord?secret=${process.env.SECRET}`,
		method: "post",
		data: {
			message: "anda hebat!",
			amount_raw: 1,
			donator_name: "udin",
			type: "donation"
		}
	}).then((res) => {
		console.log(res);
	}).catch((err) => {
		console.log(err);
	})
}


// format nomor ada komanya
module.exports.format = (num) => {
  if(num === null)
    return null;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}