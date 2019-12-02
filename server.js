const express = require('express')
const app = express()
const port = 3000

app.get('/', function(request, response){
	//response.send('hi ricky'); string
	response.send('<h1>Hello World');

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))