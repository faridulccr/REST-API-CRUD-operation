const mongoose = require("mongoose");

// to create a structure of database's record/document
const userScema = mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

// to create a User model for collection of documents
const User = mongoose.model("User", userScema); // returns a constructor object
module.exports = User;
