import React, { useState } from 'react'
import logo from '../../images/global-logo.png'
import menu from '../../images/icons8-menu-100.png'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import './Navbar.css';
import { SidebarData } from './SidebarData';

const NavBar = ({ page, logout }) => {

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#000' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <img src={logo} alt="logo of globla oneness" width={140}  className='ml-[3%]'/>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>

    // // const [navbarOpen, setNavbarOpen] = useState(false);

    // // const logouthandler = () => {
    // //     localStorage.clear();
    // // }

    // // return (
    // //     <>


    //         {/* <nav className=' flex items-center flex-col drop-shadow-md justify-between  py-1 bg-slate-50 mb-2'>
    //             <div className='container px-2  flex flex-wrap items-center justify-between'>
    //                 <div className="w-full flex flex-row ">

    //                     <div className=" cursor-pointer mt-2.5  mr-[5%]  " onClick={() => setNavbarOpen(!navbarOpen)}>
    //                         <img src={menu} alt='menu button' width={20} height={10} />
    //                     </div>
    //                     <img src={logo} alt="logo of globla oneness" width={140} />
    //                 </div>
    //             </div>
    //         </nav>

    //         <div className={' flex-row item-start ' + (navbarOpen ? 'flex' : 'hidden')}>
    //                 <ul className="flex flex-col list-none ">
    //                     <Link to='../home'>
    //                         <li className="nav-item  lg:ml-2 ">
    //                             <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >HOME</span>
    //                         </li>
    //                     </Link>

    //                     <li className="nav-item lg:ml-2">
    //                         <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >ABOUT</span>
    //                     </li>
    //                     {page !== 'AdminLogin' || logout &&
    //                         <Link to='../adminAndTeacher'>
    //                             <li className="nav-item">
    //                                 <span className="px-3 py-2 flex items-center  uppercase  leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >EMPLOYEE ZONE</span>
    //                             </li>
    //                         </Link>
    //                     }

    //                     <li className="nav-item lg:ml-2 ">
    //                         {page !== 'studentLogin' || logout &&
    //                             <Link to='../studentLogin'>
    //                                 <button className=" btn bg-transparent hover:bg-[var(--buttonBlue)] text-[var(--buttonBlue)] font-semibold hover:text-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-transparent rounded" style={{ fontFamily: 'Lato' }}>
    //                                     Student Login
    //                                 </button>
    //                             </Link>
    //                         }
    //                         {logout &&
    //                             <Link to='../home'>
    //                                 <button className=" btn bg-transparent hover:bg-[var(--buttonBlue)] text-[var(--buttonBlue)] font-semibold hover:text-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-transparent rounded" style={{ fontFamily: 'Lato' }} onClick={logouthandler}>
    //                                     logout
    //                                 </button>
    //                             </Link>
    //                         }
    //                     </li>
    //                 </ul>
    //             </div> */}
    // //     </>
    )
}

export default NavBar