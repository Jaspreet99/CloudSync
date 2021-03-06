import { configureStore } from '@reduxjs/toolkit';
import * as slice from './features';

const store = configureStore({
  reducer: {
    auth: slice.auth,
    modal: slice.modal,
    document: slice.document,
  },
});

export default store;
