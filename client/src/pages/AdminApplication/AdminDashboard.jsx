import React from "react";

import studentPhoto from "../../images/icons8-students-100.png";
import techersPhoto from "../../images/icons8-people-90.png";
import earningPhoto from "../../images/icons8-rupee-64.png";

import BarGraph from "../../component/Graphs/BarChart";

const dummy_data = [
  {
    id: 1,
    subject: "Chemistry",
    student: 55,
  },
  {
    id: 2,
    subject: "Maths",
    student: 23,
  },
  {
    id: 3,
    subject: "Physics",
    student: 34,
  },
  {
    id: 4,
    subject: "Economics",
    student: 12,
  },
  {
    id: 5,
    subject: "Commerce",
    student: 20,
  },
  {
    id: 6,
    subject: "Biology",
    student: 40,
  },
];

const datax = dummy_data.map((d) => {
  return d.subject;
});

const datay = dummy_data.map((d) => {
  return d.student;
});

const AdminDashboard = () => {
  return (
    <main className="bg-[#F0F1F3] p-[2%] h-full font-[Poppins]    ">
      <section className="flex justify-between items-center py-10   ">
        <div className="sm:flex sm:flex-row   bg-white  shadow-lg    sm:items-start  rounded gap-4 p-4 m-2  ">
          <img
            src={studentPhoto}
            alt="Student photo"
            className="bg-[#D1F3E0]  rounded-full p-[2%] sm:p-[5%] w-[40%] mx-auto  "
          />
          <div className="flex flex-col sm:items-start items-center">
            <div className="md:text-xl  text-grayDark "> Student </div>
            <div className="   font-medium">150</div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row  bg-white  shadow-lg   items-start rounded gap-4 p-4 m-2   ">
          <img
            src={techersPhoto}
            alt="Techers photo"
            className="bg-[#E1F1FF] rounded-full p-[2%] sm:p-[5%]  w-[40%] mx-auto"
          />
          <div className="flex flex-col sm:items-start items-center">
            <div className="md:text-xl  text-grayDark "> Teachers </div>
            <div className="  font-medium">150</div>
          </div>
        </div>
        <div className="sm:flex sm:flex-row  bg-white  shadow-lg     items-start rounded gap-4 p-4 m-2 2   ">
          <img
            src={earningPhoto}
            alt="earning photo"
            className="bg-[#FFEAEA] rounded-full p-[2%] sm:p-[5%]  w-[40%] mx-auto"
          />
          <div className="flex flex-col sm:items-start items-center">
            <div className="md:text-xl  text-grayDark "> Earnings </div>
            <div className="  text-sm   font-medium">₹ 500000</div>
          </div>
        </div>
      </section>

      <section className="sm:flex  sm:justify-between w-full py-10">
        <BarGraph title="Enrollment" datax={datax} datay={datay} />
        <BarGraph title="Expences" datax={datax} datay={datay} />
      </section>
    </main>
  );
};

export default AdminDashboard;
