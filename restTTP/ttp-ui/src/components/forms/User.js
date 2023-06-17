import {Form, Formik} from "formik";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import * as Yup from 'yup';
import FormTextInput from "./FormTransportTextInput";
import {createUser} from "../api/user";
import {useTranslation} from "react-i18next";
import {useState} from "react";

const userValidationSchema = Yup.object().shape(
    {
        username: Yup.string()
            .min(5, 'Name must be longer than 5')
            .max(10, 'Name must be shorter than 10')
            .required('Username is required'),
        name: Yup.string()
            .required("Name is required"),
        surname: Yup.string()
            .min(5, 'Surname must be longer than 5')
            .max(10, 'Surname must be shorter than 10')
            .required('Surname is required'),
        email: Yup.string()
            .email()
            .required('Email is required'),
        phone: Yup.string()
            .required("Phone number is required"),
        password: Yup.string()
            .min(5, 'Password must contain at least 5 symbols...')
            .required('Password is required'),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Password is required')
    }
)

const User = () => {

    const {t} = useTranslation('user');
    const [error, setError] = useState();
    const [notification, setNotification] = useState({isVisible: false});
    const onCreateUser = (values, helpers) => {
        createUser(values)
            .then((data) => {
                helpers.resetForm();
                setNotification({isVisible: true, message: 'User registered successfully', severity: 'success'})
            })
            .catch(({response}) => setError(response.data.reason))
            .finally(() => helpers.setSubmitting(false));

    }

    return(
    <Formik
        initialValues={{
            username: '',
            name: '',
            surname: '',
            email: '',
            phone: '',
            password: '',
            repeatPassword: ''
        }}

        onSubmit={ onCreateUser }
        validationSchema={userValidationSchema}
    >
        {props => (
            <Form>
                {error && <Alert severity="error">{t(error)}</Alert> }
                <Stack spacing={2} direction="column">
                    {notification.isVisible && <Alert severity={notification.severity}
                                                      align="center"
                                                      sx={{ width: '33%', margin: '0 auto' }}>{notification.message}</Alert>}
                    <Typography variant="h6" align="center">Create new user</Typography>
                    <FormTextInput error={props.touched.username && !!props.errors.username}
                                   name="username"
                                   label="Username"/>
                    <FormTextInput error={props.touched.name && !!props.errors.name}
                                   name="name"
                                   label="First name"/>
                    <FormTextInput error={props.touched.surname && !!props.errors.surname}
                                   name="surname"
                                   label="Surname"/>
                    <FormTextInput error={props.touched.email && !!props.errors.email}
                                   name="email"
                                   label="email"/>
                    <FormTextInput error={props.touched.phone && !!props.errors.phone}
                                   name="phone"
                                   label="Phone number"/>
                    <FormTextInput error={props.touched.password && !!props.errors.password}
                                   name="password"
                                   label="Password"
                                   type="password"/>
                    <FormTextInput error={props.touched.repeatPassword && !!props.errors.repeatPassword}
                                   name="repeatPassword"
                                   label="Repeat password"
                                   type="password"/>
                </Stack>
                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress color="success"/> :
                            <Button variant="outlined" type="submit" color="success">Create</Button>
                    }
                </Typography>
            </Form>
        )}
    </Formik>
    )
}

export default User;