import './App.css';
import Home from './pages/Home/Home';
import StudentLogin from './pages/Auth/StudentLogin';
import StudentRegister from './pages/Auth/StudentApply';
import AdminandTeacher from './pages/Auth/AdminAndTeacherLogin';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  
  // const user = {
  //   type: 'student',
  // };

  const user =false;
  return (
    <Routes>
      <Route path='/' element={!user ? <Navigate to="home" /> : user.type === 'student'? <Navigate to="studentLogin" /> : <Navigate to= "adminAndTeacher"/> } />
      <Route path='home' element={<Home />} />
      <Route path= 'studentLogin' element={<StudentLogin />} />
      <Route path= 'studentRegister' element={<StudentRegister />} />
      <Route path= 'adminAndTeacher' element={<AdminandTeacher />} />
    </Routes>
  );
}

export default App;
