import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  loginUser,
  type Payload,
  type UserAxiosResp,
} from '../../services/userServices';
import type { RootState } from '../../store/store';

export interface UserState {
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
  isLoggedIn: boolean;
}

const initialState: userSliceState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn: false,
};

export const loginUserThunk = createAsyncThunk<
  UserAxiosResp,
  Payload,
  { rejectValue: UserAxiosResp }
>('user/loginUser', async (payload, { rejectWithValue }) => {
  try {
    const response = await loginUser(payload);
    return response;
  } catch (error: any) {
    console.error(`Error in thunk loginUserThunk: ${error.error}`);
    return rejectWithValue(error || 'Login failed');
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state: userSliceState, action: PayloadAction<UserState>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUserThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        loginUserThunk.fulfilled,
        (state: userSliceState, action: PayloadAction<UserAxiosResp>) => {
          console.log(`in builder userSlice loginThunk fulfilled`);
          const { user, token } = action.payload.result;
          if (user && token) {
            state.user = { ...user, token };
            state.isLoading = false;
            state.isLoggedIn = true;
          }
        }
      )
      .addCase(loginUserThunk.rejected, (state: userSliceState, action) => {
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

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const getUserState = (state: RootState): userSliceState => state.user;
