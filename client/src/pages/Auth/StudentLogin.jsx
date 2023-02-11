import React from 'react'
import NavBar from '../../component/NavBar/NavBar'
import img from '../../images/dl.beatsnoop.com-600px-1675484921.jpg'
const studentLogin = () => {
  return (
    <>
      <NavBar />
      <div className='drop-shadow-2xl content-center flex mx-[15%] my-[9%] flex-row rounded-2xl bg-white'>
        <img className="rounded-2xl" src={img} alt="image for login" width={'50%'} />
        <div className="flex felx-col justify-center items-center form content-center">
          <form className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-white">Student Login</h1>
            <input className="w-[300px] h-[40px] rounded-2xl my-2" type="text" placeholder="Email" />
            <input className="w-[300px] h-[40px] rounded-2xl my-2" type="password" placeholder="Password" />
            <button className="w-[300px] h-[40px] rounded-2xl my-2 bg-slate-400 text-white">Login</button>
            <p className="text-white">Don't have an account? <a className="text-red-500" href="/studentRegister">Register</a></p>
          </form>
        </div>
      </div>

    </>
  )

}

export default studentLogin