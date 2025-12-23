import JoshuaImg from '../images/joshua.jpg';
import CyrilImg from '../images/cyril.jpg';
import BulaguiImg from '../images/bulagui.jpg';
import NiverioImg from '../images/niverio.jpg';
import SophiaImg from '../images/sophia.jpg';

export function MyDay() {
  return (
     <div className="social-media-myday">                 
                          <div className="joshuastories">
                         <img src={JoshuaImg} className="dayStories"/>
                          <p>Joshua Andres</p>
                          </div>
        
                          <div className="cyrilstories">
                          <img src={CyrilImg} className="dayStories"/>
                           <p>Cyril Vicente</p>
                          </div>
        
                          <div className="bulaguistories">
                            <img src={NiverioImg} className="dayStories"/>
                            <p>Rexzielle Niverio</p>
                          </div>
        
                          <div className="sophiastories">
                            <img src={SophiaImg} className="dayStories"/>
                            <p>Sophia Bautista</p>
                          </div>                  
                        </div>
  );
}