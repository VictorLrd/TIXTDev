import React, { Component } from 'react'

class Header extends Component {
    render() {
      return (
        <div className="header">
          <div className="wrapperhead">
          <div className="headerlogo"/>
          <div className="menu">
              <h1 className="inscription">M'inscrire</h1>
              <h1 className="connexion">Me connecter</h1>
              <h1 className="infos">Plus d'infos ?</h1>
              <h1 className="louer">Louer ma voiture</h1>
          </div>
        </div>
        </div>
      );
    }
  }

  export default Header;