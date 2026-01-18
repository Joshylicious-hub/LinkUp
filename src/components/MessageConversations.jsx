import { useNavigate } from "react-router";
import { IoArrowBack, IoSearch } from "react-icons/io5";
import BulaguiImg from '../images/bulagui.jpg';
import SophiaImg from '../images/sophia.jpg';
import NiverioImg from '../images/niverio.jpg';
import GenesisImg from '../images/genesis.jpg';
import AngelicaImg from '../images/angelica.jpg';
import CyrilImg from '../images/cyril.jpg';

export function MessageConversations() {
  const navigate = useNavigate();
  return (
     <div className="user-message-container">
            <div className="search-user-message-container">
    
              <div className="back-and-message-container">
                <button onClick={() => navigate(-1)} className="back-button">
                  <IoArrowBack size={20} />
                </button>
                <p>Conversations</p>
              </div>
    
             <div className="search-box">
              <IoSearch className="search-icon" />
              <input type="text" placeholder="Search" />
            </div>
    
            <div className="user-conversation-container">
             <div className="image-container">
              <img src={BulaguiImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Justine Bulagui</p>
                  <p className="user-subtitle">Tara singot tayo shabu</p>
                </div>
             </div>
    
              <div className="image-container">
              <img src={CyrilImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Cyril Vicente</p>
                  <p className="user-subtitle">San tayo punta?</p>
                </div>
             </div>
    
             <div className="image-container">
              <img src={SophiaImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Sophia Bautista</p>
                  <p className="user-subtitle">Gala tayo america dzai!</p>
                </div>
             </div>
    
    
            <div className="image-container">
              <img src={NiverioImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Zielle Niverio</p>
                  <p className="user-subtitle">Ra ml nong!</p>
                </div>
             </div>
    
            <div className="image-container">
              <img src={GenesisImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Genesis Cardeno</p>
                  <p className="user-subtitle">Ano nanaman yon?</p>
                </div>
             </div>
    
             <div className="image-container">
              <img src={AngelicaImg} className="user-image-profile" />
               <div className="text-container">
                  <p className="user-name">Angelica Bumanlag</p>
                  <p className="user-subtitle">Bes tara sama phia</p>
                </div>
             </div>
    
             
    
    
             </div>
            </div>
          </div>
    
  );
}