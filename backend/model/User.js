const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    full_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: [true, "e-mail is required"],
        validate: {
            validator: async function(value) {
                let exists = await mongoose.models.User.count({ email: value });
                if (exists) {
                    return false;
                }
            },
            msg: "email already exists",
        },
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"],
        minlength: [8, "password must have at least (8) characters"],
    }

});

module.exports = mongoose.model("User", UserSchema);