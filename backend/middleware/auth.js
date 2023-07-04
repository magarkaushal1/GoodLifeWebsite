const { body } = require("express-validator");
const validate = require("../util/validate");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

const signup_validator = validate([
    body("full_name").exists(),
    body("email").exists(),
    body("password").isLength({ min: 8 }),

]);

const login_validator = validate([
    body("email").exists().withMessage("email field is required."),
    body("password").exists().isLength({ min: 8 }),
]);

// const authenticateToken = (req, res, next) => {
//   try {
//     let token = req.headers?.authorization?.split(" ")[1];

//     let decoded;
//     if (!token) {
//       return res.status(401).send({
//         msg: "Invalid Token",
//       });
//     }
//     if (token) {
//       decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
//     }
//     if (decoded) {
//       req.user = decoded;
//       next();
//     }
//   } catch (err) {
//     next(err);
//   }
// };
const authenticateToken = async(req, res, next) => {
    try {
        let token = req.headers.authorization.split(" ")[1];
        let decoded;
        if (token) {
            decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        }
        if (decoded) {
            (req.user = decoded), next();
        } else {
            return res.status(401).send({
                msg: "Invalid Token",
            });
        }
    } catch (err) {
        next(err);
    }
};


module.exports = {
    signup_validator,
    login_validator,
    authenticateToken,
};