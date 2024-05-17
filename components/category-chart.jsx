"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function CategoryChart() {
  const chartRef = useRef(null);

  useEffect(() => {
    //this is to destroy any existing chart in canvas
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }
      //setting our context to 2d
      const context = chartRef.current.getContext("2d");

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

      //new chart instance
      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: ["My Belief", "My Family", "My Country", "My Community"],
          datasets: [
            {
              label: "Info",
              data: [20, 35, 25, 30],
              backgroundColor: (context) => {
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
              },
              borderWidth: 0,
            },
          ],
        },

        options: {
          plugins: {
            legend: {
              position: "right",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                color: "white",
              },
            },
          },
          //responsive: true
        },

        plugins: [doughnutLabel, sliceThickness],
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
    <div className="flex min-h-full flex-col items-center pt-4 group h-64 w-96 rounded-xl bg-gradient-to-t from-[#110A27] to-[#2D1D6B]">
      <div
        style={{
          position: "relative",
          width: "20vw",
          height: "30vh",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <canvas ref={chartRef} />
      </div>
    </div>
  );
}
