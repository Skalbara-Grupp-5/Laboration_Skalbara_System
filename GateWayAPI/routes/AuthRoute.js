const { Register, Login } = require("../authAPI/authServiceAPI");
const router = require("express").Router();
const { UserVerification } = require("../middleware/AuthMiddleware");

//Routes for different paths
router.post("/gateway/register", Register);
router.post("/gateway/login", Login);
router.post("/gateway/", UserVerification);

module.exports = router;