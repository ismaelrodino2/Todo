import create from 'zustand';

type State = {
  todos: Array<Todo>;
  setTodos: any;
};

const useTodoStore = create<State>((set) => ({
  todos: [],

  setTodos: (todo: Todo) => {
    set((state) => ({ todos: [...state.todos, todo] }));
  },
}));

export default useTodoStore;
