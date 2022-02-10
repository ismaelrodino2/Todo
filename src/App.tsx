import { AddTodoForm } from './components/AddTodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './Store/todos';

const App: React.FC = () => {

  return (
    <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
      <div className="container mx-auto px-4 max-w-xs flex-col	h-screen flex justify-center">
        <div className='bg-white px-4 py-4 rounded'>
          <TodoList  />
          <AddTodoForm />
        </div>
      </div>
    </div>
  );
};

export default App;
