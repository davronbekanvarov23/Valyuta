import React, { useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import { useDataContext } from "../../context";

function Chart() {
  const { addData, data } = useDataContext();

  const [state, setState] = React.useState({
    series: [],
    options: {
      labels: [],
      legend: {
        position: "bottom",
      },
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  useEffect(() => {
    if (data && data[0]) {
      const labels = [...new Set(data.map((item) => item.type))];
      const totalAmounts = labels.map((type) =>
        data.reduce(
          (sum, item) =>
            item.type === type ? sum + parseFloat(item.amount) : sum,
          0
        )
      );

      setState({
        ...state,
        options: { ...state.options, labels },
        series: totalAmounts,
      });
    }
  }, []);
  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}

export default Chart;
