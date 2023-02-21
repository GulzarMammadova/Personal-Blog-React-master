import '../../App.css'; 
import './PostList'

export const Post = ({  
    post: { imgUrl, title, text, link }, index }) => {
      return (  
        <div className="post-container">
          <img className="image" src={imgUrl} alt="post" />
          <h3 className="heading">{title}</h3>
          <p className="text">{text}</p>
          <p className="link">{link}</p>
        </div>
      );
    };