import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
       const { value, name } = event.target;
       this.setState({ [name]: value });
    }

    onSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput 
                        onChange={this.handleChange}
                        type='email'
                        label='email'
                        name='email'
                        required
                        value={this.state.email}/>
                    <FormInput 
                        onChange={this.handleChange}
                        type='password'
                        label='password'
                        name='password'
                        required
                        value={this.state.password}/>
                    <div className='buttons'>
                        <CustomButton 
                            type='submit'>Sign In
                        </CustomButton>
                        <CustomButton type= 'button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;