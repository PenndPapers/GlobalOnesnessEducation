import React from "react";
import Chart from "react-apexcharts";

const BarChart = ({ title , datax, datay }) => {
  return (
    <div className="bg-white p-[3%] rounded-2xl snap-x ">
      <Chart
        type="bar"
        width={500}
        height={400}
        series={[
          {
           
            data: datay,
          },
        ]}
        options={{
     
         plotOptions : {
            bar:{
              columnWidth : "35%"
            }
         },
      
          title: {
            text: `${title}`,
            style: { fontSize: 30, fontWeight: 500 },
          },
          colors: ["#6B68F5"],
          theme: { mode: "light" },
         

          xaxis: {
            tickPlacement: "on",
            categories: datax,
          },
          yaxis: {
            // min : 0 ,
            // max :
            labels: {
              formatter: (val) => {
                return `${val}`;
              },
              style: { fontSize: "15", colors: ["#767474"] },
            },
          },
          legend: {
            show: true,
            position: "right",
          },
          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
          
            style: {
              colors: ["#767474", "#E91E63", "#9C27B0"],
              fontSize: 15,
            },
          },
        }}
      >
       
      </Chart>
    </div>
  );
};

export default BarChart;
