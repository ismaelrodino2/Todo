import { useEffect, useState } from 'react';
import { useFilterValue } from '../../Store/filter-value';
import { TodoListItem } from '../TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  toggleTodo: ToggleTodo;
  setTodos: (value: Array<Todo>) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  setTodos,
}) => {
  const value = useFilterValue((state) => state.value);

  const [checkboxesToDisplay, SetcheckboxesToDisplay] = useState(todos);

  useEffect(() => {
    if (value === '0') {
      SetcheckboxesToDisplay(
        todos.filter((todo: { complete: boolean }) => todo.complete === true),
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
      <div className="flex mb-4 flex-col w-full border border-gray-400 shadow-lg overflow-hidden m-auto pb-4">
        <div className="justify-around flex-row	flex-col items-center flex">
          <h1 className="underline text-lg mt-2 ml-3">To do list</h1>
          {checkboxesToDisplay.map((todo) => {
            return (
              <div className="container max-w-full mt-6 text-base font-sans">
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  toggleTodo={toggleTodo}
                  setTodos={setTodos}
                  todos={todos}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ul>
  );
};
