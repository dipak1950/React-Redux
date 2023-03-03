import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reduce from "./Services/Reducer";

const persistConfig = {
    key: 'myConfig',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reduce)

const Store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(Store)
export default Store;