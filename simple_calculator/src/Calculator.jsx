import { useState } from "react";

const buttons = [
  "C", "←", "/", "*",
  "7", "8", "9", "-",
  "6", "5", "4", "+",
  "1", "2", "3", "=",
  "0", ".", 
];

export default function Calculator() {

  const [value, setValue] = useState("");

  const handleClick = (btn) => {
    if (btn === "C") return setValue("");

    if (btn === "←") return setValue(value.slice(0, -1));

    if (btn === "=") {
      try {
        // Evaluate safely using Function (avoid eval for security best practice)
        setValue(String(Function("return " + value)()));
      } catch {
        setValue("Error");
      }
      return;
    }

    setValue(value + btn);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={value}
        readOnly
      />

      <div className="buttons">
        {buttons.map((btn, index) => (
          <button
            key={index}
            onClick={() => handleClick(btn)}
            className={btn === "=" ? "equal" : ""}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}