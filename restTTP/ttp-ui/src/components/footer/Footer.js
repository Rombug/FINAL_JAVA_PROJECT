import {Box, Container, Typography} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="left" {...props}>
            {'Copyright © '}
            Code Academy
            {' '}{new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


const Footer = () => {

    return(
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: '#CCFFCC',
                color: 'black',
                borderTop: '1px solid black'
            }}
        >
            <Container maxWidth="lx">
                <Typography variant="body1" align="left">
                    Spring Boot & React App
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
  
}

export default Footer;