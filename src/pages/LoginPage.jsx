import GoogleLogin from '../components/auth/GoogleLogin';
import LoginForm from '../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className='container'>
      <h1 className='text-3xl mb-4 pt-4'>Login here</h1>
      <LoginForm />
      <GoogleLogin />
    </div>
  );
}
