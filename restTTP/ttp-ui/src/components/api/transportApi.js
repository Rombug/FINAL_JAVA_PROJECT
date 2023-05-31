import HTTP from "./index";

const getVehicles = () => HTTP.get('/transport');
const saveVehicle = (vehicle) => HTTP.post('/transport', vehicle);
const getVehicleById = (vehicleId) => HTTP.get(`/transport/${vehicleId}`)
const editVehicle = (vehicle, vehicleId) => HTTP.put(`/transport/${vehicleId}`, vehicle);

export {
    getVehicles,
    saveVehicle,
    getVehicleById,
    editVehicle
}