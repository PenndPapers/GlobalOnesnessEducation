import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons5 from "react-icons/io5";
import * as MdIcon from 'react-icons/md';
import * as BiIcon from 'react-icons/bs';
import * as GiIcon from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text',
    user: 'Home'

  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillInfoCircle />,
    cName: 'nav-text',
    user: 'About'
  },
  {
    title: 'Employee Zone',
    path: '/teacherLogin',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Student Zone',
    path: '/studentLogin',
    icon: <IoIcons5.IoPersonSharp />,
    cName: 'nav-text'
  },
  {
    title: 'Dashboard',
    path: '/studentDashboard',
    icon: <MdIcon.MdSpaceDashboard />,
    cName: 'nav-text',
    user: 'student'
  },
  {
    title: 'PYQs',
    path: '/pyq',
    icon: <GiIcon.GiPapers />,
    cName: 'nav-text',
    user: 'student'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <BiIcon.BsFileEarmarkPdfFill />,
    cName: 'nav-text',
    user: 'student'
  },
  {
    title: 'Test',
    path: '/test',
    icon: <FaIcons.FaPenSquare />,
    cName: 'nav-text',
    user: 'student'
  },
  {
    title: 'Result',
    path: '/result',
    icon: <BiIcon.BsGraphUp />,
    cName: 'nav-text',
    user: 'student'
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
    ,user: 'student'
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <FaIcons.FaComments />,
    cName: 'nav-text',
    user: 'student'
  } ,
  {
    title: 'Dashboard',
    path: '/adminDashboard',
    icon: <MdIcon.MdSpaceDashboard />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Earning',
    path: '/adminearning',
    icon: <GiIcon.GiMoneyStack />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Courses',
    path: '/courses',
    icon: <AiIcons.AiFillBook />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Teacher',
    path: '/teacher',
    icon: <GiIcon.GiTeacher />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Student',
    path: '/student',
    icon: <FaIcons.FaUserGraduate />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Settings',
    path: '/adminsetting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
    ,user: 'admin'
  },
  {
    title: 'Feedback',
    path: '/adminfeedback',
    icon: <FaIcons.FaComments />,
    cName: 'nav-text',
    user: 'admin'
  },
  {
    title: 'Dashboard',
    path: '/teacherDashboard',
    icon: <MdIcon.MdSpaceDashboard />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'Earning',
    path: '/teacherearning',
    icon: <GiIcon.GiMoneyStack />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'Courses',
    path: '/teachercourses',
    icon: <AiIcons.AiFillBook />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'Test',
    path: '/teachertest',
    icon: <FaIcons.FaPenSquare />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'Attendance',
    path: '/teacherattendance',
    icon: <FaIcons.FaUserCheck />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'PYQ/Notes',
    path: '/teachernotesandpyq',
    icon: <BiIcon.BsFileEarmarkPdfFill />,
    cName: 'nav-text',
    user: 'teacher'
  },
  {
    title: 'Settings',
    path: '/teachersetting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
    ,user: 'teacher'
  },
];