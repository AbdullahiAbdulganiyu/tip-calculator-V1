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
      <span>How much was the Bill </span>
      <span>
        <input
          type="text"
          placeholder="enter bill"
          value={amount}
          onChange={handleChange}
        />
      </span>
    </div>
  );
}

function SelectPercentage({ children }) {
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

function Output({ amount }) {
  return (
    <div>
      <em>
        You paid ${amount} (${amount} + X)
      </em>
    </div>
  );
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
