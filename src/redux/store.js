import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import userReducer from './reducer'
import persistStore from "redux-persist/es/persistStore";
 
const persistConfig = {
    key : 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig,userReducer)

export const store = configureStore({
    reducer:{
        token :persistedReducer
    }
})

export let persistor = persistStore(store)