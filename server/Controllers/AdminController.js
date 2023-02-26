import CoursesModel from "../Models/coursesModel.js"


export const AddCourse = async (req, res, next) => {
   
   console.log(req.body)


   const newCourse = new CoursesModel({
      Class: req.body.Class,
      Course: req.body.Course,
      CourseId: req.body.CourseId,
      Lectures : req.body.Lectures,
      Faculty : req.body.Faculty
   })
   console.log(newCourse)
   let existingCourse = await CoursesModel.findOne({CourseId : newCourse.CourseId  });
   if (existingCourse) return res.status(400).json("Course ID already exist");
   existingCourse = await CoursesModel.findOne({ Course: newCourse.Course , Class : newCourse.Class  });
   if (existingCourse) return res.status(400).json("Course already exist");
     await newCourse.save()
   //.then((r)=>{
   //    console.log(r)
   //    res.status(200).json("Success full added ")
   // }).catch((err)=>{
   //    console.log(err)
   //    res.status(400).json("Failed  oops ")
   // });
   res.status(200).json("Success full added ")
}

export const getAllCourse = async (req, res, next) => {
   const AllCourse = await CoursesModel.find({Class : req.params.class});
   if (AllCourse.length === 0 ) return res.status(400).json("No Course ");
   else  res.status(200).json(AllCourse)
}