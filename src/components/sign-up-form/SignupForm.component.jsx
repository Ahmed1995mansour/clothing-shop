import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/FormInput.component';

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
    <div>
      <h1>Sign up with your email and password</h1>
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
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;
