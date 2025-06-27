import { useState } from "react";

export default function InputDisplay() {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        data-testid="input"
        onChange={onChange}
        value={value}
      />
      <div>
        Value
        <span data-testid="output">{value}</span>
      </div>
    </div>
  );
}
