import React, { SyntheticEvent, useState } from "react";
import { Todo } from "./Todo";

interface TodoFormProps {
    onCancel: () => void;
    onSave: (todo: Todo) => void;
    todo: Todo;
}

function TodoForm({ onCancel, onSave, todo: initialTodo }: TodoFormProps) {
    const [todo, setTodo] = useState<Todo>(initialTodo);
    const [errors, setErrors] = useState({
        title: '',
        description: '',
    });
    const handleSubmit = (event: SyntheticEvent) => {
            event.preventDefault();
            if (!isValid()) return;
            onSave(todo);
    };
    const handleChange = (event: any) => {
        const { type, name, value, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;
    
        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }
        const change = {
            [name]: updatedValue,
        };
    
        let updatedTodo: Todo;
        setTodo((t) => {
            updatedTodo = new Todo({ ...t, ...change });
            if (!updatedTodo.id) {
                updatedTodo.id = Math.random();
            }
            return updatedTodo;
        });
        setErrors(() => validate(updatedTodo));
    };
    function validate(todo: Todo) {
        let errors: any = { title: '', description: '' };
        if (todo.title.length === 0) {
            errors.title = 'Title is required';
        }
        if (todo.title.length > 0 && todo.title.length < 3) {
            errors.title = 'Title needs to be at least 3 characters in length.';
        }
        if (todo.description.length === 0) {
            errors.description = 'Description is required.';
        }
        return errors;
    }
        
    function isValid() {
        return (
            errors.title.length === 0 &&
            errors.description.length === 0
        );
    }
    
  return (
    <form className="input-group vertical" onSubmit={handleSubmit}>
      <label htmlFor="name">Todo Title</label>
      <input type="text" name="title" placeholder="enter title" value={todo.title} onChange={handleChange} />
      {errors.title.length > 0 && (
        <div className="card error">
          <p>{errors.title}</p>
        </div>
      )}
      <label htmlFor="description">Todo Description</label>
      <textarea name="description" placeholder="enter description" value={todo.description} onChange={handleChange} />
      {errors.description.length > 0 && (
        <div className="card error">
          <p>{errors.description}</p>
        </div>
      )}
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
