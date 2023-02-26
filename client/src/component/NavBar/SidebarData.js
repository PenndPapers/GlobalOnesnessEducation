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
  {
    title: 'Dashboard',
    path: '/studentDashboard',
    icon: <MdIcon.MdSpaceDashboard/>,
    cName: 'nav-text'
  },
  {
    title: 'PYQs',
    path: '/pyq',
    icon: <GiIcon.GiPapers/>,
    cName: 'nav-text'
  },
  {
    title: 'Notes',
    path: '/notes',
    icon: <BiIcon.BsFileEarmarkPdfFill/>,
    cName: 'nav-text'
  },
  {
    title: 'Test',
    path: '/test',
    icon: <FaIcons.FaPenSquare/>,
    cName: 'nav-text'
  },
  {
    title: 'Result',
    path: '/result',
    icon: <BiIcon.BsGraphUp/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/setting',
    icon: <AiIcons.AiFillSetting />,
    cName: 'nav-text'
  },
  {
    title: 'Feedback',
    path: '/feedback',
    icon: <FaIcons.FaComments />,
    cName: 'nav-text'
  }
];