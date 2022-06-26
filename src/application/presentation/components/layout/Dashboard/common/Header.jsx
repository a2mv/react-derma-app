import React from 'react';
import { Badge, IconButton, styled, Toolbar, Typography} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';

// TODO change for i8next translator
import {app} from "../../../../../../domain/constants";

const Header = ({open, toggleDrawer, drawerWidth}) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    return (
        <AppBar position='absolute' open={open}>
            <Toolbar
                sx={{
                pr: '24px',
            }}
            >
                <IconButton edge='start' color='inherit' aria-label='open drawer' onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}
                >
                    {app.TITLE}
                </Typography>
                <IconButton color='inherit'>
                    {/*TODO badgeContent in redux*/}
                    <Badge badgeContent={4} color='secondary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;