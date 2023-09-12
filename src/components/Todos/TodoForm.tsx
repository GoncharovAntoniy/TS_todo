import React, { useState, FormEvent } from 'react';
import s from './TodoForm.module.css';
import Button from '../UI/Button';
import todo_store from '../../store/todo_store';


const TodoForm: React.FC = () => {
  const [inputText, setInputText] = useState<string>('')
  const {addTodoHandler} = todo_store

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodoHandler(inputText)
    setInputText('')
  };

  return (
    <form onSubmit={handleSubmit} 
      className={s.form}>
      <input
        className={s.input}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="Enter new todo"
      />
      <Button onClick={() =>addTodoHandler} title="Submit">
        Submit
      </Button>
    </form>
  );
};

export default TodoForm;
