import React, { Component } from "react";
import Graph from "react-graph-visualizer";
import Header from "./Header";
import "../assets/css/path.css";

  function Graphy(){
    const graphData ={
    nodes: [
      {
        name: "Node A",
        id: 1
      },
      {
        name: "Node B",
        id: 2
      },
      {
        name: "Node C",
        id: 3
      },
      {
        name: "Node D",
        id: 4
      }
    ],
    links: [
      {
        source: 1,
        target: 2
      },
      {
        source: 1,
        target: 3
      },

      {
        source: 3,
        target: 4
      },
      {
        source: 1,
        target: 4
      }
    ]
  }
    return (
      <>
      <Header/>
      <div className="container">
        <div className="grid algoInfo"></div>
        <div className="grid">
        <Graph
          initialGraph={graphData}
          width={500}
          height={300}
          linkStyle={{ directed: false }}
          labelStyle={{ show: true }}
        />
        </div>
      </div>

      </>
    );
  }

  export default Graphy;