import '../App.css';
import { Link } from 'react-router-dom';

export function ButtonsField(){
    return(
        <div className='buttons'>
            <button className="btn-small"><Link to="/about">About me</Link></button>
            <button className="btn-big"><Link to="/portfolio">😮 Let’s see portfolios</Link></button>
        </div>
    )
} 