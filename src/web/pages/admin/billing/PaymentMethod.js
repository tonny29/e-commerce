import { Box, Grid, Paper, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import { PrimaryButton } from '../../../components/core/buttons/AppButtons';
import PaymentMethodModal from '../../../components/admin/modals/PaymentMethodModal';
import BasicTable from '../../../components/core/table/BasicTable';


const demoPayMethod = [
    {
        "id": "123",
        "name": "Bank Transfer",
        "status": "Active",
    },
    {
        "id": "124",
        "name": "Cash",
        "status": "Active",
    },

];
const PaymentMethod = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [openPaymentMethodModal, setPaymentMethodModal] = useState(false);

    const handleAction = (action) => {
        if (action === "edit") {
            setPaymentMethodModal(true);
        } else if (action === "delete") {
            setOpenDeleteModal(true);
        }
    }


    const tableHeader = ["ID", "Name", "Status", "Action"]
    return (
        <div>
            <Paper elevation={0} sx={{ p: 1, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h5" gutterBottom>Payment Method</Typography>
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
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setPaymentMethodModal(true)}>Payment Method</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>

            <Box sx={{ display: 'flex' }}>

                <BasicTable tableHeader={tableHeader}>
                    {demoPayMethod.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.id}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.name}</TableCell>
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
            </Box>
            <PaymentMethodModal openModal={openPaymentMethodModal} setOpenModal={setPaymentMethodModal} />
        </div>
    );
};

export default PaymentMethod;