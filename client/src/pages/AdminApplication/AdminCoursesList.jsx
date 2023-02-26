import React, { useState, useEffect } from "react";
import axios from "axios";
import {CiEdit} from "react-icons/ci"




import { AiOutlineClose } from "react-icons/ai"; // close btn
const URL = "http://localhost:5000/";
// const dummy_courses = [
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "Physics",
//     faculty: "pawan sir",
//     class: "120",
//     photo: physics,
//   },
//   {
//     subject: "maths",
//     faculty: "pawan sir",
//     class: "120",
//     photo: maths,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: statics,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "Physics",
//     faculty: "pawan sir",
//     class: "120",
//     photo: physics,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: statics,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "Physics",
//     faculty: "pawan sir",
//     class: "120",
//     photo: physics,
//   },
//   {
//     subject: "maths",
//     faculty: "pawan sir",
//     class: "120",
//     photo: maths,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: statics,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: chemistry,
//   },
//   {
//     subject: "Physics",
//     faculty: "pawan sir",
//     class: "120",
//     photo: physics,
//   },
//   {
//     subject: "maths",
//     faculty: "pawan sir",
//     class: "120",
//     photo: maths,
//   },
//   {
//     subject: "chemsitry",
//     faculty: "pawan sir",
//     class: "120",
//     photo: statics,
//   },
// ];

const Course = ({ d }) => {
  const src = d.Course.toLowerCase();
 
  return (
    <div className="flex gap-2  shadow-lg ">

      <div className="p-1 border border-grayDark">
        {" "}
        <img
          src={require(`../../images/${src}.png`) }
          alt="+"
          className="  "
        />{" "}
      </div>
      <div className="flex flex-col w-full ">
        <h2 className="font-medium w-full text-xl ">{d.Course}</h2>
        <p className="text-grayDark">{d.Faculty}</p>
        <p className="text-grayDark">{d.Lectures} Classes</p>
      </div>
     <button className="flex justify-start"
      >
      <CiEdit className="sm:text-xl"/>
     </button>
    </div>
  );
};

const AdminCoursesList = () => {
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
          return { ...pre, Status: err };
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
    <div className="flex flex-col gap-5  p-[2%] font-[Roboto] bg-adminbg   relative ">
      <h1 className="font-semibold sm:text-3xl ">Lists of courses </h1>
      <div className="flex ">
        <div>
          <select
            required={true}
            name="class"
            className="  p-1  px-3 rounded-md  bg-graylight"
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
          <button
            className="bg-[#FBD540]  px-[2%] flex items-center gap-3 rounded-lg  "
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            <span className="text-white font-bold text-3xl"> + </span>
            <span>Add new Course </span>
          </button>
        </div>
      </div>
      <div className={`h-0.5 w-screen  bg-grayDark`}></div>
      {listOfCourses.length > 0 ? (
        <div className="grid md:grid-cols-4  sm:grid-cols-3 grid-cols-2 gap-5  justify-items-center p-[1%]  ">
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

            {!error.length && (
              <div className="text-red-600 text-center"> {error.Status} </div>
            )}

            <form className="grid p-[2%]" onSubmit={onSubmitHandler}>
              <input
                required={true}
                name="CourseId"
                className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-3"
                type="text"
                placeholder="Course ID "
                value={addCourseData.CourseId}
                onChange={onChangeHandler}
              />
              <input
                required={true}
                name="Course"
                className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Course Name "
                value={addCourseData.Course}
                onChange={onChangeHandler}
              />
              <input
                required={true}
                name="Lectures"
                className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Number of lectures"
                value={addCourseData.Lectures}
                onChange={onChangeHandler}
              />
              <select
                required={true}
                name="Class"
                className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
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
                className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                type="text"
                placeholder="Faculty Name "
                value={addCourseData.Faculty}
                onChange={onChangeHandler}
              />
              <div className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8">
                Upload Icon
                <input
                  name="Photo"
                  className=" mx-2"
                  type="file"
                  placeholder="Icon"
                  // value={addCourseData.Photo}
                  onChange={onChangeHandler}
                />
              </div>
              <div className="flex justify-center mt-[4%]">
                <button
                  className="bg-[#FBD540] p-2  px-[2%]  rounded-lg w-[20%]  "
                  onClick={() => {
                    setShowForm(true);
                  }}
                  type="submit"
                >
                  <span className="font-medium">Add</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminCoursesList;
