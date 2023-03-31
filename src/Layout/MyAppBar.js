import * as React from 'react';
import { AppBar, Logout, UserMenu, useTranslate } from 'react-admin';
import { Link } from 'react-router-dom';
import {
    Box,
    MenuItem,
    ListItemIcon,
    ListItemText,
    Typography,
    useMediaQuery,

} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const ConfigurationMenu = React.forwardRef((props, ref) => {
    const translate = useTranslate();
    return (
        <MenuItem
            component={Link}
            // @ts-ignore
            ref={ref}
            {...props}
            to="/configuration"
        >
            <ListItemIcon>
                <SettingsIcon />
            </ListItemIcon>
            <ListItemText>{translate('paramètre')}</ListItemText>
        </MenuItem>
    );
});
const CustomUserMenu = () => (
    <UserMenu>
        <ConfigurationMenu />
        <Logout />
    </UserMenu>
);

const MyAppBar = (props) => {
    const isLargeEnough = useMediaQuery(theme =>
        theme.breakpoints.up('sm')
    );
    return (
        <AppBar
            {...props}
            color="secondary"
            elevation={1}
            userMenu={<CustomUserMenu />}
            sx={{
                backgroundColor: "",
                display: 'flex' ,
                justifyContent:'end',
          
            }}
        >
            <Typography
                variant="h6"
                color="inherit"
                sx={{
                    flex: 1,
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                }}
                id="react-admin-title"
            />
           
            {isLargeEnough && <Box component="span" sx={{ flex: 1 }} />}
        </AppBar>
    );
};

export default MyAppBar;
