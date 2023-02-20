import React from 'react'
import StudentDetails from '../../component/StudentDashboard/StudentDetails'
import CourseDetails from '../../component/StudentDashboard/CourseDetails'
import UpcommingTest from '../../component/StudentDashboard/UpcommingTest'
import FeeOverview from '../../component/StudentDashboard/FeeOverview'
import Announcement from '../../component/StudentDashboard/Accouncement'

const StudentDashboard = () => {
  return (

    <div className='pt-20 flex flex-col '>
      <div className='flex flex-row'>
        <div className="felx flex-col w-[66%]">
          <StudentDetails />
          <CourseDetails />
        </div>

        <div className="flex w-[33%]">
          <UpcommingTest />
        </div>

      </div>


      <div className='flex flex-row justify-center '>

        <div className='flex w-[50%] mr-[5%] ml-[1%] flex-row'>
          <FeeOverview />
        </div>

        <div className='flex w-[50%]  mr-[10%]   flex-row'>
          <Announcement />
        </div>

      </div>

    </div>
      )
}

      export default StudentDashboard