import create from 'zustand';

type State = {
  value: string;
  changeValue: (value: string) => void;
};

export const useFilterValue = create<State>((set) => ({
  value: '2',
  changeValue: (val) => set({ value: val }),
}));
