import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Navbar, Preloader, Footer } from "components";
import HomePage from "pages";

import "material-icons/iconfont/material-icons.css";
import "./styles/App.scss";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    document.title = "Stephine Sinoy";
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <React.Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Switch>
                <Route
                  path="/my-portfolio"
                  name="Homepage"
                  render={(props) => <HomePage {...props} />}
                />
                <Redirect from="/" to="/my-portfolio" />
              </Switch>
            </Router>
          </React.Suspense>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
