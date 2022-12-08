import React from "react";
import { Box, Typography, Tabs, Tab } from '@mui/material';
import PropTypes from 'prop-types';
import BaseApp from "../../../../App";
import CustomerTicketList from "./CustomerTicketList";
import SystemTicketList from "./SystemTicketList";

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


const Ticket = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

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
    return (
        <BaseApp>

            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Customer Tickets" {...a11yProps(0)} />
                    <Tab label="System Ticket" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <CustomerTicketList />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SystemTicketList />
                </TabPanel>


            </Box>

        </BaseApp>
    )
}

export default Ticket;