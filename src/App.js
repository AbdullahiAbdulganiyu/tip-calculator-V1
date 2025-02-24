import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Bill />
      <Percentage />
    </div>
  );
}

function Bill() {
  const [amount, setAmount] = useState(0);
  function handleChange(e) {
    setAmount(Number(e.target.value));
  }
  return (
    <div>
      <p>
        How much was the Bill{" "}
        <span>
          <input
            type="text"
            placeholder="enter bill"
            value={amount}
            onChange={handleChange}
          />
        </span>
      </p>
    </div>
  );
}

function Percentage() {
  return (
    <div>
      <p>How did you like the service?</p>
      <span>
        <select>
          <option>Dissatisfied(0%)</option>
          <option>Dissatisfied(5%)</option>
          <option>Dissatisfied(10%)</option>
          <option>Dissatisfied(20%)</option>
        </select>
      </span>
    </div>
  );
}
