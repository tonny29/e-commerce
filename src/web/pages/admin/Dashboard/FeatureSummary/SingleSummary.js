import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ArrowUpwardSharpIcon from "@mui/icons-material/ArrowUpwardSharp";
import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";

const SingleSummary = ({ props }) => {
        const { title, subTitle, icon, percentage, value } = props;

        return (
                <>
                        <Grid item xs={3} md={3} lg={3}>
                                <Paper variant="div" sx={{ p: 3, borderRadius: "5px", boxShadow: 3 }} >
                                        <Box variant="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                                                <Typography variant="subtitle1" sx={{letterSpacing: 1}}>{title}</Typography>
                                                {icon }
                                        </Box>
                                        <Box variant="div" sx={{ display: "flex", alignItems: "center" }}>
                                                <Typography variant="h5" sx={{ fontWeight: 'medium' }}>
                                                        {value}
                                                </Typography>
                                                {percentage > 0 ? <ArrowUpwardSharpIcon sx={{ fontSize: "12px", color: "green", fontWeight:'bold', ml:1 }} /> : <ArrowDownwardSharpIcon  sx={{ fontSize: "12px", color: "red",  fontWeight:'bold', ml:1  }}/>}
                                                <Box variant="span" sx={{ fontSize: "14px" }}>
                                                        {percentage}%
                                                </Box>
                                        </Box>
                                        <Typography variant="subtitle2"sx={{color:'grey'}}>{subTitle}</Typography>
                                </Paper>
                        </Grid>
                </>
        );
};

export default SingleSummary;
