import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import StudentLogin from './pages/Auth/StudentLogin';
import StudentRegister from './pages/Auth/StudentApply';
import AdminandTeacher from './pages/Auth/AdminAndTeacherLogin';
import AdminDashboard from './pages/Dashboards/AdminDashboard';
import StudentDashboard from './pages/Dashboards/StudentDashboard';
import TeacherDashboard from './pages/Dashboards/TeacherDashboard';
import { useSelector } from 'react-redux';
const App = () => {


  const user = useSelector(state => state.auth.user.student)
  console.log(user.usertype);

  return (
    <Routes>
      <Route path='/' element={user.usertype=== ''? <Navigate to="home" /> : user.usertype === 'student'? <Navigate to="studentLogin" /> : <Navigate to= "adminAndTeacher"/> } />
      <Route path='home' element={<Home />} />
      <Route path= 'studentLogin' element={<StudentLogin />} />
      <Route path= 'studentRegister' element={ <StudentRegister />} />
      <Route path= 'adminAndTeacher' element={<AdminandTeacher />} />
      <Route path = 'adminDashboard' element={<AdminDashboard />} />
      <Route path= 'studentDashboard' element={ user.usertype === 'student'  && <StudentDashboard /> } />
      <Route path= 'teacherDashboard' element={<TeacherDashboard />} />
    </Routes>
  );
}

export default App;
