import '../../App.css';
import { Work } from './Work';
import  PortfolioImg1 from "../../pictures/portfolio 1.png";
import  PortfolioImg2 from "../../pictures/portfolio 2.png";
import  PortfolioImg3 from "../../pictures/portfolio 3.png";
import  PortfolioImg4 from "../../pictures/portfolio 4.png";
import  PortfolioImg5 from "../../pictures/portfolio 5.png";
import  PortfolioImg6 from "../../pictures/portfolio 6.png";


export function Works() { 

  const portfolioPosts = [
    {
      imgUrl: PortfolioImg1,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: PortfolioImg2,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: PortfolioImg3,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: PortfolioImg4,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: PortfolioImg5,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: PortfolioImg6,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
  ]
  return (
    <div className="workList-container">
      {portfolioPosts.map((post, index) => (
        <Work key={index} index={index} post={post} />
      ))}
    </div>
  )
}

