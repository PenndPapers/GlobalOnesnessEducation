import React, { useEffect, useState } from 'react'
import axios from "axios";
import NavBar from '../../component/NavBar/NavBar'
import { FaRegWindowClose } from 'react-icons/fa';
import { ApplyRegisteration  } from '../../api/RegisterApi';
import dummy_profile from "../../images/dummy-profile-pic.jpg"

const URL = "http://localhost:5000/";
const StudentApply = () => {

  const [CourseeData, setCourseeData] = useState([]);
  const [userData, setUserData] = useState({ firstname: "", lastname: "", email: "", phone: "", guardianNumber: "", class: "", address: "", school: "" });
  const [course, setCourse] = useState([]);

  const onChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setUserData((pre) => {
      return { ...pre, [key]: value }
    })

    if (key === "class") {
      setCourseeData([])
      axios.get((`${URL}admin/getAllCourse/${value}`)).then((res) => {
        res.data.map((c) => {
          setCourseeData((pre) => {
            return [c, ...pre]
          })
        })
      }).catch(((err) => {
        console.log(err);
      }))
    }
  }



  const onAddCourse = (e) => {
    if (e.target.value !== "") {
      console.log(e.target.value);
      if (course.indexOf(e.target.value) === -1) {
        setCourse((pre) => {
          return [e.target.value, ...pre]
        })
      }
    }

  }

  const onDeleteCourse = (e) => {
    console.log(e)
    console.log("clicked ")
    console.log(e.target.id);

    setCourse(course.filter(item => item !== e.target.id))    

  }



  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(userData);
    console.log(course);
  
    ApplyRegisteration({ userData ,   course  })
    setUserData({ firstname: "", lastname: "", email: "", phone: "", guardianNumber: "", class: "", address: "", school: "" })
    setCourse([])
    
  }
  return (
    <div className='pt-20 '>
      <div className='  font-[Poppins] md:flex md:flex-row rounded-2xl bg-white content-center    mx-5 drop-shadow-2xl ' >


        <div className='righSide flex flex-col md:px-20 md:w-[100%] pt-5 md:pt-0 item-center justify-center'>
          <h1 className=' md:text-[32px] text-[16px] font-normal text-center'>Welcome to</h1>
          <div className='flex fex-row text-center justify-center'>
            <h1 className=' md:text-[32px] text-[16px] font-bold text-center'>GLOBAL</h1>
            <h1 className=' md:text-[32px] text-[16px] font-bold text-[var(--orange)] text-center'> ONENESS</h1>
          </div>

          <span className='text-center md:text-[12px] text-[6px]  mt-3'>Please enter your details carefully !</span>
          <form className="flex flex-col max-w-full mt-5  " onSubmit={onSubmitHandler} >
            <div className='flex md:flex-row flex-col   gap-3 justify-around    '>

              <div className='w-[100px] h-[100px] cursor-pointer  mx-5  '>
                <img src={dummy_profile} />
                <span className='text-sm '> Upload Photo</span>
              </div>

              <div className='flex flex-col  max-w-[400px] w-full md:mt-0  mt-5  '>
                <input required={true} id="firstname" className=" md:mx-0 mx-5 border-2 p-2 rounded-md " type="text" value={userData.firstname} onChange={onChangeHandler} placeholder="First Name" />
                <input required={true} id="email" className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="email" value={userData.email} onChange={onChangeHandler} placeholder="Email" />
                <input required={true} id="phone" className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="tel" value={userData.phone} onChange={onChangeHandler} placeholder="Phone Number" />
                <input required={true} id="school" className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="text" value={userData.school} onChange={onChangeHandler} placeholder="School" />
                <input required={true} id="address" className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="text" value={userData.address} onChange={onChangeHandler} placeholder="Address" />

              </div>
              <div className='flex flex-col  max-w-[400px] w-full '>
                <input required={true} id="lastname" className=" md:mx-0 mx-5 border-2 p-2 rounded-md " type="text" value={userData.lasttname} onChange={onChangeHandler} placeholder="Last Name" />


                <select required={true} id="class" className='md:mx-0 mx-5 border-2 p-2 rounded-md mt-8' type="number" value={userData.class} onChange={onChangeHandler}    >
                  <option value=""   >Class</option>
                  <option value="9" >9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>

                <input required={true} id="guardianNumber" className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="tel" value={userData.guardianNumber} onChange={onChangeHandler} placeholder="Guardian Number" />

                <select required={true} id="course" className='md:mx-0 mx-5 border-2 p-2 rounded-md mt-8 snap-y  ' value={course[0]} onChange={onAddCourse}  >

                  {
                    CourseeData.map((c) => {
                      return (
                        <option key={c._id} value={c.Course} className="text-black" >{c.Course}</option>
                      )
                    })
                  }
                </select>

              </div>
            </div>
             
            { course.length >= 1 &&  <span className='text-center md:text-[12px] text-[6px]  mt-3'>Click to Delete</span> } 
            <div className='w-full flex flex-row gap-2 justify-center mt-5 my-3 '>
            
              {course.map((c) => {
                return (
                <div key={Math.random()} className='relative border-2 border-blue-400 text-blue-500 rounded-md p-2 px-3 hover:text-red-600 hover:border-red-600 cursor-pointer  ' id={c} onClick={onDeleteCourse}  >
                  {c}
                  
                  </div>
                )
              })}


              {/* <div className='relative border-2 border-blue-400 text-blue-500 rounded-md p-2 px-3 group '>
                <span className='' >Physics</span>
                <FaRegWindowClose size={12} className='hidden group-hover:block cursor-pointer absolute top-0 right-0 text-red-500' />
              </div>
              <div className='relative border-2 border-blue-400 text-blue-500 rounded-md p-2 px-3 group '>
                <span className='' >Maths</span>
                <FaRegWindowClose size={12} className='hidden group-hover:block cursor-pointer absolute top-0 right-0 text-red-500' />
              </div> */}


            </div>

            <button className="md:mx-10 mx-12 border-2 p-2 font-[Poppins] rounded-md md:mt-8  btn bg-[var(--buttonBlue)] text-white py-2 px-3 " >
              Register
            </button>
            <span className='mx-5 md:mx-0 my-5  md:text-[16px] text-[12px] justify-center text-center '>have an account ? <a className='text-red-600' href='../studentLogin'>Login</a></span>
          </form>
        </div>

      </div>
    </div>
  )
}

export default StudentApply