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


import { Link, useNavigate, useParams } from 'react-router';
import { useState } from 'react';

export function SocialNavBar({ userData }) {

  const navigate = useNavigate();

  const { id } = useParams();

  const user = userData?.find((test) => String(test.id) === id);

  if(!user) return null;


  const [openMoreItems, setOpenMoreItems] = useState(false);
  
  function openMore() {

  if(openMoreItems === false) {
    setOpenMoreItems(true)
  }else{
    setOpenMoreItems(false)
  }
  
}
return (
  
  <nav className="navbar-socialpage">
      <div className="logo-socialpage"><Link to="/social">LinkUp</Link></div>
        <ul>
          <li onClick={() => navigate(`/profile/${user.id}`)}>
          <FaUser />
          <span>Profile</span>
          </li>

          <li><FaHome /> <span>Home</span></li>
          <li><FaSearch /> <span>Search</span></li>
          <li><FaCompass /> <span>Explore</span></li>
          <li><FaVideo /> <span>Reels</span></li>
          <li onClick={() => navigate("/message")}>
            <FaEnvelope /> 
          <span>Messages</span>
          </li>
          <li><FaBell /> <span>Notifications</span></li>
          <li><FaPlusSquare /> <span>Create</span></li>
          <li onClick={() => openMore()}><FaBars /> <span>More</span></li>     

          {openMoreItems && (
          <div className="link-modal">
            <div className="dark-mode-container">
              <p className="dark-mode-link">Night Mode</p>
            </div>
            
          <div className="log-out-container">
            <Link to="/login" className="log-out-link">Log Out</Link>
            </div>
          </div>
        )
        }   
        </ul>
        
     </nav>

     
    
  

);
}