import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  age: number;
  userID: number;
  token: string;
}

export interface userSliceState {
  user: UserState | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: userSliceState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: userSliceState, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
