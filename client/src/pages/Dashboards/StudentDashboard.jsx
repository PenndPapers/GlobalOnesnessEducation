import React from 'react'
import StudentDetails from '../../component/StudentDashboard/StudentDetails'
import CourseDetails from '../../component/StudentDashboard/CourseDetails'
import UpcommingTest from '../../component/StudentDashboard/UpcommingTest'
import FeeOverview from '../../component/StudentDashboard/FeeOverview'
import Announcement from '../../component/StudentDashboard/Accouncement' 
import NavBar from '../../component/NavBar/NavBar'


const StudentDashboard = () => {
  return (

    <>
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

    </>


  )
}

export default StudentDashboard