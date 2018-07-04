import React, { Component } from 'react'
import {connect} from 'react-redux'
import {selectVoiture} from '../actions/index'
import {bindActionCreators} from 'redux'
import { Button, Card} from 'material-design-for-react';
import { Input } from 'antd';

const Search = Input.Search;

const PRIX = "Prix par jour (en euros) :"
class VoitureList extends Component {

    constructor(props){
        super(props),
        this.state={
            vehicules: this.props.voitures,
            marque:""
        }
    }

    componentDidMount() {
        fetch('http://localhost:4007/voiture',{method: 'get',
        mode: 'cors',cache:'default'
        }).then(data => data.json())
        .then(data => this.setState({vehicules : data}))
      }

    rechercher() {
        console.log(this.state.marque);
        var test = `http://localhost:4007/filtreVehicule/${this.state.marque}`
        fetch(test,{method: 'get',
        mode: 'cors',cache:'default'
        }).then(data => data.json())
        .then(data => this.setState({vehicules : data}))
      }

      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(name);
        this.setState({
          [name]: value
        });
    
      }


    render () {
        return (
            <div className="col-md-8">
            <Input placeholder="Modèle (ex:BMW..)" type="text" name="marque" onChange={this.handleChange.bind(this)} />
            <Button  onClick={() => this.rechercher()}>
              Rechercher
            </Button>
                <ul>
                    
                    { 
                        this.state.vehicules.map(voiture => {
                        return (
                                <li key={voiture.voiture_id}>
                                        <Card style={{ width: '500px' }} 
                                            title={voiture.marque} subtitle = {`${PRIX}${voiture.prix}`}
                                            shadow={false}
                                            orientation='horizontal'
                                            image={"/src/audi.jpg"} imagePosition='left'> 
                                            <Button onClick={ () => {this.props.selectVoiture(voiture) }} > Voir </Button>
                                        </Card>
                                </li>
                                
                        )
                    })}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        voitures : state.voitures
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({selectVoiture:selectVoiture},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(VoitureList)