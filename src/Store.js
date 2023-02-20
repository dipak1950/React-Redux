import { createStore } from "redux";
import reduce from "./Services/Reducer";
const Store = createStore(reduce, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default Store;