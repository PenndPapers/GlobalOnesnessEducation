import React, { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineClose } from "react-icons/ai"; // close btn
const URL = "http://localhost:5000/";

const Course = ({d}) => {
  const location = useLocation();
    const src = d.Course;
    return (
        <div className="flex gap-2 bg-white p-2 rounded-lg shadow ">
          <div className="p-1  flex items-center  border-grayDark">
            {" "}
            <img
              src={require(`../../images/${src}.png`)}
              alt="+"
              className="w-[100px]"
            />{" "}
          </div>
          <div className="flex flex-col w-full pb-1 ">
            <h2 className="font-medium w-full sm:text-xl  ">{d.Course}</h2>
            <p className="text-grayDark sm:text-sm text-xs ">{d.Faculty}</p>
            <p className="text-grayDark sm:text-sm text-xs ">{d.Lectures} Classes</p>
          </div>
          {location.pathname !== '/home' &&  <button className="flex justify-start">
            <CiEdit className="sm:text-xl" />
          </button>}
        </div>
      );
}


const CoursesList = () => {
  const [listOfCourses, setListOfCourses] = useState([]);
  const [query, setQuery] = useState("12");
  const [showForm, setShowForm] = useState(false);
  const [addCourseData, setAddCourseData] = useState({
    CourseId: "",
    Course: "",
    Class: "",
    Faculty: "",
  });
  const [error, setError] = useState({});
  const location = useLocation();
  useEffect(() => {
    axios
      .get(`${URL}admin/getAllCourse/${query}`)
      .then((res) => {
        setListOfCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
        setListOfCourses([]);
      });
  }, [query, showForm]);

  const onQueryHandler = (e) => {
    const value = e.target.value;
    setQuery(value);
    axios
      .get(`${URL}admin/getAllCourse/${value}`)
      .then((res) => {
        setListOfCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
        setListOfCourses([]);
      });
  };

  const onChangeHandler = (e) => {
    setError({});
    const key = e.target.name;

    const val = e.target.value;
    setAddCourseData((pre) => {
      return { ...pre, [key]: val };
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(addCourseData);
    const data = {
      CourseId: addCourseData.CourseId,
      Course: addCourseData.Course,
      Class: addCourseData.Class,
      Faculty: addCourseData.Faculty,
      Lectures: addCourseData.Lectures,
    };
    axios
      .post(`${URL}admin/addCourse`, data)
      .then((res) => {
        console.log(res.data);
        setError((pre) => {
          return { ...pre, Status: res.data };
        });
      })
      .catch((err) => {
        console.log(err);
        setError((pre) => {
          return { ...pre, Status: err.response.data };
        });
      });
    setAddCourseData({
      CourseId: "",
      Course: "",
      Lectures: "",
      Class: "",
      Faculty: "",
    });
  };

  return (
   <section className="font-[Roboto] bg-adminbg pt-[90px] py-10 px-3 " id='courses'>
     <div className="flex flex-col gap-5  sm:w-5/6 mx-auto    relative ">
      <h1 className="font-semibold sm:text-3xl ">Lists of courses </h1>
      <div className="flex ">
        <div>
          <select
            required={true}
            name="class"
            className='md:mx-[3%]  border-2 p-2 rounded-md mt-[1%]'
            type="number"
            value={query}
            onChange={onQueryHandler}
          >
            <option value="">Class</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="jeemain">JEE-MAIN</option>
            <option value="neet">NEET</option>
          </select>
        </div>
        <div className="w-11/12  mx-auto  flex justify-end  ">
          { location.pathname !== '/home' && <button
            className="bg-[#FBD540]  px-[2%] flex  justify-center items-center gap-3 rounded-lg  "
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            <span className="text-white font-bold text-3xl"> + </span>
            <span className="px-1">Add new Course </span>
          </button>}
        </div>
      </div>
      <div className={`h-0.5   bg-grayDark`}></div>
      {listOfCourses.length > 0 ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3   grid-cols-2 gap-4  justify-items-center p-[1%]  ">
          {listOfCourses.map((d) => {
            return <Course key={d._id} d={d} />;
          })}
        </div>
      ) : (
        <div className="text-center"> No Courses Available </div>
      )}

      {/* form to add new course  */}
      {showForm && (
        <div className="w-full  absolute  py-[5%]">
          <div className=" sm:w-[60%]  border-2 ring-2 ring-graylight shadow-2xl  bg-adminbg  mx-auto ">
            <div className="grid grid-cols-3 justify-items-end px-[4%] mt-[2%] ">
              <h1 className="font-semibold sm:text-2xl   col-span-2  ">
                {" "}
                Add a new Course{" "}
              </h1>
              <button
                onClick={() => {
                  setShowForm(false);
                }}
              >
                <AiOutlineClose className="sm:text-2xl" />
              </button>
            </div>

            {error.length > 0  &&
              toast.error(error.Status, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })}
 
            <form className="grid p-[2%]    " onSubmit={onSubmitHandler}>
              <input
                required={true}
                name="CourseId"
                className=" md:w-full  w-[90%]   border-2 p-2 rounded-md mt-3"
                type="text"
                placeholder="Course ID "
                value={addCourseData.CourseId}
                onChange={onChangeHandler}
              />
              <input
                required={true}
                name="Course"
                className=" md:w-full  w-[90%] border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Course Name "
                value={addCourseData.Course}
                onChange={onChangeHandler}
              />
              <input
                required={true}
                name="Lectures"
                className=" md:w-full  w-[90%] border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Number of lectures"
                value={addCourseData.Lectures}
                onChange={onChangeHandler}
              />
              <select
                required={true}
                name="Class"
                className="md:w-full  w-[90%] border-2 p-2 rounded-md mt-8"
                type="text"
                value={addCourseData.Class}
                onChange={onChangeHandler}
              >
                <option value="">Class</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="jeemain">JEE-MAIN</option>
                <option value="neet">NEET</option>
              </select>

              <input
                required={true}
                name="Faculty"
                className=" md:w-full  w-[90%] border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Faculty Name "
                value={addCourseData.Faculty}
                onChange={onChangeHandler}
              />
              <div className="md:w-full   w-[90%] border-2 p-2 rounded-md mt-8">
                Upload Icon
                <input
                  name="Photo"
                  className=""
                  type="file"
                  placeholder="Icon"
                  // value={addCourseData.Photo}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex justify-center mt-[5%]">
                <button
                  className="bg-[#FBD540] p-2    rounded-lg w-[40%]  "
                  onClick={() => {
                    setShowForm(true);
                  }}
                  type="submit"
                >
                  <span className="font-medium ">Add</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
   </section>
  );
};

export default CoursesList;
