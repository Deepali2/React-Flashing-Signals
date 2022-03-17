import './App.css';
import { useState, useEffect } from "react";
import Light from "./Light";

function App() {
  const [colorIndex, setColorIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setColorIndex((colorIndex + 1) % 3), 2000);
    return () => clearTimeout(timer);
  });
  return (
    <div className="App">
      <Light color="red" active={colorIndex === 0} />
      <Light color="yellow" active={colorIndex === 2} />
      <Light color="green" active={colorIndex === 1} />
    </div>
  );
}

export default App;
