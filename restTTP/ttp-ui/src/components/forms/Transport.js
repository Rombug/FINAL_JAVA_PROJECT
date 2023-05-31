import {Form, Formik} from "formik";
import {Alert, Button, CircularProgress, Stack, Typography} from "@mui/material";
import  * as Yup from 'yup';
import FormTransportTextInput from "./FormTransportTextInput";
import {saveVehicle} from "../api/transportApi";
import {useState} from "react";

const transportValidationSchema = Yup.object().shape(
    {
        registrationNumber: Yup.string()
            .min(5, 'Registration number must be more then 5 symbols')
            .max(10, 'Registration number must be less then 10 symbols')
            .required('Registration number is required'),
        owner: Yup.string()
            .required('Owner is required'),
        vehicleModel: Yup.string()
            .required('Vehicle model is required'),
        registrationCountry: Yup.string()
            .required('Registration country is required'),
        carNumber: Yup.string()
            .required('Car number is required'),
        comment: Yup.string()
            .min(10, 'Comment must be more then 10 symbols')
            .max(200, 'Comment must be less then 200 symbols'),
    }
)

const Transport = () => {

    const [notification, setNotification] = useState({isVisible: false});

    const onRegisterVehicle = (values, helper) => {
        saveVehicle(values)
            .then((response) => {
                helper.resetForm();
                setNotification({isVisible: true, message: 'Vehicle registered successfully', severity: 'success'})
    })
            .catch((error) => {
                setNotification({isVisible: true, message: 'Sorry. The vehicle cannot be registered', severity: 'error'})
                console.log(error)
            })
            .finally(() => helper.setSubmitting(false));
    }

    return (
    <Formik
        initialValues={{
            registrationNumber: '',
            owner: '',
            vehicleModel: '',
            registrationCountry: '',
            carNumber: '',
            comment: ''

        }}

        onSubmit={onRegisterVehicle}

        validationSchema={transportValidationSchema}
    >

        {props => (

            <Form>
                <Stack spacing={2} direction="column">
                    {notification.isVisible && <Alert severity={notification.severity} align="center" sx={{ width: '33%', margin: '0 auto' }}>{notification.message}</Alert>}

                    <Typography variant="h6" align="center">Register empty cargo vehicle</Typography>
                    <FormTransportTextInput error={props.touched.owner && !!props.errors.owner}
                                            name="owner"
                                            label="Owner"/>

                    <FormTransportTextInput error={props.touched.vehicleModel && !!props.errors.vehicleModel}
                                            name="vehicleModel"
                                            label="Vehicle Model"/>

                    <FormTransportTextInput
                        error={props.touched.registrationCountry && !!props.errors.registrationCountry}
                        name="registrationCountry"
                        label="Registration Country"/>

                    <FormTransportTextInput
                        error={props.touched.registrationNumber && !!props.errors.registrationNumber}
                        name="registrationNumber"
                        label="Registration Number"/>

                    <FormTransportTextInput error={props.touched.carNumber && !!props.errors.carNumber}
                                            name="carNumber"
                                            label="Car Number"/>

                    <FormTransportTextInput error={props.touched.comment && !!props.errors.comment}
                                            name="comment"
                                            label="Comment"
                                            rows={4}
                                            multiline/>

                </Stack>

                <Typography sx={{textAlign: 'right', mt: 2}}>
                    {
                        props.isSubmitting ? <CircularProgress color="success"/> :
                            <Button variant="outlined" type="submit" color="success">Register</Button>
                    }
                </Typography>
            </Form>
        )}
    </Formik>

    )
}

export default Transport;