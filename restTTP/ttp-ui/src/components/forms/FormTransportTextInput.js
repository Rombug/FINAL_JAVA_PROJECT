import {FormControl, FormHelperText, TextField} from "@mui/material";
import {ErrorMessage, Field} from "formik";

const FormTransportTextInput = ({error, name, label = 'Some label'}) => (
    <FormControl error={error}>
        <Field id={name}
               name={name}
               as={TextField}
               label={label}
               variant="outlined"
               error={error}/>
        <ErrorMessage name={name}
                      component={FormHelperText}/>
    </FormControl>

);

export default FormTransportTextInput;