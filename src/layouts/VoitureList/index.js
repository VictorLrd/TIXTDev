import React, { Component } from 'react'
import Header from '../../components/Header';
import Voiture_detail from '../../containers/voiture_detail';
import Voiture_list from '../../containers/voiture_list';
import Footer from '../../components/Footer';

class VoitureList extends Component {


    render () {
        return (
            <div>
                <Header/>
                <Voiture_list/>
                <Voiture_detail/>
            </div>
            
            
        )
    }
   
}



export default VoitureList;