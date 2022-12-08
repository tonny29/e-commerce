import React, { useState } from "react";
import { Autocomplete, Grid, TextField, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Checkbox, Paper, Button, Avatar } from "@mui/material";
import BigModal from "../../core/modals/BigModal";
import { CancelButton, PrimaryButton } from "../../core/buttons/AppButtons";
import FileUpload from "react-material-file-upload";
import { Box } from "@mui/system";


const UserFormModal = (props) => {
        const [files, setFiles] = useState([]);

        const handleImage = () => {
                setFiles([])
        };
        const { openModal, setOpenModal } = props;
        const label = { inputProps: { "aria-label": "Switch demo" } };

        const closeModal = () => {
                setOpenModal(false);
        };
        function createData(role) {
                return { role };
        }
        const rows = [createData("Create Single User"), createData("Update Single User"), createData("Delete Single User")];

        const getDesignations = () => {
                return ["Manager", "Developer", "Tester"];
        }
        const getStatus = () => {
                return ["Active", "Archive", "Banned"];
        }

        return (
                <BigModal open={openModal} setOpen={setOpenModal}>
                        <Typography variant="h5" gutterBottom>
                                New User
                        </Typography>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                                <Grid item md={8} lg={8} xs={8}>
                                        <Grid container spacing={2}>
                                                <Grid item md={6} lg={6} xs={6}>
                                                        <TextField margin={"normal"} required fullWidth size={"small"} label={"First Name"} name={"firstName"} autoFocus={true} sx={{ mt: 0, background: "white" }} />
                                                </Grid>
                                                <Grid item md={6} lg={6} xs={6}>
                                                        <TextField margin={"normal"} required fullWidth size={"small"} label={"Last Name"} name={"lastName"} autoFocus={true} sx={{ mt: 0, background: "white" }} />
                                                </Grid>
                                                <Grid item md={12} lg={12} xs={6}>
                                                        <TextField margin={"normal"} required fullWidth size={"small"} label={"Email"} name={"email"} autoFocus={true} sx={{ mt: 0, background: "white" }} />
                                                </Grid>
                                                <Grid item md={6} lg={6} xs={6}>
                                                        <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={getDesignations()}
                                                                renderInput={(params) => <TextField
                                                                        required
                                                                        {...params}
                                                                        label="Designation"
                                                                        fullWidth

                                                                />}
                                                                size='small'
                                                                fullWidth
                                                                sx={{ mt: 0 }}
                                                        />
                                                </Grid>
                                                <Grid item md={6} lg={6} xs={6}>
                                                        <Autocomplete
                                                                disablePortal
                                                                id="combo-box-demo"
                                                                options={getStatus()}
                                                                renderInput={(params) => <TextField
                                                                        required
                                                                        {...params}
                                                                        label="Status"
                                                                        fullWidth

                                                                />}
                                                                size='small'
                                                                fullWidth
                                                                sx={{ mt: 0 }}
                                                        />
                                                </Grid>
                                        </Grid>



                                </Grid>
                                <Grid item md={4} lg={4} xs={4} sx={{}}>
                                        {files?.length ? (
                                                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: '8px', justifyContent: "center", border: '1px' }}>
                                                        <Avatar sx={{ width: 120, height: 120 }} src={URL.createObjectURL(files[0])} alt="" />
                                                        <Button onClick={handleImage} variant="contained" color="error" size="small">remove</Button>
                                                </Box>
                                        ) : (
                                                <FileUpload title="Drag & drop or click on Upload" value={files} onChange={setFiles} sx={{ maxHeight: "100%" }} />
                                        )}
                                </Grid>

                                <Grid item md={12} lg={12} xs={12}>
                                        <Typography variant="h6" gutterBottom sx={{ mt: 5, fontWeight: "bold", fontSize: "14px" }}>
                                                User Permissions
                                        </Typography>
                                </Grid>

                                <Grid item md={3} lg={3} xs={3} spacing={2}>
                                        <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                        <TableBody>
                                                                {rows.map((row) => (
                                                                        <TableRow key={row.role} sx={{ "&:last-child td, &:last-child th": { margin: "" } }}>
                                                                                <TableCell component="th" scope="row" sx={{ border: "1px solid #D3D3D3", margin: 0, padding: 0 }}>
                                                                                        <Checkbox {...label} /> {row.role}
                                                                                </TableCell>
                                                                        </TableRow>
                                                                ))}
                                                        </TableBody>
                                                </Table>
                                        </TableContainer>
                                </Grid>
                                <Grid item md={3} lg={3} xs={3} spacing={2}>
                                        <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                        <TableBody>
                                                                {rows.map((row) => (
                                                                        <TableRow key={row.role} sx={{ "&:last-child td, &:last-child th": { margin: "" } }}>
                                                                                <TableCell component="th" scope="row" sx={{ border: "1px solid #D3D3D3", margin: 0, padding: 0 }}>
                                                                                        <Checkbox {...label} /> {row.role}
                                                                                </TableCell>
                                                                        </TableRow>
                                                                ))}
                                                        </TableBody>
                                                </Table>
                                        </TableContainer>
                                </Grid>
                                <Grid item md={3} lg={3} xs={3} spacing={2}>
                                        <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                        <TableBody>
                                                                {rows.map((row) => (
                                                                        <TableRow key={row.role} sx={{ "&:last-child td, &:last-child th": { margin: "" } }}>
                                                                                <TableCell component="th" scope="row" sx={{ border: "1px solid #D3D3D3", margin: 0, padding: 0 }}>
                                                                                        <Checkbox {...label} /> {row.role}
                                                                                </TableCell>
                                                                        </TableRow>
                                                                ))}
                                                        </TableBody>
                                                </Table>
                                        </TableContainer>
                                </Grid>
                                <Grid item md={3} lg={3} xs={3} spacing={2}>
                                        <TableContainer component={Paper}>
                                                <Table aria-label="simple table">
                                                        <TableBody>
                                                                {rows.map((row) => (
                                                                        <TableRow key={row.role} sx={{ "&:last-child td, &:last-child th": { margin: "" } }}>
                                                                                <TableCell component="th" scope="row" sx={{ border: "1px solid #D3D3D3", margin: 0, padding: 0 }}>
                                                                                        <Checkbox {...label} /> {row.role}
                                                                                </TableCell>
                                                                        </TableRow>
                                                                ))}
                                                        </TableBody>
                                                </Table>
                                        </TableContainer>
                                </Grid>

                                <Grid item md={12} lg={12} xs={12}>
                                        <PrimaryButton sx={{ mt: 2 }}>Create User</PrimaryButton>
                                        <CancelButton sx={{ mt: 2, ml: 2 }} onClick={() => closeModal()}>
                                                Cancel
                                        </CancelButton>
                                </Grid>
                        </Grid>
                </BigModal>
        );
};

export default UserFormModal;
