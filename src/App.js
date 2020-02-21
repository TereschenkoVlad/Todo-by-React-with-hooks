import React from 'react';
import Header from './components/Header/header';
import Todo from './components/Todo/todo';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header name={"ToDo On Every Day"}/>
            <Todo type={"standard"} />
          </Route>
          <Route exact path="/shopping-list">
            <Header name={"Shopping List On Every Day"}/>
            <Todo type={"shopping"} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
