import '../../App.css';
import { Post } from './Post';
import  img1 from "../../pictures/blog 1.png";
import  img2 from "../../pictures/blog 2.png";
import  img3 from "../../pictures/blog 3.png";
import  img4 from "../../pictures/blog 4.png";
import  img5 from "../../pictures/blog 5.png";

export function Posts() { 

  const blogPosts = [
    {
      imgUrl: img1,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: img2,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: img3,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: img4,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
    {
      imgUrl: img5,
      title: "There is more than you know",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
      link: "Read more"
    },
  ]
  return (
    <div className="postList-container">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
    </div>
  )
}

