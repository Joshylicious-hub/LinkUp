import { ProfileBackground } from '../components/ProfileBackground';
import { ProfilePost } from '../components/ProfilePost';
import { ProfileAlbum } from '../components/ProfileAlbum';
import './ProfilePage.css';


export function ProfilePage({
  saveUsername,
  social,
  setSocial,
  showModal,
  setShowModal,
  inputPost,
  setInputPost,
  isLoading,
  setIsLoading
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
      showModal={showModal}
      setShowModal={setShowModal}
      inputPost={inputPost}
      setInputPost={setInputPost}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      />

        
      <ProfileAlbum
      saveUsername={saveUsername}
      />
       


      </div>

     </div>
    </>
  );
}