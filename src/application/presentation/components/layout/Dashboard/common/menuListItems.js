import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupIcon from '@mui/icons-material/Group';
import FileCopyIcon from '@mui/icons-material/FileCopy';

// TODO change for i8next translator
import {app} from "../../../../../../domain/constants";

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.DASHBOARD} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.ADMISSIONS} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.APPOINTMENTS} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <AppRegistrationIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.HC} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <PointOfSaleIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.BILLING} />
        </ListItemButton>
    </React.Fragment>
);

export const secondaryListItems = (
    <React.Fragment>
        <ListSubheader component="div" inset>
            {app.MENU.SUB_HEADER}
        </ListSubheader>
        <ListItemButton>
            <ListItemIcon>
                <PersonIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.USERS} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <GroupIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.PROFILES} />
        </ListItemButton>
        <ListItemButton>
            <ListItemIcon>
                <FileCopyIcon />
            </ListItemIcon>
            <ListItemText primary={app.MENU.TEMPLATES} />
        </ListItemButton>
    </React.Fragment>
);