// Use this file to add all of the functionality to the website including the XMLHttpRequests. 
// You may use the class examples for references as the XMLHttpRequests always follow the same pattern for the kind of
// work we will be using them for. Remeber google is your friend!

// I choose to keep same code from class since it worked.
var httpGet = function(theUrl)
{
    console.log(theUrl);
    
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        console.log(xmlHttp.responseText);
        document.getElementById('message').innerHTML=xmlHttp.responseText; // message of incorrect/correct password to HTML
    }
    xmlHttp.open("GET", theUrl, false); // true for asynchronous 
    xmlHttp.send();
}

var loginHere = function(){
    // grab user entered data and store in new objects
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // create the URL with username and password to send to server
    var theURL = '/users/'+username+'/'+password;
    httpGet(theURL); // send theURL to httpGet() above
};
 

  