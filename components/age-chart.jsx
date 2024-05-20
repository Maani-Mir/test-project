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
      /*
      const doughnutLabel = {
        id: "doughnutLabel",
        beforeDatasetsDraw(chart, args, pluginOptions) {
          const { ctx, data } = chart;
          ctx.save();
          const xCoor = chart.getDatasetMeta(0).data[0].x;
          const yCoor = chart.getDatasetMeta(0).data[0].y;
          ctx.font = "15px sans-serif";
          ctx.fillStyle = "white";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText("Category", xCoor, yCoor);
        },
      };
*/
      /*
      const sliceThickness = {
        id: "sliceThickness",
        beforeDraw(chart, plugins) {
          console.log(chart.chartArea.width);

          let sliceThicknessPixel = [200, 200, 200, 200];
          sliceThicknessPixel.forEach((thickness, index) => {
            chart.getDatasetMeta(0).data[index].outerRadius =
              (chart.chartArea.width / thickness) * 100;
          });
        },
      };
*/
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

          //const segment = height / data.labels.length; // width of one bar
        },
      };

      //new chart instance
      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: ["16-18", "19-21", "22-24", "24-29"],
          datasets: [
            {
              label: ["Info"],
              data: [40, 20, 15, 25],
              backgroundColor: [
                "rgb(208,0,134)",
                "rgb(25,64,238)",
                "rgb(1,164,203)",
                "rgb(0,169,77)",
              ],
              /*backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea } = chart;
                if (!chartArea) {
                  return null;
                }
                if (context.dataIndex === 0) {
                  return getGradientRed(chart);
                } else if (context.dataIndex === 1) {
                  return getGradientBlue(chart);
                } else if (context.dataIndex === 2) {
                  return getGradientCyan(chart);
                } else if (context.dataIndex === 3) {
                  return getGradientGreen(chart);
                }
              },*/
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
                pointStyle: "circle",
                color: "white",
                generateLabels: (chart) => {
                  console.log(chart);
                  return chart.data.labels.map((label, index) => ({
                    text: label,
                    fillStyle: chart.data.datasets[0].backgroundColor[index],
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

  function getGradientBlue(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, "#0762F0");
    gradientSegment.addColorStop(0.5, "#2131EC");
    gradientSegment.addColorStop(1, "#0762F0");
    return gradientSegment;
  }

  function getGradientRed(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, "#DF0092");
    gradientSegment.addColorStop(0.5, "#B00069");
    gradientSegment.addColorStop(1, "#DF0092");
    return gradientSegment;
  }

  function getGradientCyan(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, "#00D3F0");
    gradientSegment.addColorStop(0.5, "#00D3F0");
    gradientSegment.addColorStop(1, "#0183B1");
    return gradientSegment;
  }

  function getGradientGreen(chart) {
    const {
      ctx,
      chartArea: { top, bottom, left, right },
    } = chart;
    const gradientSegment = ctx.createLinearGradient(left, 0, right, 0);
    gradientSegment.addColorStop(0, "#01A04C");
    gradientSegment.addColorStop(0.5, "#01D65A");
    gradientSegment.addColorStop(1, "#00BD52");
    return gradientSegment;
  }

  return (
    <div className="flex min-h-full flex-col group h-64 w-96 pl-6 pt-4 rounded-xl bg-gradient-to-t from-[#110A27] to-[#2D1D6B]">
      Age
      <div
        style={{
          position: "relative",
          width: "20vw",
          height: "30vh",
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
