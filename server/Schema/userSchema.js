const mongoose =require("mongoose")

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required : [true, "First name is required"],
    },
    lastName : String,
    email: {
        type: String,
        required : [true, "Email is required"],
        unique: [true, "This email id, already have been registered"]
    },
    country : {
        type: String,
        required : [true, "Country name is required"],
    },
    state : String,
    city : String,
    password : {
        type: String,
        required : [true, "Password is required"],
    },
    // confirmPassword : {
    //     type: String,
    //     default : mongoose.Schema.password
        // required : [true, "Confirm Password is required"],
    // },
    role: {
        type: String,
        // required: [true, "role is required"],
        enum: ["admin", "student"],
        default : "student"
    },
},{versionKey: false})

const userModel= mongoose.model("user",userSchema);
module.exports = userModel;