import "../../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider } from "react-redux"
import { store } from "../redux/store"
import { PersistGate } from "reduxjs-toolkit-persist/integration/react"
import { persistStore } from "reduxjs-toolkit-persist"
const persistor = persistStore(store)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default MyApp
