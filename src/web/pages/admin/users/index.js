import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BaseApp from "../../../../App";
import BillingModal from "../../../components/admin/modals/BillingModal";
import UserTable from "./UserTable";
import UserListTab from "./UserList";
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


const AdminUsers = () => {
    const [openInvoiceModal, setOpenInvoiceModal] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BaseApp>

            <Box sx={{ width: '100%' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Users" {...a11yProps(0)} />
                    <Tab label="Invite User" {...a11yProps(1)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <UserListTab />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Invite />
                </TabPanel>


            </Box>

        </BaseApp>
    )
}

export default AdminUsers;