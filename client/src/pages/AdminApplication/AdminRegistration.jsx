import React, { useState, useEffect } from "react";
import * as AdminApi from "../../api/AdminApi";
import * as AuthApi from "../../api/AuthApi";

import dummy_profile from "../../images/dummy-profile-pic.jpg";


const onAcceptHandler = async (data , setBtnClicked , btnClicked  )=>{
  // console.log(data);
  const d = data ;
  console.log(d);
  const date = new Date();
  const id = +(date.getFullYear().toString() + date.getTime().toString().slice(9, 13));
  const NewStudent = {password : "student@123" , studentId : id ,  ...d};
  console.log("new " ,  NewStudent);
  const response = await AuthApi.StudentRegister(NewStudent);
   console.log(response);
   if(response.status == 200)
   {
    const resp = await AdminApi.deleteStudentApplication(data._id);
    console.log(resp)
    setBtnClicked(!btnClicked);
      
   }

}

const onRejectHandler =  async (id )=>{
  console.log(id);
  const response = await AdminApi.deleteStudentApplication(id);
console.log(response.status);
  console.log(response);
}



const AppliactionRecord = ({ data  ,btnClicked ,  setBtnClicked }) => {
  return (
    <div className="p-3  flex flex-col justify-center items-center rounded shadow-lg bg-white  ">
      <img src={dummy_profile} className="w-[20%]" />
      <h1 className="text-xl font-semibold py-2">
        {" "}
        {data.firstname} {data.lastname}{" "}
      </h1>
      <div className="w-5/6 ">
        <div>
          Class : <span className="font-medium">{data.class}</span>
        </div>
        <div>
          {" "}
          Courses :
          {data.courses.map((c) => {
            return (
              <span key={Math.random()} className="font-medium">
                {" "}
                {c}{" "}
              </span>
            );
          })}
        </div>
        <div>School : {data.school}</div>
        <div>Email : {data.email}</div>
        <div>Phone : {data.phone}</div>
        <div>Address : {data.address}</div>

      </div>
      <div className="flex w-full my-3 justify-around items-center ">
        <button onClick={()=>{onAcceptHandler(data ,setBtnClicked , btnClicked  ) }} className= "font-medium rounded-lg  border-2  border-green-500 text-green-500  w-2/6  p-2  hover:text-white hover:bg-green-500 ">Accept </button>
        <button onClick={()=>{onRejectHandler(data._id) ; setBtnClicked(!btnClicked)}}  className="font-medium rounded-lg  border-2  border-red-500 text-red-500  w-2/6  p-2  hover:text-white hover:bg-red-500 ">Reject </button>
      </div>
    </div>
  );
};

const AdminRegistration = () => {
  const [studentApplyData, setStudentApplyData] = useState([]);
  const [btnClicked, setBtnClicked] = useState(false);
   useEffect(()=>{
   
    const fetch = async ()=>{
      try{
        const response =  await AdminApi.getStudentApplication();
        console.log(response.data);
        setStudentApplyData(response.data)
      }catch(err){
        console.log(err);
      }

    }
    fetch();

   } , [btnClicked]) 
  
  return (
    <section className=" h-full font-[Poppins] bg-adminbg pt-[90px] py-10  px-5 ">
      {studentApplyData.length== 0   && 
        <div className="w-full text-center text-2xl  text-red-500 ">No Application Here !!</div>}
      {studentApplyData.length > 0  && (
        <div>
        <h1 className="font-semibold sm:text-2xl py-4">List of Student Application </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-3 justify-items-center  ">
        {studentApplyData.map((d) => {
          return <AppliactionRecord key={d._id} data={d} btnClicked= {btnClicked} setBtnClicked={setBtnClicked} />;
        })}
      </div>
      </div> 
      )
      }
    </section>
  );
};

export default AdminRegistration;
