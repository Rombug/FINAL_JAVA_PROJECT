import HTTP from "./index";

const getVehicles = () => HTTP.get('/transport');
const saveVehicle = (vehicle) => HTTP.post('/transport', vehicle);
const getVehicleById = (vehicleId) => HTTP.get(`/transport/${vehicleId}`)

export {
    getVehicles,
    saveVehicle,
    getVehicleById
}