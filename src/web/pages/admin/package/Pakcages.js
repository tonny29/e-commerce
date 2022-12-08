import React, { useState } from "react";
import { Box, TableCell, TableRow, Typography, Paper, Grid, TextField, Button } from '@mui/material';
import BaseApp from "../../../../App";
import BasicTable from "../../../components/core/table/BasicTable";
import PackageModal from "../../../components/admin/modals/PackageModal";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import { red } from "@mui/material/colors";

const demoInvoices = [
    {
        "invoiceId": "INV-101",
        "billTo": "Jhon Doe",
        "email": "jhon.doe@example.com",
        "invoiceDate": "2021-01-01",
        "package": "Basic",
        "total": "8500",
        "currency": "BDT",
        "due": "8500",
        "status": "Pending",
    },
    {
        "invoiceId": "INV-102",
        "billTo": "Jhon Doe",
        "email": "jhon.doe@example.com",
        "invoiceDate": "2021-01-01",
        "package": "Basic",
        "total": "8500",
        "currency": "BDT",
        "due": "8500",
        "status": "Pending",
    },
    {
        "invoiceId": "INV-103",
        "billTo": "Jhon Doe",
        "email": "jhon.doe@example.com",
        "invoiceDate": "2021-01-01",
        "total": "8500",
        "package": "Basic",
        "currency": "BDT",
        "due": "8500",
        "status": "Pending",
    },
];

const PackageList = () => {
    const [openInvoiceModal, setOpenInvoiceModal] = useState(false);

    const tableHeader = ["Bill ID", "Bill To", "Email", "Date", "Package", "Total", "Due", "Status", "Actions"];

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
          const handleAction = (action) => {
                  if (action === "edit") {
                    setOpenInvoiceModal(true);
                  } else if (action === "delete") {
                          setOpenDeleteModal(true);
                  }
          }

    return (
        <>
            <Paper elevation={0} sx={{ p: 1, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5" gutterBottom>
                            Customer Package
                        </Typography>
                    </Grid>
                    <Grid item xs={7} md={7} lg={7}>
                        <TextField
                            required
                            type="search"
                            size={"small"}
                            label={"Search"}
                            name={"email"}
                            autoFocus={true}
                            sx={{ background: 'white', width: '80%', margin: 'auto' }}
                        />
                    </Grid>
                    <Grid item xs={2} md={2} lg={2}>
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setOpenInvoiceModal(true)}>Create Package</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>

            <Box sx={{ display: 'flex' }}>

                <BasicTable tableHeader={tableHeader}>
                    {demoInvoices.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell sx={{ fontSize: '13px' }}>
                                {row.invoiceId}
                            </TableCell>
                            <TableCell sx={{ fontSize: '13px' }}>
                                {row.billTo}
                            </TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.email}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.invoiceDate}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.package}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.total} {row.currency}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.due} {row.currency}</TableCell>
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

                <PackageModal openModal={openInvoiceModal} setOpenModal={setOpenInvoiceModal} />
            </Box>

        </>
    )
}

export default PackageList;