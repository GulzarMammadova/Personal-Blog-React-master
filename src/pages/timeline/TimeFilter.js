import '../../App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { News } from './TimeLinePost';

export function TimeFilter() {
    const [state, setState] = useState({
     newsPosts: [
        {
          category: "2021",
          date: "02 January 2021",
          title: "The resolution, What am i gonna do?",
          text: "It’s all about the new year and works i have to do",
        },
        {
          category: "2022",
          date: "14 January 2022",
          title: "The resolution, What am i gonna do?",
          text: "It’s all about the new year and works i have to do",
        },
        {
          category: "2023",
          date: "27 January 2023",
          title: "The resolution, What am i gonna do?",
          text: "It’s all about the new year and works i have to do",
        },    
      ],
      category:"All"
    });

    function handleChange({ target: { name, value } }) {
        setState(prev => ({ ...prev, [name]: value }));
      }
      let newsPosts = state.newsPosts;
      if (state.category && state.category !== "all") {
        newsPosts = newsPosts.filter(d => d.category === state.category);
      }
    return (
    <div className="timeFilter">
          <select className="selected-year"
          id="category"
          name="category"
          value={state.category}
          onChange={handleChange}
        >
          <option className="option">All</option>
          {state.newsPosts.map((d, i) => (
            <option className="option" key={i}>{d.category}</option>
          ))}
          </select>
          {newsPosts.map((d, i) => (
          <News key={i} date={d.date} title={d.title} text={d.text} />
      ))}
        </div>
 )
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TimeFilter/>, rootElement);