const { log } = require("console");
const express = require("express");
const bodyParser =require("body-parser");
const { STATUS_CODES } = require("http");
const https = require("https");

const app= express();

app.use(bodyParser.urlencoded({extended:true}));

   app.get("/", function(req,res){
    res.sendFile(__dirname + "/index.html");
  /*  const query = "chennai"; 
    const url="https://api.openweathermap.org/data/2.5/weather?q="+ query +"&appid=a872ac223b8299d936fab9596b406d2e&units=metric";
    https.get(url,function(response){
       console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata= JSON.parse(data)
            console.log(weatherdata);
            const temp=weatherdata.main.temp;
            const icon=weatherdata.weather[0].icon;
            const imageUrl="https://openweathermap.org/img/wn/"+ icon+"@2x.png";

            //console.log(temp);
            res.write("<p>From this website you can know the weather details to any location in the World.</p>")
            res.write("<p>Name the location and Click on the sumbit button</p>")
            res.write("<h1>The temperature of"+ query + "is"+ temp+" degree Celcius.</h1>")
            res.write("<image src="+ imageUrl+">")
            res.send();
        })
    })//4af420bc9976b9d4604f107b1049f7d3*/
            
        });
        app.post("/",function(req,res){
            console,log(req.body.cityName);
           // console.log("post recived");
               const query = req.body.cityName; 
    const url="https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=a872ac223b8299d936fab9596b406d2e&units=metric";
    https.get(url,function(response){
       console.log(response.statusCode);
        response.on("data",function(data){
            const weatherdata= JSON.parse(data)
            console.log(weatherdata);
            const temp=weatherdata.main.temp;
            const icon=weatherdata.weather[0].icon;
            const imageUrl="https://openweathermap.org/img/wn/"+ icon+"@2x.png";

            //console.log(temp);
            res.write("<p>From this website you can know the weather details to any location in the World.</p>")
            res.write("<p>Name the location and Click on the sumbit button</p>")
            res.write("<h1>The temperature of " + query + " is "+ temp+" degree Celcius.</h1>")
            res.write("<image src="+ imageUrl+">")
            res.send();
        })
    })//4af420bc9976b9d4604f107b1049f7d3
        });
app.listen(3000,function(){
    console.log("server is running on port 3000");
})

