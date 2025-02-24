import { useState } from "react";
import "./styles.css";

export default function App() {
  const [amount, setAmount] = useState(0);

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }
  return (
    <div>
      <Bill amount={amount} handleChange={handleChange} />
      <Percentage>How did you like the service?</Percentage>
    </div>
  );
}

function Bill({ amount, handleChange }) {
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

function Percentage({ children }) {
  return (
    <div>
      <span>{children}</span>
      <span>
        <select>
          <option>Dissatisfied (0%)</option>
          <option>It was okay (5%)</option>
          <option>It was good (10%)</option>
          <option>Absolutely amazing! (20%)</option>
        </select>
      </span>
    </div>
  );
}
