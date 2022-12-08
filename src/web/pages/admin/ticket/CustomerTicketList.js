import { Box, Grid, Paper, TableCell, TableRow, TextField, Typography } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import BasicTable from "../../../components/core/table/BasicTable";

const demoCustomerTicket = [
    {
        "ticketID": "001",
        "title": "Name Of Title",
        "customerName": "Customer Name",
        "createdBy": "Creator Name",
        "createdAt": "Created At",
        "status": "Status"
    },
    {
        "ticketID": "002",
        "title": "Name Of Title",
        "customerName": "Customer Name",
        "createdBy": "Creator Name",
        "createdAt": "Created At",
        "status": "Status"
    },
];

const CustomerTicketList = () => {
    const tableHeader = ["Ticket ID", "Title", "Customer Name", "Created By", "Created At", "Status"];



    return (
        <>
            <Paper elevation={0} sx={{ p: 1, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5" gutterBottom>
                            Customer Tickets
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
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }}>Create Ticket</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>

            <Box sx={{ display: 'flex' }}>

                <BasicTable tableHeader={tableHeader}>
                    {demoCustomerTicket.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.ticketID}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.title}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.customerName}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.createdBy}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.createdAt}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.status}</TableCell>

                        </TableRow>
                    ))}
                </BasicTable>
            </Box>

        </>
    )
}

export default CustomerTicketList;