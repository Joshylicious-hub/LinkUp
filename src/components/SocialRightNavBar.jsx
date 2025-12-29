import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';
import GenesisImg from '../images/genesis.jpg';
import AngelicaImg from '../images/angelica.jpg';
import { Link } from 'react-router';
import { useState } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import ProfessionalImg from '../images/professional.jpg';

export function SocialRightNavBar({saveUsername}) {
  const [profileLinks, setProfileLinks] = useState([{
    image: CyrilImg,
    name: 'Cyril Vicente'
  }, {
    image: ProfessionalImg,
    name: 'Joshua Andres'
  }, {
    image: BulaguiImg,
    name: 'Justine Bulagui'
  }, {
    image: NiverioImg,
    name: 'Zielle Niverio'
  }, {
    image: SophiaImg,
    name: 'Sophia Bautista'
  }, {
    image: GenesisImg,
    name: 'Genesis Cardeno'
  }])
  return(
     <nav className="messages-socialpage">

      <div className="profile-socialpage">
        <Link to="/profile">
          <img src={ProfessionalImg}
          className="profilePicture"/>
          {saveUsername.first} {saveUsername.last}
          {saveUsername.first === 'Joshua' && saveUsername.last === 'Andres'
           ? <BsPatchCheckFill color="#1DA1F2" />
           : null}
         </Link>   
      </div>

        <p>Chat with your friends</p>
        
        <ul>

          {profileLinks.map((Links) => {
            return (
            <li>
            <Link to="/message"><img src={Links.image} className="chatMessages"/></Link>
            <span className="profileUser"><Link to="/message">{Links.name}</Link></span>
          </li>
            );
          })}           
          
        </ul>

        <p>Suggestion</p>
        
     </nav>
  );

}