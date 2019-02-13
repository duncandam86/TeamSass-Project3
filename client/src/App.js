import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ActivitySubmit from "./pages/ActivitySubmit";
import FlightSearch from "./pages/FlightSearch";
import Dining from "./pages/Dining";
import Itinerary from "./pages/Itinerary";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flight" component={FlightSearch} />
          <Route exact path="/dining" component={Dining} />
          <Route exact path="/activity" component={ActivitySubmit} />
          <Route exact path="/itinerary" component={Itinerary} />
          <Route component={NoMatch} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

<<<<<<< HEAD


export default App;
=======
export default App;
>>>>>>> duncan-working-file
