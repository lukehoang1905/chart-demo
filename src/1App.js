import React, { useState } from "react";
import DemoChart from "./DemoChart";
import PublicNavbar from "./PublicNavbar/PublicNavbar";
import "bootstrap/dist/css/bootstrap.min.css";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const App = () => {
  const [numbers, setNumbers] = useState([13, 14, 34, 34, 63, 34, 53]);
  const [labels, setLabels] = useState(weekDays);
  const [entry, setEntry] = useState("");

  //This is where we set general rules
  const data = {
    labels: labels,
    datasets: [
      {
        //this is where data for PER X-horizonatl line , including border style and color of those element
        label: `# of Sales`,
        data: numbers,
        backgroundColor: ["rgba(0, 0, 0, 0.3)"],
      },
      //   {
      //     //this is where data for PER X-horizonatl line , including border style and color of those element
      //     label: `# of Expenses`,
      //     data: [65, 59, 17, 23, 46, 17, 23, 37],
      //     backgroundColor: [
      //       "rgba(99, 100, 32, 0.6)",
      //       "rgba(44, 32, 35, 0.6)",
      //       "rgba(105, 66, 106, 0.6)",
      //       "rgba(75, 192, 192, 0.6)",
      //       "rgba(153, 102, 255, 0.6)",
      //       "rgba(159, 220, 64, 0.6)",
      //       "rgba(120, 159, 24, 0.6)",
      //       "rgba(123, 64, 64, 0.6)",
      //     ],
      //     borderColor: [`grey`],
      //   },
    ],
    options: {
      maintainAspectRatio: false,
      responsive: true,
    },
  };

  const handleSubmitNumber = (e) => {
    e.preventDefault();
    setNumbers([...numbers, entry]);
    setLabels([...labels, weekDays[labels.length % 7]]);
    setEntry("");
  };
  const handleEntry = (e) => {
    e.preventDefault();
    setEntry(e.target.value);
  };

  return (
    <>
      <PublicNavbar />
      <form onSubmit={handleSubmitNumber}>
        <label htmlFor="sales">Sales</label>
        <input
          id="sales"
          value={entry}
          onChange={handleEntry}
          type="Number"
        ></input>
        <button type="submit">Submit</button>
      </form>
      {numbers.map((e, idx) => (
        <li key={e + idx}>{e}</li>
      ))}
      <DemoChart data={data} />
    </>
  );
};

export default App;
