/* eslint-disable no-param-reassign */
// Here disable param-reassign beacuse reduxtookit use  immer lib internally.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  tokenSession: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  tokenSession: '',
  name: '',
  email: ''
};

const userState = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserDataSession: (state: UserState, action: PayloadAction<{tokenSession: string, name: string, email: string}>) => {
      state = action.payload;
    }
  },
});

export const { setUserDataSession } = userState.actions;
export default userState.reducer;
