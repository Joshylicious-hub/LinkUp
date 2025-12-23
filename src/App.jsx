import { Routes, Route } from 'react-router';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { SocialPage } from './pages/SocialPage';
import { ProfilePage } from './pages/ProfilePage';
import { MessagePage } from './pages/MessagePage';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([{
  firstname: 'Joshua',
  lastname: 'Andres',
  username: 'joshua',
  password: '123',
  id: crypto.randomUUID()
}, {
  firstname: 'Cyril',
  lastname: 'Vicente',
  username: 'Cyril',
  password: '123',
  id: crypto.randomUUID()
}]);
  
  return (
    <Routes>
     <Route index element={<HomePage/>}></Route>
     <Route path="/login" element={<LoginPage userData={userData} setUserData={setUserData}/>}></Route>
     <Route path="/signup" element={<SignupPage userData={userData} setUserData={setUserData}/>}></Route>
     <Route path="/social" element={<SocialPage userData={userData} setUserData={setUserData}/>}></Route>
     <Route path="/profile" element={<ProfilePage/>}></Route>
     <Route path="/message" element={<MessagePage/>}></Route>
    </Routes>
  ) 
}

export default App
