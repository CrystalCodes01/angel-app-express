import { Router, Response} from "express";
var client = require('twilio')("AC2c3c58211dd4070f5ad02c33786defc1", "581375e7b8e5a09182a2497843c19d53");

const protectedRouter: Router = Router();

protectedRouter.get('/', function(req, res:Response, next){

    client.messages.create({
        body: '[This is a test from Safety Pin] ALERT! Crystal is in need of help',
        to: "+13142784979",
        from: "+13143000312"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    client.messages.create({
      // Nik
        body: 'This is a test from Safety Pin] ALERT! Crystal is in need of help',
        to: "+17039018334",
        from: "+13143000312"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    client.messages.create({
      // Blake
        body: 'This is a test from Safety Pin] ALERT! Crystal is in need of help',
        to: "+16784711521",
        from: "+13143000312"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    client.messages.create({
      // Haney
        body: 'This is a test from Safety Pin] ALERT! Crystal is in need of help',
        to: "+13136106987",
        from: "+13143000312"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    client.messages.create({
      // Edward
        body: 'This is a test from Safety Pin] ALERT! Crystal is in need of help',
        to: "+13124021551",
        from: "+13143000312"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    let fakeObject = {
        message: "This is the message you got from the backend"
    };
    res.json(fakeObject);
});

export {protectedRouter}
