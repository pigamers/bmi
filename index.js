const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get( '/', function (req,res) {
    res.sendFile(__dirname + "/bmicalc.html"); 
});

app.post('/',function(req,res){
    // console.log(req.body.height);

    var h = req.body.height;
    var w = req.body.weight;

    res.send("thanks for posting!" + h+w);
});

app.listen(1000, function() {
    console.log("Server is running at 1000.");
})