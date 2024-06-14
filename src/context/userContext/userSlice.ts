/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types.ts';

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
      state.tokenSession = action.payload
    },
  },
});

export const { setUserSession } =
userState.actions;
export default userState.reducer;
