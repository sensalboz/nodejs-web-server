const axios = require('axios')

const request = async city => {
	let decodeCity = decodeURIComponent(city)
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${decodeCity},tr&appid=f7cd366d935a6569a8673f01249ce31a&units=metric`
	const response = await axios.get(url)
	return new Promise((resolve, reject) => {
		if (response.data.main) {
			resolve(response.data)
		} else {
			reject('something went wrog')
		}
	})
}

module.exports = request
