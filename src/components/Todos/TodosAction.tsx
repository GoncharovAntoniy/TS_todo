import React from 'react';
import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import s from './TodosAction.module.css';
import todo_store from '../../store/todo_store';


const TodosAction: React.FC = () => {
  const {resetTodosHandler, clearActionHandler} = todo_store
  return (
    <div className={s.Action}>
      <button className={s.button} title="Reset todos" onClick={resetTodosHandler}>
        <RiRefreshLine />
      </button>
      <button className={s.button}
        title="Clear completed todos"
        onClick={clearActionHandler}
        disabled={!todo_store.countTodosCompleted}
      >
        <RiDeleteBin2Line />
      </button>
    </div>
  );
};

export default TodosAction;
