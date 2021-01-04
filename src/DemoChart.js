import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

const DemoChart = ({ data, chart }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is a title</h1>
      <div className="d-flex justify-content-center">
        {chart === "Line" ? (
          <div className="lineChart" style={{ width: "50%" }}>
            <Line
              data={data}
              options={{
                title: {
                  display: true,
                  text: "Line Chart Title",
                },
              }}
            />
          </div>
        ) : chart === "Bar" ? (
          <div className="barChart" style={{ width: "50%" }}>
            <Bar
              data={data}
              options={{
                scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
                legend: { position: "right" },
                title: {
                  display: true,
                  text: "Bar Chart Title",
                },
              }}
            />
          </div>
        ) : chart === "Pie" ? (
          <div className="PieChart" style={{ width: "50%" }}>
            <Pie
              data={{
                ...data,
                datasets: [
                  {
                    ...data.datasets[0],
                    backgroundColor: [
                      ...data.datasets[0].backgroundColor,
                      "rgba(125, 166, 6, 1)",
                      "rgba(25, 166, 6, 1)",
                      "rgba(125, 16, 6, 1)",
                      "rgba(25, 66, 200, 1)",
                      "rgba(125, 16, 126, 1)",
                      "rgba(125, 100, 106, 1)",
                    ],
                  },
                ],
              }}
              options={{
                scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
                legend: { position: "bottom" },
                title: {
                  display: true,
                  text: "Pie Chart Title",
                },
                //   animation: { animateScale: true },
              }}
            />
          </div>
        ) : (
          <h1>choose</h1>
        )}
      </div>
    </>
  );
};

export default DemoChart;
