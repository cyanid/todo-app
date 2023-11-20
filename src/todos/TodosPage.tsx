import React, { useState } from 'react';
import { MOCK_TODOS } from './MockTodos';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { Todo } from './Todo';

function TodosPage() {
    const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS);
    const [createNew, setCreateNew] = useState<boolean>(false);
    const saveTodo = (todo: Todo) => {
        console.log('saving todo', todo);
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
    const cancelCreate = () => {
        setCreateNew(false);
    };
    
    return (
           <>
             <h1>Todos</h1>
             <p>
                <a onClick={() => {
                    setCreateNew(true);
                }}>+ Create new</a>
             </p>
             {createNew ? (
                <TodoForm onCancel={cancelCreate} onSave={saveTodo} todo={new Todo()} />
             ) : (
                <TodoList todos={todos} onSave={saveTodo} onComplete={completeTodo} createNew={createNew} />
             )}
            
           </>
          );
}

export default TodosPage;
