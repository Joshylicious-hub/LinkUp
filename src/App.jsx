import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { SocialPage } from './pages/SocialPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagePage } from './pages/MessagePage';
import { useState } from 'react';
import JoshuaImg from './images/joshua.jpg';
import CyrilImg from './images/cyril.jpg';
import BulaguiImg from './images/bulagui.jpg';
import NiverioImg from './images/niverio.jpg';
import SophiaImg from './images/sophia.jpg';
import BulaguiLoveSophia from './images/bulaguilovesophia.png';
import ProfessionalImg from './images/professional.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputPost, setInputPost] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [saveUsername, setSaveUsername] = useState({});
  const [userData, setUserData] = useState([{
  firstname: 'Joshua',
  lastname: 'Andres',
  username: 'joshua',
  password: '123',
  id: crypto.randomUUID()
}, {
  firstname: 'Cyril',
  lastname: 'Vicente',
  username: 'cyril',
  password: '123',
  id: crypto.randomUUID()
}]);

const [social, setSocial] = useState([{
  name: 'Joshua Andres',
  email: '@JoshuaAndres',
  profile: JoshuaImg,
  caption: 'testing lamang ito',
  image: ProfessionalImg,
  post: JoshuaImg,
  reactions: {
    likes: 1300,
    comments: 256,
    shares: 82,
    liked: false
  },
  id: crypto.randomUUID()
}, {
  name: 'Cyril Vicente',
  email: '@CyrilVicente',
  profile: CyrilImg,
  caption: 'tite',
  image: CyrilImg,
  post: CyrilImg,
  reactions: {
    likes: 1540,
    comments: 573,
    shares: 923,
    liked: false
  },
  id: crypto.randomUUID()
}, {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902,
    liked: false
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902,
    liked: false
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902,
    liked: false
  },
  id: crypto.randomUUID()
},  {
  name: 'Justine Bulagui',
  email: '@JustineBulagui',
  profile: BulaguiImg,
  caption: 'Love na love ko si Sophia Bautista soon to be Sophia Bautista Bulagui 💖',
  image: BulaguiImg,
  post: BulaguiLoveSophia,
  reactions: {
    likes: 2330,
    comments: 948,
    shares: 902,
    liked: false
  },
  id: crypto.randomUUID()
}]);
  
  return (
    <Routes>
     <Route index element={<HomePage/>}></Route>

     <Route path="/login"
      element={<LoginPage
      userData={userData}
      setUserData={setUserData}
      saveUsername={saveUsername}
      setSaveUsername={setSaveUsername}
    />}></Route>

     <Route path="/signup" 
        element={<SignupPage 
        userData={userData}
        setUserData={setUserData}
     />}></Route>

     <Route path="/social" 
        element={<SocialPage 
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
     />}></Route>

     <Route path="/profile" 
      element={<ProfilePage 
      saveUsername={saveUsername}
      social={social}
      setSocial={setSocial}
      showModal={showModal}
      setShowModal={setShowModal}
      inputPost={inputPost}
      setInputPost={setInputPost}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
    />}></Route>

     <Route path="/message"
      element={<MessagePage/>}></Route>
    </Routes>
  ) 
}

export default App
