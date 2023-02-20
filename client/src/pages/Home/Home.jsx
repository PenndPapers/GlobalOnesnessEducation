
import React from 'react'
import NavBar from '../../component/NavBar/NavBar'
import Carousel from '../../component/Home/Carousel'
import teamglobal from '../../images/teamglobaloneness.jpg'
import promotion1 from '../../images/promotionglobaloneness.jpg'
import promotion2 from '../../images/promotion2globaloneness.jpg'
import About from './About'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import Teachers from '../../component/Teachers'
const home = () => {

  const slides = [
    { img: teamglobal },
    { img: promotion1 },
    { img: promotion2 }
  ]

  return (
    <>
      <NavBar />
      <div className="flex flex-row justify-center items-center ">
        <h1 className="lg:text-5xl lg:font-bold  text-2xl font-normal font-[Roboto] text-[var(--colorPrimary)] mt-8" >
          10 Day Free Classes!!
        </h1>
        <Link to='../studentRegister'>
          <button className=" btn hover:bg-transparent bg-[var(--buttonBlue)] font-[Poppins]  text-white mt-8 ml-8 hover:text-[var(--buttonBlue)]  font-semiboldtext-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-[var(--colorPrimary)] rounded">
            Apply Now
          </button>
        </Link>
      </div>
      <span className="flex flex-row mt-2 justify-center items-center text-[var(--grayDark)] ">Our result speaks about us !</span>

      <div>
        <Carousel />
        <section className='bg-gradient-to-r from-blue-700 to-blue-400 h-[150px] flex justify-around items-center  text-white  font-semibold text-center text-xl  '>
          <div>
           <span> 1000+ </span>
            <div>   Student Taught  </div>
          </div>
          <div>
          <span> Best </span>
          <div>   Result  </div>
          </div>
          <div>
          <span> 1000+ </span>
          <div>   Student Taught  </div>
           
          </div>

        </section>
        <Teachers />
      </div>

      <About />

      <Footer />
    </>
  )
}

export default home