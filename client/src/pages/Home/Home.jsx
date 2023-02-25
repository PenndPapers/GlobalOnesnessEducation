
import React from 'react'
import Carousel from '../../component/Home/Carousel'
import g from "../../images/Group.jpg"
import p from "../../images/dummy-profile-pic.jpg"
import About from './About'
import { Link } from 'react-router-dom'
import Teachers from '../../component/Teachers'
const home = () => {


  return (
    <>
      <section className="w-5/6 mx-auto  flex flex-row justify-center items-center py-[5%] ">
        <h1 className="lg:text-5xl lg:font-bold  sm:text-2xl text-xs font-normal font-[Roboto] text-[var(--colorPrimary)] mt-8" >
          10 Day Free Demo Classes!!
        </h1>
        <Link to='../studentRegister'>
          <button className=" btn hover:bg-transparent bg-[var(--buttonBlue)] font-[Poppins]  text-white mt-8 ml-8 hover:text-[var(--buttonBlue)]  font-semiboldtext-white py-1 px-2  sm:py-2 sm:px-3  border-[var(--buttonBlue)] border-2 hover:border-[var(--colorPrimary)] rounded">
            Apply Now
          </button>
        </Link>
      </section>
      <span className="flex flex-row mt-2 justify-center items-center text-[var(--grayDark)] ">Our result speaks about us !</span>



      <Carousel />
      <section className='w-5/6 mx-auto sm:px-[10%]  font-[Poppins] text-center   py-10  bg-[#f8f8fd]'>
        <div className=' bg-white '>
          <h1 className=' sm:text-xl text-sm text-[var(--colorPrimary)] sm:pb-0 pb-[5%]  '>OUR STUDENTS LOVE US ❤️ </h1>
          <div className='sm:flex  sm:justify-center sm:items-center py-[1%] px-[5%]  ' >
            <img src={p} className="rounded-[150px] w-[90px] h-[90px] sm:w-[150px] sm:h-[150px]  ring-1 ring-[#ffd658] shadow-md  shadow-[#ffd658] mx-auto  " />
            <div className='px-[5%] py-[5%] font-medium  sm:text-xl text-sm '>
              Teacher covered all topics in a structured manner which makes you want to study. They have made the course easy to understand for students. I will also get my sister to enroll ."
              VARAD INGALE
            </div>
          </div>
        </div>

      </section>
      <section style={{ backgroundImage: `url(${g})` }} className=' h-[150px] flex justify-around items-center  text-white  sm:font-semibold text-center sm:text-xl  '>
        <div>
          <span> Best </span>
          <div>   Result  </div>
        </div>
        <div>
          <span> 1000+ </span>
          <div>   Student Taught  </div>
        </div>

        <div>
          <span> Best + </span>
          <div>  Faculty  </div>

        </div>

      </section>
      <Teachers />

      <About />
    </>
  )
}

export default home