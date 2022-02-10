interface TodoListItemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
  setTodos: any;
  todos: any;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo,
  todos,
  setTodos,
}) => {
  function deleteTodo(id: number) {
    console.log(id);
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    console.log(updatedTodos);
    setTodos(updatedTodos);
  }

  return (
    <li>
      <label
        style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
      >
        <input
          checked={todo.complete}
          type="checkbox"
          onChange={() => toggleTodo(todo)}
          value={todo.text}
        />
        {todo.text}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </label>
    </li>
  );
};
