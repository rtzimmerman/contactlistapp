var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

//app.get('/', function(req, res){
//	res.send('hello world from server');
//});
//app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function(req, res){
	console.log("i received a GET request");

	person1 = {
                name: 'Tim',
                email: 'tim@odbc.com',
                phone: '(312) 702-9000'
        };

        person2 = {
                name: 'Sara',
                email: 'sara@odbc.com',
                phone: '(310) 456-4000'
        };

        person3 = {
                name: 'Derek',
                email: 'derek@pwc.com',
                phone: '(212) 754-3900'
        };

        var contactlist = [person1, person2, person3];
	res.json(contactlist);
});
app.listen(3000);

console.log('server running on port 3000');
