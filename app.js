const express = require('express') ;
const app = express();
const http = require('http');


app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render("../src/frontEnd/home/index");
});


app.listen(3000);
