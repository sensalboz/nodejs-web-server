const { program } = require('commander')
const request = require('./api')

// gettings city on command line
program.option('-c --city <type>', 'getting a city name')
program.parse(process.argv)
let { city } = program

if (city) {
	request(city).then(
		response => {
			console.log(response)
		},
		err => console.log(err.code, 'internet wasnt  found')
	)
} else {
	console.log('enter a city name')
}

// ***promise chain method *** //

// function getLocation() {
// 	return new Promise((resolve, reject) => {
// 		resolve('instabul')
// 	})
// }

// function getWeather(location) {
// 	return new Promise((resolve, reject) => {
// 		resolve(`${location} is goig down`)
// 	})
// }

// getLocation()
// 	.then(location => {
// 		return getWeather(location)
// 	})
// 	.then(weather => {
// 		console.log(weather)
// 	})
