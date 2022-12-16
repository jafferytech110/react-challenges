import counterReducer from "./Counter";
import userReducer from "./User";

// combining all reducers
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter: counterReducer,
    user: userReducer
})

export default allReducers