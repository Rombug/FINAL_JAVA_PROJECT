import {Container} from "@mui/material";
import Transport from "../forms/Transport";
import {Route, Routes} from "react-router-dom";
import User from "../forms/User";
import Vehicles from "../page/Vehicles";
import VehicleDetailPage from "../page/VehicleDetailPage";
import Login from "../forms/Login";
import SecuredRoute from "../security/SecuredRoute";

const Content = () => {

    return (
        <>
        <Container disableGutters maxWidth="lg" component="main"  sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 157px)',
            mt:3,
            background: `url('https://previews.123rf.com/images/mino21/mino211401/mino21140100036/26043819-line-art-of-a-truck-with-trailer.jpg')`,
            backgroundSize: '40%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center bottom',
        }}>

            <Routes>
                <Route path="/" element={<Vehicles/>}/>
                <Route path="/transport/:transportId" element={<VehicleDetailPage/>}/>
                <Route path="/users/registration" element={<User/>}/>

                <Route path="/transport/registration" element={<SecuredRoute/>}>
                    <Route path="/transport/registration" element={<Transport key="registration"/>}/>
                </Route>

                <Route path="/transport/:transportId/update" element={ <SecuredRoute/> }>
                    <Route path="/transport/:transportId/update" element={<Transport key="update"/>}/>
                </Route>


                <Route path="/login" element={<Login/>}/>
            </Routes>

        </Container>
        </>
    );
}

export default Content;