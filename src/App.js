import React from 'react';
import Header from './components/Header/header';
import Todo from './components/Todo/todo';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
      <div className="App">
        <Router basename="/Todo-by-React-with-hooks">
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
