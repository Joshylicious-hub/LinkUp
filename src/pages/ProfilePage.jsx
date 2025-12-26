import JoshuaImg from '../images/joshua.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import SophiaImg from '../images/sophia.jpg';
import CyrilImg from '../images/cyril.jpg';
import GalaxyImg from '../images/galaxy.jpg';
import ProfessionalImg from '../images/professional.jpg';
import { 
FaHeart,
FaRegComment,
FaShare,
FaUser,
FaMapMarkerAlt,
FaGlobe,
FaCalendarAlt,
FaCog,
FaEllipsisH,
 FaEnvelope, 
 FaUserPlus,
 FaArrowLeft,
 FaEye,
 FaImage
} from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router";
import './ProfilePage.css';
import { useState } from 'react';
export function ProfilePage() {

  const navigate = useNavigate();
  
  const [openPhoto, setOpenPhoto] = useState(false);

  function changePhoto() {
    setOpenPhoto(true);
  }

  function exitChangePhoto() {
    setOpenPhoto(false);
  }

  function openModalPhoto() {
    if(openPhoto) {
      exitChangePhoto();
    }else{
      changePhoto();
    }
  }

  return (
    <>
    <title>LinkUp</title>
    <div className="profile-container-body">

      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={20} color="white" />
      </button>

      <div className="cover-container">

        <img 
        src={ProfessionalImg}
        className="background-image"
        onClick={openModalPhoto}
        />

      {openPhoto && (
      <div 
        className="modal-overlay" 
        onClick={exitChangePhoto} // closes if you click anywhere on overlay
      >
        <div className="change-photo-container">
          <Link className="photo-link" onClick={exitChangePhoto}>
          <FaEye style={{ marginRight: "8px" }} />
          View Story
          </Link>
        
        <Link className="photo-link" onClick={exitChangePhoto}>
          <FaUser style={{ marginRight: "8px" }} />
          See Profile Picture
        </Link>
        
        <Link className="photo-link" onClick={exitChangePhoto}>
          <FaImage style={{ marginRight: "8px" }} />
          Choose Profile Picture
        </Link>
        </div>
      </div>
      )}
        
        <h1>Joshua Andres  <BsPatchCheckFill color="#1DA1F2" /></h1>
        <p>@JoshuaAndres</p>
        <p>Web Developer | Tech Enthusiast</p>

        <div className="follow-container">
          <button className="user-plus"><FaUserPlus className="icon-color"/> Follow</button>
          <button className="user-plus"><FaEnvelope className="message-color"/> Message</button>
          <button className="user-plus"><FaCog className="settings-icon"/></button>
          <button className="user-plus"><FaEllipsisH className="dot-icon"/> </button>
        </div>

        <div className="profile-stats-container">
          <div><span>Posts</span></div>
          <div><span>820 Followers</span></div>
          <div><span>13.5k Following</span></div>
          <div><span>534 Highlights</span></div>
        </div>
        </div>


      <div className="profile-content-container">

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
          <input placeholder="What's on your mind?" className="input-element"></input>
          <button>Post</button>
          </div>

          <div className="profile-post-container">
            <div className="profile-image-container">
              <img src={JoshuaImg} className="profile-post-image"></img>
              <div>
                <p>Joshua Andres</p>
                <p className="email-element">@JoshuaAndres 2h</p>
              </div>
              <button className="button-element">...</button>
            </div>

            <div className="profile-caption-container">
              <p>tite kanaman gnweignoiwenognweubgnwenb fmewpgmpewnginweiogniowengingeiwengiwingeingoweno</p>
            </div>

            <div className="profile-user-post-container">
              <img src={GalaxyImg} className="galaxy-container"/>
            </div>

            <div className="profile-reaction-container">
              <p><FaHeart/> 1.3k</p>
              <p><FaRegComment/> 256</p>
              <p><FaShare/> 82</p>
            </div>
          </div>

          <div className="profile-post-container">
            <div className="profile-image-container">
              <img src={JoshuaImg} className="profile-post-image"></img>
              <div>
                <p>Joshua Andres</p>
                <p className="email-element">@JoshuaAndres 2h</p>
              </div>
              <button className="button-element">...</button>
            </div>

            <div className="profile-caption-container">
              <p>tite kanaman gnweignoiwenognweubgnwenb fmewpgmpewnginweiogniowengingeiwengiwingeingoweno</p>
            </div>

            <div className="profile-user-post-container">
              <img src={GalaxyImg} className="galaxy-container"/>
            </div>

            <div className="profile-reaction-container">
              <p><FaHeart/> 1.3k</p>
              <p><FaRegComment/> 256</p>
              <p><FaShare/> 82</p>
            </div>
          </div>

          <div className="profile-post-container">
            <div className="profile-image-container">
              <img src={JoshuaImg} className="profile-post-image"></img>
              <div>
                <p>Joshua Andres</p>
                <p className="email-element">@JoshuaAndres 2h</p>
              </div>
              <button className="button-element">...</button>
            </div>

            <div className="profile-caption-container">
              <p>tite kanaman gnweignoiwenognweubgnwenb fmewpgmpewnginweiogniowengingeiwengiwingeingoweno</p>
            </div>

            <div className="profile-user-post-container">
              <img src={GalaxyImg} className="galaxy-container"/>
            </div>

            <div className="profile-reaction-container">
              <p><FaHeart/> 1.3k</p>
              <p><FaRegComment/> 256</p>
              <p><FaShare/> 82</p>
            </div>
          </div>

          
        
        </div>

        

        <div className="friends-container">

          <div className="friends-element-container">
            <div className="friend-see-container">
              <p className="post-friends">Friends</p>
              <p className="see-all-color">See All</p>
            </div>
            
            <div className="online-friends-container">
              <img src={JoshuaImg} className="profile-post-image"/>
              <div className="online-friends-name">
                <p>Joshua Andres</p>
                <p className="status-element">Online</p>
              </div>
            </div>

            <div className="online-friends-container">
              <img src={CyrilImg} className="profile-post-image"/>
              <div className="online-friends-name">
                <p>Cyril Vicente</p>
                <p className="status-element">Online</p>
              </div>
            </div>

            <div className="online-friends-container">
              <img src={BulaguiImg} className="profile-post-image"/>
              <div className="online-friends-name">
                <p>Justine Bulagui</p>
                <p className="status-element">Online</p>
              </div>
            </div>

            <div className="online-friends-container">
              <img src={SophiaImg} className="profile-post-image"/>
              <div className="online-friends-name">
                <p>Sophia Bautista</p>
                <p className="status-element">Online</p>
              </div>
            </div>

          </div>

          <div className="profile-photos-container">
            <div className="see-photos-container">
              <p className="photos-element">Photos</p>
              <p className="view-all-color">View All</p>
            </div>

            <div className="photos-image-container">
              <div>
              <img src={GalaxyImg} className="photos-image-size"/>
              <img src={GalaxyImg} className="photos-image-size"/>
              </div>
              <div>
              <img src={GalaxyImg} className="photos-image-size"/>
              <img src={GalaxyImg} className="photos-image-size"/>
              </div>
            </div>
          </div>

          <div className="profile-life-container">
            <div className="profile-life-events-container">
              <p className='life-element'>Life Events</p>
              <p className="see-blue">See All</p>
            </div>

            <div className="profile-container">
              <div className="profile-container-element">
                <p>tite</p>
              </div>
              <div className="profile-container-element">
                <p>tite</p>
              </div>
            </div>
          </div>

          <div className="privacy-container">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Advertising</p>
          
          </div>


        </div>


      </div>

     </div>
    </>
  );
}