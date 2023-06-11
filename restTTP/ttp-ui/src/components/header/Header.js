import {AppBar, Avatar, Button, Fade, ImageListItem, Menu, MenuItem, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import HeaderItem from "./HeaderItem";
import LanguageSwitcher from "../swithers/LanguageSwitcher";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import * as React from 'react';
import { green } from '@mui/material/colors';
import {useState} from "react";
import {removeUser} from "../../store/slices/userSlice";



const Header = () => {
    const {t} = useTranslation('header')
    const user = useSelector(state => state.user.user);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
         setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
         setAnchorEl(null);
    };
    const dispach = useDispatch();
    const onLogout = () => {
        dispach(removeUser());
    }


        return (
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
                <Toolbar sx={{flexWrap: 'wrap'}}>

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
                        <ImageListItem sx={{marginRight: '10px'}}>
                            <img
                                src="https://sports.cbsimg.net/fly/images/nfl/logos/team/414.svg"
                                alt=""
                                style={{width: '35px', height: 'auto'}}
                            />
                        </ImageListItem>
                        TTP
                    </Typography>
                    <nav>
                        <HeaderItem path="/" name={t('ecv_list')}/>
                        <HeaderItem path="/transport/registration" name={t('register_ecv')}/>
                        <HeaderItem path="/users/registration" name={t('create_user')}/>
                    </nav>
                    {
                        user ?

                            <div>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    id="fade-button"
                                    aria-controls={open ? 'fade-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Avatar src="/broken-image.jpg" sx={{ backgroundColor: green[700], width: 24, height: 24}} />
                                </Button>
                                <Menu
                                    id="fade-menu"
                                    MenuListProps={{
                                        'aria-labelledby': 'fade-button',
                                    }}
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    TransitionComponent={Fade}
                                >
                                    <MenuItem>{user.fullName}</MenuItem>
                                    <MenuItem onClick={ onLogout }>Logout</MenuItem>
                                </Menu>
                            </div>

                            :
                            <Button variant="outlined"
                                    color="success"
                                    sx={{my: 1, mx: 1.5}}
                                    component={NavLink} to="/login">
                                {t('login')}
                            </Button>
                    }

                    <LanguageSwitcher/><LanguageOutlinedIcon color="success" sx={{width: 24, height: 24}}/>
                </Toolbar>
            </AppBar>
        );
    }

export default Header;
