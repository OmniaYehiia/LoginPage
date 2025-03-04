import SocialLogin from './Components/SocialLogin';
import InputField from './Components/inputField';

const App = () => {
  return (
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
      <SocialLogin />
      <p className='separator'>
        <span>or</span>
      </p>
      <form action="#" className="login-form">
        <InputField type='email' placeholder='Email' icon='mail' />
        <InputField type='password' placeholder='Password' icon='lock' />
        <a href="/forgot-password" className='forgot-password'>Forgot password?</a>
        <button type='submit' className='login-btn'>Log in</button>
      </form>
      <p className="signup-prompt">
        Don't have an account? <a href="/signup" className="signup-link">Sign up here</a>
        </p>
    </div>
  );
}

export default App;
