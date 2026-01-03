import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import LoginImage from '../images/socialmedia.png';
import TestImage from '../images/test.png';
import { FaArrowLeft } from 'react-icons/fa';
import './LoginPage.css';

export function LoginPage({userData, setSaveUsername}) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  

  function UsernameInput(event) {
    setUser(event.target.value)
  }

  function PasswordInput(event) {
    setPassword(event.target.value)
  }

  function SubmitInput(event) {
    event.preventDefault()

    const matchedUser = userData.find(dataUser =>
      user === dataUser.username &&
      password === dataUser.password
    );

    if (matchedUser) {
      const usersName = {
        first: matchedUser.firstname,
        last: matchedUser.lastname
      };

      setSaveUsername(usersName);
      navigate('/social');
    }
      
      
      
    }

   return (
     <div className="login-page-container">
      <div className="login-page">
        <button
                className="back-button-login"
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft size={20} className="back-arrow-color" />
              </button>
        <img
          src={TestImage}
          alt="Login illustration"
          className="login-image"
        />
      </div>

      <div className="form-container">
        
        <form className="form" onSubmit={SubmitInput}>
          
          <h1 className="welcome">Welcome!</h1>
          <p>Please log in to your account</p>

        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your username"
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe" className="remember-me"> Remember Me</label>
            <Link to="/forgot-password" className="forgot-password-link"> Forgot Password?</Link>
          </div>

          <button type="submit">Log In</button>
        </div>

          <p className="signup-text">
            Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}