import React from 'react'
import Physics from  "../../images/Physics.png"

const CourseDetails = () => {
  return (
    <div className='font-[Poppins] border min-h-[300px] m-[3%] ml-[5%] rounded-md  bg-white drop-shadow-lg'>
    
      <div className='text-[16px]  m-[2%] ml-[5%] mb-[2%]'>
        <span  >Enrolled Courses</span>
      </div>

      <div className='justify-around flex text-[#BFBFBF]'>
        <span>Course Title</span>
        <span>Lesson Completed</span>
        <span>Classes Attended</span>
        <span>Faculty Assigned</span>  
      </div>

      
      <hr  className=' p-[1px] m-[2%] bg-[#727272] rounded-md '/>

      <div className='flex flex-row justify-around font-[Poppins]'>

        <div className='flex felx-row justify-start items-center'>
          <img src={Physics} className='w-9 h-9 mr-1'/>
          <span className="">Physics</span>
        </div>

        <span>100/200(50%)</span>
        <span>56</span>
        <span>Rahul Mehra</span>

      </div>

      
      
    </div>
  )
}

export default CourseDetails