import React, { Component } from 'react';


import Input from 'antd/lib/input';
import ImageVoiture from '../ImageVoiture';
import { DatePicker, InputNumber, Cascader, Form, Button, notification } from 'antd';
const { RangePicker } = DatePicker;
const FormItem = Form.Item;

const options = [{
  value: 'Manuelle',
  label: 'Manuelle',
}, {
  value: 'Automatique',
  label: 'Automatique',

}];


const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const openNotification = () => {
  notification.open({
    message: 'Félicitations',
    description: 'Vous avez crée votre voiture avec succès !',
  });
};

class VehiculeNouveau extends Component {
  


  constructor(props) {
    super(props);
    this.state = {
      marque: '',
      modele: '',
      annee: '',
      km: '',
      nb_place: '',
      energie: '',
      boite_vitesse: '',
      adresse: '',
      prix: '' ,
      contact:'',
      description:'' 
      
    };

    this.handleChange = this.handleChange.bind(this);  }



  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    console.log(name);
    this.setState({
      [name]: value
    });

  }
  onChangePlace(value) {
    this.setState({
      nb_place: value
    });

  }

  onChangeKm(value) {
    this.setState({
      prix: value
    });

  }

  creer(){
    fetch('http://localhost:4007/voiture', {
      method: 'post',
        mode: 'cors',cache:'default',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        marque: this.state.marque,
        modele: this.state.modele,
        annee: this.state.annee,
        km: this.state.km,
        nb_place: this.state.nb_place,
        energie: this.state.energie,
        boite_vitesse: this.state.boite_vitesse,
        adresse: this.state.adresse,
        prix: this.state.prix,
        contact: this.state.contact,
        date_debut: '2018-01-01',
        date_fin: '2018-01-05',
        description: this.state.description,
        utilisateurs_id:5
      })
    });
    openNotification();
  }
   

  render() {

    return (
      <div >
        <Form>
          
        <FormItem 
        {...formItemLayout}
        label="Marque">         
            <Input type="text" name="marque" onChange={this.handleChange} />
        </FormItem>
        <FormItem 
            {...formItemLayout}
            label="Modèle">
                <Input type="text" name="modele" onChange={this.handleChange}/>
        </FormItem>
        <FormItem 
            {...formItemLayout}
            label="Année">
            <Input type="text" name="annee" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Kilométrage">
            <Input type="text" name="km" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Nombre de place">
            <Input type="text" name="nb_place" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Energie">
            <Input type="text" name="energie" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Boite de vitesse">
            <Cascader name="boite_vitesse" options={options} placeholder="Choisissez votre boite de vitesse.."/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Adresse">
            <Input type="text" name="adresse" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Prix">
            <Input type="text" name="prix" onChange={this.handleChange}/>
          </FormItem>
          <br/>
          <FormItem 
            {...formItemLayout}
            label="Contact">
            <Input type="text" name="contact" onChange={this.handleChange}/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Modèle" >
          <ImageVoiture/>
          </FormItem>
          <FormItem 
            {...formItemLayout}
            label="Période">
            <RangePicker/>
          </FormItem>
          <br />
          <FormItem 
            {...formItemLayout}
            label="Description">
            <Input type="text" name="description" onChange={this.handleChange} />
          </FormItem>
          <Button style={{ marginLeft: 1000 }} onClick={() => this.creer()}>
              Valider
          </Button>
        </Form>
      </div>
    );
  }
}


export default VehiculeNouveau;
