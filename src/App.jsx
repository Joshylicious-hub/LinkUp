import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { SocialPage } from './pages/SocialPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagePage } from './pages/MessagePage';
import { CoverPage } from './pages/CoverPage';
import { MyDayPage } from './pages/MyDayPage';
import { useState } from 'react';
import JoshuaImg from './images/joshua.jpg';
import CyrilImg from './images/cyril.jpg';
import BulaguiImg from './images/bulagui.jpg';
import NiverioImg from './images/niverio.jpg';
import SophiaImg from './images/sophia.jpg';
import BulaguiLoveSophia from './images/bulaguilovesophia.png';
import ProfessionalImg from './images/professional.jpg';
import GenesisImg from './images/genesis.jpg';
import WorkingImg from './images/fake.jpg';
import DefaultImg from './images/default.jpg';
import PharmaImg from './images/pharmacist.jpg';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [inputPost, setInputPost] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showComment, setShowComment] = useState(false);
  
  const [saveUsername, setSaveUsername] = useState({
    first: 'joshua',
    last: 'andres'
  });
  const [openPost, setOpenPost] = useState(false);
  
  const [userData, setUserData] = useState([{
  firstname: 'Joshua',
  lastname: 'Andres',
  email: '@JoshuaAndres',
  username: 'joshua',
  cover: WorkingImg,
  image: ProfessionalImg,
  password: '123',
  id: crypto.randomUUID()
}, {
  firstname: 'Cyril',
  lastname: 'Vicente',
  email: '@CyrilVicente',
  image: CyrilImg,
  cover: PharmaImg,
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


const [selectedUser, setSelectedUser] = useState([{
    name: 'Cyril Vicente',
    image: CyrilImg,
    comment: 'Nice post!',
    reactions: {
      likes: 12,
      comments: 5,
      shares: 3,
      liked: false
    },
    id: crypto.randomUUID()
  }, {
    name: 'Sophia Bautista',
    image: SophiaImg,
    comment: 'Great picture!',
    reactions: {
      likes: 20,
      comments: 8,
      shares: 1,
      liked: false
    },
    id: crypto.randomUUID()
  }, {
    name: 'Rexzielle Niverio',
    image: NiverioImg,
    comment: 'Amazing!',  
    reactions: {
      likes: 15,
      comments: 4,
      shares: 2,
      liked: false
    },
    id: crypto.randomUUID()
  }, {
    name: 'Joshua Andres',
    image: JoshuaImg,
    comment: 'Love this!',
    reactions: {
      likes: 30, 
      comments: 10,
      shares: 5,
      liked: false
    },
    id: crypto.randomUUID()
  }, {
    name: 'Justine Bulagui',
    image: BulaguiImg,
    comment: 'So beautiful!',
    reactions: {
      likes: 25,
      comments: 7,
      shares: 4,
      liked: false
    },
    id: crypto.randomUUID()
  }]);

  const [userStories, setUserStories] = useState([{
    id: 1,
    name: 'Joshua Andres',
    email: '@JoshuaAndres',
    image: ProfessionalImg,
    post: JoshuaImg
  }, {
    id: 2,
    name: 'Cyril Vicente',
    email: '@CyrilVicente',
    image: CyrilImg,
    post: CyrilImg
  }, {
    id: 3,
    name: 'Zielle Niverio',
    email: '@ZielleNiverio',
    image: NiverioImg,
    post: NiverioImg
  }, {
    id: 4,
    name: 'Genesis Cardeno',
    email: '@GenesisCardeno',
    image: GenesisImg,
    post: GenesisImg
  }, {
    id: 5,
    name: 'Justine Bulagui',
    email: '@JustineBulagui',
    image: BulaguiImg,
    post: BulaguiLoveSophia
  }, {
    id: 6,
    name: 'Sophia Bautista',
    email: '@SophiaBautista',
    image: SophiaImg,
    post: SophiaImg
  }]);
  
  
  return (
    <Routes>

     
     <Route path="/" index element={<HomePage/>}></Route>

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

     <Route path="/social/:id" 
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
        showComment={showComment}
        setShowComment={setShowComment}
        openPost={openPost}
        setOpenPost={setOpenPost}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
        userStories={userStories}
        setUserStories={setUserStories}
     />}></Route>

     <Route path="/profile/:id" 
      element={<ProfilePage 
      saveUsername={saveUsername}
      userData={userData}
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

      <Route path="/cover/:id"
      element={<CoverPage
      saveUsername={saveUsername}
      setSaveUsername={setSaveUsername}
      userData={userData}
      />}></Route>

      <Route
      path="/myday/:id"
      element={<MyDayPage
      userStories={userStories}
      setUserStories={setUserStories}
      />}
      >
      </Route>

    </Routes>
    
  ) 
}

export default App
