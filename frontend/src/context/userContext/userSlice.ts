/* eslint-disable no-param-reassign */
// Here disable param-reassign beacuse reduxtookit use  immer lib internally.
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  tokenSession: string;
}

const initialState: UserState = {
  tokenSession: '',
};

const userState = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUserSession: (state: UserState, action: PayloadAction<string>) => {
      state.tokenSession = action.payload;
    },
  },
});

export const { setUserSession } = userState.actions;
export default userState.reducer;
