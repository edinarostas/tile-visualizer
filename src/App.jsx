import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./App.scss";

const tilePatterns = ["Herringbone", "Stacked", "Basketweave"];
const materials = ["Ceramic", "Porcelain", "Marble"];

export default function App() {
  const [pattern, setPattern] = useState(tilePatterns[0]);
  const [material, setMaterial] = useState(materials[0]);
  const [color, setColor] = useState("#d1cfcf");

  return (
    <div className="app">
      <header>
        <h1>Tile Visualizer</h1>
        <p>Preview your ideal tile style in real time</p>
      </header>

      <div className="visualizer-container">
        <div className="sidebar">
          <label>
            Tile Pattern:
            <select value={pattern} onChange={e => setPattern(e.target.value)}>
              {tilePatterns.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>

          <label>
            Tile Material:
            <select value={material} onChange={e => setMaterial(e.target.value)}>
              {materials.map(m => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>

          <label>
            Tile Color:
            <HexColorPicker color={color} onChange={setColor} />
          </label>
        </div>

        <div className="tile-canvas" style={{ backgroundColor: color }}>
          <div className="tile-pattern">
            <h3>{pattern}</h3>
            <p>{material}</p>
            <p>Color: {color}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
