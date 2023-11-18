import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/Button.component';
import FormInput from '../form-input/FormInput.component';
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignupForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = event => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const comparePasswords = () => {
    return password === confirmPassword;
  };
  const handleSubmit = async event => {
    event.preventDefault();
    if (!comparePasswords()) {
      console.log('password must match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encounted an error ', error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          onChange={handleChange}
          required
          type='text'
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          required
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          required
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          required
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignupForm;
