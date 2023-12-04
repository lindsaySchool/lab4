//import the model /model/messages.js
const Message = require('../../../models/Messages');

//functie
const getAll = (req, res) => {
    let user = req.body.user;

    if(user){
        //GET /api/v1/messages?user=naam
        Message.find({ "user": user })
        //iets teruggeven
        .then(docs => {
            res.json({ 
                "status": `GETTING messages for username ${user}`,
                "data": {
                    "message": docs.map(doc => ({ text: doc.text, user: doc.user }))
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
    }else{
        //GET /api/v1/messages
        Message.find()
        //iets teruggeven
        .then(docs => {
            res.json({ 
                "status": "GETTING messages",
                "data": {
                    "message": docs.map(doc => ({ text: doc.text, user: doc.user }))
                } 
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
    
}
//GET /api/v1/messages/:id
const getById = (req, res) => {
    let id = req.params.id;
    Message.findById(id)
    //iets teruggeven
    .then(doc => {
        res.json({ 
            "status": "GETTING message with id " + id,
            "data": {
                "message": doc.text
            } 
        });
    })
    .catch(err => {
        console.log(err);
    });

}

const create =  (req, res, next) => {
    let message = new Message();
    message.user = req.body.user;
    message.text = req.body.text; 
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
//PUT /api/v1/messages/:id
const update = (req, res) => {
    let id = req.params.id;
    let text = req.body.text;
    console.log(text);
    Message.findById(id)
    .then(doc => {
        doc.text = text;
        return doc.save();
    })
    .then(doc => {
        res.json({ 
            "status": "UPDATING message with id " + id,
            "data": {
                "message": doc.text
            } 
        });
    })
    .catch(err => {
        console.log(err);
        res.json({
            "status": "error",
            "message": "Could not update this message"
        
        });
    });
}
//DELETE /api/v1/messages/:id
const remove = (req, res) => {
    let id = req.params.id;
    Message.findByIdAndDelete(id)
    .then(doc => {
        res.json({ 
            "status": "REMOVING message with id " + id,
        });
    })
    .catch(err => {
        console.log(err);
    });
}

//export the controller
module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;