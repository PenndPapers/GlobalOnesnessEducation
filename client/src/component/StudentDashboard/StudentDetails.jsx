import React from 'react'
import './StudentDetails.css'

const StudentDetails = () => {
  return (
    <div className='flex flex-col ml-[5%]  font-[Lato] '>
      <span className='text-md mb-[2%] ml-[2%] text-[#727272]'>Overview</span>
      <div className='flex flex-row '>

        <div className='w-[180px] h-[140px] rounded-lg hover:scale-105  transition duration-300 hover:cursor-pointer bg-white  hover:drop-shadow-lg border'>
          <div className="flex flex-col">
            <div className='flex flex-row p-[7%] items-center  '>
              <div className='w-[7px] h-[7px] rounded-lg bg-[#F75836] mr-[5%]'></div>
              <span className='text-sm'>Courses in Progress</span>
            </div>
            <h1 className='text-[48px] ml-[8%] font-semibold font-[Poppins]'>18</h1>
            <hr  className='w-[100px] p-[1px] ml-[8%] bg-[#F75836] rounded-md '/>
          </div>
        </div>

        <div className=' card w-[180px] h-[140px] rounded-lg  hover:scale-105  transition duration-300 hover:cursor-pointer bg-white  hover:drop-shadow-lg border ml-[10%]'>
          <div className="flex flex-col">
            <div className='flex flex-row p-[7%] items-center  '>
              <div className='w-[7px] h-[7px] rounded-lg bg-[#79D957] mr-[5%]'></div>
              <span className='text-sm'>Test Attempted</span>
            </div>
            <h1 className='text-[48px] ml-[8%] font-semibold font-[Poppins]'>09</h1>
            <hr  className='w-[100px] p-[1px] ml-[8%] bg-[#79D957] rounded-md '/>
          </div>
        </div>

        <div className='card2 w-[180px] h-[140px] rounded-lg hover:scale-105  transition duration-300 hover:cursor-pointer bg-white  hover:drop-shadow-lg border  ml-[10%]'>
          <div className="flex flex-col">
            <div className='flex flex-row p-[7%] items-center  '>
              <div className='w-[7px] h-[7px] rounded-lg bg-[#2B9EDF] mr-[5%]'></div>
              <span className='text-sm'>Batch Rank</span>
            </div>
            <h1 className='text-[48px] ml-[8%] font-semibold font-[Poppins]'>04</h1>
            <hr  className='w-[100px] p-[1px] ml-[8%] bg-[#2B9EDF] rounded-md '/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StudentDetails