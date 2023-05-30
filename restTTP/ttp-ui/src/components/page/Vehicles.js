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
    })
    return (

        <>
            {
                loading ? <CircularProgress color="success"/> :
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Owner</StyledTableCell>
                                    <StyledTableCell align="right">RegistrationCountry</StyledTableCell>
                                    <StyledTableCell align="right">RegistrationNumber</StyledTableCell>
                                    <StyledTableCell align="right">CarNumber</StyledTableCell>
                                    <StyledTableCell align="right">Comment</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {vehicles.map((vehicle) => (
                                    <StyledTableRow key={vehicle.id}>
                                        <StyledTableCell component="th" scope="row">{vehicle.owner}</StyledTableCell>
                                        <StyledTableCell align="right">{vehicle.registrationCountry}</StyledTableCell>
                                        <StyledTableCell align="right">{vehicle.registrationNumber}</StyledTableCell>
                                        <StyledTableCell align="right">{vehicle.carNumber}</StyledTableCell>
                                        <StyledTableCell align="right">{vehicle.comment}</StyledTableCell>
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