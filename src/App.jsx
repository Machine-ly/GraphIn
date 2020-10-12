import React from "react";
import "./App.css";
//import Container from "./components/Container";
//import { Provider } from "./components/Provider";
import PathfindingVisualizer from "./components/PathFinding";
function App() {
  return (
    <div className="App">
      {/* <Provider>
        <Container />
      </Provider> */}
      <PathfindingVisualizer></PathfindingVisualizer>
    </div>
  );
}

export default App;
