import { Avatar, Box, Button, Grid, TextField, Typography, Link } from '@mui/material';
import React from 'react';
import BaseAuth from '../base';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import Copyright from '../../../components/copyright';
import * as yup from 'yup';
import { useFormik } from 'formik';


const ForgotPassword = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required')
    });

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit({ email: values.email });
        },
    });

    const handleSubmit = (values) => {
        console.log({
            email: values.get('email'),
        });
    };

    return (
        <BaseAuth>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Account confirmation!
            </Typography>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"email"}
                    label={"Email"}
                    name={"email"}
                    autoComplete={"Email"}
                    autoFocus={true}
                    sx={{ background: 'white' }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Send Confirmation Link
                </Button>
                <Grid container>
                    <Grid item>
                        <Link variant="body2" onClick={() => navigate("/login")} sx={{ cursor: 'pointer' }}>
                            {"Already have an account? Sign In"}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </BaseAuth>
    );
};

export default ForgotPassword;