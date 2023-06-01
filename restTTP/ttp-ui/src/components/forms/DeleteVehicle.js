import {Button} from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import {deleteVehicle} from "../api/transportApi";
import {useNavigate} from "react-router-dom";

const DeleteVehicle = ({vehicleId, removeVehicleFromTable}) => {

    const navigation = useNavigate();
    const onDeleteVehicle = () => {
        deleteVehicle(vehicleId)
            .then(() => {
                if (removeVehicleFromTable){
                    removeVehicleFromTable(vehicleId);
                }
                navigation('/');
            })
            .catch((error) => console.log(error));

    }

    return (
        <Button variant="outlined"
                type="button"
                color="error"
                onClick={() => onDeleteVehicle()}><DeleteRoundedIcon fontSize="small"/></Button>
    )
}
export default DeleteVehicle;