import * as React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import BaseAuth from "../base";
import Copyright from "../../../components/copyright";
import Googlebutton from "../../../components/core/buttons/Googlebutton";
import { userLogin } from "../../../../actions/userActions";


const Login = () => {
  const userState = useSelector((state) => state.user);
  const { loading, userInfo, userToken, error } = userState;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // redirect authenticated user to profile screen
  React.useEffect(() => {
    if (userToken) {
      //navigate('/');
      console.log(userInfo);
      console.log(userToken);
      if (userInfo.role === "admin") {
        navigate('/admin/dashboard');
      } else if (userInfo.role === "customer") {
        navigate('/customer/dashboard');
      }
    }
  }, [navigate, userToken])

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit({ email: values.email, password: values.password });
    },
  });

  const handleSubmit = (values) => {
    //alert(JSON.stringify(values, null, 2));
    dispatch(userLogin(values));
    window.location.reload();
  };

  return (
    <BaseAuth>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Log in
      </Typography>
      <Googlebutton text="Login with Google" />
      <Box
        component="form"
        noValidate
        onSubmit={formik.handleSubmit}
        sx={{ mt: 1 }}
      >
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
          sx={{ background: "white" }}
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
          sx={{ background: "white" }}
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
          Log In
        </Button>
        <Grid container spacing={2}>
          <Grid item xs>
            <Link
              onClick={() => navigate("/forgot-password")}
              sx={{ cursor: "pointer" }}
              variant="body2"
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              variant="body2"
              onClick={() => navigate("/signup")}
              sx={{ cursor: "pointer" }}
            >
              {"New user? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </BaseAuth>
  );
};

export default Login;
