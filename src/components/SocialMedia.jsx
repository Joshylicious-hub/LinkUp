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
  FaUserTag,
  FaRegSmile,
  FaImage,
  FaMicrophone,
  FaPaperPlane,
  FaEdit, 
  FaTrash
} from 'react-icons/fa';
import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';
import BulaguiLoveSophia from '../images/bulaguilovesophia.png';
import ProfessionalImg from '../images/professional.jpg';
import DefaultImg from '../images/default.jpg';
import GenesisImg from '../images/genesis.jpg'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export function SocialMedia({
  saveUsername, 
  showModal, 
  setShowModal,
  inputPost,
  setInputPost,
  social,
  setSocial,
  isLoading,
  setIsLoading,
  showComment,
  setShowComment,
  userData,
  openPost,
  setOpenPost,
  selectedUser,
  setSelectedUser,
  userStories,
  setUserStories
  }) {



const navigate = useNavigate();
const { id } = useParams();

  const user = userData?.find((test) => String(test.id) === id);

  if (!user) return null;



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
    profile: DefaultImg,
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
    newPost,      // 👈 goes to index 0
    ...prevSocial // old posts move down
  ]);
  setIsLoading(false);
  closeModal();
  }, 2000)
  
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

function sharePost(id) {
  const postId = id;
  
  social.forEach((shareId) => {    
    
    if(postId === shareId.id) {
      const newSharePost = {
      name: shareId.name,
      email: shareId.email,
      profile: shareId.profile,
      caption: shareId.caption,
      image: shareId.image,
      post: shareId.post,
      reactions: {
        likes: shareId.reactions.likes,
        comments: shareId.reactions.comments,
        shares: shareId.reactions.shares,
        liked: shareId.reactions.liked
      },
      id: crypto.randomUUID() 
    }
    
  setIsLoading(true);

  setTimeout(() => {

    setSocial((prevSocial) => [newSharePost, ...prevSocial]);

  setIsLoading(false);
  }, 2000)
    
  
    }
    
  })
}

function addComment(id) {
  setShowComment(true);
  
}
  
function closeComment() {
  setShowComment(false);
  
}

function inputComment(event) {
  setInputPost(event.target.value);
}

function sendComment(event) {
  
  if (event.key !== 'Enter') return;
  event.preventDefault();

  const newComment = {
    name: `${user.firstname} ${user.lastname}`,
    image: user.image || DefaultImg,
    comment: inputPost,
    reactions: {
      likes: 0,
      comments: 0,
      shares: 0,
      liked: false
    },
    id: crypto.randomUUID()
  };

  
  setSelectedUser(prevComments => [ //parameter prevComments to get old comments
    newComment, //adds the new comment on top
    ...prevComments // old comments move down
  ]);

  setInputPost(''); 
}

function postOption(id) {
  
 const editPostId = social.find((postId) => postId.id === id);
 
 if(editPostId) {
  
  if(!openPost) {
    setOpenPost(true);
  }else{
    setOpenPost(false);
  }
  
 }

}


  return (
    
    
     <div className="container">
        <div className="social-media-container">
          
          <div className="social-media-post">
            <img src={user.image || DefaultImg} className="profile-picture"/>

            <input 
            placeholder="Share your thoughts" 
            className="insertPost"
            onClick={postModal}/>

            <button 
            type="submit" className="send-btn">
            <FaCamera />
              </button>

            <button type="submit" className="video-btn">
            <FaVideo />
            </button>
          </div>
                              
    <div className="social-media-myday"> 
       
    {userStories.map((userMyDayStories) => {
      return (
                              
          <div
            className="ownerstories"
            style={{ backgroundImage: `url(${userMyDayStories.post})` }}
            onClick={() => navigate(`/myday/${userMyDayStories.id}`)}
            key={userMyDayStories.id}
          >
            <img src={userMyDayStories.image} className="dayStories" />
            <p>{userMyDayStories.name}</p>
          </div>
                         
        
      );
    })}
    </div>
        


        {social.map((media) => {

          return (
            <div className="post-container" key={media.id}>
                        <div className="user-image-container">
                          <img
                           src={media.image ||user.image} className="user-post-image"
                           onClick={() => navigate(`/profile/${user.id}`)}
                           ></img>
                            <div>
                                <p>{media.name}
                                    {media.name === 'Joshua Andres' 
                                    ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
                                    : null}
                                </p>
                                <p className="user-email-element">{media.email} 2h</p>
                            </div>
                          <button
                           className="user-button-element"
                           onClick={() => postOption(media.id)}
                           >...</button>
                        </div>
            
                        <div className="user-caption-container">
                          <p>{media.caption}</p>
                        </div>
            
                        <div className="name-profile-user-post-container">
                          <img 
                          src={media.post} 
                          className="post-galaxy-container"
                          onClick={() => addComment()}
                          />
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

                          <p>
                            <FaRegComment 
                            onClick={() => addComment(media.id)}/>
                            {media.reactions.comments}
                          </p>                                   

                          <p>
                            <FaShare
                              onClick={() => sharePost(media.id)}/> 
                            {media.reactions.shares}
                          </p>
                        </div>
              </div>
          );
        })}
                      
      </div>

            {/* Modals Section*/}

    {showModal && (
      <div className="post-modal-overlay" onClick={closeModal}>
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
          <img src={user.image || DefaultImg} className="user-post-image"></img>
          <div className="user-container-modal">
            <p className="modal-user-name">
              {user.firstname} {user.lastname}
              {user.firstname === 'Joshua' && user.lastname === 'Andres'
              ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
              : null}
            </p>
            <p className="modal-sub-name">{user.email}</p>
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


        {isLoading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
              <p>Posting</p>
            </div>
          )}  

        
      {showComment && (
        <div className="comment-modal-overlay" onClick={closeComment} >
          <div className="comment-modal-container" onClick={(e) => e.stopPropagation()}>

            <div className="user-post-modal">
              <p className="username-post-modal">Joshua's Post</p>
              <button className="comment-back-button" onClick={closeComment}>X</button>
            </div>
        <div className="comment-modal-background">

          <div className="username-comment-container">
            <img src={ProfessionalImg} className="user-comment-image"></img>
            <div className="username-comment">
              <p className="owner-modal-name">Joshua Andres</p>
              <p className="owner-modal-subname">@JoshuaAndres</p>
            </div>
            <BsPatchCheckFill color="#1DA1F2" className="verified"/>
          </div>

            <div className="userpost-comment-img">
              <img src={BulaguiLoveSophia} className="user-post-comment"/>
            </div>
            
            <div className="comment-input-reaction-container">
              <p className="heart-icon-reply">
                <FaHeart />
                234
              </p>

              <p className="heart-icon-reply">
                <FaRegComment/>
                324
              </p>

              <p className="heart-icon-reply">
                <FaShare/>
                82
              </p>
              
            </div>

          <p className="comments-modal">Comments</p>
          <div className="comments-section">

          {selectedUser.map((comment) => {
            return (
              <>
                <div className="comment-input-container" key={comment.id}>
                <img src={comment.image} className="user-comment-image"/>
                <div className="comment-input-box">
                  <p className="username-comment-modal">{comment.name}</p>
                  <p>{comment.comment}</p>
                  
                </div>
                
              </div>
              <div className="reply-input-reaction-container">
                <p className="heart-icon-reply">
                  <FaHeart />
                  {comment.reactions.likes}
                </p>

                <p className="heart-icon-reply">
                  <FaRegComment/>
                  {comment.reactions.comments }
                </p>

                <p className="heart-icon-reply">
                  <FaShare/>
                  {comment.reactions.shares}
                </p>
              </div>
              </>

            );
          })}
            
          </div>
        </div>

         <div className="comment-user-modal">
          <div className="comment-input-container">
            <img src={user.image || DefaultImg} className="user-comment-image" />

            <div className="input-wrapper">
              <input
                placeholder={`Comment as ${user.firstname} ${user.lastname}`}
                className="placeholder-modal"
                value={inputPost}    
                onChange={inputComment}
                onKeyDown={sendComment} 
              />

              <div className="input-buttons">
                <button title="Emoji"><FaRegSmile /></button>
                <button title="Photo"><FaImage /></button>
                <button title="Voice"><FaMicrophone /></button>
                <button 
                className="send-btn" 
                title="Send"
                onClick={sendComment}><FaPaperPlane /></button>
              </div>
            </div>
          </div>
        </div>


      </div>
      
    </div>
      )}

      {openPost && (
        <div className="option-container">

          <div className="edit-post-container">
            <FaEdit className="post-option-icon" />
            <p className="post-option-text">Edit Post</p>
          </div>

          <div className="edit-post-container delete">
            <FaTrash className="post-option-icon delete" />
            <p className="post-option-text delete">Delete Post</p>
          </div>

        </div>

      )}
   </div>  
  );
}