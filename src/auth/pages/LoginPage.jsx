import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
export const LoginPage = () => {

    const { status, errorMessage } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const isAuthenticating = useMemo(() => status === 'checking', [status])
    const { onInputChange, email, password } = useForm({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }))
    }
    const onGoogleSingIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout
            title="LOGIN"
        >
            <form
                onSubmit={handleLogin}
                className="animate__animated animate__fadeIn animated__faster"
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container
                        display={!!errorMessage ? '' : 'none'}
                        sx={{ mt: 1 }}
                    >
                        <Grid item xs={12}>
                            <Alert
                                severity="error"
                            >
                                {
                                    errorMessage
                                }

                            </Alert>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                type="submit"
                                disabled={isAuthenticating}
                            >Login</Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSingIn}
                                disabled={isAuthenticating}
                            >
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/register"
                        >Create account</Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout >

    );
}
