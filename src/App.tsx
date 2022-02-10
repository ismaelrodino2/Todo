import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { FilterTodoForm } from './components/FilterTodoForm';
import { TodoList } from './components/TodoList';

const initialTodos: Array<Todo> = [];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== '' &&
      setTodos([
        ...todos,
        { text: newTodo, complete: false, id: new Date().getTime() },
      ]);
  };

  return (
    <React.Fragment>
      <TodoList setTodos={setTodos} todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} />
      <FilterTodoForm todos={todos} />
    </React.Fragment>
  );
};

export default App;
