import React from "react";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Box, CssBaseline } from '@mui/material';
import { purple } from '@mui/material/colors';

import Header from './common/Header';
import Sidebar from './common/Sidebar';

const DashboardLayout = ({ children }) => {

    const drawerWidth = 240;

    const mdTheme = createTheme({
        palette: {
            primary: {
                main: purple[500],
            },
            secondary: {
                main: '#f44336',
            },
        },
    });

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Header open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
                <Sidebar open={open} toggleDrawer={toggleDrawer} drawerWidth={drawerWidth} />
                <Box component="main"
                     sx={{
                         flexGrow: 1,
                         height: '100vh',
                         overflow: 'auto',
                     }}>
¿
                    {children}

                </Box>
            </Box>
        </ThemeProvider>
    );

}

export default DashboardLayout;