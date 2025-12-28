import { 
  FaPhone,        
  FaVideo,       
  FaRegBell,      
  FaEllipsisH    
} from "react-icons/fa";
import { FiSend, FiPaperclip, FiMic } from "react-icons/fi";
import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';

export function MessageUserInteraction() {
  return (
     <div className="chat-message-container">
            <div className="conversation-container">
    
              <div className="chat-conversation-container">
               <img src={CyrilImg} className="user-image-profile" />
    
               <div className="user-chats-container">
                <p className="username">Cyril Vicente</p>
                <p className="username-subtitle">@CyrilVicente</p>
               </div>
    
               <div className="call-icons">
                <FaPhone className="icon" />
                <FaVideo className="icon" />
                <FaRegBell className="icon" />
                <FaEllipsisH className="icon" />
              </div>
    
               </div>
               
              <div className="chat-messages-container">
               <div className="message-chat-container"> 
                <img src={CyrilImg} className="user-image-profile" />
                <div className="received-message-container">
                  <p className="received-message-text">Tara kain? </p>
                  <span className="message-time">10:00 AM</span>
                </div>
                
               </div>
    
                <div className="reply-chat-container"> 
                <div className="received-message-container">
                  <p className="received-message-text">Sige! Saan? </p>
                  <span className="message-time">10:00 AM</span>
                </div>
                 <img src={JoshuaImg} className="user-image-profile" />
               </div>
    
                <div className="message-chat-container"> 
                <img src={CyrilImg} className="user-image-profile" />
                <div className="received-message-container">
                  <p className="received-message-text">Kahit saan gusto mo sa santiago? </p>
                  <span className="message-time">10:00 AM</span>
                </div>
                
               </div>
    
               <div className="reply-chat-container"> 
                <div className="received-message-container">
                  <p className="received-message-text">hihi sure</p>
                  <span className="message-time">10:00 AM</span>
                </div>
                 <img src={JoshuaImg} className="user-image-profile" />
               </div>
    
                 <div className="message-chat-container"> 
                <img src={CyrilImg} className="user-image-profile" />
                <div className="received-message-container">
                  <p className="received-message-text">Nu oras?</p>
                  <span className="message-time">10:00 AM</span>
                </div>
                
               </div>
    
               <div className="reply-chat-container"> 
                <div className="received-message-container">
                  <p className="received-message-text">Mga 12</p>
                  <span className="message-time">10:00 AM</span>
                </div>
                 <img src={JoshuaImg} className="user-image-profile" />
               </div>
    
               <div className="message-chat-container"> 
                <img src={CyrilImg} className="user-image-profile" />
                <div className="received-message-container">
                  <p className="received-message-text">Sige Tara!</p>
                  <span className="message-time">10:00 AM</span>
                </div>
                
               </div>
    
              </div>
    
               <div className="message-input-container">
                <button className="attachment-button">
                  <FiPaperclip size={20} color="#555" />
                </button>
    
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="message-input-box"
                />
    
                <button className="microphone-button">
                  <FiMic size={20} color="#ffffff" />
                </button>
    
                <button className="send-message-button">
                  <FiSend size={20} color="#ffffff" />
                </button>
              </div>
    
            </div>
          </div>
  );
}