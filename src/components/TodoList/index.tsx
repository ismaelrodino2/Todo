import { useEffect, useState } from 'react';
import { useFilterValue } from '../../Store/filter-value';
import { useTodos } from '../../Store/todos';
import { TodoListItem } from '../TodoListItem';

export const TodoList: React.FC= () => {
  const value = useFilterValue((state) => state.value);

  const todos = useTodos((state) => state.todos);


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
  }, [todos, value]);

  return (
    <ul>
      <div className="flex mb-4 flex-col w-full border border-gray-400 shadow-lg overflow-hidden m-auto pb-4">
        <div data-testid="list" className="justify-around	flex-col items-center flex">
          <h1 className=" font-montserrat underline  mt-2 ml-3">To do list</h1>
          {checkboxesToDisplay.map((todo) => {
            return (
              <div className="container max-w-full mt-6 text-base font-sans">
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                />
              </div>
            );
          })}
        </div>
      </div>
    </ul>
  );
};
