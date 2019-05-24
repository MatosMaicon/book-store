import React from 'react'
import { FormGroup, Label, Input, CustomInput } from 'reactstrap'

export default props => {

    const printInputLabel = () => {
        if (props.type === 'switch'){
            return <CustomInput type="switch" id={props.name} name={props.name} label={props.label} checked={props.value} onChange={props.onChange} />
        }else if(props.type === 'file'){
            return <>
                <Label>{props.label}</Label>
                <Input type={props.type} name={props.name} onChange={props.onChange} />
            </>
        }else{
            return <>
                <Label>{props.label}</Label>
                <Input type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} onChange={props.onChange}>
                    {props.children}
                </Input >
            </>
        }
    }

    return (
        <FormGroup>
            {printInputLabel()}
        </FormGroup>
    )
}