import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
//component
import "./App.css";
import Nav from "./components/Nav";
import ActivitySubmit from "./pages/ActivitySubmit";
import FlightSearch from "./pages/FlightSearch";
import DiningSearch from "./pages/DiningSearch";
import Signup from "./pages/Sign-up";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Itinerary from "./pages/Itinerary";
import PlaceSearch from "./pages/PlaceSearch"


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }


  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(res => {
      console.log("Get user response: " + res.data);
      if (res.data.user) {
        console.log("User is saved in the session")
        this.setState({
          loggedIn: true,
          username: res.data.user.username
        })
      } else {
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Router>
        <>
            <Nav updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" render={() => <Signup />} />
            <Route exact path="/login" render={() => <Login updateUser={this.updateUser} />} />
            <Route exact path="/flight" component={FlightSearch} />
            <Route exact path="/dining" component={DiningSearch} />
            <Route exact path="/place" component={PlaceSearch} />
            <Route exact path="/activity" component={ActivitySubmit} />
            <Route exact path="/itinerary" component={Itinerary} />
        </>
        
      </Router>
    );
  }
}

export default App;
