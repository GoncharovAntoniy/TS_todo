import React from 'react';
import s from './TodoList.module.css';
import { RiTodoFill, RiDeleteBin2Line, RiSave2Fill } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa';
import TodoStore from '../../store/todo_store';
import {useState} from 'react'

interface TodoItem {
  id: string;
  text: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todo: TodoItem;
  
  
}


const TodoList: React.FC<TodoListProps> = ({ todo}) => {
  
  const { todoToggleHandler, deleteTodoHandler} = TodoStore
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    TodoStore.editTodo(todo.id, newText);
    setIsEditing(false);
  };

  

  return (
    <div>
      {isEditing ? (
        <label className={s.label_edit}>
        <input
          className={s.edit_input}
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <RiSave2Fill onClick={handleSaveClick} className={s.checkIcon}/>
      </label>
      ) 
      : (

      <div className={`${s.todolist} ${todo.isCompleted ? s.completedTodo : ''}`}>
        <div className={s.item}>
          <RiTodoFill className={s.todoIcon} />
          <p className={s.todolist_text}>{todo.text.length > 20 ? todo.text.slice(0, 15) + '...' : todo.text}</p>
        </div>
        <div className={s.item}>
          <RiDeleteBin2Line className={s.deleteIcon} onClick={() => deleteTodoHandler(todo.id)} />
          <FaCheck onClick={() => todoToggleHandler(todo.id)} className={s.checkIcon} />
          <AiOutlineEdit onClick={handleEditClick} className={s.checkIcon} />
        </div>
      </div>
      )}
    </div>
  );
};

export default TodoList;
