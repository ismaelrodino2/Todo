import create from 'zustand';

type State = {
  todos: Array<Todo>;
  setTodos: (value: Array<Todo>) => void;
};

export const useTodos = create<State>((set) => ({
  todos: [],
  
  setTodos: (todo)=>{
    set(()=> ({todos: todo}))
  },
  
}));
