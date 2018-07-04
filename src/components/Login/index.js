import React, { Component } from 'react'
import { Form, Input, DatePicker,Button, notification } from 'antd';
const FormItem = Form.Item;

const openNotification = () => {
  notification.open({
    message: 'Félicitations',
    description: 'Bienvenue chez Tixt !',
  });
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      mdp: '',
      prenom: '',
      nom: '',
      adresse: '',
      code_postal: '',
      ville: '',
      pays: ''
      
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

  creer(){
    fetch('http://localhost:4007/inscription', {
      method: 'post',
        mode: 'cors',cache:'default',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mail: this.state.mail,
        mdp: this.state.mdp,
        prenom: this.state.prenom,
        nom: this.state.nom,
        date_naissance: "",
        adresse: this.state.adresse,
        code_postal: this.state.code_postal,
        ville: this.state.ville,
      	pays: this.state.pays
      })
    });
    openNotification();
  }

  render() {

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


    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem
            {...formItemLayout}
            label="E-mail"
          >
          <Input type="text" name="mail" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Mot de passe"
        >
        <Input type="password" name="mdp" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Prénom"
          >
          <Input type="text" name="prenom" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Nom"
          >
          <Input type="text" name="nom" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Année de naissance"
          >
          <DatePicker />
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Adresse"
          >
          <Input type="text" name="adresse" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Code Postal"
          >
          <Input type="text" name="code_postal" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Ville"
          >
          <Input type="text" name="ville" onChange={this.handleChange}/>
        </FormItem>
        <FormItem
            {...formItemLayout}
            label="Pays"
        >
          <Input type="text" name="pays" onChange={this.handleChange}/>
        </FormItem>
        <Button style={{ marginLeft: 1000 }} onClick={() => this.creer()}>
              Valider
        </Button>
      </Form>
    );
  }
}


export default Login;