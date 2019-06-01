import React from "react";
import DataProvider from "./DataProvider";
import DataConsumer from "./DataConsumer";

import "./App.css";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <header className="App-header">
          <DataConsumer />
        </header>
      </div>
    </DataProvider>
  );
}

export default App;
