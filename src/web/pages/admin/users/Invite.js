import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { PrimaryButton } from "../../../components/core/buttons/AppButtons";

const Invite = () => {
    const validationSchema = yup.object({
        email: yup
          .string()
          .email("Enter a valid email")
          .required("Email is required"),
        
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
        alert(JSON.stringify(values, null, 2));
      };
    
        return (
            <Box sx={{ mt: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: 'center' }}>
                User Invitation
            </Typography>
            <Box
                component="form"
                noValidate
                sx={{ mt: 1, width: '40%', margin: 'auto' }}
                onSubmit={formik.handleSubmit}
            >
                <TextField
                    margin={"normal"}
                    required
                    fullWidth
                    size={"small"}
                    id={"email"}
                    label={"User Email"}
                    name={"email"}
                    autoComplete={"Email"}
                    autoFocus={true}
                    sx={{ background: "white" }}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <PrimaryButton variant="contained" fullWidth sx={{ float: 'right', fontSize: '12px' }}>Send Invitation Link</PrimaryButton>
            </Box>
        </Box>
        );
};

export default Invite;
