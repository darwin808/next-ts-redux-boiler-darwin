import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import { persistCombineReducers } from "reduxjs-toolkit-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web
import { tokenReducer } from "../redux/reducers/auth"

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["user", "filters"]
}
const reducer = {
  token: tokenReducer
}
const persistedReducer = persistCombineReducers(persistConfig, reducer)
export const store = configureStore({
  reducer: persistedReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
