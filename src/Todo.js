import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, completed }
 *
 * { EditableTodo, TodoApp } -> Todo
 **/

function Todo({todo, toggleCompleted}) {
  let title = (todo.completed) 
    ? <del>{todo.title}</del>
    : <b>{todo.title}</b>;
  
  return (
      <div className="Todo">
        <div>
          <a onClick={() => toggleCompleted(todo.id)}>{title}</a> 
          <small>(priority: {todo.priority})</small>
        </div>
        <div><small>{todo.description}</small></div>
      </div>
  );
}

export default Todo;
