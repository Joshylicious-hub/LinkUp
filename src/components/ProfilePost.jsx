import { 
FaHeart,
FaRegComment,
FaShare,
FaUser,
FaMapMarkerAlt,
FaGlobe,
FaCalendarAlt,
FaVideo,
FaCamera,
FaSmile,
FaPoll, 
FaUserTag  
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import JoshuaImg from '../images/joshua.jpg';
import BulaguiLoveSophia from '../images/bulaguilovesophia.png';


export function ProfilePost({ 
  social, 
  saveUsername, 
  setSocial,
  showModal,
  setShowModal,
  inputPost,
  setInputPost,
  isLoading,
  setIsLoading
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

    setIsLoading(true); 

setTimeout(() => {
  
  setSocial(prevSocial => [
    newPost,      // goes to index 0
    ...prevSocial // old posts move down
  ]);

  setIsLoading(false); 
  closeModal();        


}, 2000); 

  
  }

  function addOne(id) {
  setSocial(prevSocial =>
    prevSocial.map(post => {

    if (post.id === id) {      
       if (post.reactions.liked) {
        return { 
          ...post,
          reactions: {
            ...post.reactions,
            likes: post.reactions.likes - 1,
            liked: false
          }
          };
        } else { 
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

  return (
    <div className="content-container">
    
             <div className="aboutme-container">
               <h3><FaUser /> About </h3>
    
                <p>
                  <FaUser className="about-icon" />
                  Coding enthusiast. Love coffee, travel, and discovering new tech.
                </p>
    
                <p>
                  <FaMapMarkerAlt className="about-icon" />
                  Caloocan City
                </p>
    
                <p>
                  <FaGlobe className="about-icon" />
                  JoshuaAndresWebsite.com
                </p>
    
                <p>
                  <FaCalendarAlt className="about-icon" />
                  Joined December 2025
                </p>
    
                <div className="edit-details-container">
                  <button>Edit details</button>
                </div>
             </div>
    
             <div className="buttons-container">
              <button>Posts</button>
              <button>Photos</button>
              <button>Friends</button>
             </div>
    
              <div className="post-container-profile">
    
              <input 
               placeholder="What's on your mind?" 
               className="input-element"
               onClick={postModal}>
                 </input>

                {showModal && (
                  <div className="profile-modal-overlay" onClick={closeModal}>
                    <div className="profile-background-modal"  onClick={(e) => e.stopPropagation()}>
                      
                      <div className="profile-modal-container">
                        <p className="profile-modal-title">Create Post</p>
                        <button 
                        className="profile-close-btn"
                        onClick={closeModal}>
                        X
                        </button>
                      </div>
                      <div className="profile-user-modal-name">
                        <img src={JoshuaImg} className="user-post-image"></img>
                        <div className="profile-user-container-modal">
                          <p className="profile-modal-user-name">
                            {saveUsername.first} {saveUsername.last}
                            {saveUsername.first === 'Joshua' && saveUsername.last === 'Andres'
                            ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                            : null}
                          </p>
                          <p className="profile-modal-sub-name">@JoshuaAndres</p>
                        </div>
                      </div>
        
                      <div className="profile-user-modal-input">
                        <textarea
                          placeholder="What's on your mind?"
                          className="profile-user-modal-input-element"
                          onChange={inputModal}
                        />
                      </div>
        
                      <div className="profile-name-modal-user-post-container">
                        <img src={BulaguiLoveSophia} className="profile-post-modal-container"/>
                      </div>
        
                      <div className="profile-post-modal-icons">
                        <button className="profile-post-icon-btn">
                          <FaCamera style={{ color: "#4caf50" }} /> {/* Add Photo */}
                        </button>
                        <button className="profile-post-icon-btn">
                          <FaVideo style={{ color: "#f44336" }} /> {/* Add Video */}
                        </button>
                        <button className="profile-post-icon-btn">
                          <FaSmile style={{ color: "#ff9800" }} /> {/* Add Emoji */}
                        </button>
                        <button className="profile-post-icon-btn">
                          <FaPoll style={{ color: "#2196f3" }} /> {/* Create Poll */}
                        </button>
                        <button className="profile-post-icon-btn">
                          <FaUserTag style={{ color: "#9c27b0" }} /> {/* Tag Someone */}
                        </button>
                      </div>
        
                      <div className="profile-post-button-modal-container">
                        <button 
                        onClick={addModalPost}>Post</button>
                      </div>
                        </div>
                    </div>)
                            }

                            {isLoading && (
                              <div className="loading-overlay">
                                <div className="spinner"></div>
                                <p>Posting</p>
                              </div>
                            )}

              <button className="post-button">Post</button>
    
              </div>
    
              {social.map((ownerPost) => {
                const fullname = `${saveUsername.first} ${saveUsername.last}`
    
                if(fullname === ownerPost.name) {
                  return (
                  <div className="profile-post-container">
                  <div className="profile-image-container">
                    <img src={ownerPost.profile} className="profile-post-image"></img>
                    <div>
                      <p>
                        {ownerPost.name}
                        {ownerPost.name === 'Joshua Andres' 
                        ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                        : null}
                      </p>
                      <p className="email-element">{ownerPost.email} 2h</p>
                    </div>
                    <button className="button-element">...</button>
                  </div>
    
                  <div className="profile-caption-container">
                    <p>{ownerPost.caption}</p>
                  </div>
    
                  <div className="profile-user-post-container">
                    <img src={ownerPost.post} className="galaxy-container"/>
                  </div>
    
                  <div className="profile-reaction-container">
                    <p>
                      <FaHeart 
                        onClick={() => addOne(ownerPost.id)}
                        className={`heart-icon ${ownerPost.reactions.liked ? 'liked' : '' }`}
                      /> 
                       {ownerPost.reactions.likes}</p>
                    <p><FaRegComment/> {ownerPost.reactions.comments}</p>
                    <p><FaShare/> {ownerPost.reactions.shares}</p>
                  </div>
                </div>
                  );
                }
              })}
    
            </div>
  );
}