import {Container} from "@mui/material";
import Transport from "../forms/Transport";
import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import Vehicles from "../page/Vehicles";
import VehicleDetailPage from "../page/VehicleDetailPage";

const Content = () => {

    return (
        <>
        <Container disableGutters maxWidth="lg" component="main"  sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 157px)',
            mt:3
        }}>

            <Routes>
                <Route path="/" element={<Vehicles/>}/>
                <Route path="/transport/registration" element={<Transport key="registration"/>}/>
                <Route path="/users/registration" element={<User/>}/>
                <Route path="/transport/:transportId/update" element={<Transport key="update"/>}/>
                <Route path="/transport/:transportId" element={<VehicleDetailPage/>}/>
            </Routes>

        </Container>
        </>
    );
}

export default Content;