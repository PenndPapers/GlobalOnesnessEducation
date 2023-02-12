import React from 'react'
import StudentDetails from '../../component/StudentDashboard/StudentDetails'
import CourseDetails from '../../component/StudentDashboard/CourseDetails'
import UpcommingTest from '../../component/StudentDashboard/UpcommingTest'
import FeeOverview from '../../component/StudentDashboard/FeeOverview'
import Announcement from '../../component/StudentDashboard/Accouncement' 
import NavBar from '../../component/NavBar/NavBar'


const StudentDashboard = () => {
  return (

    <div className='pt-20 flex flex-row '>
{/* // student details
      // courseDetail
      // upcomming test
      // fees overview
      // announcement */}
      <StudentDetails />
      <CourseDetails />
      
      <UpcommingTest/>
      <CourseDetails/>

      <FeeOverview/>
      <Announcement/>

    </div>


  )
}

export default StudentDashboard