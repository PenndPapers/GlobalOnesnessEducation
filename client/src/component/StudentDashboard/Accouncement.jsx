import React from 'react'
import speaker from '../../images/speaker.png'

const Accouncement = () => {
  return (
    <div className='font-[Poppins] border border-[#E33332] min-h-[300px] text-center min-w-full m-[3%] ml-[5%] rounded-md flex flex-col' >
      <div className='mt-[3%]'>
        <h2 className='text-[#E33332] font-bold text-[20px] font-[Poppins] justify-center items-center '>Accouncement</h2>
      </div>

      <div className='flex flex-col font-semibold font-[Lato] text-start'>

        <div className='flex flex-row justify-between border border-[#FCC419] m-[3%] rounded-lg  hover:scale-105  transition duration-300 hover:cursor-pointer bg-white  hover:drop-shadow-lg'>
          <img src={speaker} alt="speaker image" width={"64px"} height={"64px"}  className="m-[2%]"/>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Esse inventore eum alias saepe temporibus totam harum modi,
            corrupti dolor omnis libero veritatis expedita ipsam ratione </span>
        </div>

        <div className='flex flex-row justify-between border border-[#FCC419] m-[3%] rounded-lg  hover:scale-105  transition duration-300 hover:cursor-pointer bg-white  hover:drop-shadow-lg'>
          <img src={speaker} alt="speaker image" width={"64px"} height={"64px"}  className="m-[2%]"/>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Esse inventore eum alias saepe temporibus totam harum modi,
            corrupti dolor omnis libero veritatis expedita ipsam ratione </span>
        </div>

      </div>
    </div>
  )
}

export default Accouncement