import { useState } from 'react';
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
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="container mx-auto px-4 max-w-xs	flex flex-col	h-screen flex justify-center">
        <div className='bg-white px-4 py-4 rounded'>
          <TodoList setTodos={setTodos} todos={todos} toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo} todos={todos} />
        </div>
      </div>
    </div>
  );
};

export default App;
