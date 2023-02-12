import React from 'react'
import Carousel from '../../component/Home/Carousel'
import teamglobal from '../../images/team globaloneness.jpg'
import promotion1 from '../../images/promotion globaloneness.jpg'
import promotion2 from '../../images/promotion 2globaloneness.jpg'
import { Link } from 'react-router-dom'
const home = () => {

  const slides = [
    { img: teamglobal },
    { img: promotion1 },
    { img: promotion2 }
  ]

  return (
    <>
      <div className="flex flex-row justify-center items-center ">
        <h1 className="lg:text-5xl lg:font-bold  text-2xl font-normal font-[Roboto] text-[var(--colorPrimary)] mt-8" >
          10 Day Free Classes!!
        </h1>
        <Link to= '../studentRegister'>
        <button className=" btn hover:bg-transparent bg-[var(--buttonBlue)] font-[Poppins]  text-white mt-8 ml-8 hover:text-[var(--buttonBlue)]  font-semiboldtext-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-[var(--colorPrimary)] rounded">
          Apply Now
        </button>
        </Link>
      </div>
      <span className="flex flex-row mt-2 justify-center items-center text-[var(--grayDark)] ">Our result speaks about us !</span>

      <div>
        <Carousel />
      </div>

    </>
  )
}

export default home