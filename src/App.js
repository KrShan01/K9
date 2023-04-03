import { useState } from "react";
import "./App.css";
import BreedChart from "./components/BreedChart";
import SavedChart from "./components/SavedChart";
import AdoptChart from "./components/AdoptChart";
import { BreedData } from "./Breed";
import { SavedData } from "./Saved";
import { AgeData, TimeData } from "./Adopt";
import { CharData } from "./Characteristics";

function App() {
  const [breedData, setBreedData] = useState({
    labels: BreedData.map((data) => data.name),
    datasets: [
      {
        label: "Top 10 Primary Breed (Including Mixes)",
        data: BreedData.map((data) => data.number),
        backgroundColor: "rgba(75,192,192,1)",
      },
    ],
  });
  const [savedData, setSavedData] = useState({
    labels: SavedData.map((data) => data.year),
    datasets: [
      {
        label: "Total saved",
        data: SavedData.map((data) => data.totalsavecount),
        backgroundColor: "lightblue",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  });

  const [byageData, setByAgeData] = useState({
    labels: AgeData.map((data) => data.age),
    datasets: [
      {
        label: "Avg Time to Adopt by Age Bucket (in days)",
        data: AgeData.map((data) => data.days),
        backgroundColor: "lightblue",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  });

  const [bytimeData, setByTimeData] = useState({
    labels: TimeData.map((data) => data.year),
    datasets: [
      {
        label: "Avg Time to Adopt Over Time",
        data: TimeData.map((data) => data.number),
        backgroundColor: "lightblue",
        borderColor: "green",
        borderWidth: 1,
      },
    ],
  });

  const [bycharData, setByCharData] = useState({
    labels: CharData.map((data) => data.type),
    datasets: [
      {
        label: "Does",
        data: CharData.map((data) => data.does),
        backgroundColor: "lightblue",
        stack: "Stack 1",
      },
      {
        label: "Does Not",
        data: CharData.map((data) => data.doesnot),
        backgroundColor: "lightblack",
        stack: "Stack 1",
      },
      {
        label: "Not Sure",
        data: CharData.map((data) => data.notsure),
        backgroundColor: "lightgrey",
        stack: "Stack 1",
      },
    ],
  });

  return (
    <div className="App">
      <div className="main">
        <div className="Details">
          <h1>Last Hope K9</h1>
          <h2 className="line1">Where a last Hope</h2>
          <h2 className="line2">becomes a new begining</h2>
        </div>

        <div className="row">
          <div className="saved" style={{ width: 390 }}>
            <div className="chart-div">
              <div className="chart-div__heading">
                <h1 className="light-h1">Lives Saved</h1>
                <h1>10,875</h1>
              </div>

              <SavedChart chartData={savedData} />
            </div>
          </div>

          <div className="col1">
            <div style={{ width: 390 }}>
              <div className="chart-div__heading">
                <h1 className="light-h1">Avg Time to Adopt</h1>
                <h1>45 days</h1>
              </div>
              <AdoptChart.AgeChart chartData={byageData} />
            </div>
            <div style={{ width: 390 }}>
              <div className="chart-div_headingtwo">
                <h1 className="light-h1">Avg Time to Adopt</h1>
              </div>
              <AdoptChart.TimeChart chartData={bytimeData} />
            </div>
          </div>

          <div className="col2">
            <div style={{ width: 380 }}>
              <div className="chart-div__heading__char">
                <h1 className="light-h1">Characteristics</h1>
                <h3 className="side-h1">Proportion of Dogs that...</h3>
              </div>
              <BreedChart.CharChart chartData={bycharData} />
            </div>
            <div style={{ width: 390 }}>
              <div className="chart-div_headingtwo">
                <h1 className="light-h1">
                  Top 10 Primary Breed (Including Mixes)
                </h1>
              </div>
              <BreedChart.BreedChart chartData={breedData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
