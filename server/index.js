const express = require("express");
const dotenv = require("dotenv");
const cors =require("cors"); 
const connectDB = require("./config/db")
const checkLogin = require('./AuthMiddleware/cheackLogin')
const userController= require('./controllar/userController')
const adminController= require('./controllar/adminController')

const app = express();

//middlewares
app.use(express.json())
app.use(cors())

//dot  config
dotenv.config()

//mondodb connection
connectDB()


app.get("/",(req,res)=>{
    res.status(200).json("Welcome to ProLearn Nexus");
})


//user controller
// new register
app.post("/register", userController.register);
//user login
app.post("/login", userController.login)
// get all courses
app.get("/allcourses", userController.fetchAllCoursesByUser);
//get particular course
app.get("/course/:id", userController.fetchCourseById);


//admin controller
// app.post("/login", adminController.loginByAdmin)
//post new course
app.post("/postCourse",checkLogin,adminController.postNewCourseByAdmin)
// edit course
app.put("/editCourse/:id",checkLogin, adminController.editCourseByAdmin)
// Delete course
app.delete("/deleteCourse/:id",checkLogin, adminController.deleteCourseByAdmin);
//get all student data
app.get("/allStudentData", adminController.fetchAllStudentDataByAdmin)



//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
});