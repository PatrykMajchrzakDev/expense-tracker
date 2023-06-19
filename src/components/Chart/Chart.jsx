import React from "react";
import "./styles/Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((item) => item.value);
  const totalMaxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          maxValue={totalMaxValue}
          value={item.value}
        />
      ))}
    </div>
  );
};

export default Chart;
