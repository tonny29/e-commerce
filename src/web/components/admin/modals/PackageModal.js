import React from "react";
import { FormGroup, FormControlLabel, Box, Button, Checkbox, Grid, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from '@mui/material';
import BigModal from "../../core/modals/BigModal";
import { useFormik } from "formik";
import * as yup from "yup";
import { CancelButton } from "../../core/buttons/AppButtons";



const PackageModal = (props) => {
    const { openModal, setOpenModal } = props;
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    function createData(name) {
        return { name };
    }
    const rows = [
        createData('Package Features Name For The Customers 1'),
        createData('Package Features Name For The Customers 2'),

    ];
    const rowsTwo = [
        createData('Package Features Name For The Customers 3'),
        createData('Package Features Name For The Customers 4'),


    ];

    const closeModal = () => {
        setOpenModal(false);
    }


    const validationSchema = yup.object({
        packageName: yup
            .string()
            .min(1, 'package name is required')
            .required('package name is required'),
        packageSubtitle: yup
            .string()
            .min(1, 'package subtitle is required')
            .required('package subtitle is required'),
        packageMonthlyPrice: yup
            .string()
            .min(0, 'package monthly price is required')
            .required('package monthly price is required'),
        packageYearlyPrice: yup
            .string()
            .min(0, 'package yearly price is required')
            .required('package yearly price is required'),

    });

    const formik = useFormik({
        initialValues: {
            packageName: "",
            packageSubtitle: "",
            packageMonthlyPrice: "",
            packageYearlyPrice: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit({ packageName: values.packageName, packageSubtitle: values.packageSubtitle, packageMonthlyPrice: values.packageMonthlyPrice, packageYearlyPrice: values.packageYearlyPrice });
        },
    });

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };


    return (
        <BigModal open={openModal} setOpen={setOpenModal}>

            <Typography variant="h5" gutterBottom>
                New Package
            </Typography>
            <Grid spacing={2} sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                <Grid item md={6} lg={6} xs={6}>
                    <Typography variant="h6" gutterBottom>
                        Package Information
                    </Typography>
                </Grid>
            </Grid>

            <Box noValidate component="form" onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item md={6} lg={6} xs={6}>
                        <TextField
                            // margin={"normal"}
                            required
                            fullWidth
                            size={"small"}
                            label={"Package name"}
                            name={"packageName"}
                            autoFocus={true}
                            sx={{ background: 'white' }}
                            error={formik.touched.packageName && Boolean(formik.errors.packageName)}
                            helperText={formik.touched.packageName && formik.errors.packageName}
                            value={formik.values.packageName}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item md={6} lg={6} xs={6}>
                        <TextField
                            // margin={"normal"}
                            required
                            fullWidth
                            size={"small"}
                            label={"Package subtitle"}
                            name={"packageSubtitle"}
                            autoFocus={true}
                            sx={{ background: 'white' }}
                            error={formik.touched.packageSubtitle && Boolean(formik.errors.packageSubtitle)}
                            helperText={formik.touched.packageSubtitle && formik.errors.packageSubtitle}
                            value={formik.values.packageSubtitle}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item md={6} lg={6} xs={6}>
                        <TextField
                            // margin={"normal"}
                            required
                            fullWidth
                            size={"small"}
                            label={"Package monthly price"}
                            name={"packageMonthlyPrice"}
                            autoFocus={true}
                            sx={{ background: 'white' }}
                            error={formik.touched.packageMonthlyPrice && Boolean(formik.errors.packageMonthlyPrice)}
                            helperText={formik.touched.packageMonthlyPrice && formik.errors.packageMonthlyPrice}
                            value={formik.values.packageMonthlyPrice}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item md={6} lg={6} xs={6}>
                        <TextField
                            // margin={"normal"}
                            required
                            fullWidth
                            size={"small"}
                            label={"Package yearly price"}
                            name={"packageYearlyPrice"}
                            autoFocus={true}
                            sx={{ background: 'white' }}
                            error={formik.touched.packageYearlyPrice && Boolean(formik.errors.packageYearlyPrice)}
                            helperText={formik.touched.packageYearlyPrice && formik.errors.packageYearlyPrice}
                            value={formik.values.packageYearlyPrice}
                            onChange={formik.handleChange}
                        />
                    </Grid>
                </Grid>

                <Box sx={{ mt: 2 }}>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Private Package" />
                    </FormGroup>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 3, fontWeight: 'bold', fontSize: '15px' }}>
                    Package Features
                </Typography>


                <Grid container spacing={2}>
                    <Grid item md={6} lg={6} xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}

                                            sx={{ '&:last-child td, &:last-child th': { border: '1px solid #D3D3D3', margin: 0 } }}>
                                            <TableCell component="th" scope="row" sx={{ border: '1px solid #D3D3D3', margin: 0, padding: 0 }}>
                                                <Checkbox {...label} /> {row.name}
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={6} lg={6} xs={12}>
                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableBody>
                                    {rowsTwo.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: '1px solid #D3D3D3', margin: 0 } }}>
                                            <TableCell component="th" scope="row" sx={{ border: '1px solid #D3D3D3', margin: 0, padding: 0 }}>
                                                <Checkbox {...label} /> {row.name}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>

                <Grid item md={12} lg={12} xs={12} sx={{ mt: 2 }}>
                    <Button sx={{ mt: 2 }} variant="contained" type="submit" onSubmit={formik.handleSubmit}>Create Package</Button>
                    <CancelButton sx={{ ml: 2, mt: 2 }} variant="contained" onClick={() => closeModal()}>Close</CancelButton>
                </Grid>
            </Box>

        </BigModal>
    )
}

export default PackageModal;