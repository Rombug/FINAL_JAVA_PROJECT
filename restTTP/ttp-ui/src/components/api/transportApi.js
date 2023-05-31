import HTTP from "./index";

const getVehicles = () => HTTP.get('/transport');
const saveVehicle = (vehicle) => HTTP.post('/transport', vehicle);

export {
    getVehicles,
    saveVehicle
}