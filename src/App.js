import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import PageNoFound from "./Components/PageNoFound";
import Mobileheader from "./Components/Mobileheader";
import Footer from "./Components/Footer";
import Search from "./Pages/Search";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWindowWidth);

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <Router forceRefresh>
      {windowWidth > 500 ? <Header /> : <Mobileheader />}

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>

        <Route path='/404'>
          <PageNoFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
