import React, { useEffect } from "react";
import "material-icons/iconfont/material-icons.css";
import { Button, ButtonLink, IconButton, Text } from "../src/components";
import GLOBALS from "app-globals";
import { textTypes } from "components/constants";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    document.title = "Stephine Sinoy";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Button icon="phone">ASDAS</Button>
        <ButtonLink to="https://www.facebook.com/">checkout webpage</ButtonLink>
        <IconButton icon="phone"> asdasdas </IconButton>
        <Text
          colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL["400"]}
          type={textTypes.HEADING.LG}
        >
          hahahahaha
        </Text>
      </header>
    </div>
  );
}

export default App;
