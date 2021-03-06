var express = require('express');
var app = express();
app.disable('x-powered-by'); // For Header Safety
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
	res.render('home');
});

app.get('/home', function(req, res){
	res.render('home');
});

app.listen(app.get('port'), function(){
	console.log('Running on Localhost 3000')
});