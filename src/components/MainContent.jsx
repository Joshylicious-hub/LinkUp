import Photo1Img from '../images/photo1.png';

export function MainContent() {
  return (
     <div className="background">

        <div className="headerContent">

          <div className="headerParagraph">
            <div className="firstParagraph">
              <div className="header-container">
                <h1>Connect with Friends & Share Your World</h1>
                <p>Join our community to connect with friends and share your experiences.</p>
                  <div className="headerButtons"> 
                    <button className="signUpButton">Sign Up</button>
                    <button className="learnMoreButton">Learn More</button>
                  </div>
              </div>
            </div>
          </div>

          <div className="headerImage">
            <img src={Photo1Img} alt="People connecting" />
          </div>
          


         </div>

      </div>
  );
}