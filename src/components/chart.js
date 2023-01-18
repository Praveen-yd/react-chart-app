import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Chart = (props) => {
  const { totalAmount, emiAmount } = props;
  let arr = [];

  let n = totalAmount / emiAmount;
  if (n === totalAmount) n = 0;
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      arr.push(totalAmount);
    } else {
      arr.push(totalAmount - i * emiAmount);
    }
    if (parseInt(n) === i && n !== i) {
      arr.push(0);
    }
  }
  const getOptions = (type) => ({
    chart: {
      type,
      width: 800,
      height: 600,
    },
    title: {
      text: `${type} chart`,
    },
    yAxis: {
      title: {
        text: "Amount",
      },
    },
    xAxis: {
      title: {
        text: "Months",
      },
      categories: Array.from(Array(arr.length).keys()),
    },
    series: {
      data: [...arr],
    },
  });
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={getOptions("line")} />
    </div>
  );
};

export default Chart;
