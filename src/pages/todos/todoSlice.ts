import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TodosList {
  todoID: number;
  title: string;
  description: string;
  completed: boolean;
  lastUpdatedDate: string;
  type: string;
  userId: number;
}

export interface todoSliceState {
  todos: TodosList[] | null;
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
    setTodos: (state: todoSliceState, action: PayloadAction<TodosList>) => {
      state.todos?.push(action.payload);
    },
  },
});

export default todoSlice.reducer;
export const { setTodos } = todoSlice.actions;
