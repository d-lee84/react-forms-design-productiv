import React from "react";

import Todo from "./Todo";

/** Shows the top todo.
 *
 * Props:
 * - todos
 *
 * TodoApp -> TopTodo
 */

function TopTodo({todos}) {
  // lowest-priority # is the highest priority
  let uncompletedTodos = todos.filter(t => !t.completed);
  let top = uncompletedTodos.reduce(
      (acc, cur) => cur.priority < acc.priority ? cur : acc, uncompletedTodos[0]);
  
  let todo = (top === undefined) 
    ? <p>No top todo!</p>
    : <Todo todo={top} />;
  
  return (<div>
    {todo}
  </div>)
}

export default TopTodo;