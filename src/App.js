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
  };
  const updateTodo = (id, Done) => {
    const { todos } = state;
    const newTodoObj = todos.map(i => {
      if (i.id === id) return { ...i, Done }
      else return i
    })
    setState({ todos: newTodoObj })
  }
  const deleteTodo = id => {
    const { todos } = state;
    const newTodo = todos.filter(todo => !id.includes(todo.id))
    setState({ todos: newTodo })
  }
  const checkAll = Done => {
    const { todos } = state;
    setState({ todos: todos.map(i => { return { ...i, Done } }) })
  }
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header AddTodo={addTodo}></Header>
        <List todos={state.todos} updateTodo={updateTodo} deleteTodo={deleteTodo}></List>
        <Footer todos={state.todos} deleteTodo={deleteTodo} checkAll={checkAll}></Footer>
      </div>
    </div>
  );
}

export default App;