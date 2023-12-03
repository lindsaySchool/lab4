//require mongoose
const mongoose = require('mongoose');
//require schema
const Schema = mongoose.Schema;
const MessageSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    added: Date
});
const Message = mongoose.model('Message', MessageSchema);

//export the model
module.exports = Message;