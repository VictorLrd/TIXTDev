import React, { Component } from 'react'
import VehiculeList from '../../components/VehiculeList'
import VehiculeCard from '../../components/VehiculeCard'

class VoitureList extends Component {


    render () {
        return (
            <div className="col-md-8">
                <VehiculeList/>
            </div>
            
            
        )
    }
   
}



export default VoitureList;