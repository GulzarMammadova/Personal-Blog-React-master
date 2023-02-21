import '../../App.css'; 
import './TimeLineList'

export const News = ({  
    post: { title, text, date}, index }) => {
      return (  
        <div className="news-container">
          <p className="date">{date}</p>
          <div className="news-description">
          <h3 className="heading">{title}</h3>
          <p className="text">{text}</p>
          </div>
        </div>
      );
    };