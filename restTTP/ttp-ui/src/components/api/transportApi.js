import HTTP from "./index";

const getVehicles = () => HTTP.get('/transport');

export {
    getVehicles
}