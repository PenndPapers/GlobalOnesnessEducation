import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import StudentLogin from "./pages/Auth/StudentLogin";
import StudentRegister from "./pages/Auth/StudentApply";
import AdminandTeacher from "./pages/Auth/AdminAndTeacherLogin";
import AdminDashboard from "./pages/AdminApplication/AdminDashboard";

import AdminCoursesList from "./pages/AdminApplication/AdminCoursesList";
import { useSelector } from "react-redux";
import Footer from "./component/Footer/Footer";
import AdminTeachersList from "./pages/AdminApplication/AdminTeachersList";
import AdminStudentList from "./pages/AdminApplication/AdminStudentList";
import NavBar from "./component/NavBar/NavBar";

import StudentDashboard from './pages/StudentApllication/StudentDashboard';
import TeacherDashboard from './pages/TeacherApplication/TeacherDashboard';
import StudentPYQ from './pages/StudentApllication/StudentPYQ';
import StudentNotes from './pages/StudentApllication/StudentNotes';
import StudentFeedback from './pages/StudentApllication/StudentFeedback';
import StudentResult from './pages/StudentApllication/StudentResult';
import StudentTest from './pages/StudentApllication/StudentTest';
import StudentSetting from './pages/StudentApllication/StudentSetting';
// const App = () => {
//   const user = useSelector((state) => state.auth.user.student);
//   console.log(user.usertype);
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Home from './pages/Home/Home';
// import StudentLogin from './pages/Auth/StudentLogin';
// import StudentRegister from './pages/Auth/StudentApply';
// import AdminandTeacher from './pages/Auth/AdminAndTeacherLogin';


// import { useSelector } from 'react-redux';
// import NavBar from './component/NavBar/NavBar';
// import Footer from './component/Footer/Footer';
const App = () => {


  const user = useSelector(state => state.auth.user)
 

  return (
   <>
      <NavBar />
      <Routes>
        <Route path='/' element={user.user.usertype === '' ? <Navigate to="home" /> : user.user.usertype === 'student' ? <Navigate to="/studentLogin" /> : <Navigate to="/adminAndTeacher" />} />
        <Route path='home' element={<Home />} />
        <Route path='studentLogin' element={user.user.usertype !== '' ? <Navigate to='/studentDashboard' /> : <StudentLogin />} />
        <Route path='studentRegister' element={<StudentRegister />} />
        <Route path='adminAndTeacher' element={<AdminandTeacher />} />
        <Route path='studentDashboard' element={user.user.usertype === 'student' ? <StudentDashboard /> : <Navigate to="/studentLogin" />} />
        <Route path='pyq' element={user.user.usertype === 'student' ? <StudentPYQ /> : <Navigate to="/studentLogin" />} />
        <Route path='notes' element={user.user.usertype === 'student' ? <StudentNotes /> : <Navigate to="/studentLogin" />} />
        <Route path='feedback' element={user.user.usertype === 'student' ? <StudentFeedback /> : <Navigate to="/studentLogin" />} />
        <Route path='result' element={user.user.usertype === 'student' ? <StudentResult /> : <Navigate to="/studentLogin" />} />
        <Route path='test' element={user.user.usertype === 'student' ? <StudentTest /> : <Navigate to="/studentLogin" />} />
        <Route path='setting' element={user.user.usertype === 'student' ? <StudentSetting /> : <Navigate to="/studentLogin" />} />
      
      
        
          <Route path="adminDashboard" element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCoursesList />} />
          <Route path="teacher" element={<AdminTeachersList />} />
          <Route path="student" element={<AdminStudentList />} />
          {/* <Route path="adminAndTeacher" element={<AdminandTeacher />} />
            <Route path="adminAndTeacher" element={<AdminandTeacher />} /> */}
       

        <Route path='teacherDashboard' element={<TeacherDashboard />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
