import { createStore } from "redux";
import { rootReducers } from "../reducers/rootReducers";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION__: any;
    }
}

export const store: any = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
