// Dependencies
const mongoose = require("mongoose");
const config = require("./config");

const dbURL = config.db.url;

// connect application to mongoDB service
mongoose
    .connect(dbURL)
    .then(() => {
        console.log("mongodb atlas is connected");
    })
    .catch((err) => {
        console.log(err);
        process.exit(1); // to stop server when occurs an error
    });
