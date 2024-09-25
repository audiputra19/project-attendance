import { PersistConfig, persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import authSlice from "./authSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { apiAuth } from "../services/api"
import { apiAttendance } from "../services/apiAttendance"
import { apiReport } from "../services/apiReport"
import { apiSalary } from "../services/apiSalary"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authSlice,
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiAttendance.reducerPath]: apiAttendance.reducer,
    [apiReport.reducerPath]: apiReport.reducer,
    [apiSalary.reducerPath]: apiSalary.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }).concat(
        apiAuth.middleware, 
        apiAttendance.middleware, 
        apiReport.middleware,
        apiSalary.middleware
    ),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;