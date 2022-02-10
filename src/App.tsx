import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './Store/todos';

const App: React.FC = () => {
  const setTodos = useTodos((state) => state.setTodos);
  const todos = useTodos((state) => state.todos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo:Todo) => {
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
      <div className="container mx-auto px-4 max-w-xs flex-col	h-screen flex justify-center">
        <div className='bg-white px-4 py-4 rounded'>
          <TodoList toggleTodo={toggleTodo} />
          <AddTodoForm addTodo={addTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
