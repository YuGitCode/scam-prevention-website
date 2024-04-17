import React, { useEffect, useState } from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import jsonData from "./ReportsNum_Gender_byYear.json";

const DonutChart = () => {
  const [activeYear, setActiveYear] = useState("2022");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const genderColors = {
    Male: "rgba(53, 162, 235, 0.5)", // Blue
    Female: "rgba(255, 99, 132, 0.5)", // Pink
    Other: "rgba(75, 192, 192, 0.5)", // Green
  };
  // Update chart data when the active year changes
  useEffect(() => {
    if (jsonData && jsonData[activeYear]) {
      const data = jsonData[activeYear];
      const labels = Object.keys(data);
      const values = Object.values(data);
      const backgroundColors = labels.map(
        (label) => genderColors[label] || "rgba(201, 203, 207, 0.5)"
      );

      setChartData({
        labels: labels,
        datasets: [
          {
            label: "Reported Cases by Gender",
            data: values,
            backgroundColor: backgroundColors,
            borderColor: backgroundColors.map((color) =>
              color.replace("0.5", "1")
            ), // Darker for the border
            borderWidth: 1,
          },
        ],
      });
    } else {
      // Ensure that there's always a fallback to prevent undefined datasets
      setChartData({
        labels: [],
        datasets: [],
      });
    }
  }, [activeYear, jsonData]);
  const chartOptions = {
    plugins: {
      title: {
        display: true,
        text: "Reported Scam Cases by Gender",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
        color: "#ffffff", // Title color
      },
      legend: {
        labels: {
          color: "white", // Adjust legend text color
        },
      },
    },
  };

  return (
    <div className='container mx-auto p-4 pt-[200px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Text introduction area */}
        <div className='p-4 flex flex-col justify-center'>
          <p className='text-lg font-semibold text-[#fcd34d]'>
            A Year-by-Year Breakdown of Gender-Specific Impact
          </p>
          <p className='mt-2 text-white'>
            The donut graph highlights how scams disproportionately affect
            various demographics, with escalating figures each year. Understand
            the patterns, recognize the risks, and empower yourself with
            knowledge. Who's most at risk? Uncover the nuances of how scam
            activities have evolved and who they have impacted the most. Join us
            in combating this digital menace by staying informed.
          </p>
        </div>
        {/* Chart container with max-width and responsive width */}
        <div className='flex flex-col justify-center items-center p-4 mt-[-5px] mb-[20px]'>
          <div style={{ width: "400px", height: "400px" }}>
            {chartData && chartData.datasets.length > 0 ? (
              <Doughnut data={chartData} options={chartOptions} />
            ) : (
              <p>Loading data...</p>
            )}
            {/* Buttons centered below the chart on all screen sizes */}
            <div className='w-full flex justify-center items-center'>
              {["2020", "2021", "2022", "2023", "2024"].map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-4  mx-1 text-sm font-medium ${
                    activeYear === year
                      ? "bg-green-200 text-blue-700" // Active button with your chosen color
                      : "text-gray-900 bg-white"
                  }  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:text-black dark:bg-gray-800 dark:hover:bg-gray-700 mt-5`}
                  aria-current={activeYear === year ? "page" : undefined}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutChart;
