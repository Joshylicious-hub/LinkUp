import { 
FaHeart,
FaRegComment,
FaShare,
FaUser,
FaMapMarkerAlt,
FaGlobe,
FaCalendarAlt,
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

export function ProfilePost({ 
  social, 
  saveUsername, 
  setSocial
 }) {

  function enterPost(event) {
    console.log(event.target.value);
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
               onChange={enterPost}>
              
               </input>
              <button>Post</button>
    
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