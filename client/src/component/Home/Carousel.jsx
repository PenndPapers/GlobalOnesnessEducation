import React, { useState, useEffect } from 'react'
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';
import s1 from "../../images/slide01.jpg"
import s2 from "../../images/slide02.jpg"

const slides = [
  {
      url : s1
  },
  {
      url : s2
  }
]

const Carousel = () => {

  const [slideNumber, setSlideNumber] = useState(0);

  const preSlide = () => {
    const isFirstSlide = slideNumber === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : slideNumber - 1;
    setSlideNumber(newSlide);
  }
  const nextSlide = () => {
    setSlideNumber((slideNumber + 1) % slides.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideNumber((slideNumber + 1) % slides.length)  // this  line will run afgter 3 sec 
    }, 3000);
    return () => clearTimeout(timer);
  }, [slideNumber]);

  return (
    <div className='lg:h-[350px] md:h-[200px] h-[140px] w-full m-auto  relative group mt-[3%]  '>
      <div style={{ backgroundImage: `url(${slides[slideNumber].url})` }} className=" w-full  h-full  bg-center bg-cover duration-700   " > </div>
      <div className=' hidden group-hover:block  absolute top-[50%] -translate-x-0   translate-y-[-50%] -left-2 rounded-full bg-slate-100 ' onClick={preSlide} > <CgChevronLeft size={50} /> </div>
      <div className=' hidden group-hover:block  absolute top-[50%] -translate-x-0    translate-y-[-50%] -right-2 rounded-full bg-slate-100 ' onClick={nextSlide}  >  <CgChevronRight size={50} /> </div>
    </div>
  )
}

export default Carousel