// import { Link, Route, Routes } from 'react-router-dom'

import Footer from "./components/footer";
import Header from "./components/header";
import List from "./components/list";
import './App.css'

function App() {
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header></Header>
        <List></List>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;