import { configureStore} from "@reduxjs/toolkit";
import {
    persistStore, persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,} from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage';
// import { contactsReducer } from "./contacts/contactsSlice";
import { contactsApi } from "./contacts/contactsSlice";
import { filterReducer } from "./filter/filterSlice";
import { authReducer } from './auth';


const persistConfig = {
    key: 'auth',
    storage,
    whitelist:['token'],
};

export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        auth:persistReducer(persistConfig, authReducer),
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware => [
        ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
        contactsApi.middleware,
    ],
});

export const persistor = persistStore(store);

