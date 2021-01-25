import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils'
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

    onSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.onSubmit}>
                    <FormInput 
                        handleChange={this.handleChange}
                        type='email'
                        label='email'
                        name='email'
                        required
                        value={this.state.email}/>
                    <FormInput 
                        handleChange={this.handleChange}
                        type='password'
                        label='password'
                        name='password'
                        required
                        value={this.state.password}/>
                    <div className='buttons'>
                        <CustomButton 
                            type='submit'>Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;