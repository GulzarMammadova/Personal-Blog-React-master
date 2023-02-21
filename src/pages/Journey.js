import '../App.css';
import { News } from './timeline/TimeLinePost';
import { useState } from 'react';

export function Journey() {
  const newsPosts = [
    {
      date: "02 January 2021",
      title: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      date: "29 January 2021",
      title: "Gow - command line tool to manage works",
      text: "Gow is cli tool written in golang using cobra",
    },
    {
      date: "02 February 2021",
      title: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      date: "01 March 2021",
      title: "Started designing what you are seeing right now!",
      text: "Gow is cli tool written in golang using cobra",
    },
    {
      date: "14 January 2022",
      title: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      date: "25 February 2022",
      title: "Gow - command line tool to manage works",
      text: "Gow is cli tool written in golang using cobra",
    },
    {
      date: "13 April 2022",
      title: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      date: "16 May 2022",
      title: "Started designing what you are seeing right now!",
      text: "Gow is cli tool written in golang using cobra",
    },
    {
      date: "27 January 2023",
      title: "The resolution, What am i gonna do?",
      text: "It’s all about the new year and works i have to do",
    },
    {
      date: "02 February 2023",
      title: "Started designing what you are seeing right now!",
      text: "Gow is cli tool written in golang using cobra",
    },

  ]

  const [filterValue, setFilterValue] = useState('date');


  return (
    <div className="journey">
      <div className="left-cont">
        <div className="journey-title">
          <img className='journey-img' src={require("../pictures/journey.png")} alt='pic'></img>
          <div className="journey-title-text">
            <h1>The resolution, What am<br></br> I gonna do?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          </div>

        </div>
        <p className='journey-text'>
          <p><b>The standard Lorem Ipsum passage, used since the 1500s</b></p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          <p>Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"<p><b>1914 translation by H. Rackham</b></p>
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>
          <p>1914 translation by H. Rackham
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone </p>
        </p>
      </div>
      <div className="right-cont">
        <div><h3>Time line</h3></div>
        <div>
          <select className="selected-year" value={filterValue} onChange={(e) => setFilterValue(e.target.value)}>
            <option className="option" value="year">2021</option>
            <option className="option" value="year">2022</option>
            <option className="option" value="year">2023</option>
          </select>
        </div>
        <div className="newsList-container">
          {newsPosts.map((post, index) => (
            <News key={index} index={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}