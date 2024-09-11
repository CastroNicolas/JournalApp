import { Button, Grid, Link, TextField } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { Link as RouterLink } from "react-router-dom";

export const RegiterPage = () => {
    return (
        <AuthLayout
            title="REGISTER"
        >

            <form>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            type="text"
                            placeholder="Your Name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Email"
                            type="email"
                            placeholder="email@google.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type="password"
                            placeholder="********"
                            fullWidth
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                fullWidth
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
