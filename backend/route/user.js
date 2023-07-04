const express = require("express");

const {
    singleUser,
    getAllUser,
    editUser,
    deleteUser,
} = require("../controller/user");

const { authenticateToken } = require("../middleware/auth");

const router = express.Router();

router.get("/users/getalluser", authenticateToken, getAllUser);
router.get("/users/:id", authenticateToken, singleUser);

router.put("/users/edit/:id", authenticateToken, editUser);
router.delete("/users/delete/:id", authenticateToken, deleteUser);

module.exports = router;