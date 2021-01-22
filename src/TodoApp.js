import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import ToDoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */

function TodoApp({ initialTodos = [] }) {
  const [todos, setTodos] = useState(initialTodos);

  /** add a new todo to list */
  function create(newTodo) {
    setTodos(todos => (
      [...todos, {...newTodo, id: uuid()}]
    ));
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    setTodos(todos => {
      return todos.map(todo => {
        // comment: could be a ternary
        if (todo.id === updatedTodo.id) {
          return updatedTodo;
        } else {
          return {...todo};
        }
      })
    });
  }

  /** update the completed property of todo with id */
  function toggleCompleted(id) {
    setTodos(todos => {
      return todos.map(todo => {
        // comment: could be a ternary
        if (todo.id === id) {
          return {...todo, completed: !todo.completed};
        } else {
          return {...todo};
        }
      })
    });
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(todos => (
      todos.filter(todo => todo.id !== id)
    ));
  }


  let editableTodoList = (todos.length !== 0)
    ? <EditableTodoList 
        todos={todos} 
        update={update} 
        remove={remove} 
        toggleCompleted={toggleCompleted}/>
    : <span className="text-muted">You have no todos.</span>;

  let topTodo = (todos.length !== 0)
    ? (<section className="mb-4">
        <h3>Top Todo</h3>
        <TopTodo todos={todos} update={update} remove={remove} />
      </section>)
    : null;

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {editableTodoList}
        </div>

        <div className="col-md-6">
          {topTodo}
          <section>
            <h3 className="mb-3">Add Nü</h3>
              <ToDoForm handleSave={create}/>
            </section>
        </div>

      </div>
    </main >
  );
}

export default TodoApp;