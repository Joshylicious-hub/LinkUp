import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { FaArrowLeft } from 'react-icons/fa';
import  BackgroundImg  from '../images/background.png';


import './SignupPage.css';

export function SignupPage({userData, setUserData}) {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const navigate = useNavigate();

  function firstInput(event) {
    setFirst(event.target.value);
  }

  function lastInput(event) {
    setLast(event.target.value);
  }

  function emailInput(event) {
    setEmail(event.target.value)
  }

  function confirmEmailInput(event) {
    setConfirmEmail(event.target.value)
  }

  function passwordInput(event) {
    setPassword(event.target.value)
  }

  function confirmPasswordInput(event) {
    setConfirmPassword(event.target.value)
  }

  function confirmAccount(event) {
    event.preventDefault();

  const saveData = userData.some((checkUser) => email === checkUser.username && confirmEmail === checkUser.username);

  if(saveData) {
    alert('User already exist!');
    return;
  }

   if(email === confirmEmail) {
     if(password === confirmPassword) {
      const newUser = [
        ...userData,
        {
          firstname: first,
          lastname: last,
          username: confirmEmail,
          password: confirmPassword,
          id: crypto.randomUUID()
          
        }
      ]
      setUserData(newUser);
      alert('Registered sucessfully');
      navigate('/login');
     } 
    }

    if(email !== confirmEmail) {
      alert('Email does not match!')
      return;
    }

    if(password !== confirmPassword) {
      alert('Password does not match!')
      return;
    }

  } 
  

  return (
   
    <div className="signup-container">
       <div className="signup-page">
              <button
                      className="signup-back-button-login"
                      onClick={() => navigate(-1)}
                    >
                      <FaArrowLeft size={20} className="signup-back-arrow-color" />
                    </button>
              <img
                src={BackgroundImg}
                alt="Login illustration"
                className="signup-image"
              />
            </div>
      

      <form className="signup-form" onSubmit={confirmAccount}>
        <h1>Create Your Account</h1>
        <p>Join our community today!</p>

        <input placeholder="Enter First Name" 
        type="text"
        onChange={firstInput}
        />

        <input placeholder="Enter Last Name" 
        type="text"
        onChange={lastInput}
        />

        <input placeholder="Enter email" 
        type="text"
        onChange={emailInput}
        />

        <input placeholder="Confirm email"
         type="text"
         onChange={confirmEmailInput}
          />
        <input placeholder="Enter password"
         type="password"
         onChange={passwordInput}
          />

        <input placeholder="Confirm password"
         type="password"
         onChange={confirmPasswordInput}
          />
        <input type="submit" value="Sign Up" />

        <p className="login-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </form>
    </div>
 
  );
}
