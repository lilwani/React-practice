import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../pages/user/userSlice';
import todoReducer from '../pages/todos/todoSlice';

const reducers = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
