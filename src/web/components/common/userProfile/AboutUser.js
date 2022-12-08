import { Grid, Box, TextField, Typography } from '@mui/material';
import React from 'react';
// import PublicIcon from '@mui/icons-material/Public';


const aboutUser = () => {
    return (
        <Box sx={{ width: '85%', margin: 'auto', padding: '10px 25px' }}>
            <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold' }}>
                My Account
            </Typography>
            <Grid container sx={{ mt: 1 }}>
                <Grid item md={8} lg={8} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label="Full Name"
                        defaultValue="Nazmul Hasan"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={6}>

                    <TextField
                        id="standard-read-only-input"
                        label="Who can see this?"
                        defaultValue="Anyone"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={8} lg={8} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label="Public Name"
                        defaultValue="farhanpartex"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label=" "
                        defaultValue="Anyone"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={8} lg={8} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label="Job Title"
                        defaultValue="Full Stack Developer"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={4} lg={4} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label=" "
                        defaultValue="Anyone"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>

            </Grid>
        </Box>
    );
};

export default aboutUser;