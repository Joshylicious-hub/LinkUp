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
import DefaultImg from '../images/default.jpg';
import BulaguiLoveSophia from '../images/bulaguilovesophia.png';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';


export function ProfilePost({ 
  social, 
  saveUsername, 
  setSocial,
  showModal,
  setShowModal,
  inputPost,
  setInputPost,
  isLoading,
  setIsLoading,
  userData
 }) {

  const { id } = useParams();

  const user = userData?.find((test) => String(test.id) === id);

  if(!user) return null;

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
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      profile: user.image,
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

const [openUserDetail, setOpenUserDetail] = useState(false);

function changeDetails() {
  if (!openUserDetail) {
    setUserDetail(testing); // 👈 PREFILL FORM
  }
  setOpenUserDetail(prev => !prev);
}


const [testing, setTesting] = useState({
  introduction: 'Coding enthusiast. Love coffee, travel, and discovering new tech.',
  city: 'Caloocan City',
  website: 'JoshuaAndresWebsite.com',
  date: 'Joined December 2025'
});

const [userDetail, setUserDetail] = useState({
  introduction: '',
  city: '',
  website: '',
  date: ''
})


function introductionDetail(event) {
  setUserDetail(prev => ({
    ...prev,
    introduction: event.target.value
  }));
}

function cityDetail(event) {
  setUserDetail(prev => ({
    ...prev,
    city: event.target.value
  }));
}

function websiteDetail(event) {
  setUserDetail(prev => ({
    ...prev,
    website: event.target.value
  }));
}

function dateDetail(event) {
  setUserDetail(prev => ({
    ...prev,
    date: event.target.value
  }));
}


function confirmDetail() {
  setTesting(userDetail);
  setOpenUserDetail(false);
}



  return (
    <div className="content-container">
    
             <div className="aboutme-container">
               <h3><FaUser /> About </h3>
    
                <p>
                  <FaUser className="about-icon" />
                  {testing.introduction}
                </p>
    
                <p>
                  <FaMapMarkerAlt className="about-icon" />
                  {testing.city}
                </p>
    
                <p>
                  <FaGlobe className="about-icon" />
                  {testing.website}
                </p>
    
                <p>
                  <FaCalendarAlt className="about-icon" />
                  {testing.date}
                </p>
    
                <div className="edit-details-container">
                  <button
                  onClick={changeDetails}
                  >Edit details</button>
                </div>

                {openUserDetail && (
                  <div className="user-details-overlay" onClick={changeDetails}>
                    <div className="user-details-container" onClick={(e) => e.stopPropagation()}>
                      <div className="user-edit-element">
                        <p className="tite">tite</p>
                      <p className="user-edit-paragraph">Edit details</p>
                      <button
                        className="user-back-button-details"
                        onClick={changeDetails}
                      >
                        X
                      </button>
                    </div>

                      <div className="editing-container">

                      <div className="detail-container">
                        <p className="introduction-detail">Introduction</p>
                        <input
                          placeholder="Tell me about yourself"
                          className="input-detail"
                        
                          onChange={introductionDetail}
                        />

                      </div>

                      <div className="detail-container">
                        <p className="introduction-detail">City</p>
                        <input 
                        placeholder="Where do you live?" 
                        className="input-detail"
                        
                        onChange={cityDetail}
                        />
                      </div>

                      <div className="detail-container">
                        <p className="introduction-detail">Website</p>
                        <input 
                        placeholder="Enter your website" 
                        className="input-detail"
                        
                        onChange={websiteDetail}
                        />
                      </div>

                      <div className="detail-container">
                        <p className="introduction-detail">Joined</p>
                        <input 
                        placeholder="When did you joined?" 
                        className="input-detail"
                        
                        onChange={dateDetail}
                        />
                      </div>

                      </div>

                       <div className="detail-confirm-container">
                        <button 
                        className="detail-confirm"
                        onClick={confirmDetail}
                        >Confirm</button>
                      </div>
                    </div>
                  </div>
                )}
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
                        <img src={user.image || DefaultImg} className="user-post-image"></img>
                        <div className="profile-user-container-modal">
                          <p className="profile-modal-user-name">
                            {user.firstname} {user.lastname}
                            {user.firstname === 'Joshua' && user.lastname === 'Andres'
                            ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                            : null}
                          </p>
                          <p className="profile-modal-sub-name">{user.email}</p>
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
                const fullname = `${user.firstname} ${user.lastname}`
    
                if(fullname === ownerPost.name) {
                  return (
                  <div className="profile-post-container" key={ownerPost.id}>
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