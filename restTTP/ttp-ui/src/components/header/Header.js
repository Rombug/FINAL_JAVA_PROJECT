import {AppBar, Button, ImageListItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import HeaderItem from "./HeaderItem";

const Header = () => {

    return(
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <ImageListItem>
                        <img src="https://sports.cbsimg.net/fly/images/nfl/logos/team/414.svg" alt="" style={{ width: '50px', height: 'auto' }} />
                    </ImageListItem>
                </div>
                <Typography variant="h6"
                            color="inherit"
                            noWrap
                            component={NavLink}
                            to="/"
                            sx={{ flexGrow: 1, textDecoration: 'unset', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    TTP
                </Typography>
                <nav>
                    <HeaderItem path="/" name="ECV list"/>
                    <HeaderItem path="/transport/registration" name="Register ECV"/>
                    <HeaderItem path="/users/registration" name="Create user"/>
                </nav>
                <Button href="#" variant="outlined" color="success" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
