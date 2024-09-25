import { Alert, Button, Grid, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
    email: '',
    password: '',
    displayName: '',
}
const formValidations = {
    email: [(value) => value.includes('@'), 'Email is invalid'],
    password: [(value) => value.length >= 6, 'Password must have at least 6 characters'],
    displayName: [(value) => value.length >= 1, 'Name is required'],
}

export const RegiterPage = () => {
    const [formSubmitted, setformSubmitted] = useState(false);
    const dispatch = useDispatch()
    const { status, errorMessage } = useSelector(state => state.auth)
    const isCheckingAuthenticating = useMemo(() => status === 'checking', [status])
    const { onInputChange, email, password, displayName, formState,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations)
    const onRegister = (e) => {
        e.preventDefault()
        setformSubmitted(true)
        if (!isFormValid) return
        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout
            title="REGISTER"
        >

            <form
                onSubmit={onRegister}
                className="animate__animated animate__fadeIn animated__faster"
            >
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="Your Name"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayName}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@google.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
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
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Alert
                                severity="error"
                                sx={{ display: errorMessage ? '' : 'none' }}
                            >
                                {errorMessage}
                            </Alert>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
                                type="submit"
                                disabled={isCheckingAuthenticating}
                            >Register</Button>
                        </Grid>
                    </Grid>
                    <Grid>

                        <Link
                            component={RouterLink}
                            color="inherit"
                            to="/auth/login"
                        >Already have an account?</Link>
                    </Grid>

                </Grid>
            </form>
        </AuthLayout>
    )
}
