import React, { useState } from 'react'
import logo from '../../images/global-logo.png'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import Modal from '../ui/Modal';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

const NavBar = ({ page, logout }) => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {setSidebar(!sidebar);
    console.log(sidebar);
  }
  
  const location = useLocation();
  const user = useSelector(state => state.auth.user)
  console.log(user);
  
  return (
    <Modal>
      <>
        <div className='navbar bg-[#f5f5f5] h-[60px] flex justify-start items-center drop-shadow-lg'>
          <Link to='#' className='menu-bars ml-8 text-[2rem]'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} alt="logo of globla oneness" width={140}  className='ml-[3%]'/>
        </div>
        <nav className={ sidebar ? 'nav-menu active ': 'nav-menu'}>
          <ul className='nav-menu-items w-[100%]' onClick={showSidebar}>
            <li className='navbar-toggle bg-[#f5f5f5] w-full h-[80px] flex justify-start items-center '>
              <Link to='#' className='menu-bars ml-8 text-[2rem]'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='text-stat ml-8 text-[20px] py-[16px]'>
              <span className='font-[Poppins] '> Hello {user.student.firstname}</span>
            </li>
            {SidebarData.map((item, index) => {
              return (
                
                <li key={index} className={location.pathname === item.path ? item.cName +" bg-[var(--buttonBlue)] text-white rounded-l-3xl ml-5" : item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>

              );
            })}
          </ul>
        </nav>
      </>
    </Modal>

    )
}
export default NavBar