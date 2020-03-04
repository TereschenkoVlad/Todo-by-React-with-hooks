import React from 'react'
import Header from './components/Header/header'
import Todo from './components/Todo/todo'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/footer'

function App() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
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
        <Footer/>
      </div>
    );
}

export default App;
