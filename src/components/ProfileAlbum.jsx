import JoshuaImg from '../images/joshua.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import SophiaImg from '../images/sophia.jpg';
import CyrilImg from '../images/cyril.jpg';
import GalaxyImg from '../images/galaxy.jpg';

export function ProfileAlbum({ saveUsername }) {
  return (
    
     <div className="friends-container">
    
              <div className="friends-element-container">
                <div className="friend-see-container">
                  <p className="post-friends">Friends</p>
                  <p className="see-all-color">See All</p>
                </div>
                
                <div className="online-friends-container">
                  <img src={JoshuaImg} className="profile-post-image"/>
                  <div className="online-friends-name">
                    <p>{saveUsername.first} {saveUsername.last}</p>
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
  );
}