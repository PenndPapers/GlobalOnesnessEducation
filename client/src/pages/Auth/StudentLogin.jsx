import React from 'react'
import NavBar from '../../component/NavBar/NavBar'
import img from '../../images/dl.beatsnoop.com-600px-1675484921.jpg'

const studentLogin = () => {
  return (
    <>
      <NavBar />
      <div className=' font-[Poppins] md:flex md:flex-row rounded-2xl bg-white content-center md:mx-60 md:my-28 my-52 mx-5 drop-shadow-2xl ' >

        <div className='md:visible invisible leftSide max-h-full rounded-3xl flex items-center justify-center'>
          <img className='rounded-3xl' src={img} alt="image for login" />
        </div>

        <div className='righSide flex flex-col md:px-20 md:w-[50%] pt-5 md:pt-0 item-center justify-center'>
          <h1 className=' md:text-[32px] text-[16px] font-normal text-center'>Welcome to</h1>
          <div className='flex fex-row text-center justify-center'>
            <h1 className=' md:text-[32px] text-[16px] font-bold text-center'>GLOBAL</h1>
            <h1 className=' md:text-[32px] text-[16px] font-bold text-[var(--orange)] text-center'> ONENESS</h1>
          </div>

          <span className='text-center md:text-[12px] text-[6px]  mt-3'>Please enter your details carefully !</span>
          <form className="flex flex-col max-w-full " action="">
            <input className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8" type="text" placeholder="Student ID" />
            <input className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8 mb-8 md:mb-0" type="password" placeholder="Enter your password" />
            <button className="md:mx-10 mx-12 border-2 p-2 font-[Poppins] rounded-md md:mt-8  btn bg-[var(--buttonBlue)] text-white py-2 px-3 " >
              Login
            </button>
            <span className='mx-5 md:mx-0 my-5  md:text-[16px] text-[12px] justify-center text-center '>Don!t have an account ? <a className='text-red-600' href='../studentRegister'>Register</a></span>
          </form>
        </div>

      </div>

    </>
  )

}

export default studentLogin