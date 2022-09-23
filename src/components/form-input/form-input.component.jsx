import {FormGroup, FormInputContainer, FormInputLabel } from './form-input.styles.jsx'

const FormInput = ({label, ...otherProps}) => {
    return (
        <FormGroup>
            <FormInputContainer {...otherProps} />
            {label && 
                (<FormInputLabel shrink={otherProps.value.length}>{label}</FormInputLabel>)
            }
        </FormGroup>
    )
}

export default FormInput;