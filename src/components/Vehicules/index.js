const React = require('react');
import './style.css';
import { Link } from 'react-router-dom'

class Vehicules extends React.Component {
    render() {
      return (
        <div className="vehicules">
          <h1>SÉLECTIONNEZ PARMI UNE CENTAINE DE VÉHICULES</h1>
            <div className="wrapper-vignettes">
              <div className="vignettes">
                  <div className="picto left"><Link to={`/voitures`}>RENAULT Clio</Link></div> 
                  <div className="picto middle"><Link to={`/voitures`}>QUANTINO</Link></div> 
                  <div className="picto right"><Link to={`/voitures`}>Renault Twingo</Link></div> 
              </div>
              <div className="s-vignettes"> 
                  <div className="picto left"><Link to={`/voitures`}>FIAT TIpo</Link></div> 
                  <div className="picto middle"><Link to={`/voitures`}>PEUGEOT 208</Link></div> 
                  <div className="picto right"><Link to={`/voitures`}>Hiundai I10</Link></div> 
              </div> 
            </div> 
        </div>
      );
    }
  }
  
module.exports = Vehicules;