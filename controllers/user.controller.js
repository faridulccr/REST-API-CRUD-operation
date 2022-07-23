// Built-in Dependencies
const { v4: uuidv4 } = require("uuid");

// Custom Dependecies
const User = require("../models/user.model");

//CRUD operations
const createUsers = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            name: req.body.name,
            age: Number(req.body.age),
        });
        // to store newUser in mongoDB
        await newUser.save();
        // sending a response to front-end
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getOneUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({ id: req.params.id });
        user.name = req.body.name;
        user.age = Number(req.body.age);
        // to restore the user to mongoDB
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ id: req.params.id });

        res.status(200).json({
            message: "user was successfully deleted",
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
    createUsers,
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
};
