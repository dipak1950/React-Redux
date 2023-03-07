import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import reduce from "./Services/Reducer";

const persistConfig = {
    key: 'myConfig',
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reduce)

const Store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(Store)
export default Store;