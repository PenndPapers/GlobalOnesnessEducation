import React, { useState } from 'react'
import NavBar from '../../component/NavBar/NavBar'
import img from '../../images/dl.beatsnoop.com-600px-1675484921.jpg'
import {useDispatch ,useSelector} from 'react-redux'
import {studentLogin} from '../../features/auth/authAction'
import { Link ,useNavigate } from 'react-router-dom'

const StudentLogin = () => {

  const [data, setData] = useState({ studentId: '', password: '' });
  const dispatch = useDispatch()
  const Navigate = useNavigate()
 
  const handleInputChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    dispatch(studentLogin(data))

    Navigate('/studentDashboard')
   
    // console.log(user)
    setData({ studentId: '', password: '' });
  }

  return (

    <>
      <div className=' font-[Poppins] md:flex md:flex-row rounded-2xl bg-white content-center md:mx-[10%] md:my-[10%] my-[40%] mx-[2%] drop-shadow-2xl ' >
        <div className='md:visible hidden leftSide max-h-full rounded-3xl md:flex items-center justify-center'>
          <img className='rounded-3xl' src={img} alt="image for login" />
        </div>

        <div className='righSide flex flex-col md:px-[5%] md:w-[50%] pt-[5%] md:pt-0 item-center justify-center'>
          <h1 className=' md:text-[32px] text-[26px] font-normal text-center'>Welcome to</h1>
          <div className='flex fex-row text-center justify-center'>
            <h1 className=' md:text-[32px] text-[26px] font-bold text-center'>GLOBAL</h1>
            <h1 className=' md:text-[32px] text-[26px] font-bold text-[var(--orange)] text-center'> ONENESS</h1>
          </div>

          <span className='text-center md:text-[12px] text-[12px]  mt-[1%]'>Please enter your details carefully !</span>
          <form className="flex flex-col max-w-full " onSubmit={handleFormSubmit}>
            <input className=" md:mx-0 mx-[5%] border-2 p-[2%] rounded-md mt-8"
              type="text"
              placeholder="Student ID"
              name='studentId'
              value={data.studentId}
              onChange={handleInputChange}
            />
            <input className="md:mx-0 mx-[5%] border-2 p-[2%] rounded-md mt-8 mb-[5%] md:mb-0"
              type="password"
              name='password'
              value={data.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
            <button className="md:mx-[20%] mx-[20%] border-2 p-[2%] font-[Poppins] rounded-md md:mt-[8%] bg-[var(--buttonBlue)] text-white  " >
              Login
            </button>
            <span className='mx-[3%] md:mx-0 my-[5%]  md:text-[16px] text-[12px] justify-center text-center '>Don!t have an account ? <a className='text-red-600' href='../studentRegister'>Register</a></span>
          </form>
        </div>
      </div>
    </>
  )

}

export default StudentLogin