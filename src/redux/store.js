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
import  {authSlice}  from './Auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist:['token']
};

export const store = configureStore ({
  reducer: {
    contacts: phoneSlice.reducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer ), 
  },
  middleware:(getDefaultMiddleware)=>
     getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
}),
devTools: process.env.NODE_ENV === 'development',
})

  export const persistor = persistStore(store)
  



  