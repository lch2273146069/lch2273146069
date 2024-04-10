// import { Link, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";
import List from "./components/list";
import './App.css'

function App() {
  const [state, setState] = useState({
    todos: [
      { id: 1, name: '吃饭', Done: true },
      { id: 2, name: '睡觉', Done: false }
    ]
  });
  const addTodo = (dataObj) => {
    const newTodoObj = [...state.todos, dataObj]
    setState({ todos: newTodoObj })
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header AddTodo={addTodo}></Header>
        <List todos={state.todos}></List>
        <Footer todos={state.todos}></Footer>
      </div>
    </div>
  );
}

export default App;