var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("Hi, Welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res){
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "...."
    }
    var animal = req.params.animal.toLowerCase();
    var sound = sounds[animal];
    res.send("THE " + animal + " SAYS '" + sound + "'");
});

app.get("/repeat/:message/:times", function(req,res){
    var message = req.params.message;
    var times = Number(req.params.times);
    var result = "";

    for(var i = 0; i < times; i++){
        result += message + " ";
    }
    res.send(result);
});

app.get("*",function(req, res){
    res.send("Sorry Page not found.");
});

app.listen(3000, function(){
    console.log("Now serving your app!");
});