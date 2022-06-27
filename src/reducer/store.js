import reducer from "./reducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

const {createStore} = require("redux");
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
