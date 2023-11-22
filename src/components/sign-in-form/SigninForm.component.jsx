import { useState } from 'react';
import {
  SignInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};
const SigninForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signinWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          alert('Incorrect Email or Password ');
          break;

        default:
          console.log(error);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          required
          name='email'
          value={email}
          autoFocus
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          required
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button type='button' onClick={signinWithGoogle} buttonType='google'>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SigninForm;
