"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function DoughnutChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    //this is to destroy any existing chart in canvas
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      //setting our context to 2d
      const context = chartRef.current.getContext("2d");

      //new chart instance
      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: ["John", "Jane", "Doe"],
          datasets: [
            {
              label: "Info",
              data: [34, 64, 23],
              backgroundColor: [
                "rgb(255, 99, 132)", // 4th part is reducing the opacity
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderColor: [
                "rgb(255, 99, 132)", // 4th part is reducing the opacity
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          //responsive: true
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <div style={{ position: "relative", width: "50vw", height: "50vh" }}>
      <canvas ref={chartRef} />
    </div>
  );
}
