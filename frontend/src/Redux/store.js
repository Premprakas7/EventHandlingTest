import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk from "redux-thunk"
import { reducer } from "./reducer";


export const rootReducer=combineReducers({reducer})
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

