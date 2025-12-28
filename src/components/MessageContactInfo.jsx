import CyrilImg from '../images/cyril.jpg';

export function MessageContactInfo() {
  return (
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
  );
}