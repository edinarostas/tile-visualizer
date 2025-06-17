import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./App.scss";
import * as d3 from "d3";

const tilePatterns = ["Herringbone", "Stacked", "Basketweave"];
const materials = ["Ceramic", "Porcelain", "Marble"];

// Mock GraphQL tile data
const mockTileData = {
  data: {
    tiles: [
      { id: 1, name: "Herringbone", texture: "diagonal" },
      { id: 2, name: "Stacked", texture: "grid" },
      { id: 3, name: "Basketweave", texture: "basket" },
    ],
  },
};

export default function App() {
  const [pattern, setPattern] = useState(tilePatterns[0]);
  const [material, setMaterial] = useState(materials[0]);
  const [color, setColor] = useState("#d1cfcf");

  const getPatternTexture = () => {
    const found = mockTileData.data.tiles.find((t) => t.name === pattern);
    return found?.texture || "grid";
  };

  const drawPattern = () => {
    const svg = d3.select("#tile-svg");
    svg.selectAll("*").remove();

    const width = 300;
    const height = 300;
    const size = 30;
    const texture = getPatternTexture();

    if (texture === "grid") {
      for (let y = 0; y < height; y += size) {
        for (let x = 0; x < width; x += size) {
          svg.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", size)
            .attr("height", size)
            .attr("fill", color)
            .attr("stroke", "#888");
        }
      }
    } else if (texture === "diagonal") {
      const spacing = size / 2;  // Half the original size for proper stacking
      
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          // Alternate between -45 and 45 degrees for each tile
          const rotation = (Math.floor(x / spacing) + Math.floor(y / spacing)) % 2 === 0 ? -45 : 45;
          
          svg.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", size)
            .attr("height", size)
            .attr("fill", color)
            .attr("transform", `rotate(${rotation}, ${x + size/2}, ${y + size/2})`)
            .attr("stroke", "#666");
        }
      }
    } else if (texture === "basket") {
      for (let y = 0; y < height; y += size) {
        for (let x = 0; x < width; x += size) {
          svg.append("rect")
            .attr("x", x)
            .attr("y", y)
            .attr("width", size)
            .attr("height", size / 2)
            .attr("fill", color)
            .attr("stroke", "#999");

          svg.append("rect")
            .attr("x", x)
            .attr("y", y + size / 2)
            .attr("width", size / 2)
            .attr("height", size / 2)
            .attr("fill", color)
            .attr("stroke", "#999");
        }
      }
    }
  };

  React.useEffect(() => {
    drawPattern();
  }, [pattern, color]);

  return (
    <div className="app">
      <header>
        <h1>Tile Visualizer</h1>
        <p>Preview your ideal tile style in real time.</p>
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

        <div className="tile-canvas">
          <svg id="tile-svg" width="300" height="300"></svg>
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