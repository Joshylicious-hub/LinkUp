import { Link, useNavigate } from 'react-router';


export function NavBar() {
  const navigate = useNavigate();

  return (
    <>
    <title>HomePage</title>
      <nav className="navbar-homepage">
        <div className="logo">LinkUp</div>
        <ul>
          <li className="active">Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Support</li>
        </ul>
        
        <div className="auth-buttons">
          <button onClick={() => navigate('/login')} className="login-button">Log In</button>
          <button className="signup-button">Sign Up</button>
        </div>
        
      </nav>

    </>
  );
}