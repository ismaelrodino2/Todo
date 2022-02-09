import { ChangeEvent, FormEvent, useState } from 'react';

interface addTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<addTodoFormProps> = ({ addTodo }) => {
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
    <form action="">
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
