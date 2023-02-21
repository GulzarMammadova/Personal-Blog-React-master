import '../../App.css'; 
import './WorkList'

export const Work = ({  
    post: { imgUrl, title, text, link }, index }) => {
      return (  
        <div className="work-container">
          <img className="image" src={imgUrl} alt="post" />
          <div className="work-description">
          <h3 className="heading">{title}</h3>
          <p className="text">{text}</p>
          <p className="link">{link}</p>
          </div>
        </div>
      );
    };