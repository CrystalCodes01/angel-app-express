"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client = require('twilio')("AC2c3c58211dd4070f5ad02c33786defc1", "581375e7b8e5a09182a2497843c19d53");
var protectedRouter = express_1.Router();
exports.protectedRouter = protectedRouter;
protectedRouter.get('/', function (req, res, next) {
    client.messages.create({
        body: "Hey There",
        to: "+13142784979",
        from: "+13143000312"
    }, function (err, data) {
        if (err) {
            console.log("Could not send message");
        }
        else {
            console.log("Has been contacted");
        }
        ;
    });
    var fakeObject = {
        message: "This is the message you got from the backend"
    };
    res.json(fakeObject);
});
//# sourceMappingURL=protected.js.map