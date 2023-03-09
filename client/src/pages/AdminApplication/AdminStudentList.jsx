import React , {useState , useEffect} from 'react'
import { BsSearch } from "react-icons/bs";
import p1 from "../../images/pawan_sir.jpeg";
import p2 from "../../images/rahul.jpeg";
import p3 from "../../images/satpal.jpeg";
import p4 from "../../images/richa.jpeg";
import p5 from "../../images/manoj.jpeg";
import p6 from "../../images/gaurav.jpeg";
import * as AdminApi from "../../api/AdminApi";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase";

// const dummy_student = [
//   {
//     id: "101",
//     photo: p1,
//     name: "Pawan Sir",
//     gender: "Male",
//     course: "Chemistry",
//     joiningDate: "01/01/2023",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
   
   
//   },
//   {
//     id: "104",
//     name: "Richa Ma'am ",
//     course: "Chemistry",
//     photo: p4,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
  
//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "105",
//     name: "Manoj Sir",
//     course: "Physics",
//     photo: p5,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
    
//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "102",
//     name: "Rahul Sir",
//     course: "Physics",
//     photo: p2,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",

//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "103",
//     name: "Satpal Sir",
//     course: "Accounts",
//     photo: p3,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
  
//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "104",
//     name: "Richa Ma'am ",
//     course: "Chemistry",
//     photo: p4,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
  
//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "105",
//     name: "Manoj Sir",
//     course: "Physics",
//     photo: p5,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
    
//     joiningDate: "01/01/2023",
//   },
//   {
//     id: "106",
//     name: "Gaurav Sir ",
//     course: "Maths",
//     photo: p6,
//     gender: "Male",
//     email: "pawan@gmaiil.com",
//     phone: "1234567890",
//     joiningDate: "01/01/2023",
//   },
// ]


const RecordItem = ({ data }) => {
  return (
    <>
     <div className='hidden  lg:block'>
     <div className={`grid grid-cols-9  gap-4 px-[1%]  font-medium `}>
        <span> StudentID  </span>
        <span> Photo  </span>
        <span> Name  </span>
        <span> Class  </span>
        <span> Date of Join  </span>
        <span className='col-span-2'> Email  </span>
        <span> Phone  </span>
      </div>
      <div className="bg-adminbg ">
        {data.map((d , index) => {
          let date = new Date(d.joiningDate);
          date = date.toLocaleString().slice(0,8) ;
          return (
            <div key={index} className={`grid grid-cols-9 text-grayDark w-full items-center bg-white my-[1%] rounded-md  gap-4 p-[1%] shadow-md`}>
              <span className='text-sky-500 '> #{d.studentId} </span>
            
              <img src={d.photo}   className=" h-16 w-16 object-cover rounded-full   hover:scale-105 " />
              <span> {d.firstname} {d.lastname} </span>
              <span> {d.class} </span>
              <span> {date} </span>
              <span className="overflow-hidden col-span-2"> {d.email} </span>
              <span> {d.phone} </span>
              <span> {d.salary} </span>
            </div>
          );
        })}
      </div>
     </div>
     <div className='lg:hidden grid md:grid-cols-2 sm:grid-cols-2 gap-3'>

        {data.map((d , index) => {
          let date = new Date(d.joiningDate);
          date = date.toLocaleString().slice(0,8) ;
          return (
            <div key={index}  className=' bg-white p-4 rounded-lg shadow flex justify-start sm:items-start items-center gap-4 '>
            {/* <img src={d.photo} className="w-[30%]  " alt='photo alter' /> */}
            <img src={d.photo}   className=" h-24 w-24 object-cover   hover:scale-105 " />
            <div  className={`flex flex-col item-center  text-grayDark  rounded-md  text-sm `}>
               
              <span className='text-sky-500 font-medium'> #{d.studentId} </span>
              <span className='font-medium'>  {d.firstname} {d.lastname}  </span>
              <span>Class: {d.class} </span>
              <span> D.O.J: {date} </span>
              <span className="overflow-hidden "> {d.email} </span>
              <span> Ph: {d.phone} </span>
           
             
            </div>
            </div>
          );
        })}
      </div>

      
    </>
  );
};


const RecordLists = ({title }) => {

  const [data , setData] = useState([]);
  const [searchData , setSearchData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      //  const res = await axios.get(`http://localhost:5000/${title}`);
      // setData(res.data);
    };
    // if (query.length === 0 || query.length > 2) fetchData();
  }, []);
  

  useEffect(()=>{
    AdminApi.getAllStudents().then((response)=>{
   //   console.log(res.data);
      response.data.map((d) => {   
        if (d.photo == null) {
          setData((prev) => [...prev, d]);
        }
        const imgStorageRef = ref(storage, `profile/${d.photo}`);
        getDownloadURL(imgStorageRef)
          .then((url) => {
           const temp =   {...d , photo : url}; 
         //  console.log("temp" , temp);
         setData((prev)=>{
              return        [...prev , temp ]   })
          })
          .catch((error) => {
            console.log(error);
          });
      });
     // setData(res.data);
    }).catch((err)=>console.log(err));
  }, [])
   





  const onChangeInput = (e)=>{
 
    setSearchData(e.target.value)
    
    const newdata = data.filter((d)=>{
        return d.name.toLowerCase().includes(searchData.toLowerCase())  || d.id.toLowerCase().includes(searchData.toLowerCase());
    })
 
     setData(newdata);
   
  }
  
  const onSearchData = (e)=>{
    e.preventDefault();
    console.log(searchData.toLowerCase())
    const newdata = data.filter((d)=>{
        return d.name.toLowerCase() === searchData.toLowerCase() || d.id.toLowerCase() == searchData.toLowerCase();
    })
     setData(newdata);

  }


  return (
    <div className="flex flex-col gap-5 bg-adminbg  p-[2%] font-[Roboto]  ">
      <h1 className="font-semibold text-xl ">List of {title}s</h1>
      <form onSubmit={onSearchData} className="flex w-full gap-2 ">
   
       <div className="flex items-center gap-2 p-1 w-full  bg-white rounded-2xl border-2 border-[#BFBFBF]">
          <BsSearch />
          <input  className="w-full p-1 px-3 "  type="text" placeholder="Search by ID/Name" value={searchData} onChange={onChangeInput} />
        </div>
        <button  type="submit" className="bg-orange px-[3%] rounded-2xl">Search</button>
      
      </form>
    { data.length > 0  && <RecordItem data={data} />}
    </div>
  )
}



const AdminStudentList = () => {
  
  const [studentData , setStudentData] = useState([]);

 
  return (
   <div className='bg-adminbg  pt-[90px] py-10 px-3 '>
 <RecordLists title="Student"  />
   </div>
  )
}

export default AdminStudentList