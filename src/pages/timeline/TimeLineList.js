import '../../App.css';
import { News } from './TimeLinePost';


export function NewsList() {
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
        // {
        //     date: "14 January 2022",
        //     title: "The resolution, What am i gonna do?",
        //     text: "It’s all about the new year and works i have to do",
        // },
        // {
        //     date: "25 February 2022",
        //     title: "Gow - command line tool to manage works",
        //     text: "Gow is cli tool written in golang using cobra",
        // },
        // {
        //     date: "13 April 2022",
        //     title: "The resolution, What am i gonna do?",
        //     text: "It’s all about the new year and works i have to do",
        // },
        // {
        //     date: "16 May 2022",
        //     title: "Started designing what you are seeing right now!",
        //     text: "Gow is cli tool written in golang using cobra",
        // },
        // {
        //     date: "27 January 2023",
        //     title: "The resolution, What am i gonna do?",
        //     text: "It’s all about the new year and works i have to do",
        // },
        // {
        //     date: "02 February 2023",
        //     title: "Started designing what you are seeing right now!",
        //     text: "Gow is cli tool written in golang using cobra",
        // },

    ]
    return (
        <div className="newsList-container">
            {newsPosts.map((post, index) => (
                <News key={index} index={index} post={post} />
            ))}
        </div>
    )
}

