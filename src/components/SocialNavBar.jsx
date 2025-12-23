import {
  FaUser,
  FaHome,
  FaSearch,
  FaCompass,
  FaVideo,
  FaEnvelope,
  FaBell,
  FaPlusSquare,
  FaBars
  
} from 'react-icons/fa';

import { Link } from 'react-router';

export function SocialNavBar() {
return (
  
  <nav className="navbar-socialpage">
      <div className="logo-socialpage"><Link to="/social">LinkUp</Link></div>
        <ul>
          <li><FaUser />
           <span className="profileLink"><Link to="/profile">Profile</Link></span>
          </li>
          <li><FaHome /> <span>Home</span></li>
          <li><FaSearch /> <span>Search</span></li>
          <li><FaCompass /> <span>Explore</span></li>
          <li><FaVideo /> <span>Reels</span></li>
          <li><FaEnvelope /> <span><Link to="/message" className="text-decoration-link">Messages</Link></span></li>
          <li><FaBell /> <span>Notifications</span></li>
          <li><FaPlusSquare /> <span>Create</span></li>
          <li><FaBars /> <span>More</span></li>        
        </ul>
     </nav>
  

);
}