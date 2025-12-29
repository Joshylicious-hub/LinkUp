import ProfessionalImg from '../images/professional.jpg';
import { 
FaUser,
FaCog,
FaEllipsisH,
 FaEnvelope, 
 FaUserPlus,
 FaArrowLeft,
 FaEye,
 FaImage
} from "react-icons/fa";
import { useState } from 'react';
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate, Link } from "react-router";

export function ProfileBackground({ saveUsername }) {

  const navigate = useNavigate();
  
  const [openPhoto, setOpenPhoto] = useState(false);

  function changePhoto() {
    setOpenPhoto(true);
  }

  function exitChangePhoto() {
    setOpenPhoto(false);
  }

  function openModalPhoto() {
    if(openPhoto) {
      exitChangePhoto();
    }else{
      changePhoto();
    }
  }
  return (
    <>
    <button
        className="back-button-profile"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={20} color="white" />
      </button>

      <div className="cover-container">

        <img 
        src={ProfessionalImg}
        className="background-image"
        onClick={openModalPhoto}
        />

      {openPhoto && (
      <div 
        className="open-modal-overlay" 
        onClick={exitChangePhoto} 
       >
        <div 
         className="change-photo-container" 
         onClick={(e) => e.stopPropagation()}
         >
          
          <Link className="photo-link" onClick={exitChangePhoto}>
          <FaEye style={{ marginRight: "8px" }} />
          View Story
          </Link>
        
        <Link className="photo-link" onClick={exitChangePhoto}>
          <FaUser style={{ marginRight: "8px" }} />
          See Profile Picture
        </Link>
        
        <Link className="photo-link" onClick={exitChangePhoto}>
          <FaImage style={{ marginRight: "8px" }} />
          Choose Profile Picture
        </Link>

        <Link className="photo-link" onClick={exitChangePhoto}>
          <FaImage style={{ marginRight: "8px" }} />
          Edit Cover Photo
        </Link>
        </div>
      </div>
      )}
        
        <h1>
          {saveUsername.first} {saveUsername.last}

          {saveUsername.first === 'Joshua' && saveUsername.last === 'Andres'
            ? <BsPatchCheckFill color="#1DA1F2" className="verified"/>
            : null}
        </h1>

        <p>@{saveUsername.first}{saveUsername.last}</p>
        <p>Web Developer | Tech Enthusiast</p>

        <div className="follow-container">
          <button className="user-plus"><FaUserPlus className="icon-color"/> Follow</button>
          <button className="user-plus"><FaEnvelope className="message-color"/> Message</button>
          <button className="user-plus"><FaCog className="settings-icon"/></button>
          <button className="user-plus"><FaEllipsisH className="dot-icon"/> </button>
        </div>

        <div className="profile-stats-container">
          <div><span>Posts</span></div>
          <div><span>820 Followers</span></div>
          <div><span>13.5k Following</span></div>
          <div><span>534 Highlights</span></div>
        </div>
        </div>
      </>
  );
}