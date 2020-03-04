import React from 'react'
import Header from './components/Header/header'
import Todo from './components/Todo/todo'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './components/Footer/footer'
import { TranslateTexts } from "./constants"
import {useSelector} from "react-redux"

function App() {
  const TranslatedTexts = TranslateTexts(useSelector((state) => state.tasks.language))

    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <Header name={TranslatedTexts.todoTitle}/>
              <Todo type={"standard"} />
            </Route>
            <Route exact path="/shopping-list">
              <Header name={TranslatedTexts.shoppingListTitle}/>
              <Todo type={"shopping"} />
            </Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    );
}

export default App;
