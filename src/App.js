import React, { useEffect } from 'react'
import 'material-icons/iconfont/material-icons.css'
import { Button, ButtonLink, IconButton } from '../src/components';
import './styles/App.scss';

function App() {

  useEffect(() => {
    document.title = 'Stephine Sinoy'
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Button icon="phone">ASDAS</Button>
        <ButtonLink to="https://www.facebook.com/">checkout webpage</ButtonLink>
        <IconButton icon="phone"> asdasdas </IconButton>
      </header>
    </div>
  );
}

export default App;
