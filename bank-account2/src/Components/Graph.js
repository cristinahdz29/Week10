import React, { useState } from "react";
import "../Styles/Piechart.css";
import { PieChart } from "react-minimal-pie-chart";

function Graph (props) {
    return (
      <div className="piechart">
        <PieChart
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`} // creates a label for each segment, with value and % sign
          data={[
            {
              title: "Savings",
              // setting the value of each segment of piechart to the values saved to the state,
              // wrapped in number to parse as an integer
              value: Number(props.account.saving),
              color: "#E38627",
            },
            {
              title: "Checking",
              value: Number(props.account.checking),
              color: "#C13C37",
            },
            {
              title: "Brokerage",
              value: Number(props.account.brokerage),
              color: "#6A2135",
            },
          ]}
        />
      </div>
    );
}

export default Graph