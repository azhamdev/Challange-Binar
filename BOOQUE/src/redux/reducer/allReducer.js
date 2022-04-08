import { combineReducers } from "redux";
import HomeReducer from "../../screens/Home/redux/reducer";
import { loginReducer } from "../../screens/Login/redux/reducer";
import { globalReducer } from "./globalReducer";


export const allReducer = combineReducers({
    login: loginReducer,
    home: HomeReducer,
    global: globalReducer,
})