import {AppBar, Button, ImageListItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import HeaderItem from "./HeaderItem";
import LanguageSwitcher from "../swithers/LanguageSwitcher";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {useTranslation} from "react-i18next";


const Header = () => {
    const {t} = useTranslation('header')

    return(
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                mt: 'auto',
                backgroundColor: '#F0FFF0',
                color: 'black',
                borderBottom: '1px solid black'
            }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>

                <Typography
                    variant="h6"
                    color="inherit"
                    noWrap
                    component={NavLink}
                    to="/"
                    sx={{
                        flexGrow: 1,
                        textDecoration: 'unset',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'left',
                    }}
                >
                    <ImageListItem sx={{ marginRight: '10px' }}>
                        <img
                            src="https://sports.cbsimg.net/fly/images/nfl/logos/team/414.svg"
                            alt=""
                            style={{ width: '35px', height: 'auto' }}
                        />
                    </ImageListItem>
                    TTP
                </Typography>
                <nav>
                    <HeaderItem path="/" name={t('ecv_list')}/>
                    <HeaderItem path="/transport/registration" name={t('register_ecv')}/>
                    <HeaderItem path="/users/registration" name={t('create_user')}/>
                </nav>
                <Button variant="outlined"
                        color="success"
                        sx={{ my: 1, mx: 1.5 }}
                        component={NavLink} to="/login" >
                    {t('login')}
                </Button>
                <LanguageSwitcher/><LanguageOutlinedIcon color="success" fontSize="large"/>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
