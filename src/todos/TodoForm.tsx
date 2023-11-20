import React, { SyntheticEvent, useState } from "react";
import { Todo } from "./Todo";

interface TodoFormProps {
    onCancel: () => void;
    onSave: (todo: Todo) => void;
    todo: Todo;
}

function TodoForm({ onCancel, onSave, todo: initialTodo }: TodoFormProps) {
    const [todo, setTodo] = useState<Todo>(initialTodo);
    const handleSubmit = (event: SyntheticEvent) => {
            event.preventDefault();
            onSave(todo);
    };
    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        // if input type is checkbox use checked
        // otherwise it's type is text, number etc. so use value
        let updatedValue = type === 'checkbox' ? checked : value;
    
        //if input type is number convert the updatedValue string to a number
        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }
        const change = {
            [name]: updatedValue,
        };
    
        let updatedTodo: Todo;
        setTodo((t) => {
            updatedTodo = new Todo({ ...t, ...change });
            return updatedTodo;
        });
    };
    
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Todo Title</label>
      <input type="text" name="title" placeholder="enter title" value={todo.title} onChange={handleChange} />
      <label htmlFor="description">Todo Description</label>
      <textarea name="description" placeholder="enter description" value={todo.description} onChange={handleChange} />
      <div className="input-group">
        <button className="primary bordered medium" type="submit">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
