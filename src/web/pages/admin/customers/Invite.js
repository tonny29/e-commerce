import React from "react";
import { Typography, Box, TextField } from '@mui/material';
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";

const Invite = () => {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                Customer Invitation
            </Typography>
            <Box
                component="form"
                noValidate
                onSubmit={() => { }}
                sx={{ mt: 1, width: '40%', margin: 'auto' }}
            >
                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"email"}
                    label={"Customer Email"}
                    name={"email"}
                    autoComplete={"Email"}
                    autoFocus={true}
                    sx={{ background: "white" }}
                />
                <PrimaryButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Send Invitation Link
                </PrimaryButton>
            </Box>
        </Box>
    )
}

export default Invite;