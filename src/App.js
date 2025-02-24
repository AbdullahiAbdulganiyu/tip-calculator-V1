import "./styles.css";

export default function App() {
  return (
    <div>
      <p>Hello React</p>
    </div>
  );
}

function Bill() {
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
