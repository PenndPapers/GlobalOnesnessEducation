import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import Home from "./pages/Home/Home";

import StudentLogin from "./pages/Auth/StudentLogin";
import StudentRegister from "./pages/Auth/StudentApply";
import TeacherLogin from "./pages/Auth/TeacherLogin";
import AdminLogin from "./pages/Auth/AdminLogin";

import AdminDashboard from "./pages/AdminApplication/AdminDashboard";
import AdminCoursesList from "./pages/AdminApplication/AdminCoursesList";
import AdminTeachersList from "./pages/AdminApplication/AdminTeachersList";
import AdminStudentList from "./pages/AdminApplication/AdminStudentList";

import StudentDashboard from './pages/StudentApllication/StudentDashboard';
import StudentPYQ from './pages/StudentApllication/StudentPYQ';
import StudentNotes from './pages/StudentApllication/StudentNotes';
import StudentFeedback from './pages/StudentApllication/StudentFeedback';
import StudentResult from './pages/StudentApllication/StudentResult';
import StudentTest from './pages/StudentApllication/StudentTest';
import StudentSetting from './pages/StudentApllication/StudentSetting';

import TeacherDashboard from './pages/TeacherApplication/TeacherDashboard';

const App = () => {


  const user = useSelector(state => state.auth.user)


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user.user.usertype === '' ? <Navigate to="home" /> : user.user.usertype === 'student' ? <Navigate to="/studentLogin" /> : user.user.usertype === 'teacher' ? <Navigate to="/teacherLogin" /> : <Navigate to="/adminLogin" />} />
        <Route path='home' element={<Home />} />

        <Route path='studentLogin' element={user.user.usertype !== '' ? <Navigate to='/studentDashboard' /> : <StudentLogin />} />
        <Route path='studentRegister' element={<StudentRegister />} />
        <Route path='teacherLogin' element={user.user.usertype != '' ? <Navigate to='/teacherDashboard' /> : <TeacherLogin />} />
        <Route path='adminLogin' element={user.user.usertype != '' ? <Navigate to='/adminDashboard' /> : <AdminLogin />} />


        <Route path='studentDashboard' element={user.user.usertype === 'student' ? <StudentDashboard /> : <Navigate to="/studentLogin" />} />
        <Route path='pyq' element={user.user.usertype === 'student' ? <StudentPYQ /> : <Navigate to="/studentLogin" />} />
        <Route path='notes' element={user.user.usertype === 'student' ? <StudentNotes /> : <Navigate to="/studentLogin" />} />
        <Route path='feedback' element={user.user.usertype === 'student' ? <StudentFeedback /> : <Navigate to="/studentLogin" />} />
        <Route path='result' element={user.user.usertype === 'student' ? <StudentResult /> : <Navigate to="/studentLogin" />} />
        <Route path='test' element={user.user.usertype === 'student' ? <StudentTest /> : <Navigate to="/studentLogin" />} />
        <Route path='setting' element={user.user.usertype === 'student' ? <StudentSetting /> : <Navigate to="/studentLogin" />} />



        <Route path="adminDashboard" element={user.user.usertype === 'admin'? <AdminDashboard /> : <Navigate to='/Login'/>} />
        <Route path="courses" element={<AdminCoursesList />} />
        <Route path="teacher" element={<AdminTeachersList />} />
        <Route path="student" element={<AdminStudentList />} />

        <Route path='teacherDashboard' element={user.user.usertype === 'teacher' ? <TeacherDashboard /> : <Navigate to='/teacherLogin'/>} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;
