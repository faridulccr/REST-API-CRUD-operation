const express = require("express");
const router = express.Router();

// Dependencies
const {
    getAllUsers,
    getOneUser,
    createUsers,
    updateUser,
    deleteUser,
} = require("../controllers/user.controller");

router.post("/", createUsers);
router.get("/", getAllUsers);
router.get("/:id", getOneUser);
// patch method is better for a single document update than put method
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
