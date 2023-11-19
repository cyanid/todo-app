import React from 'react';
import { MOCK_TODOS } from './MockTodos';
import TodoList from './TodoList';

function TodosPage() {
    return (
           <>
             <h1>Todos</h1>
            <TodoList todos={MOCK_TODOS} />
           </>
          );
}

export default TodosPage;
