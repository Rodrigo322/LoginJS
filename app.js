const express = require('express') ;
const app = express();
const http = require('http');
const routerUser = require('./src/routes/user');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routerUser);
app.get('/',function(req,res){
	res.render("../src/frontEnd/home/index");
});
app.get('/cadastro',function(req,res){
	res.render("../src/frontEnd/home/cadastro");
});



app.listen(3000);
