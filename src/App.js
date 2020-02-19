import React from 'react';
import Header from './components/Header/header';
import Todo from './components/Todo/todo';
import  Footer from './components/Footer/footer'
import './App.css';

function App() {
    return (
    <div className="App">
      <Header name={"Vlad Tereshchenko - ToDo"}/>
      <Todo />
      <Footer/>
    </div>
  );
}

export default App;
