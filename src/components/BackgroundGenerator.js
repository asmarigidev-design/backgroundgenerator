import React, { useState, useEffect } from "react";
import "./BackgroundGenerator.css"; // فایل CSS جداگانه

function BackgroundGenerator() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#ffff00");
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const newGradient = `linear-gradient(to right, ${color1}, ${color2})`;
    setGradient(newGradient);
  }, [color1, color2]);

  return (
    <div className="gradient" style={{ background: gradient }}>
      <h1>Background Generator</h1>
      <input
        className="color1"
        type="color"
        value={color1}
        onChange={(e) => setColor1(e.target.value)}
      />
      <input
        className="color2"
        type="color"
        value={color2}
        onChange={(e) => setColor2(e.target.value)}
      />
      <h2>Current CSS background</h2>
      <h3>{gradient};</h3>
    </div>
  );
}

export default BackgroundGenerator;
