import React from 'react'
import img from '../../images/shutterstock_download.jpg'

const TeacherLogin = () => {
  return (
    <div className='py-20'>
      <div className=' font-[Poppins] md:flex md:flex-row rounded-2xl bg-white content-center md:mx-[10%] md:my-[10%] yy-[40%] mx-[2%] drop-shadow-2xl ' >

        <div className='md:visible hidden leftSide max-h-full rounded-3xl md:flex items-center justify-center'>
          <img className='rounded-3xl' width='700px' height='600px' src={img} alt="image for login" />
        </div>

        <div className='righSide flex flex-col md:px-[5%] md:w-[50%] pt-[5%] md:pt-0 item-center justify-center'>
          <h1 className=' md:text-[32px] text-[26px] font-normal text-center'>Greetings from</h1>
          <div className='flex fex-row text-center justify-center'>
            <h1 className=' md:text-[32px] text-[26px] font-bold text-center'>GLOBAL</h1>
            <h1 className=' md:text-[32px] text-[26px] font-bold text-[var(--orange)] text-center'> ONENESS</h1>
          </div>

          <span className='text-center md:text-[12px] text-[12px]  mt-[1%]'>Please enter your details carefully !</span>
          <form className="flex flex-col max-w-full pb-[5%]" action="">
            <input className=" md:mx-0 mx-[5%] border-2 p-[2%] rounded-md mt-8" type="text" placeholder="Teacher ID" />
            <input className="md:mx-0 mx-[5%] border-2 p-[2%] rounded-md mt-8 mb-[5%] md:mb-0" type="password" placeholder="Password" />
            <button className="md:mx-[20%] mx-[20%] border-2 p-[2%] font-[Poppins] rounded-md md:mt-[8%] bg-[var(--buttonBlue)] text-white  " >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TeacherLogin