import React, { useState } from "react";
import { Typography, Paper, Grid, TextField, Button } from '@mui/material';
import UserTable from "./UserTable";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import UserFormModal from "../../../components/admin/modals/UserFormModal";


const demoUsers = [
    {
        "firstName": "James",
        "lastName": "Bond",
        "email": "jhon.doe@example.com",
        "role": "Admin",
        "joinDate": "2021-01-01",
        "designation":"Manager",
        "status": "Active",
    },
    {
        "firstName": "James",
        "lastName": "Bond",
        "email": "jhon.doe@example.com",
        "role": "Admin",
        "joinDate": "2021-01-01",
        "designation":"Developer",
        "status": "Active",
    },
];

const UserListTab = (props) => {
    const [openUserModal, setOpenUserModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    return (
        <>
            <Paper elevation={0} sx={{ p: 1, mb: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} md={3} lg={3}>
                        <Typography variant="h6" gutterBottom>
                            Admin Users
                        </Typography>
                    </Grid>
                    <Grid item xs={7} md={7} lg={7}>
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
                    <Grid item xs={2} md={2} lg={2}>
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setOpenUserModal(true)}>New User</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>
            <UserTable users={demoUsers} setOpenUserModal={setOpenUserModal} setOpenDeleteModal={setOpenDeleteModal} />
            <UserFormModal openModal={openUserModal} setOpenModal={setOpenUserModal} />
        </>
    )
}

export default UserListTab;