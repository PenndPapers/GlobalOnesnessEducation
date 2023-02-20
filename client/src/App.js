import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import StudentLogin from './pages/Auth/StudentLogin';
import StudentRegister from './pages/Auth/StudentApply';
import AdminandTeacher from './pages/Auth/AdminAndTeacherLogin';
import AdminDashboard from './pages/Dashboards/AdminDashboard';
import StudentDashboard from './pages/Dashboards/StudentDashboard';
import TeacherDashboard from './pages/Dashboards/TeacherDashboard';
import { useSelector } from 'react-redux';
import NavBar from './component/NavBar/NavBar';
const App = () => {


  const user = useSelector(state => state.auth.user)
  console.log(user.user.usertype);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={user.user.usertype === '' ? <Navigate to="home" /> : user.user.usertype === 'student' ? <Navigate to="/studentLogin" /> : <Navigate to="/adminAndTeacher" />} />
        <Route path='home' element={<Home />} />
        <Route path='studentLogin' element={user.user.usertype !== '' ? <Navigate to='/studentDashboard'/> :<StudentLogin />} />
        <Route path='studentRegister' element={<StudentRegister />} />
        <Route path='adminAndTeacher' element={<AdminandTeacher />} />
        <Route path='adminDashboard' element={<AdminDashboard />} />
        <Route path='studentDashboard' element={user.user.usertype === 'student' ? <StudentDashboard /> :<Navigate to="/studentLogin" />}/>
        <Route path='teacherDashboard' element={<TeacherDashboard />} />
      </Routes>
    </>

  );
}

export default App;
