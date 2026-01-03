import Photo1Img from '../images/photo1.png';
import JoshuaImg from '../images/joshua.jpg';
import TorukImg from '../images/toruk.jpg';
import JakeImg from '../images/jake.jpeg';
import NeytiriPostImg from '../images/neytiripost.jpg';
import NeytiriImg from '../images/neytiri.jpeg';
import QuaritchImg from '../images/quaritch.jpg';
import QuaritchPostImg from '../images/quaritchpost.jpg';
import { 
  FaCameraRetro, 
  FaUserFriends, 
  FaFireAlt,
  FaUserCircle, 
  FaShareAlt
 } from "react-icons/fa";

export function MainContent() {
  return (
    <>
    <title>LinkUp</title>
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
        <p className="post-description">See the latest posts from our community</p>

        <div className="post-card">

        <div className="post-header">
          <img src={QuaritchPostImg} alt="User profile" className="post-profile-pic" />

          <div className="comment-section">
            <div className="comment-top">
              <img src={QuaritchImg} className="post-profile-user" />

              <div className="post-comment-container">
                <p className="post-username">Colonel Miles Quaritch</p>
                <p className="post-comment">@ColonelQuaritch</p>
              </div>

            </div>

            <p className="post-title">Nice and smooth… unlike my last battle</p>
          </div>
        </div>


        <div className="post-header">
          <img src={TorukImg} alt="User profile" className="post-profile-pic" />

          <div className="comment-section">
            
            <div className="comment-top">
              <img src={JakeImg} className="post-profile-user" />
              <div className="post-comment-container">
                <p className="post-username">Jake Sully</p>
                <p className="post-comment">@JakeSully</p>
              </div>
            </div>

            <p className="post-title">Clean UI and smooth animations — even the Na’vi would approve 🌿💙</p>
          </div>
        </div>


        <div className="post-header">
          <img src={NeytiriPostImg} alt="User profile" className="post-profile-pic" />

          <div className="comment-section">
            <div className="comment-top">
              <img src={NeytiriImg} className="post-profile-user" />

              <div className="post-comment-container">
                <p className="post-username">Neytiri</p>
                <p className="post-comment">@NeytiriLoveJake</p>
              </div>
            </div>

            <p className="post-title">Humans actually made something that feels… alive? Impressive 🌿💙</p>
          </div>
        </div>

      </div>

    </div>

    <div className="join-community-section">
      <h1>Join Our Community Today!</h1>
        <div className="join-community-content">
          <div className="join-community-card">
            <FaUserCircle className="community-icon profile-icon" />
            <p>Create Your Profile</p>
          </div>
          <div className="join-community-card">
            <FaUserFriends className="community-icon friends-icon" />
            <p>Follow Friends</p>
          </div>
          <div className="join-community-card">
             <FaShareAlt className="community-icon share-icon" />
            <p>Share & Engage</p>
          </div>
        </div>
    </div>
    </>
  );
}