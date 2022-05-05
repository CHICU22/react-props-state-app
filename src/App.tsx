import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './Components/TodoApp';

function App() {
  return (
    <>
      <header>
        <h1>To do</h1>
      </header>
      <TodoApp></TodoApp>
    </>
  );
}

export default App;
