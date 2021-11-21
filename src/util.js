const axios = require("axios");


// contoh request ke servernya
module.exports.test = () => {
	axios({
		url: `http://localhost:3000/test?secret=${process.env.SECRET}`,
		method: "post",
		data: {
			message: "anda hebat!",
			duit: "1",
			nama: "udin"
		}
	}).then((res) => {
		console.log(res.status);
	}).catch((err) => {
		console.log(err.status);
	})
}


// format nomor ada komanya
module.exports.format = (num) => {
  if(num === null)
    return null;
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}