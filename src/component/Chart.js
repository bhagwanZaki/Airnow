import React from "react";
import Chart from "react-apexcharts";
function BarChart() {
  let barChartData = {
    series: [
      {
        name: "PRODUCT A",
        data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27, 20, 18],
      },
      {
        name: "PRODUCT B",
        data: [44, 55, 41, 67, 22, 43, 44, 55, 41, 67, 22, 43.12, 31, 28],
      },
    ],
    options: {
      dataLabels: {
        enabled: false,
      },
      chart: {
        type: "bar",
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: ["#5C3FB9", "#08C0D8"],
      grid: {
        show: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "20",
          borderRadius: 6,
          borderRadiusApplication: "last",
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: "13px",
                fontWeight: 900,
              },
            },
          },
        },
      },
      xaxis: {
        type: "datetime",
        categories: [
          "03/01/2023 GMT",
          "03/02/2023 GMT",
          "03/03/2023 GMT",
          "03/04/2023 GMT",
          "03/05/2023 GMT",
          "03/06/2023 GMT",
          "03/07/2023 GMT",
          "03/08/2023 GMT",
          "03/09/2023 GMT",
          "03/10/2023 GMT",
          "03/11/2023 GMT",
          "03/12/2023 GMT",
          "03/13/2023 GMT",
          "03/14/2023 GMT",
        ],
      },
      legend: {
        show: false,
      },
      fill: {
        opacity: 1,
      },
    },
  };

  return (
    <div className="barChart">
      <div className="barNav">
        <h4>Daily balance overview</h4>

        <div className="leftBarnav">
          <div className="graphHolder1">Spent</div>
          <div className="graphHolder2">Referal</div>

          <select className="dropdown">
            <option>1 Day</option>
            <option>7 Day</option>
            <option>14 Day</option>
            <option>1 Month</option>
          </select>
        </div>
      </div>
      <Chart
        options={barChartData.options}
        series={barChartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default BarChart;
