import React from "react";
import ScaffoldingHeader from "./components/ScaffoldingHeader";
import CollaborateSection from "./components/CollaborateSection"; // Import the new component
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScaffoldingHeader />
      <CollaborateSection /> 
    </div>
  );
}

export default App;
