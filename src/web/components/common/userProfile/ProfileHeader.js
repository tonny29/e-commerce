import React from "react";
import { Avatar, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const ProfileHeader = () => {
    return (
        <Grid className="alingmentCenter">
            <Stack sx={{ alignItems: 'center !important', mt: 8 }}>
                <Avatar
                    src="https://images.unsplash.com/photo-1585515160245-fb3d08cbb682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&w=1000&q=80"
                    sx={{ width: 56, height: 56 }}
                />
            </Stack>

            <Typography variant="h6" sx={{ fontSize: '15px' }}>
                140-Nazmul Hassan
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '14px' }}>
                nhasan@example.com
            </Typography>
            <Typography variant="h6" sx={{ fontSize: '15px' }}>
                Backend Engineer
            </Typography>
            <Grid container>
                <Grid item md={6} lg={6} xs={12} sx={{ mt: 2 }}>
                    <Button sx={{ boxShadow: " rgba(0, 0, 0, 0.20) 0px 5px 15px", color: 'black' }}>My Account</Button>
                </Grid>

                <Grid item md={6} lg={6} xs={12} sx={{ mt: 2 }}>
                    <Button sx={{ color: '#FC6A03' }}>Sign Out</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProfileHeader;