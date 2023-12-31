import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Todo } from './Todo';

function TodosPage() {
    const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
    const [todos, setTodos] = useState<Todo[]>(savedTodos);
    const [createNew, setCreateNew] = useState<boolean>(false);
    const saveTodo = (todo: Todo) => {
        let updatedTodos = todos.map((t: Todo) => {
            return t.id === todo.id ? todo : t;
        });
        if (createNew) {
            updatedTodos.push(todo);
            setCreateNew(false);
        }
        setTodos(updatedTodos);
    };
    const completeTodo = (todo: Todo) => {
        todo.completed = true;
        saveTodo(todo);
    };
    const deleteTodo = (todo: Todo) => {
        let deleteTodos = todos.filter(t => { 
            return t !== todo; 
        });
        setTodos(deleteTodos);
    };
    const cancelCreate = () => {
        setCreateNew(false);
    };
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    return (
           <>
             <h1>Todos</h1>
             <p>
                <button className='bordered' onClick={() => {
                    setCreateNew(true);
                }}>+ Create new</button>
             </p>
             {todos.length === 0 &&
                <p>No todos yet.</p>
            }
             {createNew ? (
                <TodoForm onCancel={cancelCreate} onSave={saveTodo} todo={new Todo()} />
             ) : (
                <TodoList todos={todos} onSave={saveTodo} onComplete={completeTodo} onDelete={deleteTodo} />
             )}
            
           </>
          );
}

export default TodosPage;
