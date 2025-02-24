import { useState } from "react";
import "./styles.css";
export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}
function TipCalculator() {
  const [bill, setBill] = useState(0);

  function onSetBill(e) {
    setBill(Number(e.target.value));
  }
  return (
    <div>
      <BillInput bill={bill} onSetBill={onSetBill} />
      <SelectPercentage>How did you like the service?</SelectPercentage>
      <SelectPercentage>How did Your Friend like the service?</SelectPercentage>
      <Output bill={bill} />
      <Reset />
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the Bill </label>
      <input
        type="text"
        placeholder="enter bill"
        value={bill}
        onChange={onSetBill}
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

function Output({ bill }) {
  return (
    <h3>
      You paid ${bill} (${bill} + $X tip)
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
