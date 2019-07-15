import React from 'react';
import Header from './scenes/Home/components/Header/header';
import Todo from "./scenes/Home/components/Todo/todo";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name={"Vlad Tereshchenko - ToDo"}/>
      <Todo/>
    </div>
  );
}

export default App;
