import {Form, Formik} from "formik";
import {Button, CircularProgress, Stack, Typography} from "@mui/material";
import  * as Yup from 'yup';
import FormTransportTextInput from "./FormTransportTextInput";

const transportValidationSchema = Yup.object().shape(
    {
        registrationNumber: Yup.string()
            .min(5, 'Registration number must be more then 5 symbols')
            .max(10, 'Registration number must be less then 10 symbols')
            .required('Registration number is required'),
        owner: Yup.string()
            .required('Owner is required'),
        registrationCountry: Yup.string()
            .required('Registration country is required'),
        carNumber: Yup.string()
            .required('Car number is required'),
        comment: Yup.string()
            .min(10, 'Comment must be more then 10 symbols')
            .max(200, 'Comment must be less then 200 symbols'),
    }
)

const Transport = () => (
    
    <Formik
        initialValues={{
            registrationNumber: '',
            owner: '',
            registrationCountry: '',
            carNumber: '',
            comment: ''

        }}
        onSubmit={(values, helpers) =>{
            setTimeout(()=> helpers.setSubmitting(false), 3000);
        }}

        validationSchema={transportValidationSchema}
    >

        {props => (

                    <Form>
                        <Stack spacing={2} direction="column">
                            <Typography variant="h6" align="center">Register empty cargo vehicle</Typography>
                            <FormTransportTextInput error={props.touched.owner && !!props.errors.owner}
                                            name="owner"
                                            label="Owner"/>

                            <FormTransportTextInput error={props.touched.registrationCountry && !!props.errors.registrationCountry}
                                            name="registrationCountry"
                                            label="Registration Country"/>

                            <FormTransportTextInput error={props.touched.registrationNumber && !!props.errors.registrationNumber}
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

export default Transport;