import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons5 from "react-icons/io5";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <AiIcons.AiFillInfoCircle />,
    cName: 'nav-text'
  },
  {
    title: 'Employee Zone',
    path: '/adminAndTeacher',
    icon: <FaIcons.FaUsers />,
    cName: 'nav-text'
  },
  {
    title: 'Student Zone',
    path: '/studentLogin',
    icon: <IoIcons5.IoPersonSharp />,
    cName: 'nav-text'
  },
];