import create from 'zustand';

type State = {
  todosDisplay: Array<Todo>;
  setTodosDisplay: (value: Array<Todo>) => void;
};

export const useTodosDisplay = create<State>((set) => ({
  todosDisplay: [],

  setTodosDisplay: (todo) => {
    set(() => ({ todosDisplay: todo }));
  },
}));
