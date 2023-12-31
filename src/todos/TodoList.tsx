import React, { useState } from 'react';
import { Todo } from './Todo';
import TodoCard from './TodoCard';
import TodoForm from './TodoForm';

interface TodoListProps {
  todos: Todo[];
  onSave: (todo: Todo) => void;
  onComplete: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

function TodoList({ todos, onSave, onComplete, onDelete }: TodoListProps) {
    const handleEdit = (todo: Todo) => {
        setTodoBeingEdited(todo);
    };
    const cancelEditing = () => {
        setTodoBeingEdited({} as Todo);
    };
    const [todoBeingEdited, setTodoBeingEdited] = useState<Todo>({} as Todo);
    return (
            <div className="row">
              {todos.map((todo) => (
                <div key={todo.id} className="cols-sm">
                {todo === todoBeingEdited ? (
                   <TodoForm onCancel={cancelEditing} onSave={onSave} todo={todo} />
                ) : (
                   <TodoCard todo={todo} onEdit={handleEdit} onComplete={onComplete} onDelete={onDelete} />
                )}
                </div>
              ))}
            </div>
          );
}

export default TodoList;
