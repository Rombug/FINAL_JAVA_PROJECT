import {useEffect, useState} from "react";
import {getVehicles} from "../api/transportApi";
import {
    CircularProgress, Paper,
    styled,
    Table,
    TableBody, TableCell,
    tableCellClasses,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {NavLink} from "react-router-dom";
import DeleteVehicle from "../forms/DeleteVehicle";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'green',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    backgroundColor: '#F0FFF0',
}));

const Vehicles = () => {

    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);
    const {t} = useTranslation('vehicles');
    const user = useSelector(store => store.user.user);

    useEffect(() => {
        getVehicles()
            .then(({data}) => setVehicles(data))
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false));
    }, [])

    const removeVehicleFromTable = (vehicleId) => {
        const filteredVehicles = vehicles.filter(v => v.id !== vehicleId);
        setVehicles(filteredVehicles);
    }

    return (

        <>
            {
                loading ? <CircularProgress color="success"/> :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>{t('owner')}</StyledTableCell>
                                    <StyledTableCell >{t('registrationCountry')}</StyledTableCell>
                                    <StyledTableCell >{t('vehicleModel')}</StyledTableCell>
                                    <StyledTableCell >{t('registrationNumber')}</StyledTableCell>
                                    <StyledTableCell >{t('carNumber')}</StyledTableCell>
                                    <StyledTableCell >{t('comment')}</StyledTableCell>
                                    <StyledTableCell ></StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicles.map((vehicle) => (
                                    <StyledTableRow key={vehicle.id}>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}
                                                         component="th"
                                                         scope="row">
                                            <NavLink to={`/transport/${vehicle.id}`}>
                                                {vehicle.owner}
                                            </NavLink>
                                        </StyledTableCell>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'
                                        }}>
                                            {vehicle.registrationCountry}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}>
                                            {vehicle.vehicleModel}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}>
                                            {vehicle.registrationNumber}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}>
                                            {vehicle.carNumber}
                                        </StyledTableCell>
                                        <StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}>
                                            {vehicle.comment}
                                        </StyledTableCell><StyledTableCell sx={{
                                            maxWidth: 100,
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            whiteSpace: 'nowrap'}}>
                                            {
                                                user?.roles.includes('ADMIN') && <DeleteVehicle key={vehicle.id}
                                                                                                vehicleId={vehicle.id}
                                                                                                removeVehicleFromTable={removeVehicleFromTable}/>
                                            }
                                        </StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            }

        </>

    )
}
export default Vehicles;