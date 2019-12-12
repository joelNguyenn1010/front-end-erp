import { createStore, applyMiddleware, compose, combineReducers, Reducer } from 'redux';
import thunk from 'redux-thunk';
import { Product } from './contract/Product';
import { productReducer } from './reducer/productReducer';


export interface AppState {
    productReducer: Product
}



export const rootReducer: Reducer<AppState> = combineReducers({
    productReducer
})

declare global {
    interface Window { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any; }
}

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;


const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);


// you can load the settings here
const initialState = { }


export const initStore = createStore(rootReducer, initialState, enhancer);