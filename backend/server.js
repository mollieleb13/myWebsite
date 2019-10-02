var express = require('express'); // remember to install these in the top directory to fill in 
var path = require('path');      // your package.json, as well as anything else you want to add
var app = express();
app.use(express.static('../public/'));

var config = require('./database.json');
// Don't change anything above this line unless you know what it will do
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});
// use path with username and password : 
app.get('/users/:username/:password',function(req,res){
    // bring in user data from text fields and store in object for Username & Password
    var userEntryName = req.params.username;
    var userEntryPassword = req.params.password;

    // For Loop to search json file if user data is correct.
    for(i= 0; i<config.Users.length; i++){
        // If Else Statement to determine if username is correct with message else displays no user yet message
        if (config.Users[i].username === userEntryName) {
            // If Else Statement to determine if password is correct with message else displays password incorrect message
            if (config.Users[i].password === userEntryPassword) {
                var messageToUser = "Login is correct. Thank you. You are awesome."; break
            } else {
               var messageToUser = "Your password is incorrect. Please try again. Almost awesome."; break
            } 
        } else {
            var messageToUser = "Oh no! You are not an awesome member yet. Please wait until our technology improves.";
        }
    }
    res.send('<h7> '+messageToUser+'</h7>');
});


app.listen(8080);
