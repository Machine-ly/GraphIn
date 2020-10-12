import React, { useState, useContext } from "react";
// import { Context } from "./Provider";
// import PathFinder from "../algorithms/index";
// import {
//   DELAY_FAST,
//   DELAY_NORMAL,
//   DELAY_SLOW,
//   DIJKSTRA,
//   DFS,
//   BFS,
//   A_STAR
// } from "../assets/js/utils";

export default function Header() {
  // const [type, setType] = useState(DIJKSTRA);
  // const [pause, setPause] = useState(false);
  // const context = useContext(Context);
  // const {
  //   begin,
  //   end,
  //   updateItem,
  //   delay,
  //   pathFinder,
  //   clear,
  //   clearPath,
  //   board,
  //   isVisualized,
  //   setIsPathExist,
  //   setIsVisualized,
  //   setIsHelped
  // } = context;

  // const onAlgoChange = e => {
  //   setType(e.target.value);
  // };

  // const onDelayChange = e => {
  //   delay.current = Number(e.target.value);
  // };

  // const onVisualize = () => {
  //   if (isVisualized) return;
  //   clearPath();
  //   setIsVisualized(true);

  //   pathFinder.current = new PathFinder[type]({
  //     begin: begin.current,
  //     end: end.current,
  //     updateItem,
  //     board: board.current
  //   });
  //   const isPossiblePath = pathFinder.current.execute();
  //   setIsPathExist(isPossiblePath);
  // };

  // const onClearAll = () => {
  //   if (isVisualized && !pause) return;
  //   if (pause) setPause(false);
  //   setIsVisualized(false);

  //   clear();
  // };

  // const onClearPath = () => {
  //   if (isVisualized && !pause) return;
  //   if (pause) setPause(false);
  //   setIsVisualized(false);

  //   clearPath();
  // };

  // // const onPause = () => {
  // //   if (pause) {
  // //     setPause(false);
  // //     pathFinder.current.resumeTimers();
  // //   } else {
  // //     setPause(true);
  // //     pathFinder.current.stopTimers();
  // //   }
  // // };

  // const onHelp = () => {
  //   setIsHelped(true);
  // };

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
        <select
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          name="Speed"
          defaultValue={150}
        >
          <option value={"DELAY_SLOW"}>Slow</option>
          <option value={"DELAY_NORMAL"}>Normal</option>
          <option value={"DELAY_FAST"}>Fast</option>
        </select>
        {/* <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black mh3"
          type="button"
          value="Visualise"
        >
          Visualise
        </button> */}
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
