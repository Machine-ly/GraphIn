import React, { useState, useContext } from "react";

export default function Header() {

  return (
    <div>
      <h1 className="f1 mv2-ns">Path Visualiser</h1>
      <div>
        <select
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          name="Algorithm"
        >
          <option value="DIJKSTRA">Dijkstra</option>
          <option value="DFS">DFS</option>
          <option value="BFS">BFS</option>
          <option value="A_STAR">A*</option>
        </select>
        {/* <select
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          name="Speed"
          defaultValue={150}
        >
          <option value={"DELAY_SLOW"}>Slow</option>
          <option value={"DELAY_NORMAL"}>Normal</option>
          <option value={"DELAY_FAST"}>Fast</option>
        </select> */}

        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="Clear"
          onClick={() => window.location.reload()}
        >
          Clear
        </button>
        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="HowTo"
        >
          How To Use!
        </button>
      </div>
    </div>
  );
}
