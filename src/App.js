import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import CreateTodo from "./components/CreateTodos";
import EditTodo from "./components/EditTodos";
import TodosList from "./components/TodosList";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />

          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
