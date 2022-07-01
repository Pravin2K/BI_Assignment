import { useState } from "react";
import "./BMI.css";

const CalculateBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) return "Underweight";
    else if (bmi >= 18.5 && bmi < 24.9) return "Normal";
    else if (bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
  }

  return (
    <div className="app">
      <h1 className="text-header"> BMI Calculator</h1>
      <br></br>

      <form>

        <div>
          <label className="label1">Enter your height in cm:</label><br></br>
          <input type="text" value={height} onChange={(e) => setHeight(e.target.value)}/>
        </div><br></br>

        <div>
          <label className="label2">Enter your Weight in kg:</label><br></br>
          <input type="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)}/>
        </div><br></br>

        <div>
          <button className="btn" type="button" onClick={calculateBMI}>Submit</button>
        </div>

        {bmiResult && (
          <div className="mt-4">
            <p>Your BMI is: {bmiResult} </p>
            <p>You are currently: {status}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CalculateBMI;
