const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// The schema it's thing that define structure of the data base
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


// model :

const Users = mongoose.model('Users', blogSchema);

module.exports = Users;