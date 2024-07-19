import { configureStore, Middleware } from '@reduxjs/toolkit';
import rootReducer from './rootReducer.ts';

const localStorageMiddleware: Middleware = store => next => action => {
  const result = next(action);
  console.log(store.getState(), 'auqirfe ');
  localStorage.setItem('reduxState', JSON.stringify(store.getState()));
  return result;
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(localStorageMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
