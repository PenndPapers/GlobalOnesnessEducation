import CoursesModel from "../Models/coursesModel.js"
import RegistrationModel from "../Models/RegistrationModel.js"

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
   
   res.status(200).json("Success full added ")
}

export const getAllCourse = async (req, res, next) => {
   const AllCourse = await CoursesModel.find({Class : req.params.class});
   if (AllCourse.length === 0 ) return res.status(400).json("No Course ");
   else  res.status(200).json(AllCourse)
}

export const getStudentApplication = async (req, res , next ) => {
   
     const students = await  RegistrationModel.find();
     console.log(students);
     return res.status(200).json(students);
}


export const deleteStudentApplication = async (req, res , next ) => {
   
   console.log(req.params.id);

  const student = await RegistrationModel.findOneAndDelete({_id : req.params.id});

  if(student)  return res.status(200).json("successfully removed ")

   
}

