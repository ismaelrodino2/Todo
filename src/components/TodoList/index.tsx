import { useEffect, useState } from 'react';
import { useFilterValue } from '../../Store/filter-value';
import { TodoListItem } from '../TodoListItem';

interface TodoListProps {
  todos: any;
  toggleTodo: any;
  setTodos: any;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  setTodos,
}) => {
  const value = useFilterValue((state) => state.value);
  console.log(value);

  const [checkboxesToDisplay, SetcheckboxesToDisplay] = useState(todos);

  useEffect(() => {
    if (value === '0') {
      SetcheckboxesToDisplay(
        todos.filter((todo: { complete: boolean; }) => todo.complete === true),
      );
    }
    if (value === '1') {
      SetcheckboxesToDisplay(
        todos.filter((todo: { complete: boolean }) => !todo.complete),
      );
    }
    if (value === '2') {
      SetcheckboxesToDisplay(todos);
    }
    console.log(checkboxesToDisplay);
    console.log(todos);
    console.log(typeof value);
  }, [todos, value]);

  return (
    <ul>
      {checkboxesToDisplay.map((todo:any) => {
        return (
          <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} setTodos={setTodos} todos={todos} />
        );
      })}
    </ul>
  );

};
