import React from 'react'

const Record = ({ data }) => {
    const data_header = Object.keys(data[0]);
    for (var i = 0; i < data_header.length; i++) {
      data_header[i] = data_header[i].charAt(0).toUpperCase() + data_header[i].slice(1);
  
  }
    
  const s =   (data_header.length === 9 ) ? "grid-cols-9 " : "grid-cols-8"
    return (
      <>
        <div className={`grid ${s} gap-4 px-[1%]  font-medium `}>
          {data_header.map((d) => {
            return <span key={Math.random()}> {d} </span>;
          })}
        </div>
        <div className=" ">
          {data.map((d) => {
            return (
              <div key={d.id} className={`grid ${s}  text-grayDark w-full items-center  bg-white my-[1%] rounded-md  gap-4 p-[1%]`}>
                <span> {d.id} </span>
                <img src={d.photo} className="w-[30%] " />
                <span> {d.name} </span>
                <span> {d.gender} </span>
                <span> {d.course} </span>
                <span> {d.joiningDate} </span>
                <span className="overflow-hidden"> {d.email} </span>
                <span> {d.phone} </span>
                <span> {d.salary} </span>
              </div>
            );
          })}
        </div>
      </>
    );
  };

  export default Record