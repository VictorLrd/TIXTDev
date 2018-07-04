import React, { Component } from 'react';
import { Steps, Button, message } from 'antd';
import VoitureProfil from '../../components/VehiculeProfil';
import UserLogin from '../../components/Login';
import RecapInscription from '../../components/RecapInscription';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


class InscriptionLayout extends Component {

  render() {
    return (
      <div>
        <Header/>
        <UserLogin/>
        <Footer/>
      </div>
    );
  }
}

export default InscriptionLayout;