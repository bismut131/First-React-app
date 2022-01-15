import React from "react";

import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = props => {
  const dataPointValues = props.dataPoints.map(datapoint => datapoint.value);
  const total = dataPointValues.reduce((acc, currentNumber) => {
    return acc + currentNumber;
  })

  return (
    <div className="chart">
      {props.dataPoints.map(dataPoint => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}/>)
      )}
    </div>
  );
};

export default Chart;