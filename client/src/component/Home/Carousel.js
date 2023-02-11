import React , {useState , useEffect } from 'react'
import {CgChevronLeft , CgChevronRight} from 'react-icons/cg';
import s1 from "../../images/slide1.jpg"
import s2 from "../../images/promotion2globaloneness.jpg"

// const slides = [
//     {
//         url : "https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/top-slider/onlinecourse-allendigital.jpg"
//     },
//     {
//         url : "https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/top-slider/allenace-jaipur.jpg"
//     },
//     {
//         url : "https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/top-slider/jee-main-enthuse-course13-Feb.jpg"
//     },
//     {
//         url : "https://allenwebsite-general.s3.ap-south-1.amazonaws.com/allen-website/slider/top-slider/neet-enthuse-course-14-Feb.jpg"
//     }
// ]

const slides = [
    {
        url : s1
    },
    {
        url : s1
    }
]

const Carousel = () => {

  const [slideNumber , setSlideNumber] = useState(0);

  const preSlide = ()=>{
    const isFirstSlide = slideNumber === 0 ;
    const newSlide = isFirstSlide ? slides.length -1 : slideNumber -1;
    setSlideNumber(newSlide );
  }
  const nextSlide = ()=>{
    setSlideNumber((slideNumber + 1)% slides.length )
  }

  useEffect(() => {
    const timer = setTimeout(() => {
          setSlideNumber((slideNumber + 1)% slides.length )  // this  line will run afgter 3 sec 
    }, 3000);
    return () => clearTimeout(timer);
  } , [slideNumber]);

  return (
    <div className='lg:max-w-[1400px] max-w-[390px]   lg:h-[400px] h-[100px] w-full m-auto   bg-slate-500 relative group mt-8 '> 
       <div style={{backgroundImage : `url(${slides[slideNumber].url})`}} className=" w-full  h-full  bg-center bg-cover duration-700   " > </div>
       <div  className=' hidden group-hover:block  absolute top-[50%] -translate-x-0   translate-y-[-50%] left-5 rounded-full bg-slate-100 ' onClick={preSlide} > <CgChevronLeft  size={50}/> </div>
      <div    className=' hidden group-hover:block  absolute top-[50%] -translate-x-0    translate-y-[-50%] right-5 rounded-full bg-slate-100 ' onClick={nextSlide}  >  <CgChevronRight  size={50} /> </div>
     </div>
  )
}

export default Carousel

