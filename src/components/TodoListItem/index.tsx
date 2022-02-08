interface TodoListItemProps {
  todo: {
    text: string;
    complete: boolean;
  };
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => {
  return (
    <li>
      <label defaultChecked={todo.complete} typeof="checkbox">
        {todo.text}
      </label>
    </li>
  );
};
