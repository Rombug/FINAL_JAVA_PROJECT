import {FormControl, MenuItem, Select} from "@mui/material";
import {useTranslation} from "react-i18next";
import { green } from '@mui/material/colors';

const LanguageSwitcher = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (event) => i18n.changeLanguage(event.target.value);
    return(


    <FormControl size="small">
            <Select
                value={i18n.language}
                onChange={changeLanguage} variant="outlined" sx={{ my: 1, mx: 1,  fontSize: '0.850rem',
                    '& .MuiSelect-select.MuiSelect-select': {
                        color: green[900]} }}>
                <MenuItem value='en' selected={i18n.language === 'en'} sx={{ my: 0.5, mx: 0.5, fontSize: '0.850rem' }}>EN</MenuItem>
                <MenuItem value='lt' selected={i18n.language === 'lt'} sx={{ my: 0.5, mx: 0.5, fontSize: '0.850rem' }}>LT</MenuItem>
            </Select>
        </FormControl>

    );
}

export default LanguageSwitcher