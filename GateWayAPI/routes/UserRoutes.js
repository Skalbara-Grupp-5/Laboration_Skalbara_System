const express = require("express");
const router = express.Router();
const { GetUsers, UpdateUser } = require("../userAPI/userServiceAPI");

//Routes for different paths
router.get("/gateway/users", GetUsers);
router.post("/gateway/updateUser", UpdateUser);

module.exports = router;
