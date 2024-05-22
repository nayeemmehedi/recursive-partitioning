import React from "react";
import DevidedComponent from "./components/DevidedComponent";

const App = () => {
  return (
    <div className="w-screen h-screen">
      <DevidedComponent initialColor={null} removePartition={() => {}} />
    </div>
  );
};

export default App;
