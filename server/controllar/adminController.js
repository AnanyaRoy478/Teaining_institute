const courseModel = require("../Schema/courseSchema");
const userModel = require("../Schema/userSchema");
// const jwt = require ('jsonwebtoken');
const dotenv = require("dotenv");

//dot  config
dotenv.config()

//post new course
module.exports.postNewCourseByAdmin = async(req,res)=>{
    try {
        const course= new courseModel(req.body);
    await course.save();
    res.status(201).send({
        success:true,
        message:"Succesfully entered new course",
        course})
        
    } catch (error) {
        console.log(error)
    }
}

//edit course
module.exports.editCourseByAdmin = async (req, res) => {
    try {
        const id = req.params.id; 
        const updatedCourse = await courseModel.findOneAndUpdate(
            { _id: id },
            req.body, 
            { new: true } 
        );

        res.status(200).send({
            success: true,
            message: "Successfully updated one course",
            updatedCourse
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};

//delete course
module.exports.deleteCourseByAdmin = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await courseModel.deleteOne({ _id: id });

        if (result.deletedCount > 0) {
            res.status(200).json({ message: "One course has been deleted" });
        } else {
            res.status(404).json({ message: "Course not found" });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}


//get all student data
module.exports.fetchAllStudentDataByAdmin = async(req,res)=>{
    try {
        const allStudentData = await userModel.find({ role: 'student' });
        res.status(200).json(allStudentData);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}