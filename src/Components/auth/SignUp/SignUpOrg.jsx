import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { IconButton, InputAdornment, ThemeProvider, Snackbar, Alert } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";
import { signUpOrg } from "../../../utils/api/organization";
import useAuth from "../../../utils/providers/AuthProvider";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export default function SignUpOrg() {

    //Form validation regexes
    const passwordRegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const contactRegExp = (/^[0-9]{10}$/i);

    const initialValues = {
        regNo: "",
        name: "",
        email: "",
        address: "",
        contactNo: "",
        password: "",
        confirmPassword: ""
    }

    //Form validation schemas
    const validationSchema = Yup.object().shape({
        regNo: Yup.string().min(4, "Minimum characters should be 4").required("Required"),
        name: Yup.string().min(3, "Minimum characters should be 3").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        address: Yup.string().min(3, "Minimum characters should be 3").required("Required"),
        contactNo: Yup.string().matches(contactRegExp, "Enter valid contact No").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8")
            .matches(passwordRegExp, "Password must have one upper, lower case, number").required('Required'),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matches").required('Required')
    })

    const navigate = useNavigate();
    
    const signUser = useAuth();
    const [openSB, setOpenSB] = React.useState(false);
    const [isSbError, setIsSbError] = React.useState(false);
    const [sbMsg, setSbMsg] = React.useState("");

    const handleSBOpen = () => {
        setOpenSB(true);
    };

    const handleSBClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpenSB(false);
    };

    const onSubmit = async (data) => {

        let response = await signUpOrg(data);
        
        if (response.status === 'ok') {

            signUser(response);

            navigate('/usero', { replace: true });
        }
        else {

            console.log(response.error);

            setIsSbError(true);
            setSbMsg(response.error);
            handleSBOpen();
        }
    };

    //variables and functions for show password and hide password
    const [values, setValues] = React.useState({
        showPass: false,
        showConfirmPass: false,
    });
    const handlePassVisibilty = () => {
        setValues({
            ...values,
            showPass: !values.showPass,
        });
    };
    const handleConfirmPassVisibilty = () => {
        setValues({
            ...values,
            showConfirmPass: !values.showConfirmPass,
        });
    };

    return (
        <ThemeProvider theme={darkTheme}>
            <Box
                sx={{
                    my: 6,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    backgroundColor: "#282835",
                    borderRadius: 5,
                    p: 5,
                }}
            >
                <Typography
                    component="h1"
                    variant="h4"
                    align='center'
                    sx={{
                        marginBottom: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#ffffff'
                    }}
                >
                    ORGANIZATION SIGNUP
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                        {(props) => (
                            <Form noValidate>
                                <Field as={TextField}
                                    name='regNo'
                                    margin="normal"
                                    variant="outlined"
                                    id="regNo"
                                    label="Registration No"
                                    type="text"
                                    fullWidth
                                    autoComplete='off'
                                    size="small"
                                    required
                                    error={props.errors.regNo && props.touched.regNo}
                                    helperText={<ErrorMessage name='regNo' />}
                                />
                                <Field as={TextField}
                                    name='name'
                                    margin="normal"
                                    variant="outlined"
                                    id="name"
                                    label="Name"
                                    type="text"
                                    fullWidth
                                    autoComplete='off'
                                    size="small"
                                    required
                                    error={props.errors.name && props.touched.name}
                                    helperText={<ErrorMessage name='name' />}
                                />
                                <Field as={TextField}
                                    name='email'
                                    margin="normal"
                                    variant="outlined"
                                    id="email"
                                    label="Email"
                                    type="text"
                                    fullWidth
                                    autoComplete='off'
                                    size="small"
                                    required
                                    error={props.errors.email && props.touched.email}
                                    helperText={<ErrorMessage name='email' />}
                                />
                                <Field as={TextField}
                                    name='address'
                                    margin="normal"
                                    variant="outlined"
                                    id="address"
                                    label="Address"
                                    type="text"
                                    fullWidth
                                    autoComplete='off'
                                    size="small"
                                    required
                                    error={props.errors.address && props.touched.address}
                                    helperText={<ErrorMessage name='address' />}
                                />
                                <Field as={TextField}
                                    name='contactNo'
                                    margin="normal"
                                    variant="outlined"
                                    id="contactNo"
                                    label="Contact Number"
                                    type="text"
                                    fullWidth
                                    autoComplete='off'
                                    size="small"
                                    required
                                    error={props.errors.contactNo && props.touched.contactNo}
                                    helperText={<ErrorMessage name='contactNo' />}
                                />
                                <Field as={TextField}
                                    name='password'
                                    margin="normal"
                                    type={values.showPass ? "text" : "password"}
                                    fullWidth
                                    label="Password"
                                    variant="outlined"
                                    id="password"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handlePassVisibilty}
                                                    aria-label="toggle password"
                                                    edge="end"
                                                >
                                                    {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    size="small"
                                    required
                                    error={props.errors.password && props.touched.password}
                                    helperText={<ErrorMessage name='password' />}
                                />
                                <Field as={TextField}
                                    name='confirmPassword'
                                    margin="normal"
                                    type={values.showConfirmPass ? "text" : "password"}
                                    fullWidth
                                    label="Confirm Password"
                                    variant="outlined"
                                    id="confirmPassword"
                                    inputProps={{ minLength: 8 }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleConfirmPassVisibilty}
                                                    aria-label="toggle password"
                                                    edge="end"
                                                >
                                                    {values.showConfirmPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                    size="small"
                                    required
                                    error={props.errors.confirmPassword && props.touched.confirmPassword}
                                    helperText={<ErrorMessage name='confirmPassword' />}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2, fontWeight: 700 }}
                                >
                                    SUBMIT
                                </Button>
                            </Form>
                        )}
                    </Formik>
                    <Grid>
                        <Grid item align="right">
                            <Link to={"/"} className="mylink" href="#" variant="body2">
                                <Typography color="primary">
                                    Already have an account? Log In
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography
                        sx={{ mt: 5 }}
                        color="text.secondary"
                        variant="subtitle2"
                        align="center"
                    >
                        Copyright © 2022 Fast Fueler
                    </Typography>
                </Box>
                <Snackbar open={openSB} autoHideDuration={6000} onClose={handleSBClose}>
                    <Alert
                        onClose={handleSBClose}
                        severity={isSbError ? "error" : "success"}
                        sx={{ width: "100%" }}
                    >
                        {sbMsg}
                    </Alert>
                </Snackbar>
            </Box>
        </ThemeProvider>
    );
}
