import '../App.css';
import { ButtonsField } from './ButtonsField'


export function Contact() {
  return (
    <div className="contact">
      <img className='contact-img' src={require("../pictures/contact.png")} alt='pic'></img>
      <div className="contact-content">
        <h1>You can reach me any time🙂 </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
        <div className='content-links'>
          <ul>
            <li>Twitter: amirhwsin</li>
            <li>Github: amireshoon</li>
            <li>Dribble: amireshoon</li>
            <li>Telegram: GeekDreamer</li>
            <li>Email: amirhwsin@outlook.com</li>
          </ul>
        </div>
        <ButtonsField />
      </div>
    </div>
  );
}


