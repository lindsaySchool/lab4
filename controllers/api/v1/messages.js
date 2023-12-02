//import the model /model/messages.js
const Message = require('../../../models/messages');

//functie
const getAll = (req, res) => {
    //iets teruggeven
    Message.find({ "user": "Jan" })
    .then(docs => {
        res.json({ 
            "status": "succes",
            "data": {
                "message": docs.map(doc => doc.text)
            } 
        });
    })
    .catch(err => {
        console.log(err);
    });
}

const create =  (req, res, next) => {
    let message = new Message();
    message.text = req.body.text;
    message.user = req.body.user;
    message.added = new Date();
    message.save()
    .then(doc => {
        console.log("geen error");
        //iets teruggeven
        res.json({
            status: "success",
            data: {
                "message": doc
            }
        });
    })
    .catch(err => {
        console.log(err);
        res.json({ 
            "status": "error",
            "message": "Could not save this message"
        });
    });
}

//export the controller
module.exports.getAll = getAll;
module.exports.create = create;