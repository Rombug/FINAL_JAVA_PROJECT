import {NavLink, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {getVehicleById} from "../api/transportApi";
import {Button, CircularProgress, Grid, Paper, Typography} from "@mui/material";
import DeleteVehicle from "../forms/DeleteVehicle";
import {useSelector} from "react-redux";


const VehicleDetailPage = () => {
    const {transportId} = useParams();
    const [loading, setLoading] = useState(true);
    const [vehicle, setVehicle] = useState({});
    const user = useSelector(store => store.user.user);

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
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Owner</Typography>
                                    <Typography>{vehicle.owner}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Vehicle Model</Typography>
                                    <Typography>{vehicle.vehicleModel}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Registration Country</Typography>
                                    <Typography>{vehicle.registrationCountry}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Car Number</Typography>
                                    <Typography>{vehicle.carNumber}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12} sm={6} md={4}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Registration Number</Typography>
                                    <Typography>{vehicle.registrationNumber}</Typography>
                                </Paper>
                            </Grid>

                            <Grid item xs={12}>
                                <Paper elevation={1} style={{ padding: '1rem' }}>
                                    <Typography variant="h6">Comment</Typography>
                                    <Typography>{vehicle.comment}</Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                            <Button variant="outlined"
                                    to={`/transport/${vehicle.id}/update`}
                                    component={NavLink}
                                    color="success">Edit</Button>
                            <div style={{ marginRight: '10px' }}></div>
                            {
                                user?.roles.includes('ADMIN') && <DeleteVehicle vehicleId={vehicle.id}/>
                            }
                        </div>
                    </div>
            }

        </>

    );
};

export default VehicleDetailPage;