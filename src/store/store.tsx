import { configureStore } from '@reduxjs/toolkit';
import countReducer from './countState';

export default configureStore({
  reducer: {
    count: countReducer,
  },
});
