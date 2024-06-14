import { configureStore } from "@reduxjs/toolkit";
import { ItemsSlice } from "./Items/itemsSlice";
// import { MenuSlice } from "./menuSlice";
import storage from 'redux-persist/lib/storage';
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

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['items', 'cartItems', 'topItems', 'newItems', 'filters', 'totalItems', 'page'],
};

const persistedItemsReducer = persistReducer(persistConfig, ItemsSlice.reducer);

export const store = configureStore({
    reducer: {
        items: persistedItemsReducer,
        // menu: MenuSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);