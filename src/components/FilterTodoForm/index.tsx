import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useFilterValue } from '../../Store/filter-value';

interface FilterTodoFormProps {
  todos: Array<Todo>;
}

export const FilterTodoForm: React.FC<FilterTodoFormProps> = ({ todos }) => {
  const [newTodo, setNewTodo] = useState('');
  const [selectProduct, setSelectProduct] = useState('');

  const changeValue = useFilterValue((state) => state.changeValue);
  const value = useFilterValue((state) => state.value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const ShowChecked = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const ShowUnchecked = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const ShowAll = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };


  return (
    <React.Fragment>
      <select
        value={value}
        onChange={(e) => changeValue(e.target.value)}
      >
        <option value={0}>A</option>
        <option value={1}>B</option>
        <option value={2}>C</option>
      </select>
    </React.Fragment>
  );
};
