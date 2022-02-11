import React from 'react';
import { useFilterValue } from '../../Store/filter-value';

export const FilterTodoForm: React.FC = () => {
  const changeValue = useFilterValue((state) => state.changeValue);
  const value = useFilterValue((state) => state.value);

  return (
    <div className='inline-block relative w-64'>
      <h1>Filter</h1>
      <select
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value={0}>Marked todos</option>
        <option value={1}>Unmarked todos</option>
        <option value={2}>All todos</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 top-5 text-gray-700">
        <svg
          className="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};
