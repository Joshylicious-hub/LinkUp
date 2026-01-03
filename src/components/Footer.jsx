import { Link } from 'react-router';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

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
        <Link to="#" className="facebook" aria-label="Facebook">
          <FaFacebookF />
        </Link>
        <Link to="#" className="twitter" aria-label="Twitter">
          <FaTwitter />
        </Link>
        <Link to="#" className="instagram" aria-label="Instagram">
          <FaInstagram />
        </Link>
      </div>
    </footer>
  );
}
