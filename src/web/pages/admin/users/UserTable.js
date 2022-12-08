import React, { useState } from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import BasicTable from "../../../components/core/table/BasicTable";
import { red } from "@mui/material/colors";
import BillingModal from "../../../components/admin/modals/BillingModal";

const UserTable = (props) => {
    const { users, setOpenUserModal, setOpenDeleteModal } = props;

    const tableHeader = ["First Name", "Last Name", "Email", "Role", "Join Date", "Designation",  "Status", "Actions"];

    const handleAction = (action) => {
        if (action === "edit") {
            setOpenUserModal(true);
        } else if (action === "delete") {
            setOpenDeleteModal(true);
        }
    }

    return (
        <BasicTable tableHeader={tableHeader}>
            {users.map((row, index) => (
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
                    <TableCell align="left" sx={{ fontSize: '13px' }}>{row.role}</TableCell>
                    <TableCell align="left" sx={{ fontSize: '13px' }}>{row.joinDate}</TableCell>
                    <TableCell align="left" sx={{ fontSize: '13px' }}>{row.designation}</TableCell>
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
    )
}

export default UserTable;