import { Avatar, Box, Button, Grid, TextField, Typography, Link } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";
import BaseAuth from "../base";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Copyright from "../../../components/copyright";
import Googlebutton from "../../../components/core/buttons/Googlebutton";

const Signup = () => {
    const navigate = useNavigate();

    const validationSchema = yup.object({
        first_name: yup
            .string()
            .min(1, 'First name is required')
            .required('First Name is required'),
        last_name: yup
            .string()
            .min(1, 'Last name is required')
            .required('Last Name is required'),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleSubmit({ email: values.email, password: values.password });
        },
    });

    const handleSubmit = (values) => {
        alert(JSON.stringify(values, null, 2));
    };


    return (
        <BaseAuth>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Googlebutton text="sign up with google"/>
            <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"firstName"}
                    label={"First Name"}
                    name={"first_name"}
                    autoComplete={"First Name"}
                    autoFocus={true}
                    sx={{ background: 'white' }}
                    error={formik.touched.first_name && Boolean(formik.errors.first_name)}
                    helperText={formik.touched.first_name && formik.errors.first_name}
                    value={formik.values.first_name}
                    onChange={formik.handleChange}
                />

                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"lastName"}
                    label={"Last Name"}
                    name={"last_name"}
                    autoComplete={"Last Name"}
                    autoFocus={true}
                    sx={{ background: 'white' }}
                    error={formik.touched.last_name && Boolean(formik.errors.last_name)}
                    helperText={formik.touched.last_name && formik.errors.last_name}
                    value={formik.values.last_name}
                    onChange={formik.handleChange}
                />
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
                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"password"}
                    label={"Password"}
                    name={"password"}
                    autoComplete={"Password"}
                    autoFocus={true}
                    type="password"
                    sx={{ background: 'white' }}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign Up
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link onClick={() => navigate("/forgot-password")} sx={{ cursor: 'pointer' }} variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link variant="body2" onClick={() => navigate("/login")} sx={{ cursor: 'pointer' }}>
                            {"Have an account? Log in"}
                        </Link>

                    </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
            </Box>
        </BaseAuth>
    );
}

export default Signup;