import { Box, Grid, Paper, TableCell, TableRow, TextField, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import FeatureModal from "../../../components/admin/modals/FeatureModal";
// import BaseApp from "../../../../App";
// import PackageModal from "../../../components/admin/modals/PackageModal";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";
import BasicTable from "../../../components/core/table/BasicTable";


const demoFeatures = [
    {
        "id": "123",
        "name": "Test Feature",
        "visibility": "Public",
        "status": "Active",
        "createdBy": "Nazmul Hasan",
    },
    {
        "id": "223",
        "name": "Test Feature",
        "visibility": "Public",
        "status": "Active",
        "createdBy": "Nazmul Hasan",
    },
    {
        "id": "323",
        "name": "Test Feature",
        "visibility": "Public",
        "status": "Active",
        "createdBy": "Nazmul Hasan",
    },

];

const FeatureList = () => {
    const [openFeatureModal, setOpenFeatureModal] = useState(false);

    const tableHeader = ["ID", "Name", "Visibility", "Status", "Created By", "Action"]

    const [openDeleteModal, setOpenDeleteModal] = useState(false);
  
          const handleAction = (action) => {
                  if (action === "edit") {
                    setOpenFeatureModal(true);
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
                            Package Features
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
                        <PrimaryButton variant="contained" sx={{ float: 'right', fontSize: '12px' }} onClick={() => setOpenFeatureModal(true)}>Create Features</PrimaryButton>
                    </Grid>
                </Grid>

            </Paper>

            <Box sx={{ display: 'flex' }}>

                <BasicTable tableHeader={tableHeader}>
                    {demoFeatures.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.id}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.name}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.visibility}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.status}</TableCell>
                            <TableCell align="left" sx={{ fontSize: '13px' }}>{row.createdBy}</TableCell>
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

                <FeatureModal openModal={openFeatureModal} setOpenModal={setOpenFeatureModal} />
            </Box>
        </>
    )
}

export default FeatureList;