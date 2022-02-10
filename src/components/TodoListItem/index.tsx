interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  setTodos: (value: Array<Todo>) => void;
  todos: Array<Todo>;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  todos,
  setTodos,
}) => {
  function deleteTodo(id: number) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div className="flex justify-center">
      <div>
        <div className="form-check items-center flex">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            checked={todo.complete}
            onChange={() => toggleTodo(todo)}
            value={todo.text}
          />
          <label
            style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
            className="form-check-label inline-block text-gray-800"
          >
            {todo.text}
          </label>
          <button
            className="bg-pink-400 ml-1 hover:bg-pink-500 text-white font-bold py-1 px-3 rounded-full"
            onClick={() => deleteTodo(todo.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
