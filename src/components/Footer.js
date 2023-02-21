import '../App.css';

export function Footer() {
  return (
    <div className='footer'>
      <p  className="copyright">Copyright © 2021 All rights reserved.</p>
      <div className="socialMedia">
          <img src={require('../pictures/iconfinder_github-social-media_765246 1.png')} alt='pic'></img> 
          <img src={require('../pictures/iconfinder_twitter_317720 1.png')} alt='pic'></img> 
          <img src={require('../pictures/iconfinder_dribble_2916232 1.png')} alt='pic'></img> 

      </div>
      <p>Source code available</p>
    </div>
  );
}


