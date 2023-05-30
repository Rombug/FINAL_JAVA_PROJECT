import {AppBar, Button, Link, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Header = () => {

    return(
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6"
                            color="inherit"
                            noWrap
                            to="/"
                            component={NavLink}
                            sx={{ flexGrow: 1, textDecoration: 'unset' }}>
                    TTP
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        to="/"
                        component={NavLink}
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        ECV list
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        to="/transport/registration"
                        component={NavLink}
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Register ECV
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        to="/users/registration"
                        component={NavLink}
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Create user
                    </Link>
                </nav>
                <Button href="#" variant="outlined" color="success" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Header;