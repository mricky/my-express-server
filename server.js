const express = require('express')
const app = express()
const port = 3000

app.get('/', function(request, response){
	//response.send('hi ricky'); string
	response.send('<h1>Hello World');

});

app.get('/contact', function(request, response){
	response.send("Contact me at : mricky.it@gmail.com /");
});
app.get('/about', (req, res) => res.send("My name is Ricky I loeve code"));

app.get('/hobbies', function(req, res){
	res.send('<ul><li>Cofee</li><li>Juice</ul>');
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))