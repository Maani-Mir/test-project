"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function RegionChart() {
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
          ctx.fillText("Region", xCoor, yCoor);
        },
      };

      const legendMargin = {
        id: "legendMargin",
        beforeInit(chart, legend, options) {
          const fitValue = chart.legend.fit;
          chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            return (this.height += 0);
          };
        },
      };

      /*
      const sliceThickness = {
        id: "sliceThickness",
        beforeDraw(chart, plugins) {
          console.log(chart.chartArea.width);

          let sliceThicknessPixel = [350, 350, 350];
          sliceThicknessPixel.forEach((thickness, index) => {
            chart.getDatasetMeta(0).data[index].outerRadius =
              (chart.chartArea.width / thickness) * 100;
          });
        },
      };*/

      //new chart instance
      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: [
            "North-Central Mountains",
            "Pacific Coast",
            "Caribbean Coast",
          ],
          datasets: [
            {
              data: [35, 30, 35],
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
                }
              },
              borderWidth: 0,
              cutout: "75%",
            },
          ],
        },

        options: {
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                usePointStyle: true,
                pointStyle: "circle",
                color: "white",
                padding: 13,
              },
            },
          },
          //responsive: true
        },

        plugins: [doughnutLabel, legendMargin],
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

  return (
    <div className="flex min-h-full flex-col items-center pt-10 group h-80 rounded-3xl bg-gradient-to-t from-[#1B0F4E] to-[#2E1F6D]">
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
