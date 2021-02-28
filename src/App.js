import React, { Component } from "react";
import "./App.css";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NewTask from "./components/NewTask";
import { UserProfile } from "./components/UserProfile";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleIsLoggedIn = this.handleIsLoggedIn.bind(this);
  }
  handleIsLoggedIn() {
    this.setState({
      isLoggedIn: true
    });
  }

  render() {
    var redirect;
    if(this.state.isLoggedIn === false && localStorage.getItem("email") === null){
      redirect = <Redirect to = {"/"}/>
    }else{
      redirect = <Redirect to = {"/home"}/>
    }
    const LoginView = () => <Login login={this.handleIsLoggedIn} />;
    const TodoAppView = () => <div>
                                <Home />
                              </div>;
    const newTask = () => <NewTask />;
    const userProfile = () => <UserProfile />;
    return (
      <Router>
      <div className="App">
       
          <div>
          <Route exact path="/" component={LoginView}/>
          <Route path="/home" component={TodoAppView} />
          <Route path="/new-task" component={newTask} />
          <Route path="/user-profile" component={userProfile} />
          </div>
      </div>
    </Router>
    );
  }
}

export default App;
