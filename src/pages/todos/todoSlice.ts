import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { loginUserThunk } from '../user/userSlice';
import type { UserAxiosResp } from '../../services/userServices';
import type { RootState } from '../../store/store';

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
  todosList: TodosList[] | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: todoSliceState = {
  todosList: [],
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (state: todoSliceState, action: PayloadAction<TodosList>) => {
      state.todosList?.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        loginUserThunk.fulfilled,
        (state: todoSliceState, action: PayloadAction<UserAxiosResp>) => {
          console.log(`in builder todoSlice loginThunk fulfilled`);
          const { token, todos } = action.payload.result;
          if (todos && token) {
            state.todosList = [...todos];
            state.isLoading = false;
          }
        }
      )
      .addCase(loginUserThunk.rejected, (state: todoSliceState, action) => {
        state.isLoading = false;
        if (
          action.payload &&
          typeof action.payload === 'object' &&
          'result' in action.payload &&
          action.payload.result &&
          'error' in action.payload.result
        ) {
          state.error = action.payload.result.error ?? 'Unknown error';
        } else if (typeof action.payload === 'string') {
          state.error = action.payload;
        } else {
          state.error = 'Login failed';
        }
      });
  },
});

export default todoSlice.reducer;
export const { setTodos } = todoSlice.actions;

export const getAllTodos = (state: RootState): TodosList[] | null =>
  state.todos.todosList;

export const getOneTodo =
  (todoIndex: number) =>
  (state: RootState): TodosList | undefined => {
    if (Array.isArray(state.todos.todosList)) {
      console.log(`todoParam is ${todoIndex}`);
      return state.todos.todosList.find((item) => item.todoID === todoIndex);
    }
    return undefined;
  };

/*
  
  NEXT TIME

  Use Redirect instead of dispatch after login
  Refreshing page send you back to login, investigate why
  fix why modal close won't take you back to dashboard all items and fix its styling  

  */
