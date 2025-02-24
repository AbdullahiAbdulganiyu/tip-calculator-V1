import { useState } from "react";
import "./styles.css";

export default function App() {
  const [amount, setAmount] = useState(0);

  function handleChange(e) {
    setAmount(Number(e.target.value));
  }
  return (
    <div>
      <BillInput amount={amount} handleChange={handleChange} />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did Your Friend like the service?</SelectPercentage>
      <Output amount={amount} />
      <Reset />
    </div>
  );
}

function BillInput({ amount, handleChange }) {
  return (
    <div>
      <label>How much was the Bill </label>
      <input
        type="text"
        placeholder="enter bill"
        value={amount}
        onChange={handleChange}
      />
    </div>
  );
}

function SelectPercentage({ children }) {
  return (
    <div>
      <label>{children}</label>
      <select>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({ amount }) {
  return (
    <h3>
      You paid ${amount} (${amount} + $X tip)
    </h3>
  );
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
