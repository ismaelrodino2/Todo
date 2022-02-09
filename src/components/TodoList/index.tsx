import { TodoListItem } from '../TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  setTodos: any;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo, setTodos }) => {
  return (
    <ul>
      {todos.map((todo) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} setTodos={setTodos} todos={todos} />
        );
      })}
    </ul>
  );
};
