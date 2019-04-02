var express=require('express');

var bodyParser = require('body-parser');
var userRoute=require('./routers/user.route');


var app=express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var port=3000;
app.set('view engine','pug');
app.set('views','./views');
app.get('/',function(req,res){
	res.render('index',{
		name:'ABC'
	}); //index là path
});
app.use(express.static('public'))
app.use('/users',userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))