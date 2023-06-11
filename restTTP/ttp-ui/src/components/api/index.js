import axios from "axios";
import {configure} from "@testing-library/react";
import store from "../../store/store";

const HTTP = axios.create(
    {
        baseURL: '/api/'
    }
);

HTTP.interceptors.request.use(config => {
    const jwtToken = store.getState().user.jwtToken;
    if (jwtToken) {
        config.headers.authorization = `Bearer  ${jwtToken}`;
    }

    return config;

});

export default HTTP;