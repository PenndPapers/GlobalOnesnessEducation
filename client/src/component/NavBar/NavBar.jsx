import React, { useState } from 'react'
import logo from '../../images/global-logo.png'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navbar.css';
import { SidebarData } from './SidebarData';
import Modal from '../ui/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logoutReq } from '../../features/auth/authSlice';


const NavBar = ({ page, logout }) => {

  const [sidebar, setSidebar] = useState(false);

  const dispatch = useDispatch();

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  }

  const location = useLocation();
  const user = useSelector(state => state.auth.user)
  console.log(user);

  const handleLogout = () => {
    console.log('logout');
    dispatch(logoutReq())
  }

  return (
    <Modal>
      <>
        <div className='navbar bg-[#ffffff] h-[60px] flex justify-between items-center drop-shadow-lg px-[2%]'>
          <div className='flex items-center'>
            <Link to='#' className={(location.pathname === '/home' || location.pathname === '/studentLogin' || location.pathname === '/adminAndTeacher') ? 'menu-bars ml-4 text-[2rem] md:hidden ' : 'menu-bars ml-4 text-[2rem] '}>
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
            <img src={logo} alt="logo of globla oneness" width={140} className='ml-[3%]' />
          </div>

          {(location.pathname === '/home' || location.pathname === '/studentLogin' || location.pathname === '/adminAndTeacher') &&
            <div className='w-full md:flex justify-end hidden '>
              <ul className="flex  flex-row list-none  ml-auto mr-[2%] ">
                <Link to='../home'>
                  <li className="nav-item">
                    <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >HOME</span>
                  </li>
                </Link>

                <li className="nav-item lg:ml-2">
                  <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >ABOUT</span>
                </li>
                {!user.user.usertype &&
                  <Link to='../adminAndTeacher'>
                    <li className="nav-item">
                      <span className="px-3 py-2 flex items-center  uppercase  leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >EMPLOYEE ZONE</span>
                    </li>
                  </Link>
                }
                {!user.user.usertype &&
                  <li className="nav-item lg:ml-2 ">
                    <Link to='../studentLogin'>
                      <button className=" btn bg-transparent hover:bg-[var(--buttonBlue)] text-[var(--buttonBlue)] font-semibold hover:text-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-transparent rounded" style={{ fontFamily: 'Lato' }}>
                        Student Login
                      </button>
                    </Link>
                  </li>
                }
                {user.user.usertype &&
                  <li className="nav-item lg:ml-2 ">
                    <Link to='../studentLogin'>
                      <li className="nav-item">
                        <span className="px-3 py-2 flex items-center  uppercase  leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >DASHBOARD</span>
                      </li>
                    </Link>
                  </li>
                }
              </ul>
            </div>
          }
          {user.user.usertype !== '' &&
            <Link to='../home'>
              <button className=" btn bg-transparent hover:bg-[var(--buttonBlue)] text-[var(--buttonBlue)]  items-end font-semibold hover:text-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-transparent rounded" style={{ fontFamily: 'Lato' }} onClick={handleLogout}>
                Logout
              </button>
            </Link>
          }
        </div>
        <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
          <ul className='nav-menu-items w-[100%]' onClick={showSidebar}>
            <li className='navbar-toggle bg-[#ffffff] w-full h-[80px] flex justify-start items-center '>
              <Link to='#' className='menu-bars ml-8 text-[2rem]'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <li className='text-stat ml-8 text-[20px] py-[16px]'>
              <span className='font-[Poppins] '> Hello {user.user.firstname}</span>
            </li>
            { user.user.usertype === '' && SidebarData.map((item, index) => {
                return (
                  <>
                    {(item.title === 'Student Zone' || item.title === 'Employee Zone' || item.title === 'Home' || item.title === 'About') &&
                      <li li key={index} className={location.pathname === item.path ? item.cName + " bg-[var(--buttonBlue)] text-white rounded-l-3xl ml-5" : item.cName} >
                        <Link to={item.path}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </li>
                    }
                  </>
                );
              })}

              {user.user.usertype !== '' &&
                SidebarData.map((item, index) => {
                  return (
                    <>
                      {(item.title !== 'Student Zone' &&  item.title !== 'Employee Zone') &&
                        <li li key={index} className={location.pathname === item.path ? item.cName + " bg-[var(--buttonBlue)] text-white rounded-l-3xl ml-5" : item.cName} >
                          <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                          </Link>
                        </li>
                      }
                    </>
                  );
              })
              }
          </ul>
        </nav>
      </>
    </Modal >

  )
}
export default NavBar