import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import * as AuthApi from '../../api/AuthApi'

const ChangePassword = () => {

    const [data, setData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '', StudentId: null });

    const [matchpassword, setMatchPassword] = useState(true);

    const user = useSelector(state => state.auth.user.user);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);

        if (data.newPassword !== data.confirmPassword) {
            setMatchPassword(false);
        } else {
            setMatchPassword(true);
            data.StudentId = user.studentId;
            console.log(data);
            AuthApi.ChangePassword(data)
                .then(res => {
                    if(res.status === 200){
                    alert("Password Changed Successfully")
                    }
                    setData({ oldPassword: '', newPassword: '', confirmPassword: '', StudentId: null });
                })
                .catch(err => {
                    console.log(err);
                    alert("Invalid Old Password")
                })
        }
    }


    return (
        <div className='flex pt=[20] flex-col w-[30%] h-[350px] mx-[5%] font-[Poppins] border rounded-lg'>
            <form onSubmit={handleSubmit} className= "flex flex-col">
                <span className='mx-[2%] mt-[2%]'> Change Password </span>
                {!matchpassword && <span className='mx-[2%] mt-[2%] text-red-600 text-[12px]'> New Password and Confirm New Password do not match ! </span>} 
                <input className="md:mx-[5%] border-2 p-[2%] rounded-md mt-[5%]"
                    type="password"
                    name='oldPassword'
                    value={data.oldPassword}
                    placeholder="Old Password"
                    onChange={handleChange}
                />
                <input className="md:mx-[5%] border-2 p-[2%] rounded-md mt-[5%]"
                    type="password"
                    name='newPassword'
                    value={data.newPassword}
                    placeholder="New Password"
                    onChange={handleChange}
                />
                <input className="md:mx-[5%] border-2 p-[2%] rounded-md mt-[5%]"
                    type="password"
                    name='confirmPassword'
                    value={data.confirmPassword}
                    placeholder="Confirm New Password"
                    onChange={handleChange}
                />
                <button className="md:mx-[5%] border-2 p-[2%] rounded-md mt-[5%] text-white bg-[var(--buttonBlue)]" onClick={handleSubmit}>Change Password</button>
            </form>
        </div>
    )
}

export default ChangePassword