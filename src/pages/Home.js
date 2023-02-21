import '../App.css';
import {ButtonsField} from './ButtonsField'

export function Home() {
  return (
    <div className="main-slider">
    <div className="main-content">
    <img id='pic-left' src={require("../pictures/Saly-13.png")} alt='pic'></img>
      <h1>Hey there 👋<br></br>I am Amirhossein</h1>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>

   <ButtonsField/>

  <img  id='pic-right' src={require('../pictures/Saly-8.png')} alt='pic'></img> 
    </div>
  );
}


