const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String
    },
});

// Export the model
module.exports = mongoose.model('User', UserSchema);