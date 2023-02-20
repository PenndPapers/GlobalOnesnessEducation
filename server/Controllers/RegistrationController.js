
import RegistrationModel from "../Models/RegistrationModel.js"


export const Applyregistration = async (req, res, next) => {

  console.log(req.body)
  const d = new Date()
  console.log(d.getDate());
 
  const user = new RegistrationModel(
    {
      firstname: req.body.userData.firstname,
      lastname: req.body.userData.lastname,
      email: req.body.userData.email ,
      phone: req.body.userData.phone ,
      guardianNumber: req.body.userData.guardianNumber ,
      class: req.body.userData.class,
      address: req.body.userData.address ,
      school: req.body.userData.school,
      courses : req.body.course,
      joiningDate : d ,
    }
  )
  console.log(user);



  let existingUser = await RegistrationModel.findOne({ email: user.email });
  if (existingUser) return res.status(400).json("Student already exist");

  const savedUser = await user.save();
  return res.json(savedUser);
}
