import './SocialPage.css';
import { SocialNavBar } from '../components/SocialNavBar';
import { SocialMedia } from '../components/SocialMedia';
import { SocialRightNavBar } from '../components/SocialRightNavBar';

export function SocialPage({userData, setUserData}) {
  console.log(userData);
  return (
    <>
    <title>LinkUp</title>
    <div className="body-container">
    <SocialNavBar />
    <SocialMedia userData={userData} setUserData={setUserData} />
    <SocialRightNavBar userData={userData} setUserData={setUserData}/>    
    </div>

     
    </>
  );
}