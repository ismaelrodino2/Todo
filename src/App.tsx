import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';

const initialTodos: Array<Todo> = [
  { text: 'Walk the dog', complete: true, id: 1231 },
  { text: 'write app and complete', complete: false, id: 12311 },
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  console.log(todos);

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
    </React.Fragment>
  );
};

export default App;
