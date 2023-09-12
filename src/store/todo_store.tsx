import { makeAutoObservable } from 'mobx';
import {v4 as uuidv4 } from 'uuid';


interface TodoItem {
    id: string;
    text: string;
    isCompleted: boolean;
  }

class TodoStore {
    todos:TodoItem[] = []

    constructor(){
        makeAutoObservable(this)
    }
    
    addTodoHandler = (text: string) => {
        if (text.trim() === '') return;
        const newTodo: TodoItem = {
          text: text,
          isCompleted: false,
          id: uuidv4(),
        };
        this.todos.push(newTodo);
    };

    deleteTodoHandler = (id: string) => {
        this.todos = this.todos.filter((todo) => todo.id !== id);
    };

    todoToggleHandler = (id: string) => {
        this.todos = this.todos.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo);
          
    };

    resetTodosHandler = () => {
        this.todos = []
    };

    clearActionHandler = () => {
        this.todos = this.todos.filter((todo) => !todo.isCompleted);
        
    };

    editTodo = (id: string, text: string) => {
        const task = this.todos.find((t) => t.id === id)
        if (task) {
            task.text = text;
          }
    }

    get countTodosCompleted() {
        return this.todos.filter((todo) => todo.isCompleted).length;
      }
}

export default new TodoStore();