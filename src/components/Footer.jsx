import { Link } from 'react-router';

export function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <p className="footer-copy">© 2025 LinkUp. All rights reserved.</p>
      <div className="footer-socials">
        <Link to="#"><img src="/icons/facebook.svg" alt="Facebook" /></Link>
        <Link to="#"><img src="/icons/twitter.svg" alt="Twitter" /></Link>
        <Link to="#"><img src="/icons/instagram.svg" alt="Instagram" /></Link>
      </div>
      </footer>
  );
}