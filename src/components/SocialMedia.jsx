import { BsPatchCheckFill } from "react-icons/bs";
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

 
export function SocialMedia({
  saveUsername, 
  showModal, 
  setShowModal,
  inputPost,
  setInputPost,
  social,
  setSocial
  }) {


function postModal() {
  setShowModal(true);
}

function closeModal() {
  setShowModal(false);
}

function inputModal(event) {
setInputPost(event.target.value);
}

function addOne(id) {
  setSocial(prevSocial =>
    prevSocial.map(post => {

    if (post.id === id) {      
       if (post.reactions.liked) {// check if already liked
        return { // if liked, unlike and subtract 1
          ...post,
          reactions: {
            ...post.reactions,
            likes: post.reactions.likes - 1,
            liked: false
          }
          };
        } else { // if not liked, like and add 1
            return {
              ...post,
              reactions: {
                ...post.reactions,
                likes: post.reactions.likes + 1,
                liked: true
              }
            };
          }
      }else{
        return post;
      }
    })
  );
}



function addModalPost(event) {
  event.preventDefault();

  const newPost = {
    name: `${saveUsername.first} ${saveUsername.last}`,
    email: `${saveUsername.first}${saveUsername.last}`,
    profile: JoshuaImg,
    caption: inputPost,
    post: BulaguiLoveSophia,
    reactions: {
      likes: 0,
      comments: 0,
      shares: 0
    },
    id: crypto.randomUUID()
  };

  setSocial(prevSocial => [
    newPost,      // 👈 goes to index 0
    ...prevSocial // old posts move down
  ]);

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
                  <p className="modal-user-name">
                    {saveUsername.first} {saveUsername.last}
                    {saveUsername.first === 'Joshua' && saveUsername.last === 'Andres'
                    ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                    : null}
                  </p>
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
                                          <p>{media.name}
                                              {media.name === 'Joshua Andres' 
                                              ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                                              : null}
                                          </p>
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
                                    <p>
                                      <FaHeart 
                                        onClick={() => addOne(media.id)}
                                        className={
                                         `heart-icon ${media.reactions.liked ? 'liked' : '' }`}
                                      /> 
                                      {media.reactions.likes}
                                    </p>

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