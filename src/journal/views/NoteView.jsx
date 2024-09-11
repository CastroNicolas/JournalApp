import { Button, Grid, TextField, Typography } from "@mui/material";
import { SaveOutlined } from "@mui/icons-material";
import { ImageGalery } from "../components/ImageGalery";
export const NoteView = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1 }}
        >

            <Grid item>
                <Typography fontSize={39} fontWeight="light">
                    28 de Agost, 2023
                </Typography>
            </Grid>

            <Grid item>
                <Button>
                    <SaveOutlined
                        sx={{ fontSize: 30, mr: 1 }}
                    /> Save
                </Button>
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Enter a title"
                    label="Title"
                    sx={{ border: "none", mb: 1 }}
                />
            </Grid>
            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today"
                    minRows={5}
                    sx={{ border: "none", mb: 1 }}
                />
            </Grid>
            <ImageGalery />

        </Grid>
    )
}
