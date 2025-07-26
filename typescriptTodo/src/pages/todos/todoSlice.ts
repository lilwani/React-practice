import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface TodosState {
  todoID: number;
  title: string;
  description: string;
  completed: boolean;
  lastUpdatedDate: string;
}

export interface todoSliceState {
  todos: TodosState[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: todoSliceState = {
  todos: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state: todoSliceState, action: PayloadAction<TodosState>) => {
      state.todos?.push(action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { setTodos } = todoSlice.actions;
