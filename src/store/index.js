// import { createStore } from "redux";
// import reducers from "./reducers.js";
// const store = createStore(
//     reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
// );
// export default store;
//上面的不使用用redux-thunk中间件

//下面的使用redux-thunk中间件
import {  createStore,compose ,applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducers.js'
//使用redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));
export default store;