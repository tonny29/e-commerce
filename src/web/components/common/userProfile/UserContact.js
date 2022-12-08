import { Grid, TextField, Typography, Box } from '@mui/material';
import React from 'react';

const UserContact = () => {
    return (
        <Box sx={{ width: '85%', margin: 'auto', padding: '10px 25px' }}>
            <Typography variant="h5" gutterBottom sx={{ mt: 3 }}>
                Contact
            </Typography>
            <Grid container rowSpacing={1} sx={{ mt: 1 }} >
                <Grid item md={6} lg={6} xs={6}>
                    <TextField
                        id="standard-read-only-input"
                        label="Email address"
                        defaultValue="hasan08@gmail.com"
                        InputProps={{
                            readOnly: true,
                            disableUnderline: true,
                        }}
                        variant="standard"
                    />
                </Grid>
                <Grid item md={6} lg={6} xs={6}>

                    <TextField
                        id="standard-read-only-input"
                        label="Who can see this?"
                        defaultValue="Only you"
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

export default UserContact;