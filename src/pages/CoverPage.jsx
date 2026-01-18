import './CoverPage.css';
import ProfessionalImg from '../images/professional.jpg';
import CyrilImg from '../images/cyril.jpg';
import SophiaImg from '../images/sophia.jpg';
import {
FaArrowLeft, 
FaHeart, 
FaRegComment, 
FaShare, 
FaRegSmile, 
FaImage, 
FaMicrophone, 
FaPaperPlane  
} 
from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate, Link, useParams } from "react-router";



export function CoverPage({ saveUsername, userData }) {
  const navigate = useNavigate();

  const { id } = useParams();

  const user = userData?.find((test) => String(test.id) === id);

  if (!user) return null;

  const [userCoverName, setUserCoverName] = useState([{
    id: crypto.randomUUID(),
    image: CyrilImg,
    name: 'Cyril Vicente',
    subname: '@CyrilVicente',
    comment: 'i love you so much joshua andres pogi',
    reactions: {
      likes: 234,
      comments: 265,
      shares: 82,
    }
  }, {
    id: crypto.randomUUID(),
    image: SophiaImg,
    name: 'Sophia Bautista',
    subname: '@SophiaBautsita',
    comment: 'hayop ka mahal kita bulagui',
    reactions: {
      likes: 123,
      comments: 983,
      shares: 23
    }
  }])

  const [saveCommentCover, setSaveCommentCover] = useState("")

  function inputCommentCover(event) {
    setSaveCommentCover(event.target.value);
  }

  function enterCommentCover(event) {
    if(event.key === 'Enter') {
      event.preventDefault();
      sendCommentCover();
    }
    
  }

  function sendCommentCover() {
    
    const CommentCover = {
      id: user.id,
      image: user.image,
      name: `${user.firstname} ${user.lastname}`,
      subname: user.email,
      comment: saveCommentCover,
      reactions: {
        likes: 0,
        comments: 0,
        shares: 0
      }
    }

     setUserCoverName((previousUserCoverName) => [CommentCover, ...previousUserCoverName]);
     setSaveCommentCover(""); 
  }
  
  


    return (
        <>
        <title>LinkUp</title>

        <div className="cover-body-container">
            <div className="cover-image-container">
                <div className="cover-image-element">
                    <button className="cover-back-button" onClick={() => navigate(-1)}>
                        <FaArrowLeft size={20} color="white" />
                    </button>
                    <img src={user.cover} className="cover-image"/>
                </div>
            </div>

            <div className="cover-comment-container">
                <div className="cover-profile-container">
                    <img src={user.image} className="cover-profile"/>
                    <div className="user-cover-profile">
                        <p className="owner-cover-profile">{user.firstname} {user.lastname}</p>
                        <p className="owner-subname-cover-profile">{user.email}</p>
                    </div>
                </div>

                <div className="cover-caption-container">
                    <p className="cover-caption">Working for you</p>
                </div>
                
                <div className="cover-input-reaction-container">
                    <p className="cover-icon-reply">
                        <FaHeart />
                        234
                    </p>

                    <p className="cover-icon-reply">
                        <FaRegComment/>
                        324
                    </p>

                    <p className="cover-icon-reply">
                        <FaShare/>
                        82
                    </p>                
                 </div>

                <div className="cover-comments-container">
                  <p className="comments-cover-user">Comments</p>


             {userCoverName.map((userNameCover) => {
              return (
                <div className="single-user-comment" key={userNameCover.id}>
                  <div className="cover-user-comments-container">
                    <img src={userNameCover.image} className="cover-image-comments"/>
                    <div className="cover-username-comments-container">
                      <p className="username-cover">{userNameCover.name}</p>
                      <p className="subname-cover">{userNameCover.subname}</p>
                      <p>{userNameCover.comment}</p>
                    </div>                                      
                  </div>
                  
                   <div className="cover-comment-reaction-container">
                    <p className="cover-icon-reply-user">
                        <FaHeart />
                        {userNameCover.reactions.likes}
                    </p>

                    <p className="cover-icon-reply-user">
                        <FaRegComment/>
                       {userNameCover.reactions.comments}
                    </p>

                    <p className="cover-icon-reply-user">
                        <FaShare/>
                        {userNameCover.reactions.shares}
                    </p>                
                 </div>
              </div>

              );
             })}
               
              
               
                

                
                  
          </div>

          <div className="cover-input-comments-container">
            <img src={user.image} className="cover-image-comments" />

            <div className="input-wrapper">

              <input
                placeholder={`Comment as ${user.firstname} ${user.lastname}`}
                className="input-element-cover"
                value={saveCommentCover}
                onChange={inputCommentCover}
                onKeyDown={enterCommentCover}
              />

              <div className="input-buttons-comment">
                <button title="Emoji" ><FaRegSmile /></button>
                <button title="Photo"><FaImage /></button>
                <button title="Voice"><FaMicrophone /></button>

                <button 
                className="send-btn" 
                title="Send"
                onClick={sendCommentCover}
                >
                  <FaPaperPlane />
                </button>
              </div>
            </div>
          </div>

                          

                 

                
                
                                         
            </div>
        </div>
        </>
    );
}