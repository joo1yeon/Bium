import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import userReducer from '../slices/userSlice';
import videoReducer from '../slices/videoSlice/videoSlice';
import roomReducer from '../slices/roomSlice/roomSlice';

export const store = configureStore(
  {
    reducer: {
      user: userReducer,
      video: videoReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
