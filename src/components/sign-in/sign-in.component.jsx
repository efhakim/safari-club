import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import './sign-in.styles.scss';

const defaultFormField = {
    email: '',
    password: ''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormField)
    const {email, password} = formFields


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (error) {

            switch(error.code) {

                case 'auth/user-not-found':
                    alert('User not found.')
                    break;

                case 'auth/wrong-password':
                    alert('Incorrect password.')
                    break;
                default:
                    console.log(error)
            }

            console.log(error)
        }

    }


    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name] : value})
    }

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div className="sign-in-container">

            <h2>I already have an account</h2>
            <span>Sign in with your email</span>

            <form onSubmit={handleSubmit}>

            <FormInput label="Email" type="email" required onChange={handleChange} value={email} name="email"/>
            <FormInput label="Password" type="password" required onChange={handleChange} value={password} name="password"/>
            
            <div className="buttons-container">

                <Button type="submit">Sign In</Button>            
                <Button type="submit" buttonType={BUTTON_TYPES_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>

            </div>
            </form>
        </div>
    )
};

export default SignInForm;