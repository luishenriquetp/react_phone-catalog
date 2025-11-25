/* eslint-disable no-param-reassign */
// Here disable param-reassign beacuse reduxtookit use  immer lib internally.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  tokenSession: string;
  name: string;
  email: string;
}

export const userStateInitialState: UserState = {
  tokenSession: '',
  name: '',
  email: ''
};

const userState = createSlice({
  name: 'userState',
  initialState: userStateInitialState,
  reducers: {
    setUserDataSession: (state: UserState, action: PayloadAction<{tokenSession: string, name: string, email: string}>) => {
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.tokenSession = action.payload.tokenSession;
    }
  },
});

export const { setUserDataSession } = userState.actions;
export default userState.reducer;
