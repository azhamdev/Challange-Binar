import { createStore, applyMiddleware } from "redux";
import { allReducer } from '../../redux/reducer/allReducer';
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";

const allMiddlewares = applyMiddleware(logger, thunk);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['login']
}

const persistedReducer = persistReducer(persistConfig, allReducer)


export const store = createStore(persistedReducer, {}, allMiddlewares);
export const persistor = persistStore(store);