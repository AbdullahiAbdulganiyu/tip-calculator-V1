import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Bill />
    </div>
  );
}

function Bill() {
  const [amount, setAmount] = useState(0);
  function handleChange(e) {
    setAmount(e.target.value);
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
