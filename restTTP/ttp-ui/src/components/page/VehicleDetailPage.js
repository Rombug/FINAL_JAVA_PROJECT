import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getVehicleById} from "../api/transportApi";
import {CircularProgress, Paper, Stack, styled, Typography} from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flexGrow: 1,
}));

const VehicleDetailPage = () => {
    const {transportId} = useParams();
    const [loading, setLoading] = useState(true);
    const [vehicle, setVehicle] = useState({});

    useEffect(() => {
        getVehicleById(transportId)
            .then(({data}) => setVehicle(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (

        <>
            {
                loading ? <CircularProgress color="success"/> :
                    <div>
                            <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
                                <Typography>Owner:</Typography>
                                <Item>{vehicle.owner}</Item>
                                <Typography>Vehicle model:</Typography>
                                <Item>{vehicle.vehicleModel}</Item>
                                <Typography>Registration country:</Typography>
                                <Item>{vehicle.registrationCountry}</Item>
                                <Typography>Car number:</Typography>
                                <Item>{vehicle.carNumber}</Item>
                                <Typography>Registration number:</Typography>
                                <Item>{vehicle.registrationNumber}</Item>
                                <Typography>Comment:</Typography>
                                <Item>{vehicle.comment}</Item>
                            </Stack>
                    </div>
            }

        </>

    );
};

export default VehicleDetailPage;