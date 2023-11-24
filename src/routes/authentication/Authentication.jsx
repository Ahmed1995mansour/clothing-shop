import SigninForm from '../../components/sign-in-form/SigninForm.component';
import SignupForm from '../../components/sign-up-form/SignupForm.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SigninForm />
      <SignupForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
