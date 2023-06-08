import {Form, Formik} from "formik";
import * as Yup from 'yup';
import {Avatar, Box, Button, Checkbox, CircularProgress, Container, createTheme, CssBaseline, FormControlLabel, Typography} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormTransportTextInput from "./FormTransportTextInput";

const loginValidationSchema = Yup.object().shape(
    {
        username: Yup.string().required(),
        password: Yup.string().required()
    }
);

const defaultTheme = createTheme();

const Login = () => {

    const onLogin = (values, helpers) => {
        console.log(values);
    }

    return (

    <Formik
        initialValues={ {username: '', password: ''} }

        onSubmit={ onLogin }

        validationSchema={ loginValidationSchema }>

        { props => (
            <ThemeProvider theme={ defaultTheme }>
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <Box
                        sx={ {
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        } }
                    >
                        <Avatar sx={ {m: 1, bgcolor: 'secondary.main'} }>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box noValidate sx={ {mt: 1} }>

                            <Form>
                                <FormTransportTextInput
                                    error={props.touched.username && !!props.errors.username}
                                    name="username"
                                    label="Username *"
                                    margin="normal"/>

                                <FormTransportTextInput
                                    error={props.touched.password && !!props.errors.password}
                                    name="password"
                                    label="Password *"
                                    type="password"
                                    margin="normal"/>

                                <FormControlLabel
                                    control={ <Checkbox value="remember" color="success"/> }
                                    label="Remember me"
                                />
                                {
                                    props.isSubmitting ?
                                        <Box
                                            sx={ {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                mt: 3,
                                                mb: 2
                                            } }
                                        >
                                            <CircularProgress color="success" size={ 36 }/>
                                        </Box> :
                                        <Button
                                            type="submit"
                                            fullWidth
                                            color="success"
                                            variant="outlined"
                                            sx={ {mt: 3, mb: 2} }>
                                            Sign In
                                        </Button>
                                }
                            </Form>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        )
        }
    </Formik>

);
}

export default Login;