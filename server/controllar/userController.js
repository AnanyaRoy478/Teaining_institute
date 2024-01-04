const userModel = require("../Schema/userSchema");
const courseModel = require("../Schema/courseSchema");
const jwt = require ('jsonwebtoken');
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');


//dot  config
dotenv.config()


//register
module.exports.register = async (req, res) => {
    try {
        const existingUser = await userModel.findOne({ email: req.body.email });

        if (!existingUser) {
            // Hash the password before saving it
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const user = new userModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                country:req.body.country,
                state: req.body.state,
                city: req.body.city,
                password: hashedPassword,
                role: req.body.role
            });

            await user.save();
            res.status(201).send({
                success: true,
                message: "Successfully registered",
                user
            });
        } else {
            res.status(500).send({
                success: false,
                message: "Email ID already registered"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};


//login
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExists = await userModel.findOne({ email: email });

        if (userExists) {
            // Compare the provided password with the hashed password in the database
            const passwordMatch = await bcrypt.compare(password, userExists.password);

            if (!passwordMatch || userExists.email !== email) {
                return res.status(400).send({ code: 400, message: "Email or Password wrong" });
            } else {
                const _token = jwt.sign({ ...userExists }, process.env.JWT_SECRET, { expiresIn: '1h' });

                return res.status(200).send({
                    code: 200,
                    message: 'Login Successful',
                    token: _token,
                    role: userExists.role
                });
            }
        } else {
            return res.status(400).send({ code: 400, message: 'Email not found' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send({ code: 500, message: 'Internal Server Error' });
    }
};


//get all courses
module.exports.fetchAllCoursesByUser = async (req, res) => {
    try {
        const allCourse = await courseModel.find();
        res.status(200).json(allCourse);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}

//get course by ID
module.exports.fetchCourseById = async (req,res)=>{
    try {
        const id = req.params.id;
        const course = await courseModel.findById({_id:id});
        if(!course){
            res.status(404).json({message:'No such course exists'})
        }
        else {
        res.status(200).json(course);}
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}