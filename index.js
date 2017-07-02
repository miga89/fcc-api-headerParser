var express = require("express");
var u = require("url");
var app = express();

app.use(express.static(__dirname));

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendFile(__dirname + '/index.html');
 });


/* serves all api requests */
app.get("/api/whoami", function(req, res) {
    var ipAddress = req.ip;
    var lang = req.headers["accept-language"];
    lang = lang.split(',')[0];
    var useragent = req.headers['user-agent'];

    var software = useragent.match(/\((.*?)\)/)[0].slice(1,-1);


    var content = {ipaddress: ipAddress, language: lang, software: software};


    res.json(content);
 });


var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });