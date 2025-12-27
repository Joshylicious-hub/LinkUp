import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
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
    <>
    <Link to="/">Go back</Link>
    <div className="form-container" >
      <form className="form" onSubmit={SubmitInput}>
        <h2>Log In</h2>

        <input 
        placeholder="Enter your username"
        type="text"
        onChange={UsernameInput} 
        />

        <input placeholder="Enter your password"
         type="password" 
         onChange={PasswordInput}
         />

        <input type="submit"/>
        <p className="signup-text">
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
    </>
  );
}