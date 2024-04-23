import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TransactionReducer from "./transactionReducer";
import {


    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from "@react-native-async-storage/async-storage";
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
const reducer = combineReducers({
    transaction: TransactionReducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getMiddleware) =>
        getMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })

});

export default store;