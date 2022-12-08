import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import SingleSummary from "./SingleSummary";
import MoneyIcon from '@mui/icons-material/Money';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const data = [
        {
                title: "New Employee",
                subTitle: "Analytics for last week",
                percentage: "13",
                value: "56",
                icon: <PersonIcon sx={{ color: 'blue' }} />,
        },
        {
                title: "Expense",
                subTitle: "Analytics for last week",
                percentage: "-20",
                value: "$253",
                icon: <AccountBalanceWalletIcon sx={{ color: 'red', }} />,
        },
        {
                title: "Revenue",
                subTitle: "Analytics for last week",
                percentage: "13",
                value: "$1388",
                icon: <LocalAtmIcon sx={{ color: 'green' }} />,
        },
        {
                title: "New Leads",
                subTitle: "Analytics for last week",
                percentage: "34",
                value: "5688",
                icon: <LeaderboardIcon sx={{ color: 'goldenrod' }} />,
        },
];

const FeatureSummary = () => {

        return (
                <Box variant="div" sx={{ mt: 2 }}>
                        <Grid container spacing={2}>
                                {
                                        data.map((summary, index) => <SingleSummary props={summary} key={index} />)
                                }
                        </Grid>
                </Box>
        );
};

export default FeatureSummary;
