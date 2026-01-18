import { FaXmark } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router";
import "./MyDayPage.css";

export function MyDayPage({ userStories }) {
  const navigate = useNavigate();
  
  const { id } = useParams(); 

  const story = userStories?.find(
    (item) => String(item.id) === id
  );

  if (!story) return null;

  return (
    <>
      <title>LinkUp</title>

      <div className="stories-container">

        
        <div className="logo-myday-container">
          <h1 className="logo-element-myday">LinkUp</h1>
        </div>

       
        <div className="image-myday-container">

         
          <div className="username-myday">
            <img
              src={story.image}
              className="user-image-myday"
              alt="user"
            />
            <div>
              <p>{story.name}</p>
              <p>{story.email}</p>
            </div>
          </div>

          
          <img
            src={story.post}
            className="user-post-myday"
            alt="story"
          />
        </div>

        
        <div className="back-myday-container">
          <button onClick={() => navigate(-1)}>
            <FaXmark />
          </button>
        </div>

      </div>
    </>
  );
}
