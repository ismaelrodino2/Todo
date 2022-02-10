import { ChangeEvent, FormEvent, useState } from 'react';
import { FilterTodoForm } from '../FilterTodoForm';

interface addTodoFormProps {
  addTodo: AddTodo;
  todos: Array<Todo>;
}

export const AddTodoForm: React.FC<addTodoFormProps> = ({ addTodo, todos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form className="w-full max-w-xs">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Type a TODO</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={newTodo}
          onChange={handleChange}
        />
      </div>
      <FilterTodoForm todos={todos} />
      <button
        type="submit"
        className="bg-transparent hover:bg-blue-300 mt-4 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
        onClick={handleSubmit}
      >
        Add Todo
      </button>
    </form>
  );
};
