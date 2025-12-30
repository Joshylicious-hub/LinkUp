import Photo1Img from '../images/photo1.png';
import JoshuaImg from '../images/joshua.jpg';
import { FaCameraRetro, FaUserFriends, FaFireAlt } from "react-icons/fa";

export function MainContent() {
  return (
    <>
     <div className="background">

        <div className="headerContent">

          <div className="headerParagraph">
            <div className="firstParagraph">
              <div className="header-container">
                <h1>Connect with Friends & Share Your World</h1>
                <p>Join our community to connect with friends and share your experiences.</p>
                  <div className="headerButtons"> 
                    <button className="signUpButton">Get Started</button>
                    <button className="learnMoreButton">Learn More</button>
                  </div>
              </div>
            </div>
          </div>

          <div className="headerImage">
            <img src={Photo1Img} alt="People connecting" />
          </div>
          
         </div>


      </div>
       <div className="home-page-features">
          <div className="feature-card">
            <FaCameraRetro className="feature-icon share-icon" />
            <div>
              <p className="header-feature">Share your moments</p>
              <p>Post photos, videos & updates</p>
            </div>
          </div>

          <div className="feature-card">
            <FaUserFriends className="feature-icon connect-icon" />
            <div>
              <p className="header-feature">Connect with friends</p>
              <p>Chat, call, and share experiences</p>
            </div>
          </div>

          <div className="feature-card">
            <FaFireAlt className="feature-icon trend-icon" />
            <div>
              <p className="header-feature">Discover New Trends</p>
              <p>Explore popular content and communities</p>
            </div>
          </div>

      </div>

      <div className="users-post">
        <h1>What's Happening Now</h1>
        <p>See the latest posts from our community</p>

        <div className="post-card">

        <div className="post-header">
          <img src={JoshuaImg} alt="User profile" className="post-profile-pic" />
          <div className="comment-section">
            <p className="post-username">Joshua Smith</p>
            <p className="post-comment">
              Just had an amazing day exploring the city! #adventure #fun
            </p>
          </div>
        </div>

        <div className="post-header">
          <img src={JoshuaImg} alt="User profile" className="post-profile-pic" />
          <div className="comment-section">
            <p className="post-username">Joshua Smith</p>
            <p className="post-comment">
              Late night coding session 💻🔥
            </p>
          </div>
        </div>

        <div className="post-header">
          <img src={JoshuaImg} alt="User profile" className="post-profile-pic" />
          <div className="comment-section">
            <p className="post-username">Joshua Smith</p>
            <p className="post-comment">
              Coffee + React = productivity ☕⚛️
            </p>
          </div>
        </div>

      </div>


      </div>
    </>
  );
}