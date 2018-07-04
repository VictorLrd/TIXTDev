const React = require('react');
import './style.css';
import BarreLogin from '../BarreLogin'
import { Link } from 'react-router-dom'

class Header extends React.Component {
    render() {
      return (
        <div className="header">
          <div className="wrapperhead">
          <Link to={`/home`}>
            <div className="headerlogo"/>
          </Link>
          <div className="menu">
              <h1 className="inscription"><Link to={`/inscription`}>S'inscrire</Link></h1>
              <h1 className="infos">Plus d'infos ?</h1>
              <h1 className="louer"><Link to={`/new_voiture`}>Louer ma voiture</Link></h1>
          </div>
          <div>
          <BarreLogin/>
          </div>
        </div>
        <div className="slider">
        
          <h1>Louer une voiture n'as jamais été aussi facile ! <Link to={`/voitures`}>Venez voir !</Link></h1>
          
        </div>
        </div>
      );
    }
  }

module.exports = Header;