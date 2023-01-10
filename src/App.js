import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { Navbar, Footer } from "components";
import HomePage from "pages";

import "material-icons/iconfont/material-icons.css";
import "./styles/App.scss";

function App() {
  useEffect(() => {
    document.title = "Stephine Sinoy";
  }, []);

  return (
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
  );
}

export default App;
