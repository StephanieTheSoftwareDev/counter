//Modules:
//Load the express module
var express = require('express');
//new code
var session = require('express-session');
//Invoke var express and store the resulting application in var app
var app = express();


//adding encryption string (The same as the secret phrase in Python/Django):
app.use(session({secret:'codingdojorocks'})); 

//This is the location where express will look for the ejs views
app.set('views',__dirname + '/views');
//Now let's set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

let count = 0;

//Let's handle the base route '/'
app.get('/', function(request, response){
    count++;
    response.render('index.ejs', {count:count})
});

app.get('/plus_two', function(request, response){
    count++;
    response.redirect('/')
});

app.get('/reset_counter', function(request, response){
    count=0;
    response.redirect('/')
});

//This is the line that tells our server to use the "/static" folder for static content
app.use(express.static(__dirname + "/static"));
//two underscroes before dirname
//try printing out dirname using console.log to see what it is and why we use it

//Tell the express app to listen on port 8000
//This line will almost always be at the end of your server.js file
//We only tell the server to listen after we set up all of our rules
app.listen(8000, function(){
    console.log("Listening on port 8000");
})