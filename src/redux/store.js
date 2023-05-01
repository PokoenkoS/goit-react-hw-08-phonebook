import { configureStore} from '@reduxjs/toolkit';
import { phoneSlice } from './Phonebook/phoneSlice';
import { filterSlice } from './Phonebook/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import  {authSliceReducer } from './Auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
};

export const store = configureStore ({
  reducer: {
    contacts: phoneSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authSliceReducer ), 
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
})}})

  export const persistor = persistStore(store)
  



  