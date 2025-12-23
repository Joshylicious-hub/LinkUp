import {
  FaVideo,
  FaComment,
  FaCamera,
  FaShare  
} from 'react-icons/fa';
import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';

import { useState } from 'react';
import { Link } from 'react-router';
 
export function SocialMedia() {

const [social, setSocial] = useState([{
  name: 'Joshua Andres',
  profile: JoshuaImg,
  caption: 'testing to build a facebook',
  image: JoshuaImg,
  id: crypto.randomUUID()
}, {
  name: 'Cyril Vicente',
  profile: CyrilImg,
  caption: 'tite',
  image: CyrilImg,
  id: crypto.randomUUID()
}, {
  name: 'Justine Bulagui',
  profile: BulaguiImg,
  caption: 'Crush ko si Sophia',
  image: BulaguiImg,
  id: crypto.randomUUID()
}]);

  return (
    
    
     <div className="container">
                <div className="social-media-container">
                  
                  <div className="social-media-post">
                    <img src={JoshuaImg} className="profilePicture"/>
                    <input placeholder="Share your thoughts" className="insertPost"/>
    
                    <button type="submit" className="send-btn">
                    <FaCamera />
                     </button>
    
                    <button type="submit" className="video-btn">
                    <FaVideo />
                    </button>
                  </div>
    
                    <div className="social-media-myday">                 
                      <div className="joshuastories">
                      <img src={JoshuaImg} className="dayStories"/>
                      <p>Joshua Andres</p>
                      </div>
    
                      <div className="cyrilstories">
                      <img src={CyrilImg} className="dayStories"/>
                       <p>Cyril Vicente</p>
                      </div>
    
                      <div className="bulaguistories">
                        <img src={NiverioImg} className="dayStories"/>
                        <p>Rexzielle Niverio</p>
                      </div>
    
                      <div className="sophiastories">
                        <img src={SophiaImg} className="dayStories"/>
                        <p>Sophia Bautista</p>
                      </div>                  
                    </div>


                  {social.map((media) => {

                    return (
                     <div className="post-container" key={media.id}>
    
                      <div className="user-name">
                       <Link to="/profile"><img src={media.profile} className="profile-image"/></Link>
                        <p className="nameUser"><Link to="/profile">{media.name}</Link></p>
                        <p>December 15, 2025</p>
                      </div>
    
                      <div className="caption-container">
                        <div className="caption-element">
                          <p>{media.caption}</p>
                        </div>
                      </div>
    
                      <div className="image-container">
                        <img src={media.image} className="image-element"/>
                      </div>
    
                      
                      <div className="react-container">
                        <p className="react-item">👍 Like</p>
                        <p className="react-item">❤️ Heart</p>
                        <p className="react-item">😢 Sad</p>
                        <p className="react-item">😊 Happy</p>
                        <p className="react-item">😡 Angry</p>
                      </div>
    
                      <div className="react-count-container">
                        <div className="react-count-element">
                         Reacted 532 👍❤️😢
                         </div>
                      </div>
    
                      <div className="user-comment-container">
    
                        <div className="user-comment-element">
                         <Link to="/profile"><img src={JoshuaImg} className="user-image"/></Link>
                         <p className="nameUser"><Link to="/profile">Joshua Andres</Link></p>
                        </div>
    
                        <div className="usercomment-element">
                          <p>testing lang to pang my day</p>
                        </div>
                        
                        <div className="reaction-container">
                          <div className="reaction-elements">
                            <button>👍 React</button>
                            <button><FaComment /> Reply</button>
                          </div>
                        </div>
                      </div>
    
                      <div className="user-comment-container">
    
                        <div className="user-comment-element">
                         <Link to="/profile"><img src={CyrilImg} className="user-image"/></Link>
                         <p className="nameUser"><Link to="/profile">Cyril Vicente</Link></p>
                        </div>
    
                        <div className="usercomment-element">
                          <p>Witwew fake news</p>
                        </div>
                        
                        <div className="reaction-container">
                          <div className="reaction-elements">
                            <button>👍 React</button>
                            <button><FaComment /> Reply</button>
                          </div>
                        </div>
                      </div>
    
                    <div className="comment-user-container">
                      <div className="comment-user-element">
                        <img src={JoshuaImg} className="user-image" />
                        <div className="input-wrapper">
                          <input placeholder="Add a comment" className="user-reply" />
                          <div className="input-buttons">
                            <button><FaCamera /></button>
                            <button><FaVideo /></button>
                            <button><FaShare /></button>
                          </div>
                        </div>
                      </div>
                    </div>
    
                  </div>
                    );
                  })}
                   
                  
    

    
                  
    
                </div>
            </div>

      
  );
}