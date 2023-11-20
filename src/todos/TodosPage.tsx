import React, { useState } from 'react';
import { MOCK_TODOS } from './MockTodos';
import TodoList from './TodoList';
import { Todo } from './Todo';

function TodosPage() {
    const [todos, setTodos] = useState<Todo[]>(MOCK_TODOS);
    const saveTodo = (todo: Todo) => {
        let updatedTodos = todos.map((t: Todo) => {
            return t.id === todo.id ? todo : t;
        });
        setTodos(updatedTodos);
    };
    return (
           <>
             <h1>Todos</h1>
            <TodoList todos={todos} onSave={saveTodo} />
           </>
          );
}

export default TodosPage;
