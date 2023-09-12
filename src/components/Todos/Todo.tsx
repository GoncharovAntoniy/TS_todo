import React, { useEffect, useState } from 'react';
import s from "./Todo.module.css";
import TodoList from "./TodoList";
import todo_store from '../../store/todo_store';



const Todo:React.FC = () => {

  let todos = todo_store.todos
  const [filterTask, setFilterTask] = useState('')


  if (filterTask === 'completed') {
    todos = todos.filter(item => item.isCompleted === true)
  }
  if (filterTask === 'not completed') {
    todos = todos.filter(item => item.isCompleted === false)
  }
   
  
 
  return (
    <>{
      todo_store.todos.length !== 0 ? (
      <select className={s.select_filter} value={filterTask} onChange={(e) => setFilterTask(e.target.value)}>
        <option className={s.option} value="all tasks">All tasks</option>
        <option className={s.option} value="completed">Completed</option>
        <option className={s.option} value="not completed">Not completed</option>
      </select>
      ) : ""
    }
      
      {todo_store.todos.length === 0 ? (
        <h2 className={s.h2}>У вас нет текущих задач</h2>
      ) : (
        todos.map((todo) => (
          <TodoList
            key={todo.id}
            todo={todo}
          />
        ))
      )}
      {!!todo_store.countTodosCompleted && (
        <h3
          className={
            s.todoCount
          }>{`You have completed ${todo_store.countTodosCompleted} ${
            todo_store.countTodosCompleted > 1 ? "todos" : "todo"
        }`}</h3>
      )}
    </>
  );
};

export default Todo;
