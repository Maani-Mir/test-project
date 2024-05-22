"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function AgeChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    //this is to destroy any existing chart in canvas
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      //setting our context to 2d
      const context = chartRef.current.getContext("2d");

      const horizontalBackgroundBar = {
        id: "horizontalBackgroundBar",
        beforeDatasetsDraw(chart, args, plugins) {
          const {
            data,
            ctx,
            chartArea: { top, bottom, left, right, width, height },
            scales: { x, y },
          } = chart;

          const barPercentage = data.datasets[0].barPercentage || 0.9;
          const categoryPercentage = data.datasets[0].categoryPercentage || 0.8;

          const barThickness =
            (height / data.labels.length) * barPercentage * categoryPercentage;

          ctx.beginPath();
          ctx.fillStyle = "#160F3B";
          data.labels.forEach((bar, index) => {
            ctx.fillRect(
              left,
              y.getPixelForValue(index) - barThickness / 2,
              width,
              barThickness
            );
          });
        },
      };

      //new chart instance
      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["16-18", "19-21", "22-24", "24-29"],
          datasets: [
            {
              data: [40, 20, 15, 25],
              backgroundColor: [
                "rgb(208,0,134)",
                "rgb(25,64,238)",
                "rgb(1,164,203)",
                "rgb(0,169,77)",
              ],

              borderWidth: 0,
              borderRadius: 20,
              borderSkipped: false,
              barPercentage: 0.5,
            },
          ],
        },

        options: {
          indexAxis: "y",
          scales: {
            x: {
              grace: 60,
              ticks: {
                display: false,
              },
              grid: {
                drawOnChartArea: false,
                drawTicks: false,
                drawBorder: false,
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                display: false,
              },
              grid: {
                drawOnChartArea: false,
                drawTicks: false,
                drawBorder: false,
              },
            },
          },
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                padding: 22,
                pointStyle: "circle",
                color: "white",
                generateLabels: (chart) => {
                  console.log(chart);
                  return chart.data.labels.map((label, index) => ({
                    text: label,
                    fillStyle: chart.data.datasets[0].backgroundColor[index],
                    fontColor: "white",
                  }));
                },
              },
            },
          },
          responsive: true,
        },

        plugins: [horizontalBackgroundBar],
      });

      chartRef.current.chart = newChart;
    }
  }, []);

  return (
    <div className="text-xl flex min-h-full flex-col group h-32 pl-6 pt-4 rounded-3xl bg-gradient-to-t from-[#1B0F4E] to-[#2E1F6D]">
      Age
      <div
        style={{
          position: "relative",
          width: "24vw",
          height: "28vh",
          justifyContent: "center",
          display: "flex",
          paddingTop: "9px",
        }}
      >
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
