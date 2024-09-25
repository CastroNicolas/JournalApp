import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { LoginOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/auth/authSlice'
export const NavBar = ({ drawerWidth = 240 }) => {
    const dispatch = useDispatch()
    const onLogOut = () => {
        dispatch(logout())
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}

        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge='start'
                    sx={{ mr: 2, display: { sm: 'none' } }}

                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between'>
                    <Typography variant='h6' noWrap component='div'>JournalApp</Typography>
                    <IconButton color='error'
                        onClick={onLogOut}>
                        <LoginOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
