import React, { useEffect } from "react";
import "material-icons/iconfont/material-icons.css";
import "./styles/App.scss";
import { Navbar } from "components";

function App() {
  useEffect(() => {
    document.title = "Stephine Sinoy";
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
