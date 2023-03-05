import React, { useEffect, useState } from "react";
import axios from "axios";
import * as AdminApi from "../../api/AdminApi";
import { ApplyRegisteration } from "../../api/RegisterApi";
import dummy_profile from "../../images/dummy-profile-pic.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "react-uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../config/firebase";

const StudentApply = () => {
  const [CourseeData, setCourseeData] = useState([]);
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    guardianNumber: "",
    class: "",
    address: "",
    school: "",
    photo: "",
  });
  const [course, setCourse] = useState([]);
  const [file, setFile] = useState();
  

  const onChangeHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;

    setUserData((pre) => {
      return { ...pre, [key]: value };
    });

    if (key === "class") {
      setCourseeData([]);
      AdminApi.getAllCourse(value)
        .then((res) => {
          res.data.map((c) => {
            setCourseeData((pre) => {
              return [c, ...pre];
            });
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onAddCourse = (e) => {
    if (e.target.value !== "") {
      console.log(e.target.value);
      if (course.indexOf(e.target.value) === -1) {
        setCourse((pre) => {
          return [e.target.value, ...pre];
        });
      }
    }
  };

  const onDeleteCourse = (e) => {
    console.log(e);

    console.log(e.target.id);

    setCourse(course.filter((item) => item !== e.target.id));
  };

  const onSubmitHandler = (e) => {
    console.log(userData);
    if (
      userData.firstname === "" ||
      userData.lastname === "" ||
      userData.email === "" ||
      userData.phone === "" ||
      userData.guardianNumber === "" ||
      userData.class === "" ||
      userData.address === "" ||
      userData.school === ""
    ) {
      e.preventDefault();
      toast.warning("Please Fill All the Fields");
    } else if (CourseeData.length === 0) {
      e.preventDefault();
      toast.warning("Please Select a Course");
    } else if (file.length === 0) {
      e.preventDefault();
      toast.warning("Please Select a Image");
    } else {
      if (file !== null) {
        console.log(userData);
        userData.photo = uuid();
        const storageRef = ref(storage, `profile/${userData.photo}`);
        uploadBytes(storageRef, file).then((snapshot) => {
          const imgStorageRef = ref(storage, `profile/${userData.photo}`);
          getDownloadURL(imgStorageRef)
            .then((url) => {
              console.log(url);
            })
            .catch((error) => {
              toast.error("Can not load profile image");
            });
        });
      }
      e.preventDefault();
      ApplyRegisteration({ userData, course })
        .then((res) => {
          if (res.status === 200) toast.success("Registration Successfull");
          setUserData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            guardianNumber: "",
            class: "",
            address: "",
            school: "",
            photo: "",
          });
          setCourse([]);
          setFile();
         
        })
        .catch((err) => {
          console.log(err);

          toast.error(err.response.data);
          // else
          // toast.error("Registration Failed");
        });
    }
  };
  return (
    <div className="pt-20 ">
      <div className="  font-[Poppins] md:flex md:flex-row rounded-2xl bg-white content-center    mx-5 drop-shadow-2xl ">
        <div className="righSide flex flex-col md:px-20 md:w-[100%] pt-5 md:pt-0 item-center justify-center">
          <h1 className=" md:text-[32px] text-[16px] font-normal text-center">
            Welcome to
          </h1>
          <div className="flex fex-row text-center justify-center">
            <h1 className=" md:text-[32px] text-[16px] font-bold text-center">
              GLOBAL
            </h1>
            <h1 className=" md:text-[32px] text-[16px] font-bold text-[var(--orange)] text-center">
              {" "}
              ONENESS
            </h1>
          </div>

          <span className="text-center md:text-[12px] text-[6px]  mt-3">
            Please enter your details carefully !
          </span>
          <form
            className="flex flex-col max-w-full mt-5  "
            onSubmit={onSubmitHandler}
          >
            <div className="flex md:flex-row flex-col   gap-3 justify-around    ">
              <div className="flex flex-col justify-center  items-center space-y-2 cursor-pointer text-center m-[5%]  ">
              <div className="text-md font-medium "> Upload Photo</div>
                <div className="  w-[150px]  bg-rose-500   ">
                  {file  ? (
                    <img src={URL.createObjectURL(file)} className="object-cover " />
                  ) : (
                    <img src={dummy_profile} />
                  )}
                </div>

               
               <div>
               <input
                  type="file"
                  accept="image/png, image/jpeg"
                  className="text-sm     "
                  required={true}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                   
                  }}
                />
               </div>
              </div>

              <div className="flex flex-col  max-w-[400px] w-full md:mt-0  mt-5  ">
                <input
                  required={true}
                  id="firstname"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md "
                  type="text"
                  value={userData.firstname}
                  onChange={onChangeHandler}
                  placeholder="First Name"
                />
                <input
                  required={true}
                  id="email"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="email"
                  value={userData.email}
                  onChange={onChangeHandler}
                  placeholder="Email"
                />
                <input
                  required={true}
                  id="phone"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="tel"
                  value={userData.phone}
                  onChange={onChangeHandler}
                  placeholder="Phone Number"
                />
                <input
                  required={true}
                  id="school"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="text"
                  value={userData.school}
                  onChange={onChangeHandler}
                  placeholder="School"
                />
                <input
                  required={true}
                  id="address"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="text"
                  value={userData.address}
                  onChange={onChangeHandler}
                  placeholder="Address"
                />
              </div>
              <div className="flex flex-col  max-w-[400px] w-full ">
                <input
                  required={true}
                  id="lastname"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md "
                  type="text"
                  value={userData.lastname}
                  onChange={onChangeHandler}
                  placeholder="Last Name"
                />

                <select
                  required={true}
                  id="class"
                  className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="number"
                  value={userData.class}
                  onChange={onChangeHandler}
                >
                  <option selected value="">
                    Class
                  </option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="jeemain">JEE-MAIN</option>
                  <option value="neet">NEET</option>
                </select>

                <input
                  required={true}
                  id="guardianNumber"
                  className=" md:mx-0 mx-5 border-2 p-2 rounded-md mt-8"
                  type="tel"
                  value={userData.guardianNumber}
                  onChange={onChangeHandler}
                  placeholder="Guardian Number"
                />

                <select
                  required={true}
                  id="course"
                  className="md:mx-0 mx-5 border-2 p-2 rounded-md mt-8 snap-y  "
                  value={course.length === 0 ? "" : course[0]}
                  onChange={onAddCourse}
                >
                  <option value="" className="text-black">
                    Select Course{" "}
                  </option>
                  {CourseeData.map((c) => {
                    return (
                      <option
                        key={c._id}
                        value={c.Course}
                        className="text-black"
                      >
                        {c.Course}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>

            {course.length >= 1 && (
              <span className="text-center md:text-[12px] text-[6px]  mt-3">
                Click to Delete
              </span>
            )}
            <div className="w-full flex flex-row gap-2 justify-center mt-5 my-3 ">
              {course.map((c) => {
                return (
                  <div
                    key={Math.random()}
                    className="relative border-2 border-blue-400 text-blue-500 rounded-md p-2 px-3 hover:text-red-600 hover:border-red-600 cursor-pointer  "
                    id={c}
                    onClick={onDeleteCourse}
                  >
                    {c}
                  </div>
                );
              })}
            </div>

            <button className="md:mx-10 mx-12 border-2 p-2 font-[Poppins] rounded-md md:mt-8  btn bg-[var(--buttonBlue)] text-white py-2 px-3 ">
              Register
            </button>
            <span className="mx-5 md:mx-0 my-5  md:text-[16px] text-[12px] justify-center text-center ">
              have an account ?{" "}
              <a className="text-red-600" href="../studentLogin">
                Login
              </a>
            </span>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default StudentApply;
