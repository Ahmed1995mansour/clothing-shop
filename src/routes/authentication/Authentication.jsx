import SigninForm from '../../components/sign-in-form/SigninForm.component';
import SignupForm from '../../components/sign-up-form/SignupForm.component';
import './authentication.styles.scss';

const Authentication = () => {
  return (
    <div className='authentication-container'>
      <SigninForm />
      <SignupForm />
    </div>
  );
};

export default Authentication;
