import {Container} from "@mui/material";
import Transport from "../forms/Transport";

const Content = () => {

    return (
        <>
        <Container disableGutters maxWidth="lg" component="main"  sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 157px)',
            mt:3
        }}>
            <Transport/>
        </Container>
        </>
    );
}

export default Content;