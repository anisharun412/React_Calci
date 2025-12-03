# Ex04 Simple Calculator - React Project
## Date: 03-12-2025

## AIM
To  develop a Simple Calculator using React.js with clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM
### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:
  1. npm create vite@latest
  2. cd simple-calculator
  3. npm install
  4. npm run dev

### STEP 3
Inside the src/ folder, create a new file Calculator.jsx and define the basic structure.

### STEP 4
Plan the UI: Display screen, number buttons (0-9), operators (+, -, *, /), clear (C), and equal (=).

### STEP 5
Create a new file Calculator.css in src/ and add the styling.

### STEP 6
Open src/App.jsx and modify it.

### STEP 7
Start the development server.
  npm run dev

### STEP 8
Open http://localhost:5137/ in the browser.

### STEP 9
Test the calculator by entering numbers and operations.

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Deploy the website.

### STEP 12
Upload to GitHub Pages for free hosting.

## PROGRAM

### Calculator.jsx
```jsx
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
```

### index.css
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}

body {
  background: #f2f3f7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app {
  display: flex;
  justify-content: center;
  align-items: center;
}

.calculator {
  width: 300px;
  background: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.display {
  width: 100%;
  height: 60px;
  font-size: 24px;
  padding: 10px;
  text-align: right;
  border: none;
  outline: none;
  margin-bottom: 15px;
  border-radius: 8px;
  background: #f5f5f5;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  height: 55px;
  background: #e3e7eb;
  border: none;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;
}

button:hover {
  background: #cbd3dd;
}

button.equal {
  background: #4caf50;
  color: white;
  grid-column: span 2;
}

button.equal:hover {
  background: #398e3a;
}

@media (max-width: 400px) {
  .calculator {
    width: 90vw;
  }

  button {
    height: 50px;
    font-size: 18px;
  }
}
```

### App.jsx
```jsx
import Calculator from "./Calculator.jsx";

function App() {
  return(
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App
```

## OUTPUT

![alt text](image-1.png)

![alt text](image.png)

## RESULT
The program for developing a simple calculator in React.js is executed successfully.
