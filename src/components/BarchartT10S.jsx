import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import jsonData from "./Top10Scam_by_Year.json";

function BarchartT10S() {
  const [activeYear, setActiveYear] = useState("2022");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const data = jsonData && jsonData[activeYear];
    if (jsonData && jsonData[activeYear]) {
      const entries = Object.entries(jsonData[activeYear]);
      // Sort entries from most reported case to least
      entries.sort((a, b) => b[1] - a[1]);

      const labels = entries.map((entry) => entry[0]);
      const values = entries.map((entry) => entry[1]);

      setChartData({
        labels: labels,
        datasets: [
          {
            label: `Top 10 Scams reported in ${activeYear}`,
            data: values,
            backgroundColor: [
              "#fde047", // green
              "#4ade80", // purple
              "#f59e0b", // yellow
              "#5eead4", // blue
              "#8b5cf6", // pink
              "#ec4899", // red
              "#fecdd3", // cyan
              "#f0fdfa", // white
              "#fdba74", // violet
              "rgba(255, 165, 0, 1)", // orange
            ],

            borderWidth: 1,
          },
        ],
      });
    } else {
      setChartData({
        labels: [],
        datasets: [],
      });
    }
  }, [activeYear]);

  // Chart options
  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Changes the color of x-axis grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: false,
        text: `Top 10 Scams in ${activeYear}`,
        color: "white",
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed.y}`;
          },
        },
      },
    },
  };

  return (
    <div className='container mx-auto p-4 mt-[60px]'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col justify-center items-center p-4'>
          {chartData.datasets.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p>Loading data...</p>
          )}
          <div className='w-full mt-4 flex justify-center'>
            {["2020", "2021", "2022", "2023", "2024"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 mx-1 text-sm font-medium ${
                  activeYear === year
                    ? "bg-green-200 text-blue-700"
                    : "text-gray-900 bg-white"
                } rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:text-black dark:bg-gray-800 dark:hover:bg-gray-700`}
                aria-current={activeYear === year ? "page" : undefined}
              >
                {year}
              </button>
            ))}
          </div>
        </div>
        <div className='p-4 flex flex-col justify-center'>
          <p className='text-lg font-semibold text-[#fcd34d]'>
            Top 10 Scams Reported Annually
          </p>
          <p className='mt-2 text-white'>
            Step into the shadowy world of digital deception with our annual
            breakdown of the most prevalent scams.As technology advances, so too
            do the techniques of fraudsters aiming to exploit unwary consumers
            and businesses. Our interactive chart traces the trajectory of each
            major scam type over the past five years, revealing not only common
            threats but also emerging dangers. From Phishing to False Billing,
            see firsthand how scams like Identity Theft and Online Shopping
            fraud have evolved, reflecting broader trends in cybercrime.
            <br />
            <br />
            This visualization isn't just a collection of statistics—it's a a
            tool for awareness and prevention. Explore the data to understand
            the patterns, prepare for potential risks, and learn how to protect
            yourself from becoming another statistic in the ongoing battle
            against scams.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BarchartT10S;
