import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit"
import { persistCombineReducers } from "reduxjs-toolkit-persist"
import storage from "reduxjs-toolkit-persist/lib/storage"
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
