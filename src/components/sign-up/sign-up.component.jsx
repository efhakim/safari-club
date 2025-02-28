import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-up.styles.scss'

const defaultFormField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField)
    const { displayName, email, password, confirmPassword } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword) { alert("Passwords do not match"); return; }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth({...user, displayName})
            resetFormFields();
        }
        catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already exists')
            }
            else {
                console.log('User creation error', error)
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email.</span>

            <form onSubmit={handleSubmit}>

                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />

                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />

                <FormInput label="Password" type="password" required onChange={handleChange} autoComplete="new-password" name="password" value={password} />

                <FormInput label="Confirm Password" type="password" required onChange={handleChange} autoComplete="new-password"  name="confirmPassword" value={confirmPassword} />


                <Button type="submit">Sign Up</Button>

            </form>

        </div>
    );
};

export default SignUpForm;