import './SocialPage.css';
import { SocialNavBar } from '../components/SocialNavBar';
import { SocialMedia } from '../components/SocialMedia';
import { SocialRightNavBar } from '../components/SocialRightNavBar';

export function SocialPage({
  userData, 
  setUserData, 
  saveUsername, 
  setSaveUsername, 
  showModal, 
  setShowModal,
  inputPost,
  setInputPost,
  social,
  setSocial,
  isLoading,
  setIsLoading
  }) {
  console.log(userData);
  return (
    <>
    <title>LinkUp</title>
    <div className="body-container">
    <SocialNavBar />

    <SocialMedia 
      userData={userData} 
      setUserData={setUserData}
      saveUsername={saveUsername}
      setSaveUsername={setSaveUsername}
      showModal={showModal}
      setShowModal={setShowModal}
      inputPost={inputPost}
      setInputPost={setInputPost}
      social={social}
      setSocial={setSocial}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
     />

    <SocialRightNavBar 
      userData={userData} 
      setUserData={setUserData} 
      saveUsername={saveUsername}
     setSaveUsername={setSaveUsername}
     />    
     
    </div>

     
    </>
  );
}