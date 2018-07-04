import React, { Component } from 'react'
import VehiculeNouveau from '../../components/VehiculeNouveau';
import Header from '../../components/Header';
import Footer from '../../components/Footer';



class VoitureInscription extends Component {


    render () {
        return (
            <div>
                <Header/>
                <VehiculeNouveau/>
                <Footer/>
            </div>
            
            
        )
    }
   
}



export default VoitureInscription;