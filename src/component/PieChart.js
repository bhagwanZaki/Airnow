import React from "react";
import Chart from "react-apexcharts";

function PieChart() {
  let data = {
    series: [70, 30],
    chartOptions: {
      labels: ["Spent", "Referral"],
    },
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      colors: ["#08C0D8", "#5C3FB9"],
    },
  };
  return (
    <div className="pieChart">
      <Chart
        type="donut"
        width="380"
        series={data.series}
        options={data.options}
      />
      <div className="piechartbtm">
        <div className="graphHolder1">Spent</div>
        <div className="graphHolder2">Referal</div>
      </div>
    </div>
  );
}

export default PieChart;
