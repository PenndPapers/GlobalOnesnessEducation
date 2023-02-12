import CoursesModel from "../Models/coursesModel.js"


export const AddCourse = async (req, res, next) => {
   
   console.log(req.body)
   const Course = new CoursesModel({
      Class: req.body.Class,
      Course: req.body.Course,
      CourseId: req.body.CourseId
   })
   let existingCourse = await CoursesModel.findOne({ Course: Course.Course , Class : Course.Class });
   if (existingCourse) return res.status(400).json("Course already exist");
   await Course.save();
   res.status(200).json("Success full added ")
}

export const getAllCourse = async (req, res, next) => {
   const AllCourse = await CoursesModel.find({Class : req.params.class});
   if (AllCourse.length === 0 ) return res.status(400).json("No Course ");
   else  res.status(200).json(AllCourse)
}