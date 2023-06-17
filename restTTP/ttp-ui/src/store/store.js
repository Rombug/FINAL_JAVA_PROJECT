import {configureStore} from "@reduxjs/toolkit";
import {logger} from "redux-logger/src";
import user, {getUserFromLocalStorage} from './slices/userSlice';

const createNewStore = () => {
    return configureStore(
    //const store = configureStore(
        {
            reducer: {
                user
            },
            middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
            preloadedState :{
                user: getUserFromLocalStorage()
            }
        }
    )
   // );

}

const store = createNewStore();

export default store;