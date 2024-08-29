import { PersistConfig, persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import authSlice from "./authSlice"
import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { apiAuth } from "../services/api"
import { apiAttendance } from "../services/apiAttendance"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authSlice,
    [apiAuth.reducerPath]: apiAuth.reducer,
    [apiAttendance.reducerPath]: apiAttendance.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
        serializableCheck: false,
    }).concat(apiAuth.middleware, apiAttendance.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;