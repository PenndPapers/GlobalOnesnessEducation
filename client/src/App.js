import './App.css';
import Home from './pages/Home/Home';
import StudentLogin from './pages/Auth/StudentLogin';
import StudentRegister from './pages/Auth/StudentLogin';
import AdminandTeacher from './pages/Auth/AdminAndTeacherLogin';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const user = true;
  return (
    <Routes>
      <Route path='/' element={user ? <Navigate to="home" /> : <Navigate to="auth" />} />
      <Route path='home' element={<Home />} />
    </Routes>
  );
}

export default App;
