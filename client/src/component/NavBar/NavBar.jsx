import React, { useState } from 'react'
import logo from '../../images/global-logo.png'
import menu from '../../images/icons8-menu-100.png'
import { Link } from 'react-router-dom'

const NavBar = ({ page }) => {

    const [navbarOpen, setNavbarOpen] = useState(false);
  
    return (
        <>
            <nav className='relative flex flex- items-center  drop-shadow-md justify-between  py-1 bg-slate-50 mb-2'>
                <div className='container px-2  flex flex-wrap items-center justify-between'>
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <img  src={logo} alt="" width={140} />
                        <div className="lg:hidden cursor-pointer mt-2.5" onClick={() => setNavbarOpen(!navbarOpen)}>
                            <img src={menu} alt='logo of globla oneness ' width={20} height={10} />
                        </div>
                    </div>

                    <div className={'lg:flex flex-row items-center ' + (navbarOpen ? 'flex' : 'hidden')}>
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <Link to='../home'>
                                <li className="nav-item">
                                    <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >HOME</span>
                                </li>
                            </Link>

                            <li className="nav-item lg:ml-2">
                                <span className="px-3 py-2 flex items-center uppercase leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >ABOUT</span>
                            </li>
                            {page !== 'AdminLogin' &&
                                <Link to='../adminAndTeacher'>
                                    <li className="nav-item">
                                        <span className="px-3 py-2 flex items-center  uppercase  leading-snug hover:opacity-75 " style={{ fontFamily: 'Poppins', letterSpacing: '3px' }} >EMPLOYEE ZONE</span>
                                    </li>
                                </Link>
                            }

                            <li className="nav-item lg:ml-2 ">
                                {page !== 'studentLogin' &&
                                    <Link to='../studentLogin'>
                                        <button className=" btn bg-transparent hover:bg-[var(--buttonBlue)] text-[var(--buttonBlue)] font-semibold hover:text-white py-2 px-3  border-[var(--buttonBlue)] border-2 hover:border-transparent rounded" style={{ fontFamily: 'Lato' }}>
                                            Student Login
                                        </button>
                                    </Link>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar