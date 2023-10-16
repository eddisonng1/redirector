var express = require('express')
var app = express()
var _ = require('underscore');

app.listen(3000, function(){
    console.log("Running server")
})


var redirectList = [
    {from : "/testing-redirect-service",to:"https://apple.com"}
]

_.each(redirectList, function(redirect){
    app.get(redirect.from, function(req, res) {
        res.redirect(301, redirect.to)
    });
})
