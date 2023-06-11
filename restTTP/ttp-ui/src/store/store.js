import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user from './slices/userSlice';

const createNewStore = () => {
    return configureStore(
    //const store = configureStore(
        {
            reducer: {
                user
            },
            middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
        }
    )
   // );

}

const store = createNewStore();

export default store;