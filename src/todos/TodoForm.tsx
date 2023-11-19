import React from "react";

interface TodoFormProps {
    onCancel: () => void;
}

function TodoForm({ onCancel }: TodoFormProps) {
  return (
    <form className="input-group vertical">
      <label htmlFor="name">Todo Title</label>
      <input type="text" name="title" placeholder="enter title" />
      <label htmlFor="description">Todo Description</label>
      <textarea name="description" placeholder="enter description" />
      <div className="input-group">
        <button className="primary bordered medium">Save</button>
        <span />
        <button type="button" className="bordered medium" onClick={onCancel}>
          cancel
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
