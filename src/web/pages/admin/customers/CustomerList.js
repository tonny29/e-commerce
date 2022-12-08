import React, { useState } from "react";
import { Paper, Button, TableRow, Grid, TextField, Typography } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import BasicTable from "../../../components/core/table/BasicTable";
import CustomerModal from "../../../components/admin/modals/CustomerModal";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import { red } from "@mui/material/colors";

// TODO - get customers from the backend and remove this when use API
const demoCustomers = [
    {
        "firstName": "John",
        "lastName": "Doe",
        "email": "jhon.doe@example.com",
        "phone": "1234567890",
        "organisation": "ABA Company",
        "joinDate": "2021-01-01",
        "currentPackage": "Gold",
        "status": "Active",
    },
    {
        "firstName": "Md Nazmul",
        "lastName": "Hasan",
        "email": "nazmul.hasan@example.com",
        "phone": "+881234567890",
        "organisation": "GoUpp Ltd",
        "joinDate": "2021-01-01",
        "currentPackage": "Free Trial",
        "status": "Active",
    }
];


const CustomerList = () => {
    const tableHeader = ["First Name", "Last Name", "Email", "Phone", "Organisation", "Join Date", "Package", "Status", "Actions"];
    const [openCustomerModal, setOpenCustomerModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const handleAction = (action) => {
        if (action === "edit") {
            setOpenCustomerModal(true);
        } else if (action === "delete") {
            setOpenDeleteModal(true);
        }
    }

    return (
        <>
            <Paper elevation={0} sx={{ p: 1, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h6" gutterBottom>
                            Customers
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <div style={{ width: '70%', margin: 'auto' }}>
                            <TextField
                                required
                                type="search"
                                size={"small"}
                                label={"Search"}
                                name={"email"}
                                autoFocus={true}
                                sx={{ background: 'white', width: '80%', margin: 'auto' }}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={3} md={3} lg={3}>
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setOpenCustomerModal(true)}>New Customer</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>
            <BasicTable tableHeader={tableHeader}>
                {demoCustomers.map((row, index) => (
                    <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell sx={{ fontSize: '13px' }}>
                            {row.firstName}
                        </TableCell>
                        <TableCell sx={{ fontSize: '13px' }}>
                            {row.lastName}
                        </TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.email}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.phone}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.organisation}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.joinDate}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.currentPackage}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>{row.status}</TableCell>
                        <TableCell align="left" sx={{ fontSize: '13px' }}>
                            <Typography variant="subtitle2" gutterBottom>
                                <Typography onClick={() => handleAction('edit')} sx={{ fontWeight: 'bold', color: '#322740', cursor: 'pointer' }} variant="span" gutterBottom>
                                    Edit
                                </Typography>
                                <Typography sx={{ ml: 1, mr: 1 }} variant="span" gutterBottom>
                                    |
                                </Typography>
                                <Typography onClick={() => handleAction('delete')} sx={{ fontWeight: 'bold', color: red[800], cursor: 'pointer' }} variant="span" gutterBottom>
                                    Delete
                                </Typography>
                            </Typography>
                        </TableCell>
                    </TableRow>
                ))}
            </BasicTable>

            <CustomerModal openModal={openCustomerModal} setOpenModal={setOpenCustomerModal} />

        </>
    )
}

export default CustomerList;