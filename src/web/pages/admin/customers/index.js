import React, { useState } from "react";
import { Box, Typography, Paper, Grid, TextField, Button, List, ListItem, ListItemButton } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BaseApp from "../../../../App";
import CustomerList from "./CustomerList";
import OrganisationList from "./OrganisationList";
import Invite from "./Invite";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Customers = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BaseApp>

            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Organisation" {...a11yProps(0)} />
                    <Tab label="Customers" {...a11yProps(1)} />
                    <Tab label="Invite Customer" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <OrganisationList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <CustomerList />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Invite />
                </TabPanel>


            </Box>

        </BaseApp>
    )
}

export default Customers;