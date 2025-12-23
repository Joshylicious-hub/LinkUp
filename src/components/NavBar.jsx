import { Link } from 'react-router';

export function NavBar() {
  return (
    <>
    <title>HomePage</title>
      <nav className="navbar-homepage">
        <div className="logo">LinkUp</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <Link to="/login">
        <button>Log In</button>
        </Link>
      </nav>

    </>
  );
}