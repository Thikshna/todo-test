import React from "react";
import "./App.css";
import { useState } from "react";
import List from "./components/List";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

const App = () => {
  const [input, setInput] = useState("hrll");

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="app-wrapper">
        <Header/>
        <List
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
        />
        <TodoList todos={todos} setTodos={setTodos} input={input}/>
      </div>
    </div>
  );
};

export default App;




// import "./App.css";
// import TodoApp from "./coomponent/TodoApp";

// function App() {
//   return (
//     <div className="App">
//       <TodoApp />
//     </div>
//   );
// }

// export default App;