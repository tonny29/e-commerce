import React, { useState } from "react";
import { Paper, Button, TableRow, Grid, TextField, Typography } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { red } from '@mui/material/colors';
import BasicTable from "../../../components/core/table/BasicTable";

import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import OrganisationModal from "../../../components/admin/modals/OrganisationModal";

const demoOrg = [
        {
                "name": "Abc company",
                "orgType": "Blockchain",
                "totalEmployee": 300,
                "website": "https://abc.com",
        },
        {
                "name": "BBC company",
                "orgType": "Textile",
                "totalEmployee": 500,
                "website": "https://bbc.com",
        },
];

function OrganisationList(props) {
        const tableHeader = ["Name", "Organization Type", "Total employee", "Website", "Action"];
        const [openOrganisationModal, setOpenOrganisationModal] = useState(false);
        const [openDeleteModal, setOpenDeleteModal] = useState(false);

        const handleAction = (action) => {
                if (action === "edit") {
                        setOpenOrganisationModal(true);
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
                                                        Organizations
                                                </Typography>
                                        </Grid>
                                        <Grid item xs={5} md={5} lg={5}>
                                                <div style={{ width: "70%", margin: "auto" }}>
                                                        <TextField
                                                                required
                                                                type="search"
                                                                size={"small"}
                                                                label={"Search"}
                                                                name={"email"}
                                                                autoFocus={true}
                                                                sx={{ background: "white", width: "80%", margin: "auto" }}
                                                        />
                                                </div>
                                        </Grid>
                                        <Grid item xs={4} md={4} lg={4}>
                                                <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setOpenOrganisationModal(true)}>New Organization</PrimaryButton>
                                        </Grid>
                                </Grid>
                        </Paper>
                        <BasicTable tableHeader={tableHeader}>
                                {demoOrg.map((row, index) => (
                                        <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                                                <TableCell sx={{ fontSize: "13px" }}>{row.name}</TableCell>
                                                <TableCell sx={{ fontSize: "13px" }}>{row.orgType}</TableCell>
                                                <TableCell align="left" sx={{ fontSize: "13px" }}>
                                                        {row.totalEmployee}
                                                </TableCell>
                                                <TableCell align="left" sx={{ fontSize: "13px" }}>
                                                        {row.website}
                                                </TableCell>

                                                <TableCell align="left" sx={{ fontSize: "13px" }}>
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
                        <OrganisationModal openModal={openOrganisationModal} setOpenModal={setOpenOrganisationModal} />
                </>
        );
}

export default OrganisationList;
