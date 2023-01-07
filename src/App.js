import React, { useEffect } from "react";
import "material-icons/iconfont/material-icons.css";
import { Button, ButtonLink, IconButton, Text, Section } from "../src/elements";
import GLOBALS from "app-globals";
import { textTypes } from "elements/constants";
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
        <Section title="Hello world">
          <Text
            colorClass={GLOBALS.COLOR_CLASSES.NEUTRAL["400"]}
            type={textTypes.HEADING.LG}
          >
            hahahahaha
          </Text>
        </Section>
      </header>
    </div>
  );
}

export default App;
