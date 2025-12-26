import {
  FaVideo,
  FaComment,
  FaCamera,
  FaShare,
  FaHeart,
  FaRegComment, 
   
   FaSmile,
    FaPoll, 
    FaUserTag  
} from 'react-icons/fa';
import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';
import BulaguiLoveSophia from '../images/bulaguilovesophia.png';
import { useState } from 'react';
import { Link } from 'react-router';

 
export function SocialMedia() {

const [social, setSocial] = useState([{
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902
  },
  id: crypto.randomUUID()
}, {
  name: 'Joshua Andres',
  email: '@JoshuaAndres',
  profile: JoshuaImg,
  caption: 'testing to build a facebook',
  image: JoshuaImg,
  post: JoshuaImg,
  reactions: {
    likes: 1300,
    comments: 256,
    shares: 82
  },
  id: crypto.randomUUID()
}, {
  name: 'Cyril Vicente',
  email: '@CyrilVicente',
  profile: CyrilImg,
  caption: 'tite',
  image: CyrilImg,
  post: CyrilImg,
  reactions: {
    likes: 1540,
    comments: 573,
    shares: 923
  },
  id: crypto.randomUUID()
}, {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902
  },
  id: crypto.randomUUID()
}]);

const [showModal, setShowModal] = useState(false);
const [inputPost, setInputPost] = useState('');

function postModal() {
  setShowModal(true);
}

function closeModal() {
  setShowModal(false);
}

function inputModal(event) {
setInputPost(event.target.value);
}

function addModalPost(event) {

  event.preventDefault();

  const newModalPost = [
    ...social,
    {
      name: 'Joshua Andres',
      email: '@JoshuaAndres',
      profile: BulaguiImg,
      caption: inputPost,
      post: BulaguiLoveSophia,
      reactions: {
      likes: 2330,
      comments: 948,
      shares: 902
    },
    id: crypto.randomUUID()
    }
  ]
  setSocial(newModalPost);
  closeModal();
}

  return (
    
    
     <div className="container">
        <div className="social-media-container">
          
          <div className="social-media-post">
            <img src={JoshuaImg} className="profilePicture"/>
            <input 
            placeholder="Share your thoughts" 
            className="insertPost"
            onClick={postModal}/>

          {showModal && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="background-modal"  onClick={(e) => e.stopPropagation()}>
              
              <div className="modal-container">
                <p className="modal-title">Create Post</p>
                <button 
                className="close-btn"
                onClick={closeModal}>
                X
                </button>
              </div>
              <div className="user-modal-name">
                <img src={JoshuaImg} className="user-post-image"></img>
                <div className="user-container-modal">
                  <p className="modal-user-name">Joshua Andres</p>
                  <p className="modal-sub-name">@JoshuaAndres</p>
                </div>
              </div>

              <div className="user-modal-input">
                <textarea
                  placeholder="What's on your mind?"
                  className="user-modal-input-element"
                  onChange={inputModal}
                />
              </div>

              <div className="name-modal-user-post-container">
                <img src={BulaguiLoveSophia} className="post-modal-container"/>
              </div>

              <div className="post-modal-icons">
                <button className="post-icon-btn">
                  <FaCamera style={{ color: "#4caf50" }} /> {/* Add Photo */}
                </button>
                <button className="post-icon-btn">
                  <FaVideo style={{ color: "#f44336" }} /> {/* Add Video */}
                </button>
                <button className="post-icon-btn">
                  <FaSmile style={{ color: "#ff9800" }} /> {/* Add Emoji */}
                </button>
                <button className="post-icon-btn">
                  <FaPoll style={{ color: "#2196f3" }} /> {/* Create Poll */}
                </button>
                <button className="post-icon-btn">
                  <FaUserTag style={{ color: "#9c27b0" }} /> {/* Tag Someone */}
                </button>
              </div>

              <div className="post-button-modal-container">
                <button 
                onClick={addModalPost}>Post</button>
              </div>
                </div>
            </div>)
                    }

            <button 
            type="submit" className="send-btn">
            <FaCamera />
              </button>

            <button type="submit" className="video-btn">
            <FaVideo />
            </button>
          </div>

            

                    
    
                    <div className="social-media-myday">                 
                      <div className="joshuastories">
                      <img src={JoshuaImg} className="dayStories"/>
                      <p>Joshua Andres  </p>
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
                                 <div className="user-image-container">
                                   <img src={media.image} className="user-post-image"></img>
                                      <div>
                                          <p>{media.name}</p>
                                          <p className="user-email-element">{media.email} 2h</p>
                                      </div>
                                   <button className="user-button-element">...</button>
                                 </div>
                     
                                 <div className="user-caption-container">
                                    <p>{media.caption}</p>
                                 </div>
                     
                                 <div className="name-profile-user-post-container">
                                    <img src={media.post} className="post-galaxy-container"/>
                                 </div>
                     
                                 <div className="user-profile-reaction-container">
                                    <p><FaHeart/> {media.reactions.likes}</p>
                                    <p><FaRegComment/> {media.reactions.comments}</p>
                                    <p><FaShare/> {media.reactions.shares}</p>
                                 </div>
                       </div>
                    );
                  })}
                               
                </div>
            </div>

      
  );
}