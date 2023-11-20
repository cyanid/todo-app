import { Todo } from "./Todo";
import React from 'react';

function formatDescription(description: string): string {
    return description.substring(0, 60) + '...';
  }
  
  interface TodoCardProps {
    todo: Todo;
    onEdit: (todo: Todo) => void;
    onComplete: (todo: Todo) => void;
  }

  function TodoCard(props: TodoCardProps) {
    const { todo, onEdit, onComplete } = props;
    const handleCompleteClick = (todoComplete: Todo) => {
        onComplete(todoComplete);
    };
    const handleEditClick = (todoEdit: Todo) => {
        onEdit(todoEdit);
    };
    return (
      <div className="card">
        <section className="section dark">
          <h5 className="strong">
            <strong>{todo.title}</strong>
          </h5>
          <p>{formatDescription(todo.description)}</p>
          {!todo.completed &&
            <button className=" bordered" onClick={() => {
                handleCompleteClick(todo);
            }}>
                <span className="icon-alert "></span>
                Complete
            </button>
          }
          <button className=" bordered" onClick={() => {
                handleEditClick(todo);
            }}>
                <span className="icon-alert "></span>
                Edit
            </button>
        </section>
      </div>
    );
  }
  
  export default TodoCard;
