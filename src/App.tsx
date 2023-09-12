import "./App.css";
import Todo from "./components/Todos/Todo";
import TodoForm from "./components/Todos/TodoForm";
import TodosAction from "./components/Todos/TodosAction";
import { observer } from "mobx-react-lite";
import todoStore from "./store/todo_store";
import { useState } from "react";




const App = observer(() => {
  const todos = todoStore.todos
 

  

  return (
    <div className="App">
      
      <h1>Todo App</h1>
      <TodoForm />
      {!todos.length ? (
        ""
      ) : (
        <TodosAction />
      )}

      <Todo />
    </div>
  );
});

export default App;
