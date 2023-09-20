import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';

import { filtersReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['filters'],
};
const persisetReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persisetReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
