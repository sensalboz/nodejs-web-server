// const https = require('https')
// const url = 'https://ipapi.co/8.8.8.8/json'
// const fs = require('fs')
// const path = require('path')
// https.get(url, res => {
// 	let body = ''

// 	res.on('data', data => {
// 		body += data
// 	})

// 	res.on('end', () => {
// 		fs.writeFile(
// 			path.join(__dirname, '/google.json'),
// 			body,
// 			(err, data) => {
// 				if (err) throw err
// 				console.log(data)
// 			}
// 		)
// 	})
// })
