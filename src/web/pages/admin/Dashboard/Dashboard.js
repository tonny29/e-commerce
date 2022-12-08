import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import BaseApp from "../../../../App";
import FeatureSummary from "./FeatureSummary";

const AdminDashboard = () => {
    return (
        <BaseApp>
            <Typography variant="subtitle2">Dashboard</Typography>
            <Box variant='div' sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box variant='div' >
                    <Typography variant="h6" sx={{ mt: 2, fontWeight: 'medium' }}>Welcome back, Allie!</Typography>
                </Box>
                {/* Date */}
            </Box>
            <FeatureSummary />
        </BaseApp>
    )
}

export default AdminDashboard;