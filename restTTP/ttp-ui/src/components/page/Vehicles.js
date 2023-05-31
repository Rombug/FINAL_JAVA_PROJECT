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



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
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
}));

const Vehicles = () => {

    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        getVehicles()
            .then(({data}) => setVehicles(data))
            .catch((error) => console.log('error', error))
            .finally(() => setLoading(false));
    }, [])
    return (

        <>
            {
                loading ? <CircularProgress color="success"/> :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Owner</StyledTableCell>
                                    <StyledTableCell >Registration Country</StyledTableCell>
                                    <StyledTableCell >Vehicle Model</StyledTableCell>
                                    <StyledTableCell >Registration Number</StyledTableCell>
                                    <StyledTableCell >Car Number</StyledTableCell>
                                    <StyledTableCell >Comment</StyledTableCell>
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