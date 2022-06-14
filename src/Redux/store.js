import { combineReducers, compose, createStore } from "redux";
import { ArticleReducer } from './article/reducer'
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk]

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__()
    : compose;



const Reducers = combineReducers({
    article: ArticleReducer
})

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export const Store = createStore(Reducers, applyMiddleware(...middleware))