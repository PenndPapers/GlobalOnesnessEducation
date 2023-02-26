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
const App = () => {
  const user = useSelector((state) => state.auth.user.student);
  console.log(user.usertype);

  const [selectedPage, setSelectdPage] = useState("/");
  const [isUser, setIsUser] = useState(false);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={
            user.usertype === "" ? (
              <Navigate to="home" />
            ) : user.usertype === "student" ? (
              <Navigate to="studentLogin" />
            ) : (
              <Navigate to="adminAndTeacher" />
            )
          }
        />
        <Route path="home" element={<Home />} />
        <Route path="studentLogin" element={<StudentLogin />} />
        <Route path="studentRegister" element={<StudentRegister />} />

        <Route path="adminAndTeacher" element={<AdminandTeacher />} />

        <Route path="adminDashboard">
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="courses" element={<AdminCoursesList />} />
          <Route path="teacher" element={<AdminTeachersList />} />
          <Route path="student" element={<AdminStudentList />} />
          {/* <Route path="adminAndTeacher" element={<AdminandTeacher />} />
            <Route path="adminAndTeacher" element={<AdminandTeacher />} /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
