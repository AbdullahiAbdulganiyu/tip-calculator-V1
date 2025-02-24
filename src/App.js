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
  return (
    <div>
      <p>
        How much was the Bill{" "}
        <span>
          <input type="text" placeholder="enter bill" value={0} />
        </span>
      </p>
    </div>
  );
}
