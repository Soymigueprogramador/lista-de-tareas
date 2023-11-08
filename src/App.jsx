//import React from "react"; 
import TodoList from "./componentes/TodoList/TodoList.jsx";
import TodoItem from './componentes/TodoItem/TodoItem.jsx'

const App = () => {
  return (
    <div className="todo">
        <div>
          <TodoList />
        </div>
    </div>
  );
}

export default App; 