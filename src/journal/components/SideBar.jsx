import { LoginOutlined, TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, IconButton, AppBar, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../store/auth/authSlice";

export const SideBar = ({ drawerWidth = 240 }) => {
    const { displayName } = useSelector(state => state.auth);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const dispatch = useDispatch()
    const onLogOut = () => {
        dispatch(logout())
    }
    console.log(displayName)

    const drawerContent = (
        <>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {displayName}
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {['Enero', 'Febrero', 'Marzo'].map(text => (
                    <ListItem disablePadding key={text}>
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={text} />
                            <ListItemText secondary={'sfajnafnuafnafiusnafonsufa'} />
                        </Grid>
                    </ListItem>
                ))}
            </List>
            {!isSmallScreen && (
                <Box sx={{ mt: 'auto', p: 2 }}>
                    <Button variant="contained" color="primary">
                        Logout
                    </Button>
                </Box>
            )}
        </>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {isSmallScreen && (
                <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            {displayName}
                        </Typography>
                        <IconButton color='error'
                            onClick={onLogOut}>
                            <LoginOutlined />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            )}

            <Drawer
                variant={isSmallScreen ? "temporary" : "permanent"}
                open={isSmallScreen ? mobileOpen : true}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                    ...(isSmallScreen && { display: mobileOpen ? 'block' : 'none' }),
                }}
            >
                {drawerContent}
            </Drawer>

            {isSmallScreen && <Toolbar />}
        </Box>
    );
};
