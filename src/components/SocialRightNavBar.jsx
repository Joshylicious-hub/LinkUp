import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';
import GenesisImg from '../images/genesis.jpg';
import AngelicaImg from '../images/angelica.jpg';
import { Link, useParams} from 'react-router';
import { useState } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import ProfessionalImg from '../images/professional.jpg';
import DefaultImg from '../images/default.jpg';

export function SocialRightNavBar({userData}) {

  
  const { id } = useParams();

  const user = userData?.find((test) => String(test.id) === id);

  if (!user) return null;
  
  const [profileLinks, setProfileLinks] = useState([{
    image: CyrilImg,
    name: 'Cyril Vicente',
    id: crypto.randomUUID()
  }, {
    image: ProfessionalImg,
    name: 'Joshua Andres',
    id: crypto.randomUUID()
  }, {
    image: BulaguiImg,
    name: 'Justine Bulagui',
    id: crypto.randomUUID()
  }, {
    image: NiverioImg,
    name: 'Zielle Niverio',
    id: crypto.randomUUID()
  }, {
    image: SophiaImg,
    name: 'Sophia Bautista',
    id: crypto.randomUUID()
  }, {
    image: GenesisImg,
    name: 'Genesis Cardeno',
    id: crypto.randomUUID()
  }])

  const [userSuggestions, setUserSuggestions] = useState([{
    id: 1,
    image: ProfessionalImg,
    name: 'Joshua Andres',
    followed: 'Followed by Cyril Vicente',
    isFollowed: true
  }, {
    id: 2,
    image: CyrilImg,
    name: 'Cyril Vicente',
    followed: 'Followed by Joshua Andres',
    isFollowed: true
  }, {
    id: 3,
    image: BulaguiImg,
    name: 'Justine Bulagui',
    followed: 'Followed by Sophia Bautista',
    isFollowed: true
  }, {
    id: 4,
    image: SophiaImg,
    name: 'Sophia Bautsita',
    followed: 'Followed by Justine Bulagui',
    isFollowed: true
  }, {
    id: 5,
    image: NiverioImg,
    name: 'Zielle Niverio',
    followed: 'Followed by Genesis Cardeno',
    isFollowed: true
  }, {
    id: 6,
    image: GenesisImg,
    name: 'Genesis Cardeno',
    followed: 'Followed by Zielle Niverio',
    isFollowed: true
  }, {
    id: 7,
    image: AngelicaImg,
    name: 'Angelica Bumanlag',
    followed: 'Followed by Jesus Christ',
    isFollowed: false
  }])

  

  function followedUser(id) {

    setUserSuggestions((previousUserSuggestions) =>
    previousUserSuggestions.map((user) =>
      user.id === id
        ? { ...user, isFollowed: !user.isFollowed }
        : user
    )
  );
  
  }
  
  return(
     <nav className="messages-socialpage">

      <div className="profile-socialpage">
        <Link to={`/profile/${user.id}`}>
          <img src={user.image || DefaultImg}
          className="profilePicture"/>
          {user.firstname} {user.lastname}
          {user.firstname === 'Joshua' && user.lastname === 'Andres'
           ? <BsPatchCheckFill color="#1DA1F2" />
           : null}
         </Link>   
      </div>

        <p className="chat-with-friends">Chat with your friends</p>
        
        <ul>

          {profileLinks.map((Links) => {
            return (
            <li key={Links.id}>
            <Link to="/message"><img src={Links.image} className="chatMessages"/></Link>
            <span className="profileUser"><Link to="/message">{Links.name}</Link></span>
          </li>
            );
          })}           
          
        </ul>

        <p className="suggestion">Suggestion</p>

        {userSuggestions.map((addUserSuggestions) => {
          return (

        <div className="user-suggestion-friend" key={addUserSuggestions.id}>
          <img src={addUserSuggestions.image} className="suggestion-chat"/>

        <div className="user-suggestion">
          <p className="name-suggestion">{addUserSuggestions.name}</p>

         <p className={`followed-people ${addUserSuggestions.isFollowed ? "added" : ""}`}>
        {addUserSuggestions.isFollowed ? `Added to your list of friends` : addUserSuggestions.followed}
      </p>

          
        </div>

        <p onClick={() => followedUser(addUserSuggestions.id)}>
          {addUserSuggestions.isFollowed ? "Followed" : "Follow"}
        </p>

        
       </div>

          );
        })}

       
     </nav>
  );

}