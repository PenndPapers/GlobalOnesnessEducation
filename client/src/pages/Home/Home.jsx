import React from 'react'
import Carousel from '../../component/Home/Carousel'
import NavBar from '../../component/NavBar/NavBar'

const home = () => {
  return (
    <>
      <NavBar/>
      <div className="flex flex-row justify-center items-center ">
        <h1 className="lg:text-5xl lg:font-bold  text-2xl font-normal font-[Roboto] text-[var(--colorPrimary)] mt-8" >
          10 Day Free Classes!!
        </h1>
        <button className=" btn hover:bg-transparent bg-[var(--buttonBlue)] font-[Poppins]  text-white mt-8 ml-8 hover:text-[var(--buttonBlue)]  font-semiboldtext-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-[var(--colorPrimary)] rounded">
          Apply Now
        </button>
      </div>
      <span className="flex flex-row mt-2 justify-center items-center text-[var(--grayDark)] ">Our result speaks about us !</span>
      <Carousel/>
      
    </>
  )
}

export default home