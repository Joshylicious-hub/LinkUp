import './MessagePage.css';
import { IoArrowBack, IoSearch } from "react-icons/io5";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

import JoshuaImg from '../images/joshua.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import SophiaImg from '../images/sophia.jpg';
import CyrilImg from '../images/cyril.jpg';
import NiverioImg from '../images/niverio.jpg';
import GenesisImg from '../images/genesis.jpg';
import AngelicaImg from '../images/angelica.jpg';
import { useNavigate } from "react-router";
import GalaxyImg from '../images/galaxy.jpg';
import ProfessionalImg from '../images/professional.jpg';

export function MessagePage() {
  const navigate = useNavigate();

  return (
   <>
   <title>LinkUp</title>
    <div className="message-body-container">

      <div className="user-message-container">
        <div className="search-user-message-container">

          <div className="back-and-message-container">
            <button onClick={() => navigate("/social")} className="back-button">
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

      <div className="chat-message-container">
        <div className="conversation-container">

          <div className="chat-conversation-container">
           <img src={CyrilImg} className="user-image-profile" />
           <div className="user-conversation-container">
           <p>Cyril Vicente</p>
           <p>@CyrilVicente</p>
           </div>
           <FaPhone />
          <FaPhoneAlt />
           </div>

        </div>
      </div>

      <div className="share-message-container">

        <div className="share-content-container">
          <p className="contact-element">Contact Info & Media</p>

          <div className="share-user-row">
            <img src={CyrilImg} className="shared-image-profile" />

            <div className="user-information-container">
              <p className="user-info-name">Cyril Vicente</p>
              <p className="user-info-username">@CyrilVicente</p>
            </div>

          </div>

        <div className="media-container">
          <p className="contact-element">Shared Media</p>
          <div className="shared-image-media">
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
            <img src={CyrilImg} className="shared-image-contact" />
          </div>
        </div>

        <div className="shared-files-container">
          <div className="files-container">
            <p className="shared-name">Shared Files</p>
            <p className="see-name">See All</p> 
          </div>

        <div className="share-files">
           <img src={CyrilImg} className="attachment-image" />

            <div className="user-information-container">
              <p className="attachment-name">Cyril Vicente</p>
              <p className="attachment-subtitle">@CyrilVicente</p>
            </div>

         </div>

         <div className="share-files">
           <img src={CyrilImg} className="attachment-image" />

            <div className="user-information-container">
              <p className="attachment-name">Cyril Vicente</p>
              <p className="attachment-subtitle">@CyrilVicente</p>
            </div>

         </div>

        </div>

        </div>

       


      </div>
    </div>
   </>
    
  );
}