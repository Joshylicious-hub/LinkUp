import { ProfileBackground } from '../components/ProfileBackground';
import { ProfilePost } from '../components/ProfilePost';
import { ProfileAlbum } from '../components/ProfileAlbum';
import './ProfilePage.css';

export function ProfilePage({
  saveUsername,
  social,
  setSocial
 }) {

  return (
    <>
    <title>LinkUp</title>
    <div className="profile-container-body">

      <ProfileBackground
      saveUsername={saveUsername}
      />


      <div className="profile-content-container">

      <ProfilePost
      social={social}
      saveUsername={saveUsername}
      setSocial={setSocial}
      />

        
      <ProfileAlbum
      saveUsername={saveUsername}
      />
       


      </div>

     </div>
    </>
  );
}