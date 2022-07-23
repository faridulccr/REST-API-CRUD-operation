// Dependencies
const express = require("express");
const cors = require("cors");
require("./config/db");
// Router
const homeRouter = require("./routers/home.route");
const userRouter = require("./routers/user.route");

//create express server
const app = express();

app.use(cors()); // for any cross-origin (universal)
// app.use(express.static());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("views")); // for static file

app.use("/", homeRouter);
app.use("api/users", userRouter);

// not found route handler
app.use((req, res, next) => {
    res.status(404).json({
        message: "page not fond",
    });
});

// server error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        message: err,
    });
});

module.exports = app;
