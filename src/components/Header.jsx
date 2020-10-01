import React from "react";

export default function Header() {
  return (
    <div>
      <h1>Path Visualiser</h1>
      <div>
        <select name="Algorithm">
          <option value="Dijktsra">Dijkstra</option>
          <option value="A*">A*</option>
          <option value="Swarm">Swarm</option>
          <option value="extra">Extra</option>
        </select>
        <input type="button" value="Visualise" />
        <input type="button" value="Clear" />
        <input type="button" value="HowTo" />
      </div>
    </div>
  );
}
