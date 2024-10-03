import React from "react";
import GuessesProvider from "../GuessesProvider/"
import Home from "../Home/Home";

function App() {
  return (
    <GuessesProvider>
      <Home />
    </GuessesProvider>
  );
}

export default App;
