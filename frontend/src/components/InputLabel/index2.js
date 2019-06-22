import React from 'react'

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './style.css';

export const CustomInputComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
        <>
            <TextField type={props.type || 'text'} {...field} {...props} fullWidth />
            {touched[field.name] &&
                errors[field.name] && <div className="validation-error">{errors[field.name]}</div>}
        </>
    );

export const CustomSwitchComponent = ({
    field, // { name, value, onChange, onBlur }
    form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
    ...props
}) => (
        <>
            <FormControlLabel control={<Switch value={field.value} checked={field.value} />} {...field} {...props} />
            {touched[field.name] &&
                errors[field.name] && <div className="validation-error">{errors[field.name]}</div>}
        </>
    );